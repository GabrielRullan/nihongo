import os
import re
import csv
import sys
import time

# Force UTF-8 output to support Chinese characters on Windows terminal
sys.stdout.reconfigure(encoding='utf-8')

# Ensure the new Google GenAI SDK is installed or print instructions
try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Error: The 'google-genai' library is required.")
    print("Please install it by running: pip install google-genai")
    sys.exit(1)

# File paths relative to this script
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE_PATH = os.path.join(SCRIPT_DIR, "data.js")
IMAGES_DIR = os.path.join(SCRIPT_DIR, "images-chosen-chinese")
PENDING_CSV_PATH = os.path.join(SCRIPT_DIR, "pending.csv")

# 1. Curated list of prompt concepts for all remaining HSK 1 cards
# This ensures every image perfectly fits the Illustkun cute flat pastel vector style!
PROMPT_CONCEPTS = {
    # Verbos
    "爱": "a cute pastel teddy bear hugging a large soft pink heart with a warm, joyful smile",
    "喜欢": "a cute chibi character with hearts in their eyes looking at a sweet pastry, showing like or love",
    "认识": "two cute different pastel animal friends (a little brown bear and a white puppy) waving happily at each other with warm friendly smiles",
    "能": "a cute chibi superhero character flying with a determined, happy smile, representing ability or power",
    "请": "a cute pastel puppy standing by an open door and holding a welcome sign with a friendly smile",
    "谢谢": "a cute pastel squirrel holding a big colorful bouquet of flowers with a warm, grateful smile and small sparkles",
    "再见": "a cute pastel bunny waving goodbye with a big happy smile and small floating stars",
    
    # Sustantivos
    "儿子": "a cute fluffy baby bear cub sitting next to a tree and smiling happily with rosy cheeks",
    "女儿": "a cute young chibi girl smiling with rosy cheeks",
    "小姐": "a cute young chibi woman wearing a nice pastel dress and waving politely, representing miss or lady",
    "学校": "a cute simple pastel-colored elementary school building with a small clock tower",
    "饭馆": "a cute small pastel restaurant storefront with warm lights and a tiny menu sign",
    "商店": "a cute small pastel storefront shop with a striped pink awning and items on display, representing a store or shop",
    "火车站": "a cute pastel-colored train station with a small train parked at the platform",
    "北京": "a cute minimalist pastel illustration of the Temple of Heaven in Beijing",
    "上": "a cute chubby cat sitting happily on top of a simple wooden box",
    "后面": "a cute little puppy peeking out from behind a large potted plant with a curious smile, showing behind",
    "里面": "a cute little kitten sitting cozy inside a warm cardboard box, showing inside",
    "日": "a cute shining yellow sun with a warm, happy face, representing day or sun",
    "星期": "a cute pastel-colored weekly desk calendar sheet with a little smiley face sticker",
    "点": "a cute pastel wall clock showing the time, with a small happy face in the center",
    "分钟": "a cute simple hourglass with soft pastel sand flowing down, representing minutes",
    "今天": "a cute desk calendar pointing to the present day with a little shining star",
    "明天": "a cute calendar sheet with an arrow pointing to the next day and a little rising sun",
    "昨天": "a cute calendar sheet with an arrow pointing to the previous day and a little fading star",
    "上午": "a cute smiling sun rising over soft hills, showing morning",
    "中午": "a cute smiling sun high in the sky directly above a little pastel house, showing noon",
    "下午": "a cute warm orange sunset sky with a smiling sun setting over soft hills, showing afternoon",
    "椅子": "a simple cute pastel wooden chair",
    "茶": "a cute steaming pastel teacup with a small green tea leaf floating",
    "水": "a cute simple glass of clean, clear water with a tiny smiley face sticker",
    "菜": "a cute plate of hot food with steam rising and a small fork and spoon next to it",
    "苹果": "a cute shiny red apple with a small green leaf",
    "汉语": "a cute open book with Chinese characters and a small talking speech bubble, showing Chinese language",
    "电视": "a beautiful vintage pastel-colored retro television set with two antennae, showing a cute smiley face on the screen with small sparkles",
    "出租车": "a cute little yellow taxi cab driving happily",
    "现在": "a cute pastel alarm clock with small bells on top, a friendly smiley face on the clock face, and little colorful stars",
    
    # Clasificadores
    "岁": "a cute birthday cake with a single burning candle and colorful sprinkles, representing years of age",
    "本": "a cute stack of three pastel-colored books, representing measure word for books",
    "些": "a cute group of a few scattered red apples on a table, showing some or few",
    "块": "a cute piece of chocolate or a single slice of pastel cake, representing a piece",
    
    # Números
    "五": "a cute hand showing five fingers, or a stylized big number five with happy eyes",
    
    # Adverbios, Conjunciones y Preposiciones
    "不": "a cute pastel kitten shaking its head and holding a tiny red cross sign with a gentle 'no' expression",
    "很": "a cute smiling character thumbs-up, or a shining double star, showing very much",
    "都": "a group of three cute different animal friends (a little bear, a kitten, and a bunny) raising their paws happily together",
    "和": "two cute pastel puzzle pieces (one blue, one pink) with small friendly smiley faces connecting perfectly together",
    "在": "a cute pin drop location icon on a simple flat map of a house, representing being at or in",
    
    # Partículas
    "吗": "a cute chibi character with a huge question mark next to them, representing question",
    "呢": "a cute chibi character looking curious and asking with a tiny question mark",
    
    # Adjetivos
    "大": "a large cute elephant next to a tiny mouse, showing big",
    "小": "a tiny cute mouse next to a large block, showing small",
    "多": "a big pile of colorful candies, showing many or much",
    "少": "a plate with only two candies, showing few or little",
    "好": "a cute chibi character giving a double thumbs-up with a giant smile, representing good",
    "冷": "a cute shivering chibi wrapped in a warm blue scarf, representing cold",
    "热": "a cute chibi character sweating slightly under a hot red sun, representing hot",
    "高兴": "a cute chibi character jumping with joy and starry eyes, representing happy",
    "漂亮": "a beautiful cute butterfly or a gorgeous pastel flower blooming, representing pretty"
}

