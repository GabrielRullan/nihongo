import os
import csv
import shutil
import sys

# Set stdout to UTF-8 for Windows consoles
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

def copy_chosen_images(summary_path="summary.csv", target_dir="images-chosen"):
    """Copies images marked in the 'Chosen' column to the target directory."""
    if not os.path.exists(summary_path):
        print(f"Error: {summary_path} not found.")
        return

    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    print(f"Checking for chosen images in '{summary_path}' to copy to '{target_dir}'...")
    
    with open(summary_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        count = 0
        for row in reader:
            chosen = row.get("Chosen", "").strip()
            if chosen in ["1", "2", "3"]:
                option_path = row.get(f"Option {chosen} Path")
                if option_path and os.path.exists(option_path):
                    # Keep original extension
                    ext = os.path.splitext(option_path)[1]
                    dest_path = os.path.join(target_dir, f"{row['Original Word']}{ext}")
                    shutil.copy2(option_path, dest_path)
                    print(f"  [+] Copied: {row['Original Word']} (Option {chosen})")
                    count += 1
                else:
                    print(f"  [!] Failed to copy {row['Original Word']}: Path '{option_path}' not found.")
        
    print(f"\nProcessing complete. {count} images copied to '{target_dir}'.")

if __name__ == "__main__":
    copy_chosen_images()
