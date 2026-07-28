import zipfile
import xml.etree.ElementTree as ET
import re

docx_path = 'scratch/redo_images.docx'

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

# Parse document
root_doc = ET.fromstring(doc_xml)
ns = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture'
}

# 80 Kanjis list from CSV
kanjis = [
    "一", "右", "雨", "円", "王", "音", "下", "火", "花", "貝", "学", "気", "九", "休", "玉", 
    "金", "空", "月", "犬", "見", "五", "口", "校", "左", "三", "山", "子", "四", "糸", "字", 
    "耳", "七", "車", "手", "十", "出", "女", "小", "上", "森", "人", "水", "正", "生", "青", 
    "夕", "石", "赤", "千", "川", "先", "早", "草", "足", "村", "大", "男", "竹", "中", "虫", 
    "町", "天", "田", "土", "二", "日", "入", "年", "白", "八", "百", "文", "木", "本", "名", 
    "目", "立", "力", "林", "六"
]

paragraphs = root_doc.findall('.//w:p', ns)

current_block = []
blocks = []

# Let's group paragraphs into blocks by tracking when a new Kanji or a large heading is likely starting
# Or we can just print out all paragraph text and images to see the sequence
for idx, p in enumerate(paragraphs):
    text_runs = p.findall('.//w:t', ns)
    text = "".join([run.text for run in text_runs if run.text]).strip()
    
    rids_in_p = []
    embeds = p.findall('.//a:blip', ns)
    for embed in embeds:
        rid = embed.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
        if rid:
            rids_in_p.append(rid)
            
    if text or rids_in_p:
        img_files = [rid_to_target.get(r, r) for r in rids_in_p]
        current_block.append({'idx': idx, 'text': text, 'images': img_files})

# Let's print out everything to a text file so we can read it easily
with open('scratch/docx_full_text.txt', 'w', encoding='utf-8') as f:
    for item in current_block:
        f.write(f"P {item['idx']}: {item['text']} | Images: {item['images']}\n")

print(f"Wrote {len(current_block)} items to scratch/docx_full_text.txt")
