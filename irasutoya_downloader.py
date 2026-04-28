import os
import csv
import time
import requests
import sys
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
        image_title = full_title.split('|')[0].strip()
        
        img_container = soup.select_one('.separator img') or soup.select_one('.post-body img')
        img_url = img_container['src'] if img_container else None
        
        return image_title, img_url
    except:
        return "Unknown Title", None

def search_irasutoya(target_word):
    """Searches for a word and returns the top 3 post URLs."""
    headers = {"User-Agent": "Mozilla/5.0"}
    encoded_query = quote(target_word)
    search_url = f"https://www.irasutoya.com/search?q={encoded_query}"
    
    try:
        response = requests.get(search_url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        potential_links = soup.select('.boxm h2 a') or soup.select('.post-title a') or soup.select('h2 a')
        links = [a['href'] for a in potential_links if '/20' in a.get('href', '')]
        
        # Return top 3 unique links
        seen = set()
        unique_links = []
        for l in links:
            if l not in seen:
                unique_links.append(l)
                seen.add(l)
            if len(unique_links) == 3: break
            
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

def process_workflow(input_path, summary_path="download_summary.csv"):
    print(f"Processing all 90 verbs. Downloading top 3 options for each...")
    
    data_to_process = []
    with open(input_path, mode='r', encoding='utf-8') as f:
        reader = csv.reader(f)
        next(reader, None) # Skip header
        for row in reader:
            if row: data_to_process.append(row[0].strip())

    final_results = []
    
    for word in data_to_process:
        print(f"\n--- {word} ---", flush=True)
        links = search_irasutoya(word)
        entry = {"Original Word": word}
        
        for i in range(3):
            url = links[i] if i < len(links) else None
            title, img_url = get_post_details(url)
            
            entry[f"Option {i+1} Title"] = title
            entry[f"Option {i+1} URL"] = url if url else "N/A"
            
            if url and img_url:
                filename = f"{word}-{i+1}"
                ext = "png" if ".png" in img_url.lower() else "jpg"
                check_path = os.path.join("images", f"{filename}.{ext}")
                
                if os.path.exists(check_path):
                    entry[f"Option {i+1} Path"] = check_path
                    print(f"  [{i+1}] Skipping (already exists): {title}", flush=True)
                else:
                    path = download_image(img_url, filename)
                    entry[f"Option {i+1} Path"] = path if path else "Failed"
                    print(f"  [{i+1}] Downloaded: {title}", flush=True)
            else:
                entry[f"Option {i+1} Path"] = "N/A"
                print(f"  [{i+1}] No result found", flush=True)
                
        final_results.append(entry)
        # Small delay to be polite
        print(f"--- Finished {word} ---", flush=True)
        time.sleep(1)

    # Save summary
    fieldnames = ["Original Word", 
                  "Option 1 Title", "Option 1 URL", "Option 1 Path",
                  "Option 2 Title", "Option 2 URL", "Option 2 Path",
                  "Option 3 Title", "Option 3 URL", "Option 3 Path"]
    
    with open(summary_path, mode='w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(final_results)
    
    print(f"\nWork complete. Summary created: {summary_path}", flush=True)

if __name__ == "__main__":
    process_workflow("verbos.csv")
