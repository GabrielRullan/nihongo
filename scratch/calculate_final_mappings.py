import json

# Let's define the chosen images for multiple options based on the browser subagent's report:
multiple_options_choices = {
    "下": "image7.png",
    "火": "image9.png",
    "気": "image14.png",
    "小": "image39.png",
    "上": "image42.png",
    "森": "image44.png",
    "中": "image64.png",
    "六": "image83.png"
}

# Let's read docx_sequence.txt and extract all blocks
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
        p_part, rest = line.split(":", 1)
        p_idx = int(p_part.split(" ")[1])
        text_part, img_part = rest.split("|", 1)
        
        text_val = text_part.strip()
        if text_val.startswith("text="):
            text_val = text_val[5:].strip("'")
            
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

final_mappings = {}

for block in kanji_blocks:
    kanji = block["kanji"]
    all_images = []
    for item in block["items"]:
        for r in item["images"]:
            all_images.append(image_rid_map.get(r, r))
            
    if not all_images:
        # No image in this block (like 円, 糸, 女, 木)
        continue
        
    if len(all_images) == 1:
        # Exactly one image
        final_mappings[kanji] = all_images[0]
    else:
        # Multiple images, check our choices
        if kanji in multiple_options_choices:
            final_mappings[kanji] = multiple_options_choices[kanji]
        else:
            # Fallback to the last image if not specified
            final_mappings[kanji] = all_images[-1]

# Save to file
with open('scratch/final_mappings.json', 'w', encoding='utf-8') as f:
    json.dump(final_mappings, f, ensure_ascii=False, indent=4)

print(f"Generated final mappings for {len(final_mappings)} Kanjis.")
for k, v in final_mappings.items():
    print(f"  {k} -> {v}")