def get_api_key():
    # Try to load API key from environment variable
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if api_key:
        return api_key
        
    print("\n" + "="*50)
    print("           GOOGLE IMAGEN GENERATOR SCRIPT")
    print("="*50)
    print("Please obtain an API Key from Google AI Studio:")
    print("👉 https://aistudio.google.com/")
    print("-"*50)
    try:
        api_key = input("Enter your Gemini API Key: ").strip()
    except KeyboardInterrupt:
        print("\nExiting.")
        sys.exit(0)
        
    if not api_key:
        print("Error: API Key is required to run this script.")
        sys.exit(1)
    return api_key

def update_data_js(char):
    if not os.path.exists(DATA_FILE_PATH):
        print(f"Warning: data.js not found at {DATA_FILE_PATH}")
        return
        
    with open(DATA_FILE_PATH, "r", encoding="utf-8") as f:
        content = f.read()
        
    blocks = content.split("    },")
    updated_blocks = []
    updated = False
    
    for block in blocks:
        if f'character: "{char}",' in block or f'character: \'{char}\',' in block:
            if "image:" in block:
                block = re.sub(r'image:\s*""', f'image: "images-chosen-chinese/{char}.png"', block)
                block = re.sub(r"image:\s*''", f'image: "images-chosen-chinese/{char}.png"', block)
            else:
                block = block.replace(f'character: "{char}",', f'character: "{char}",\n        image: "images-chosen-chinese/{char}.png",')
            updated = True
        updated_blocks.append(block)
        
    if updated:
        with open(DATA_FILE_PATH, "w", encoding="utf-8") as f:
            f.write("    },".join(updated_blocks))
        print(f"  └─ Updated data.js entry for '{char}'")

