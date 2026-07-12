import json
import sys
import os

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

DATA_FILE = "cards-pokemon/data.js"
if not os.path.exists(DATA_FILE):
    print(f"Error: {DATA_FILE} not found.")
    sys.exit(1)

with open(DATA_FILE, "r", encoding="utf-8") as f:
    content = f.read()

start_idx = content.find("[")
end_idx = content.rfind("]")
if start_idx == -1 or end_idx == -1:
    print("Error: Could not parse database JSON structure.")
    sys.exit(1)

json_str = content[start_idx:end_idx+1]
pokemon_list = json.loads(json_str)

print(f"Total Pokémon entries: {len(pokemon_list)}")

missing_pinyin_count = 0
missing_definition_count = 0
missing_chars = set()

for p in pokemon_list:
    pid = p.get("id")
    pname = p.get("english")
    psimp = p.get("simplified")
    
    # Check if characters array exists
    if "characters" not in p:
        print(f"Warning: Pokémon #{pid} {pname} has no 'characters' field.")
        continue
        
    for ch in p["characters"]:
        char = ch.get("char")
        pinyin = ch.get("pinyin")
        defn = ch.get("definition")
        
        if not pinyin:
            missing_pinyin_count += 1
            missing_chars.add(char)
        if not defn:
            missing_definition_count += 1
            missing_chars.add(char)

print(f"Total character instances with missing pinyin: {missing_pinyin_count}")
print(f"Total character instances with missing definition: {missing_definition_count}")
print(f"Unique characters with missing data ({len(missing_chars)}): {''.join(sorted(list(missing_chars)))}")

print("\nDetail of entries with missing info:")
for p in pokemon_list:
    pid = p.get("id")
    pname = p.get("english")
    psimp = p.get("simplified")
    
    if "characters" not in p:
        continue
        
    for ch in p["characters"]:
        char = ch.get("char")
        pinyin = ch.get("pinyin")
        defn = ch.get("definition")
        if not pinyin or not defn:
            print(f"  #{pid} {pname} ({psimp}): '{char}' (pinyin={pinyin!r}, definition={defn!r})")

