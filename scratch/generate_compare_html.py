import json

# Let's load the grouped data from parse_docx_sequence.py by importing it or running a similar function
# To avoid dependencies, let's just parse docx_sequence.txt
with open('scratch/docx_sequence.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

kanji_blocks = []
current_block = None

for line in lines:
    line = line.strip()
    if line.startswith("=== KANJI:"):
        if current_block:
            kanji_blocks.append(current_block)
        parts = line.split(" ")
        kanji = parts[2]
        header = parts[3].strip("()")
        current_block = {"kanji": kanji, "header": header, "items": []}
    elif line.startswith("P "):
        # Parse P 7: text='ICHÍ' | images=[]
        # Let's use regex or split
        # e.g. text='...' | images=['...', '...']
        p_part, rest = line.split(":", 1)
        p_idx = int(p_part.split(" ")[1])
        text_part, img_part = rest.split("|", 1)
        
        # Extract text
        text_val = text_part.strip()
        if text_val.startswith("text="):
            text_val = text_val[5:].strip("'")
            
        # Extract images
        img_val = img_part.strip()
        if img_val.startswith("images="):
            img_val = img_val[7:].strip("[]")
            if img_val:
                images = [img.strip().strip("'") for img in img_val.split(",")]
            else:
                images = []
        else:
            images = []
            
        current_block["items"].append({
            "p_idx": p_idx,
            "text": text_val,
            "images": images
        })

if current_block:
    kanji_blocks.append(current_block)

# Image mapping target filename from print_rels
# Let's rebuild the map
image_rid_map = {
    "rId26": "image23.png", "rId21": "image18.png", "rId42": "image39.png", "rId47": "image44.png",
    "rId63": "image60.png", "rId68": "image65.png", "rId84": "image81.png", "rId16": "image13.png",
    "rId11": "image8.png", "rId32": "image29.png", "rId37": "image34.png", "rId53": "image50.png",
    "rId58": "image55.png", "rId74": "image71.png", "rId79": "image76.png", "rId5": "image2.png",
    "rId19": "image16.png", "rId14": "image11.png", "rId22": "image19.png", "rId27": "image24.png",
    "rId30": "image27.png", "rId35": "image32.jpeg", "rId43": "image40.png", "rId48": "image45.png",
    "rId56": "image53.png", "rId64": "image61.png", "rId69": "image66.jpeg", "rId77": "image74.png",
    "rId8": "image5.png", "rId51": "image48.png", "rId72": "image69.png", "rId80": "image77.png",
    "rId85": "image82.png", "rId12": "image9.png", "rId17": "image14.png", "rId25": "image22.png",
    "rId33": "image30.png", "rId38": "image35.png", "rId46": "image43.png", "rId59": "image56.png",
    "rId67": "image64.png", "rId20": "image17.png", "rId41": "image38.png", "rId54": "image51.png",
    "rId62": "image59.png", "rId70": "image67.png", "rId75": "image72.png", "rId83": "image80.png",
    "rId6": "image3.png", "rId15": "image12.png", "rId23": "image20.png", "rId28": "image25.png",
    "rId36": "image33.png", "rId49": "image46.png", "rId57": "image54.png", "rId10": "image7.png",
    "rId31": "image28.png", "rId44": "image41.png", "rId52": "image49.jpeg", "rId60": "image57.png",
    "rId65": "image62.png", "rId73": "image70.png", "rId78": "image75.png", "rId81": "image78.png",
    "rId86": "image83.png", "rId4": "image1.png", "rId9": "image6.png", "rId13": "image10.png",
    "rId18": "image15.png", "rId39": "image36.png", "rId34": "image31.png", "rId50": "image47.png",
    "rId55": "image52.png", "rId76": "image73.png", "rId7": "image4.png", "rId71": "image68.jpeg",
    "rId29": "image26.png", "rId24": "image21.png", "rId40": "image37.png", "rId45": "image42.png",
    "rId66": "image63.png", "rId61": "image58.jpeg", "rId82": "image79.png"
}

# Generate HTML
html_content = """<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Japanese Card Image Comparison</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; margin: 0; padding: 20px; color: #333; }
        h1 { text-align: center; color: #2c3e50; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; }
        .card { background-color: #fff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 15px; border-top: 5px solid #3498db; }
        .card-header { font-size: 20px; font-weight: bold; margin-bottom: 10px; display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        .card-content { margin-bottom: 10px; font-size: 14px; color: #555; }
        .image-container { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
        .image-box { border: 1px solid #ddd; padding: 5px; border-radius: 4px; text-align: center; background-color: #fafafa; }
        .image-box img { max-width: 100px; max-height: 100px; display: block; margin: 0 auto 5px; }
        .image-box span { font-size: 11px; color: #666; font-family: monospace; }
    </style>
</head>
<body>
    <h1>Japanese Card Image Comparison</h1>
    <div class="grid">
"""

for block in kanji_blocks:
    all_images = []
    texts = []
    for item in block["items"]:
        if item["text"]:
            texts.append(item["text"])
        for r in item["images"]:
            all_images.append((r, image_rid_map.get(r, r)))
            
    # If no images, but has text
    if not all_images and not texts:
        continue
        
    html_content += f"""
        <div class="card">
            <div class="card-header">
                <span>{block['kanji']}</span>
                <span style="font-size: 14px; color: #7f8c8d;">{block['header']}</span>
            </div>
            <div class="card-content">
                <strong>Text:</strong> {", ".join(texts)}
            </div>
            <div class="image-container">
    """
    
    for rid, fname in all_images:
        html_content += f"""
                <div class="image-box">
                    <img src="extracted_images/{fname}" alt="{rid}">
                    <span>{rid}<br>{fname}</span>
                </div>
        """
        
    html_content += """
            </div>
        </div>
    """

html_content += """
    </div>
</body>
</html>
"""

with open('scratch/compare_images.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Generated scratch/compare_images.html")
