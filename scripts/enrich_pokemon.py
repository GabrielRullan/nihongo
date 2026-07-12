import os
import sys
import json
import re
import time
import requests
from bs4 import BeautifulSoup

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

# Type translation map (English -> Spanish)
TYPE_MAP = {
    "normal": "Normal",
    "fire": "Fuego",
    "water": "Agua",
    "grass": "Planta",
    "electric": "Eléctrico",
    "ice": "Hielo",
    "fighting": "Lucha",
    "poison": "Veneno",
    "ground": "Tierra",
    "flying": "Volador",
    "psychic": "Psíquico",
    "bug": "Bicho",
    "rock": "Roca",
    "ghost": "Fantasma",
    "dragon": "Dragón",
    "dark": "Siniestro",
    "steel": "Acero",
    "fairy": "Hada"
}

# Tailwind theme color mapping based on primary type
THEME_MAP = {
    "grass": "from-emerald-400 to-teal-600",
    "fire": "from-orange-400 to-red-600",
    "water": "from-blue-400 to-cyan-600",
    "bug": "from-lime-500 to-green-600",
    "normal": "from-slate-300 to-slate-500",
    "poison": "from-purple-400 to-indigo-600",
    "electric": "from-yellow-300 to-amber-500",
    "ground": "from-amber-600 to-stone-700",
    "fairy": "from-pink-300 to-rose-400",
    "fighting": "from-red-600 to-stone-800",
    "psychic": "from-fuchsia-400 to-pink-600",
    "rock": "from-stone-400 to-stone-600",
    "ghost": "from-violet-600 to-indigo-900",
    "dragon": "from-indigo-500 to-purple-800",
    "dark": "from-stone-800 to-stone-950",
    "steel": "from-zinc-400 to-slate-600",
    "ice": "from-cyan-300 to-blue-500",
    "flying": "from-sky-300 to-indigo-500"
}

def clean_json_text(text):
    text = text.strip()
    if text.startswith("```"):
        lines = text.split("\n")
        if lines[0].startswith("```"):
            lines = lines[1:]
        if lines[-1].strip() == "```":
            lines = lines[:-1]
        text = "\n".join(lines).strip()
    return text

def parse_existing_data(file_path):
    """Parses existing data.js to build a cache of character breakdowns we already have."""
    if not os.path.exists(file_path):
        print(f"Warning: {file_path} not found. Creating new database.")
        return [], {}
    
    print(f"Reading existing data from {file_path}...")
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Extract the JSON array portion from "const pokemonData = [...];"
        start_idx = content.find("[")
        end_idx = content.rfind("]")
        if start_idx == -1 or end_idx == -1:
            print("Warning: Could not parse JS array format. Initializing empty database.")
            return [], {}
        
        json_str = content[start_idx:end_idx+1]
        existing_list = json.loads(json_str)
        
        # Build character definitions cache
        char_cache = {}
        for p in existing_list:
            for ch in p.get("characters", []):
                char_cache[ch["char"]] = {
                    "pinyin": ch["pinyin"],
                    "definition": ch["definition"]
                }
        print(f"Parsed {len(existing_list)} existing Pokémon. Found {len(char_cache)} cached Chinese character definitions.")
        return existing_list, char_cache
    except Exception as e:
        print(f"Error parsing existing file: {e}. Starting fresh.")
        return [], {}

def fetch_pokemon_types_from_api(pokemon_id):
    """Fetches type details directly from PokeAPI."""
    url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_id}/"
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            data = response.json()
            raw_types = [t["type"]["name"] for t in data.get("types", [])]
            # Translate to Spanish
            translated_types = [TYPE_MAP.get(t.lower(), t.capitalize()) for t in raw_types]
            types_str = " / ".join(translated_types)
            primary_type = raw_types[0] if raw_types else "normal"
            theme = THEME_MAP.get(primary_type.lower(), "from-slate-300 to-slate-500")
            return types_str, theme
        else:
            print(f"Warning: PokeAPI returned status {response.status_code} for ID {pokemon_id}")
    except Exception as e:
        print(f"Error calling PokeAPI for ID {pokemon_id}: {e}")
    return "Normal", "from-slate-300 to-slate-500"

def get_missing_character_breakdowns(chars_list, api_key):
    """Queries Gemini to generate breakdowns for the new characters in batches of 50."""
    if not api_key:
        print("Warning: GEMINI_API_KEY not found. Character breakdowns will have empty placeholders.")
        return {}
    
    # Try importing GenAI SDK
    try:
        from google import genai
    except ImportError:
        print("Error: google-genai package not installed. Run: pip install google-genai")
        return {}

    client = genai.Client(api_key=api_key)
    batch_size = 50
    results = {}
    
    for i in range(0, len(chars_list), batch_size):
        batch = chars_list[i:i+batch_size]
        print(f"Requesting character definitions from Gemini: batch {i//batch_size + 1}/{(len(chars_list)-1)//batch_size + 1} ({len(batch)} chars)...")
        
        prompt = f"""
        For each of the following Chinese characters, provide its standard Mandarin pinyin (with tone number, e.g. cao3, ma1) and a short English definition.
        Return the response strictly as a JSON object where the keys are the characters and the values are objects with keys "pinyin" and "definition".
        Do not include any markdown format tags (like ```json), just return the raw JSON text.
        
        Characters: {" ".join(batch)}
        """
        
        try:
            response = client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt
            )
            cleaned_text = clean_json_text(response.text)
            batch_dict = json.loads(cleaned_text)
            results.update(batch_dict)
        except Exception as e:
            print(f"Error querying Gemini for batch: {e}")
            # Add placeholders
            for c in batch:
                results[c] = {"pinyin": "", "definition": ""}
        
        time.sleep(1) # Soft rate limit buffer
        
    return results

