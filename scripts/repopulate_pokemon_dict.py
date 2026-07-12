import os
import re
import json
import sys

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

DICT_FILE = "scratch/cedict_ts.u8"
DATA_FILE = "cards-pokemon/data.js"

def load_cedict():
    print(f"Parsing local CC-CEDICT from {DICT_FILE}...")
    char_dict = {}
    if not os.path.exists(DICT_FILE):
        print(f"Error: Dictionary file {DICT_FILE} not found. Please run the download script first.")
        return {}
        
    with open(DICT_FILE, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            
            # Format: Traditional Simplified [pinyin] /defn 1/defn 2/.../
            match = re.match(r'^(\S+)\s+(\S+)\s+\[([^\]]+)\]\s+/(.*)/$', line)
            if match:
                trad, simp, pinyin, defs = match.groups()
                # We want single character definitions
                if len(simp) == 1:
                    clean_pinyin = pinyin.lower()
                    clean_defs = defs.replace("/", "; ").strip()
                    
                    # Avoid overwrite if it's already in the dictionary and contains better info than surname
                    if simp not in char_dict or "surname" not in clean_defs.lower():
                        char_dict[simp] = {
                            "pinyin": clean_pinyin,
                            "definition": clean_defs
                        }
                    
                    # Also map traditional character if it differs from simplified
                    if trad != simp:
                        if trad not in char_dict or "surname" not in clean_defs.lower():
                            char_dict[trad] = {
                                "pinyin": clean_pinyin,
                                "definition": clean_defs
                            }
                        
    print(f"Loaded {len(char_dict)} unique Chinese character definitions from CEDICT.")
    return char_dict

def populate_database():
    char_dict = load_cedict()
    if not char_dict:
        return
        
    if not os.path.exists(DATA_FILE):
        print(f"Error: {DATA_FILE} not found.")
        return
        
    print(f"Loading Pokémon database from {DATA_FILE}...")
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        content = f.read()
        
    start_idx = content.find("[")
    end_idx = content.rfind("]")
    if start_idx == -1 or end_idx == -1:
        print("Error: Could not parse database JSON structure.")
        return
        
    json_str = content[start_idx:end_idx+1]
    pokemon_list = json.loads(json_str)
    
    updated_count = 0
    filtered_out_count = 0
    updated_chars_set = set()
    
    print("Enriching Pokémon character definitions...")
    for p in pokemon_list:
        if "characters" in p:
            original_len = len(p["characters"])
            # Filter characters: only keep Hanzi ([\u4e00-\u9fff])
            p["characters"] = [ch for ch in p["characters"] if re.match(r'^[\u4e00-\u9fff]$', ch["char"])]
            filtered_out_count += (original_len - len(p["characters"]))
            
            for ch in p["characters"]:
                char = ch["char"]
                # Only populate if pinyin or definition is missing/empty
                if not ch.get("pinyin") or not ch.get("definition"):
                    if char in char_dict:
                        ch["pinyin"] = char_dict[char]["pinyin"]
                        ch["definition"] = char_dict[char]["definition"]
                        updated_count += 1
                        updated_chars_set.add(char)
                        
    print(f"Removed {filtered_out_count} non-Hanzi punctuation/symbols from breakdowns.")
    print(f"Updated {updated_count} character instances across the database ({len(updated_chars_set)} unique characters).")
    
    # Save back to cards-pokemon/data.js
    print(f"Saving updated database back to {DATA_FILE}...")
    js_content = f"const pokemonData = {json.dumps(pokemon_list, indent=2, ensure_ascii=False)};\n"
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print("Success! Pokémon database updated with offline CEDICT meanings.")

if __name__ == "__main__":
    populate_database()
