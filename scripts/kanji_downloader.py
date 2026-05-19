import os
import csv
import time
import requests
import sys
import re
from bs4 import BeautifulSoup
from urllib.parse import quote

# Set stdout to UTF-8 for Windows consoles
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

def get_post_details(post_url):
    """Visits a post page to get the high-res image and the clean title."""
    if not post_url: return "N/A", None
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        response = requests.get(post_url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        full_title = soup.title.string if soup.title else "No Title"
        image_title = full_title.split('-')[0].strip()
        
        img_container = soup.select_one('figure.wp-block-image img') or soup.select_one('.entry-content img') or soup.select_one('article img')
        if img_container:
            img_url = img_container.get('src')
            # Try to get full resolution by removing the dimensions suffix (e.g. -300x300)
            img_url = re.sub(r'-\d+x\d+(?=\.(png|jpe?g|gif)$)', '', img_url, flags=re.IGNORECASE)
            return image_title, img_url
            
        return image_title, None
    except:
        return "Unknown Title", None

def search_illustkun(target_word):
    """Searches for a word and returns the top 3 post URLs."""
    headers = {"User-Agent": "Mozilla/5.0"}
    encoded_query = quote(target_word)
    search_url = f"https://illustkun.com/?s={encoded_query}"
    
    try:
        response = requests.get(search_url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        potential_links = soup.select('article a')
        links = [a.get('href') for a in potential_links if a.get('href')]
        
        # Return unique links
        seen = set()
        unique_links = []
        for l in links:
            if l not in seen:
                unique_links.append(l)
                seen.add(l)
            if len(unique_links) == 10: break
            
        return unique_links
    except:
        return []

def download_image(img_url, filename, save_dir="images"):
    """Downloads an image and saves it with the given filename."""
    if not img_url: return None
    if not os.path.exists(save_dir): os.makedirs(save_dir)
    
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        img_data = requests.get(img_url, headers=headers).content
        ext = "png" if ".png" in img_url.lower() else "jpg"
        file_path = os.path.join(save_dir, f"{filename}.{ext}")
        with open(file_path, 'wb') as f:
            f.write(img_data)
        return file_path
    except:
        return None

def process_workflow(input_path, summary_path="data/summary.csv"):
    print(f"Processing all Kanji from {input_path}. Defaulting to first image found.")
    
    # 1. Load existing choices
    existing_choices = {}
    if os.path.exists(summary_path):
        try:
            with open(summary_path, mode='r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    if row.get("Original Word") and row.get("Chosen"):
                        existing_choices[row["Original Word"]] = row["Chosen"]
        except:
            pass

    # 2. Get list of words to process
    data_to_process = []
    with open(input_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            data_to_process.append(row["Kanji"].strip())

    final_results = []
    downloaded_img_urls = set()
    
    for word in data_to_process:
        print(f"\n--- {word} ---", flush=True)
        links = search_illustkun(word)
        
        # Default Chosen to 1 if not already set
        chosen_val = existing_choices.get(word, "1")
        entry = {"Original Word": word, "Chosen": chosen_val}
        
        saved_count = 0
        link_index = 0
        
        while saved_count < 3 and link_index < len(links):
            url = links[link_index]
            link_index += 1
            
            title, img_url = get_post_details(url)
            
            if not img_url or img_url in downloaded_img_urls:
                continue
                
            downloaded_img_urls.add(img_url)
            
            i = saved_count
            entry[f"Option {i+1} Title"] = title
            entry[f"Option {i+1} URL"] = url
            
            filename = f"{word}-{i+1}"
            ext = "png" if ".png" in img_url.lower() else "jpg"
            check_path = os.path.join("images", f"{filename}.{ext}")
            
            if os.path.exists(check_path):
                entry[f"Option {i+1} Path"] = check_path
                print(f"  [{i+1}] Already exists: {title}", flush=True)
            else:
                path = download_image(img_url, filename)
                entry[f"Option {i+1} Path"] = path if path else "Failed"
                print(f"  [{i+1}] Downloaded: {title}", flush=True)
                
            saved_count += 1
            
        # Fill remaining options
        for i in range(saved_count, 3):
            entry[f"Option {i+1} Title"] = "N/A"
            entry[f"Option {i+1} URL"] = "N/A"
            entry[f"Option {i+1} Path"] = "N/A"
                
        final_results.append(entry)
        time.sleep(0.3)

    # 3. Save summary
    fieldnames = ["Original Word", "Chosen",
                  "Option 1 Title", "Option 1 Path", "Option 1 URL",
                  "Option 2 Title", "Option 2 Path", "Option 2 URL",
                  "Option 3 Title", "Option 3 Path", "Option 3 URL"]
    
    with open(summary_path, mode='w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(final_results)
    
    print(f"\nWork complete. Summary updated: {summary_path}", flush=True)

if __name__ == "__main__":
    process_workflow("data/kanjis-80.csv")
