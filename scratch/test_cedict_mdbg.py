import urllib.request
import zipfile
import re
import os

print("Downloading CC-CEDICT zip from MDBG...")
zip_url = "https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.zip"
zip_path = "scratch/cedict.zip"
extract_path = "scratch"

try:
    # Set a User-Agent to avoid blocking
    req = urllib.request.Request(
        zip_url, 
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    with urllib.request.urlopen(req) as response, open(zip_path, 'wb') as out_file:
        out_file.write(response.read())
        
    print("Download complete. Unzipping...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_path)
    
    print("Dictionary unzipped. Testing parse...")
    dict_file = os.path.join(extract_path, "cedict_ts.u8")
    
    found = False
    with open(dict_file, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            # Match line format
            match = re.match(r'^(\S+)\s+(\S+)\s+\[([^\]]+)\]\s+/(.*)/$', line)
            if match:
                trad, simp, pinyin, defs = match.groups()
                if simp == "叶":
                    print(f"Parsed character '叶': Pinyin={pinyin}, Definitions={defs}")
                    found = True
                    break
    if not found:
        print("Character '叶' not found in dictionary.")
except Exception as e:
    print(f"Error occurred: {e}")
