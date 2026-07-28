import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = 'scratch/redo_images.docx'

with zipfile.ZipFile(docx_path) as z:
    # Read the document xml
    doc_xml = z.read('word/document.xml')
    # Read the relationships xml to map rid to image filename
    rels_xml = z.read('word/_rels/document.xml.rels')

# Parse relationships
root_rels = ET.fromstring(rels_xml)
namespaces_rels = {'r': 'http://schemas.openxmlformats.org/package/2006/relationships'}
rid_to_target = {}
for rel in root_rels.findall('.//Relationship', namespaces=None):
    rid = rel.attrib.get('Id')
    target = rel.attrib.get('Target')
    rid_to_target[rid] = target

# Parse document.xml to find text and drawings
root_doc = ET.fromstring(doc_xml)

# Namespaces in docx xml
ns = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture'
}

# Let's iterate through paragraphs
paragraphs = root_doc.findall('.//w:p', ns)
print(f"Found {len(paragraphs)} paragraphs.")

results = []
for p_idx, p in enumerate(paragraphs):
    # Get all text in paragraph
    text_runs = p.findall('.//w:t', ns)
    text = "".join([run.text for run in text_runs if run.text])
    
    # Get all drawing rIds
    rids_in_p = []
    drawings = p.findall('.//wp:docPr', ns)
    # Also find any embed ids
    embeds = p.findall('.//a:blip', ns)
    for embed in embeds:
        rid = embed.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
        if rid:
            rids_in_p.append(rid)
            
    if text or rids_in_p:
        image_files = [rid_to_target.get(r, r) for r in rids_in_p]
        results.append((p_idx, text, image_files))

# Print first 50 results
for p_idx, text, images in results[:100]:
    if text.strip() or images:
        print(f"P {p_idx}: Text='{text}' | Images={images}")