def scrape_bulbapedia_and_enrich():
    data_file = "cards-pokemon/data.js"
    existing_list, char_cache = parse_existing_data(data_file)
    
    # Filter out entries that already exist (keep Gen 1)
    # Bulbapedia Gen II starts at #0152.
    # If the database already has Pokémon from Gen 2+, we will re-generate them or skip them.
    # To be safe, let's keep only Pokémon with ID <= 151 from the existing list, and re-fetch Gens 2-9
    clean_list = [p for p in existing_list if p.get("id", 0) <= 151]
    print(f"Kept {len(clean_list)} Gen 1 Pokémon from existing database.")
    
    bulbapedia_url = "https://bulbapedia.bulbagarden.net/wiki/List_of_Chinese_Pok%C3%A9mon_names"
    headers = {"User-Agent": "Mozilla/5.0"}
    print(f"Fetching Pokémon names from Bulbapedia ({bulbapedia_url})...")
    response = requests.get(bulbapedia_url, headers=headers)
    if response.status_code != 200:
        print(f"Error: Failed to fetch Bulbapedia page. Status {response.status_code}")
        return
        
    soup = BeautifulSoup(response.text, 'html.parser')
    tables = soup.find_all('table', class_='roundtable')
    
    # Tables 1 to 8 correspond to Gen 2 through Gen 9
    new_pokemon = []
    all_new_chars = set()
    
    for gen_idx in range(1, 9):
        gen_num = gen_idx + 1
        table = tables[gen_idx]
        rows = table.find_all('tr')
        print(f"\nProcessing Generation {gen_num} table (found {len(rows)-2} entries)...")
        
        # Row 0 and 1 are table headers
        for r_idx in range(2, len(rows)):
            row = rows[r_idx]
            cols = [col.get_text(strip=True) for col in row.find_all(['td', 'th'])]
            
            if not cols or not cols[0].startswith('#'):
                continue
            
            ndex = cols[0]
            english = cols[2]
            simplified = cols[4]
            pinyin = cols[5]
            
            # Extract numeric ID
            try:
                poke_id = int(ndex.replace('#', ''))
            except ValueError:
                continue
                
            # Accumulate all unique Chinese characters for the definition lookup later
            for char in simplified:
                if re.match(r'^[\u4e00-\u9fff]$', char):
                    if char not in char_cache:
                        all_new_chars.add(char)
            
            new_pokemon.append({
                "id": poke_id,
                "ndex": ndex,
                "english": english,
                "simplified": simplified,
                "pinyin": pinyin,
                "level": f"Gén {gen_num}",
            })
            
    print(f"\nFound {len(new_pokemon)} new Pokémon across Generations 2 to 9.")
    print(f"Identified {len(all_new_chars)} unique new Chinese characters needing definitions.")
    
    # Enrich character cache via Gemini
    api_key = os.environ.get("GEMINI_API_KEY")
    new_defs = get_missing_character_breakdowns(list(all_new_chars), api_key)
    char_cache.update(new_defs)
    
    # Enrich Pokémon details (Types and Images)
    total_new = len(new_pokemon)
    print("\nEnriching Pokémon with types and image links...")
    for idx, p in enumerate(new_pokemon):
        poke_id = p["id"]
        print(f"[{idx+1}/{total_new}] #{poke_id:04d} - {p['english']} ({p['simplified']})")
        
        # Get types and color theme from PokeAPI
        types_str, theme = fetch_pokemon_types_from_api(poke_id)
        p["type"] = types_str
        p["colorTheme"] = theme
        
        # Build image URL
        p["image"] = f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{poke_id}.png"
        
        # Construct character breakdown
        breakdown = []
        for char in p["simplified"]:
            if re.match(r'^[\u4e00-\u9fff]$', char):
                if char in char_cache:
                    breakdown.append({
                        "char": char,
                        "pinyin": char_cache[char].get("pinyin", ""),
                        "definition": char_cache[char].get("definition", "")
                    })
                else:
                    breakdown.append({
                        "char": char,
                        "pinyin": "",
                        "definition": ""
                    })
        p["characters"] = breakdown
        
        # Soft sleep to respect PokeAPI rate limit
        time.sleep(0.05)
        
    # Combine Gen 1 and the new Gen 2-9 data
    final_list = clean_list + new_pokemon
    # Sort by ID to ensure correct Pokedex order
    final_list.sort(key=lambda x: x["id"])
    
    # Write back to cards-pokemon/data.js
    print(f"\nWriting {len(final_list)} total Pokémon to {data_file}...")
    js_content = f"const pokemonData = {json.dumps(final_list, indent=2, ensure_ascii=False)};\n"
    
    with open(data_file, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print("Success! Database sync complete.")

if __name__ == "__main__":
    scrape_bulbapedia_and_enrich()
