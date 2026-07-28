import os
import json
import shutil
import subprocess
import csv

# Paths
mappings_path = 'scratch/final_mappings.json'
extracted_dir = 'scratch/extracted_images'
target_dir = 'images-chosen'
summary_path = 'data/summary.csv'

# Ensure target directory exists
os.makedirs(target_dir, exist_ok=True)

# Load mappings
with open(mappings_path, 'r', encoding='utf-8') as f:
    mappings = json.load(f)

print(f"Applying changes for {len(mappings)} kanjis...")

updated_kanjis = set()

for kanji, filename in mappings.items():
    src = os.path.join(extracted_dir, filename)
    dst = os.path.join(target_dir, f"{kanji}.png")
    
    if not os.path.exists(src):
        print(f"Error: Source file {src} does not exist.")
        continue
        
    src_abs = os.path.abspath(src)
    dst_abs = os.path.abspath(dst)
    
    if filename.lower().endswith('.png'):
        # Direct copy
        shutil.copy2(src_abs, dst_abs)
        print(f"Copied: {kanji} <- {filename}")
        updated_kanjis.add(kanji)
    elif filename.lower().endswith(('.jpg', '.jpeg')):
        # Convert JPEG to PNG using PowerShell System.Drawing
        # Ensure single quotes or escaped double quotes are handled safely
        ps_command = (
            f"[Reflection.Assembly]::LoadWithPartialName('System.Drawing'); "
            f"$img = [System.Drawing.Image]::FromFile('{src_abs}'); "
            f"$img.Save('{dst_abs}', [System.Drawing.Imaging.ImageFormat]::Png); "
            f"$img.Dispose()"
        )
        try:
            result = subprocess.run(
                ['powershell', '-Command', ps_command],
                capture_output=True,
                text=True,
                check=True
            )
            print(f"Converted & Copied: {kanji} <- {filename}")
            updated_kanjis.add(kanji)
        except subprocess.CalledProcessError as e:
            print(f"Failed to convert {kanji} from {filename}: {e.stderr}")
            
# Update data/summary.csv
if os.path.exists(summary_path):
    rows = []
    with open(summary_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            word = row.get("Original Word")
            if word in updated_kanjis:
                row["Chosen"] = "custom"
            rows.append(row)
            
    with open(summary_path, mode='w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    print(f"Updated {summary_path} to mark updated kanjis as 'custom'.")
else:
    print(f"Warning: {summary_path} not found.")

print("All changes applied successfully!")
