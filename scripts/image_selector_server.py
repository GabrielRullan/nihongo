import http.server
import socketserver
import json
import csv
import os
import re
import shutil
import urllib.request
import urllib.parse
import base64
import sys

# Force UTF-8 encoding for stdout/stderr (Windows console support)
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

# Load environment variables from .env if it exists
def load_env():
    env_path = ".env"
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, val = line.split("=", 1)
                    key = key.strip()
                    val = val.strip().strip('"').strip("'")
                    os.environ[key] = val

load_env()

PORT = 8088

# File Paths (relative to project root)
DATA_JS_PATH = "cards/data.js"
SUMMARY_CSV_PATH = "data/summary.csv"
IMAGES_CHOSEN_DIR = "images-chosen"
IMAGES_DIR = "images"

# Ensure chosen images directory exists
os.makedirs(IMAGES_CHOSEN_DIR, exist_ok=True)

class ImageSelectorHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Allow CORS for development
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/kanjis":
            self.handle_get_kanjis()
        else:
            # Fallback to serving static files
            super().do_GET()

    def do_POST(self):
        if self.path == "/api/select-option":
            self.handle_select_option()
        elif self.path == "/api/generate-image":
            self.handle_generate_image()
        else:
            self.send_error(404, "Endpoint not found")

    def handle_get_kanjis(self):
        try:
            # 1. Parse cards/data.js
            if not os.path.exists(DATA_JS_PATH):
                self.send_json_response(500, {"error": f"Data file {DATA_JS_PATH} not found"})
                return

            with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
                content = f.read()

            match = re.search(r'const\s+cardsData\s*=\s*(\[.*\]);?\s*$', content, re.DOTALL)
            if not match:
                self.send_json_response(500, {"error": "Could not parse cardsData array from cards/data.js"})
                return

            cards = json.loads(match.group(1))

            # 2. Parse data/summary.csv
            summary_map = {}
            if os.path.exists(SUMMARY_CSV_PATH):
                with open(SUMMARY_CSV_PATH, "r", encoding="utf-8") as f:
                    reader = csv.DictReader(f)
                    for row in reader:
                        word = row.get("Original Word", "").strip()
                        if word:
                            summary_map[word] = row

            # 3. Merge data
            merged_cards = []
            for card in cards:
                kanji = card.get("kanji", "")
                summary = summary_map.get(kanji, {})
                
                # Attach pre-downloaded options
                options = []
                for i in range(1, 4):
                    title = summary.get(f"Option {i} Title", "N/A")
                    path = summary.get(f"Option {i} Path", "N/A")
                    url = summary.get(f"Option {i} URL", "N/A")
                    if path and path != "N/A":
                        options.append({
                            "index": i,
                            "title": title,
                            "path": path.replace("\\", "/"), # Clean up slashes for browser URL compatibility
                            "url": url
                        })

                merged_cards.append({
                    "kanji": kanji,
                    "meaning": card.get("meaning", ""),
                    "romaji": card.get("romaji", ""),
                    "phraseJp": card.get("phraseJp", ""),
                    "phraseRomaji": card.get("phraseRomaji", ""),
                    "phraseEs": card.get("phraseEs", ""),
                    "image": card.get("image", "").replace("\\", "/"),
                    "options": options,
                    "chosen_val": summary.get("Chosen", "1")
                })

            self.send_json_response(200, merged_cards)
        except Exception as e:
            self.send_json_response(500, {"error": str(e)})

    def handle_select_option(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            params = json.loads(post_data.decode('utf-8'))

            kanji = params.get("kanji")
            option_idx = params.get("option") # 1, 2, or 3

            if not kanji or not option_idx:
                self.send_json_response(400, {"error": "Missing kanji or option parameter"})
                return

            # 1. Read summary.csv to get the option path
            if not os.path.exists(SUMMARY_CSV_PATH):
                self.send_json_response(500, {"error": "summary.csv not found"})
                return

            rows = []
            option_path = None
            with open(SUMMARY_CSV_PATH, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                fieldnames = reader.fieldnames
                for row in reader:
                    if row["Original Word"] == kanji:
                        option_path = row.get(f"Option {option_idx} Path")
                        row["Chosen"] = str(option_idx)
                    rows.append(row)

            if not option_path or option_path == "N/A" or not os.path.exists(option_path):
                self.send_json_response(400, {"error": f"Option path '{option_path}' not found on disk"})
                return

            # Copy file to images-chosen
            ext = os.path.splitext(option_path)[1]
            chosen_filename = f"{kanji}{ext}"
            chosen_dest = os.path.join(IMAGES_CHOSEN_DIR, chosen_filename)
            shutil.copy2(option_path, chosen_dest)

            # Write updated summary back to csv
            with open(SUMMARY_CSV_PATH, "w", encoding="utf-8", newline="") as f:
                writer = csv.DictWriter(f, fieldnames=fieldnames)
                writer.writeheader()
                writer.writerows(rows)

            # Update data.js
            new_image_js_path = f"../{IMAGES_CHOSEN_DIR}/{chosen_filename}"
            self.update_data_js_image(kanji, new_image_js_path)

            self.send_json_response(200, {
                "success": True, 
                "image_path": new_image_js_path,
                "chosen_val": str(option_idx)
            })

        except Exception as e:
            self.send_json_response(500, {"error": str(e)})

    def handle_generate_image(self):
        try:
            # Reload env dynamically on every request to pick up user edits to .env
            load_env()

            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            params = json.loads(post_data.decode('utf-8'))

            kanji = params.get("kanji")
            prompt = params.get("prompt")
            api_key = params.get("api_key") or os.environ.get("GEMINI_API_KEY")

            if not kanji or not prompt:
                self.send_json_response(400, {"error": "Missing kanji or prompt parameter"})
                return

            if not api_key:
                self.send_json_response(401, {"error": "Missing Gemini API Key. Provide it in the GUI or set GEMINI_API_KEY env var."})
                return

            # Prepare Call to Google GenAI API for Imagen 4
            # We use urllib to make it standard library only
            url = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key={api_key}"
            
            headers = {"Content-Type": "application/json"}
            payload = {
                "instances": [
                    {
                        "prompt": prompt
                    }
                ],
                "parameters": {
                    "sampleCount": 1,
                    "aspectRatio": "1:1",
                    "personGeneration": "allow_adult"
                }
            }

            req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=headers, method='POST')
            
            print(f"Requesting image generation for '{kanji}'...")
            with urllib.request.urlopen(req, timeout=45) as response:
                resp_data = json.loads(response.read().decode('utf-8'))

            predictions = resp_data.get("predictions", [])
            if not predictions:
                self.send_json_response(500, {"error": f"No predictions returned by Gemini API. Response was: {resp_data}"})
                return

            img_base64 = predictions[0].get("bytesBase64Encoded")
            if not img_base64:
                self.send_json_response(500, {"error": "Empty bytesBase64Encoded from Gemini API."})
                return

            # Save the generated image
            img_bytes = base64.b64decode(img_base64)
            chosen_filename = f"{kanji}.png"
            chosen_dest = os.path.join(IMAGES_CHOSEN_DIR, chosen_filename)
            
            with open(chosen_dest, "wb") as f:
                f.write(img_bytes)

            # Update summary.csv Chosen value to "custom"
            if os.path.exists(SUMMARY_CSV_PATH):
                rows = []
                with open(SUMMARY_CSV_PATH, "r", encoding="utf-8") as f:
                    reader = csv.DictReader(f)
                    fieldnames = reader.fieldnames
                    for row in reader:
                        if row["Original Word"] == kanji:
                            row["Chosen"] = "custom"
                        rows.append(row)

                with open(SUMMARY_CSV_PATH, "w", encoding="utf-8", newline="") as f:
                    writer = csv.DictWriter(f, fieldnames=fieldnames)
                    writer.writeheader()
                    writer.writerows(rows)

            # Update data.js
            new_image_js_path = f"../{IMAGES_CHOSEN_DIR}/{chosen_filename}"
            self.update_data_js_image(kanji, new_image_js_path)

            self.send_json_response(200, {
                "success": True,
                "image_path": new_image_js_path,
                "chosen_val": "custom"
            })

        except Exception as e:
            self.send_json_response(500, {"error": str(e)})

    def update_data_js_image(self, kanji, new_image_path):
        """Helper to modify image property in cards/data.js safely."""
        with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
            content = f.read()

        match = re.search(r'const\s+cardsData\s*=\s*(\[.*\]);?\s*$', content, re.DOTALL)
        if not match:
            raise Exception("Cannot parse data.js structure for writing")

        cards = json.loads(match.group(1))
        updated = False

        for card in cards:
            if card.get("kanji") == kanji:
                card["image"] = new_image_path
                updated = True
                break

        if updated:
            with open(DATA_JS_PATH, "w", encoding="utf-8") as f:
                f.write("const cardsData = ")
                json.dump(cards, f, ensure_ascii=False, indent=4)
                f.write(";\n")

    def send_json_response(self, status, data):
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))

class ThreadedHTTPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":
    print("Starting local Kanji Image Selector Helper Server...")
    print(f"Server root: {os.getcwd()}")
    server_address = ('', PORT)
    httpd = ThreadedHTTPServer(server_address, ImageSelectorHandler)
    print(f"👉 Open in your browser: http://localhost:{PORT}/cards/select_images.html")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()
