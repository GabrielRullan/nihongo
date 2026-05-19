import os
import csv
import json

# This script generates the data.js file for the interactive Kanji cards.
# It uses kanjis-80.csv as the primary source and cross-references summary.csv for images.

def generate_cards_data(kanji_path="data/kanjis-80.csv", summary_path="data/summary.csv", output_path="cards/data.js"):
    if not os.path.exists(kanji_path):
        print(f"Error: {kanji_path} not found.")
        return

    # 1. Load image choices from summary.csv if it exists
    image_choices = {}
    if os.path.exists(summary_path):
        try:
            with open(summary_path, mode='r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    word = row.get("Original Word")
                    chosen = row.get("Chosen", "").strip()
                    if word and chosen in ["1", "2", "3"]:
                        image_choices[word] = f"../images-chosen/{word}.png"
        except Exception as e:
            print(f"Warning: Could not read summary.csv properly: {e}")

    cards = []
    
    # 2. Read Kanji data from kanjis-80.csv
    with open(kanji_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            kanji = row["Kanji"]
            
            # Map long types to short versions
            raw_type = row.get("Tipo", "nombre")
            type_map = {
                "nombre": "nom.",
                "verbo": "ver.",
                "adjetivo": "adj.",
                "nombre/verbo": "nom./ver.",
                "nombre/adjetivo": "nom./adj."
            }
            type_val = type_map.get(raw_type, raw_type)

            # Basic card structure
            card = {
                "kanji": kanji,
                "anki_furigana": row.get("Anki Furigana", kanji),
                "level": "N5",
                "meaning": row.get("Meaning", ""),
                "romaji": row.get("Romaji", ""),
                "type": type_val,
                "phraseJp": row.get("PhraseJp", ""),
                "phraseRomaji": row.get("PhraseRomaji", ""),
                "phraseEs": row.get("PhraseEs", ""),
                "image": image_choices.get(kanji)
            }
            
            cards.append(card)

    # 3. Write as a JS variable
    with open(output_path, mode='w', encoding='utf-8') as f:
        f.write("const cardsData = ")
        json.dump(cards, f, ensure_ascii=False, indent=4)
        f.write(";")
    
    print(f"Generated {len(cards)} cards in {output_path}")

if __name__ == "__main__":
    generate_cards_data()
