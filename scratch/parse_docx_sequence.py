import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = 'scratch/redo_images.docx'

headers_sequence = [
    ("一", "ICHÍ"),
    ("右", "MIGÍ"),
    ("雨", "AME"),
    ("円", "YEN"),
    ("王", "REY"),
    ("音", "SONIDO ON"),
    ("下", "SHITA"),
    ("火", "HI FUEGO"),
    ("花", "HANÁ"),
    ("貝", "KAI"),
    ("学", "MANABU"),
    ("気", "KI"),
    ("九", "9"),
    ("休", "YASUMU"),
    ("玉", "TAMA"),
    ("金", "OKANE"),
    ("空", "SORA"),
    ("月", "TSUKI"),
    ("犬", "INÚ"),
    ("見", "MIRU"),
    ("五", "5"),
    ("口", "KUCHI"),
    ("校", "KOU"),
    ("左", "HIDARI"),
    ("三", "SAN"),
    ("山", "YAMÁ"),
    ("子", "KO"),
    ("四", "YON"),
    ("糸", "ITO"),
    ("字", "JI"),
    ("耳", "MIMI"),
    ("七", "NANA"),
    ("車", "KURUMÁ"),
    ("手", "TÉ"),
    ("十", "JYUU"),
    ("出", "DERU"),
    ("女", "ONNA OK"),
    ("小", "CHIISAI"),
    ("上", "UE"),
    ("森", "MORI"),
    ("人", "HITO"),
    ("水", "MIZU"),
    ("正", "TADASHII"),
    ("生", "SEI/ IKIRU"),
    ("夕", "YUU"),
    ("青", "AO"),
    ("石", "ISHI"),
    ("赤", "AKA"),
    ("千", "SEN"),
    ("川", "KAWA"),
    ("先", "SEI ANTERIOR."),
    ("早", "HAYAI"),
    ("草", "KUSA"),
    ("足", "ASHI"),
    ("村", "MURÁ"),
    ("大", "OOKII"),
    ("男", "OTOKO"),
    ("竹", "TAKÉ"),
    ("中", "NAKA"),
    ("虫", "MUSHI."),
    ("町", "MACHI"),
    ("天", "TEN"),
    ("田", "TA"),
    ("土", "TSUCHI"),
    ("二", "2"),
    ("日", "HI"),
    ("入", "HAIRU"),
    ("年", "NEN TOSHI"),
    ("白", "SHIROI"),
    ("八", "8"),
    ("百", "HYAKU"),
    ("文", "BUN"),
    ("木", "KI"),
    ("本", "HON"),
    ("名", "Namae"),
    ("目", "ME"),
    ("立", "TATSU"),
    ("力", "CHIKARA"),
    ("林", "HAYASHI"),
    ("六", "6 ROKU")
]

with zipfile.ZipFile(docx_path) as z:
    doc_xml = z.read('word/document.xml')
    rels_xml = z.read('word/_rels/document.xml.rels')

# Parse relationships
root_rels = ET.fromstring(rels_xml)
rid_to_target = {}
for rel in root_rels.findall('.//Relationship', namespaces=None):
    rid = rel.attrib.get('Id')
    target = rel.attrib.get('Target')
    rid_to_target[rid] = target

root_doc = ET.fromstring(doc_xml)
ns = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture'
}

paragraphs = root_doc.findall('.//w:p', ns)

# Sequential matching
grouped_data = []
current_header_idx = -1
current_kanji = None
current_header_text = None
current_paragraphs = []

for p_idx, p in enumerate(paragraphs):
    text_runs = p.findall('.//w:t', ns)
    text = "".join([run.text for run in text_runs if run.text]).strip()
    
    rids_in_p = []
    embeds = p.findall('.//a:blip', ns)
    for embed in embeds:
        rid = embed.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
        if rid:
            rids_in_p.append(rid)
            
    images = [rid_to_target.get(r, r) for r in rids_in_p]
    
    # Check if this text is the next header in sequence
    # Note: we need to handle text headers that might be exactly matching
    is_next_header = False
    next_idx = current_header_idx + 1
    if next_idx < len(headers_sequence):
        next_kanji, next_header = headers_sequence[next_idx]
        # Match header text
        if text.lower() == next_header.lower() or (next_header == "9" and text == "9") or (next_header == "5" and text == "5") or (next_header == "8" and text == "8") or (next_header == "2" and text == "2"):
            is_next_header = True
            current_header_idx = next_idx
            
    # For headers like "ICHÍ" vs "ICHÍ SILLON..." at the beginning:
    # Let's check if the text matches the current or next header
    if is_next_header:
        if current_kanji:
            grouped_data.append({
                "kanji": current_kanji,
                "header": current_header_text,
                "paragraphs": current_paragraphs
            })
        current_kanji = headers_sequence[current_header_idx][0]
        current_header_text = headers_sequence[current_header_idx][1]
        current_paragraphs = []
        
    if text or images:
        current_paragraphs.append({
            "p_idx": p_idx,
            "text": text,
            "images": images
        })

if current_kanji:
    grouped_data.append({
        "kanji": current_kanji,
        "header": current_header_text,
        "paragraphs": current_paragraphs
    })

# Write the clean sequence file
with open('scratch/docx_sequence.txt', 'w', encoding='utf-8') as f:
    for item in grouped_data:
        f.write(f"=== KANJI: {item['kanji']} ({item['header']}) ===\n")
        for p in item['paragraphs']:
            f.write(f"  P {p['p_idx']}: text='{p['text']}' | images={p['images']}\n")
        f.write("\n")

print(f"Wrote sequence to scratch/docx_sequence.txt. Grouped {len(grouped_data)} Kanjis.")
