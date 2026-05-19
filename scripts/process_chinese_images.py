import os
import csv
import shutil
import re
import sys

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

def process():
    summary_path = "data/chinese_summary.csv"
    target_dir = "images-chosen-chinese"
    data_path = "cards-chinese/data.js"
    
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    # 1. Copy images
    image_choices = {}
    with open(summary_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            chosen = row.get("Chosen", "").strip()
            word = row.get("Original Word")
            if chosen in ["1", "2", "3"]:
                option_path = row.get(f"Option {chosen} Path")
                if option_path and os.path.exists(option_path):
                    ext = os.path.splitext(option_path)[1]
                    dest_path = os.path.join(target_dir, f"{word}{ext}")
                    shutil.copy2(option_path, dest_path)
                    image_choices[word] = "../" + dest_path.replace("\\", "/")
                    print(f"Copied {word} (Option {chosen})")

    # 2. Update data.js
    with open(data_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    for word, img_path in image_choices.items():
        pattern = r'(character:\s*"' + re.escape(word) + r'",)'
        replacement = r'\1\n        image: "' + img_path + r'",'
        content = re.sub(pattern, replacement, content)
        
    with open(data_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Updated data.js with {len(image_choices)} images.")

if __name__ == "__main__":
    process()