def regenerate_pending_csv():
    # Read the current cards data from data.js
    if not os.path.exists(DATA_FILE_PATH):
        return
        
    with open(DATA_FILE_PATH, "r", encoding="utf-8") as f:
        content = f.read()
        
    card_blocks = re.findall(r"\{\s*character:\s*\"([^\"]+)\"(.*?)\}", content, re.DOTALL)
    pending_cards = []
    
    for char, block in card_blocks:
        image_match = re.search(r"image:\s*\"([^\"]*)\"", block)
        is_missing = False
        
        if not image_match:
            is_missing = True
        else:
            image_val = image_match.group(1).strip()
            if not image_val:
                is_missing = True
            else:
                # Failsafe: check if the image file physically exists in the images directory
                full_image_path = os.path.join(SCRIPT_DIR, image_val)
                if not os.path.exists(full_image_path):
                    is_missing = True
                
        if is_missing:
            pinyin_match = re.search(r"pinyin:\s*\"([^\"]+)\"", block) or re.search(r"pints:\s*\"([^\"]+)\"", block)
            meaning_match = re.search(r"meaning:\s*\"([^\"]+)\"", block)
            type_match = re.search(r"type:\s*\"([^\"]+)\"", block)
            level_match = re.search(r"level:\s*\"([^\"]+)\"", block)
            phrase_cn_match = re.search(r"phraseCn:\s*\"([^\"]+)\"", block)
            phrase_pinyin_match = re.search(r"phrasePinyin:\s*\"([^\"]+)\"", block)
            phrase_es_match = re.search(r"phraseEs:\s*\"([^\"]+)\"", block)
            
            pinyin = pinyin_match.group(1) if pinyin_match else ""
            meaning = meaning_match.group(1) if meaning_match else ""
            card_type = type_match.group(1) if type_match else ""
            level = level_match.group(1) if level_match else ""
            phrase_cn = phrase_cn_match.group(1) if phrase_cn_match else ""
            phrase_pinyin = phrase_pinyin_match.group(1) if phrase_pinyin_match else ""
            phrase_es = phrase_es_match.group(1) if phrase_es_match else ""
            
            pending_cards.append({
                "Character": char, "Pinyin": pinyin, "Meaning": meaning, "Type": card_type, "Level": level,
                "Phrase Chinese": phrase_cn, "Phrase Pinyin": phrase_pinyin, "Phrase Spanish": phrase_es,
                "Suggested Image Path": f"images-chosen-chinese/{char}.png"
            })
            
    headers = ["Character", "Pinyin", "Meaning", "Type", "Level", "Phrase Chinese", "Phrase Pinyin", "Phrase Spanish", "Suggested Image Path"]
    with open(PENDING_CSV_PATH, "w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(pending_cards)
    print(f"  └─ Updated pending.csv. Remaining: {len(pending_cards)} cards.")

def main():
    api_key = get_api_key()
    
    # Initialize Google GenAI client
    client = genai.Client(api_key=api_key)
    
    # Ensure images output directory exists
    os.makedirs(IMAGES_DIR, exist_ok=True)
    
    # Read pending cards from the CSV file
    if not os.path.exists(PENDING_CSV_PATH):
        print(f"Error: pending.csv not found at {PENDING_CSV_PATH}")
        print("Please make sure you run the extraction first.")
        sys.exit(1)
        
    pending_list = []
    with open(PENDING_CSV_PATH, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            pending_list.append(row)
            
    total_to_generate = len(pending_list)
    print(f"\nFound {total_to_generate} pending cards in pending.csv.")
    print("Starting generation process...")
    print("You can stop the script at any time with Ctrl+C. It will resume where you left off.")
    print("-"*50)
    
    success_count = 0
    
    for index, card in enumerate(pending_list, 1):
        char = card["Character"]
        meaning = card["Meaning"]
        
        dest_filename = f"{char}.png"
        dest_path = os.path.join(IMAGES_DIR, dest_filename)
        
        # Skip if image already exists
        if os.path.exists(dest_path):
            print(f"[{index}/{total_to_generate}] '{char}' ({meaning}) - Image already exists, skipping.")
            # Ensure it is registered in data.js anyway
            update_data_js(char)
            continue
            
        concept = PROMPT_CONCEPTS.get(char)
        if not concept:
            print(f"[{index}/{total_to_generate}] '{char}' ({meaning}) - Warning: No custom prompt found! Skipping.")
            continue
            
        # Compose the final Illustkun style prompt
        full_prompt = (
            f"Cute, clean Japanese vector illustration in the style of Illustkun, flat colors, "
            f"soft dark brown outlines, pastel color palette, minimalist, isolated on a solid white background, "
            f"depicting {concept}"
        )
        
        print(f"\n[{index}/{total_to_generate}] Generating image for '{char}' ({meaning})...")
        print(f"  Prompt: \"{concept}\"")
        
        try:
            # Generate the image using Imagen 3 with person generation allowed
            response = client.models.generate_images(
                model='imagen-4.0-generate-001',
                prompt=full_prompt,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    aspect_ratio="1:1",
                    person_generation="allow_adult" # Required to generate chibi characters/people under safety policy
                )
            )
            
            if response.generated_images:
                # Save generated image from raw bytes
                generated_image = response.generated_images[0]
                with open(dest_path, "wb") as f:
                    f.write(generated_image.image.image_bytes)
                print(f"  └─ Saved successfully to images-chosen-chinese/{dest_filename}")
                
                # Update data.js
                update_data_js(char)
                
                # Refresh pending.csv
                regenerate_pending_csv()
                
                success_count += 1
                
                # Sleep a little to respect rate limits
                time.sleep(3.5)
            else:
                print("  └─ Error: No images were returned by the API.")
                
        except Exception as e:
            print(f"  └─ Error generating image: {e}")
            print("Stopping to prevent further errors. If this is a rate limit or credential error, please resolve it and restart.")
            break
            
    print("\n" + "="*50)
    print(f"Finished! Successfully generated {success_count} new images.")
    print("="*50)

if __name__ == "__main__":
    main()
