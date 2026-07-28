import zipfile
import xml.etree.ElementTree as ET
import os

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

root_doc = ET.fromstring(doc_xml)
ns = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture'
}

paragraphs = root_doc.findall('.//w:p', ns)

with open('scratch/docx_full_details.txt', 'w', encoding='utf-8') as f:
    for p_idx, p in enumerate(paragraphs):
        # We want to iterate through children of p to see the order of text and drawings
        children_info = []
        # Find all elements under p in pre-order traversal
        for elem in p.iter():
            # If text
            if elem.tag == '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t':
                if elem.text:
                    children_info.append(f"TEXT: {elem.text.strip()}")
            # If image
            elif elem.tag == '{http://schemas.openxmlformats.org/drawingml/2006/main}blip':
                rid = elem.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
                if rid:
                    target = rid_to_target.get(rid, rid)
                    children_info.append(f"IMAGE: {rid} ({os.path.basename(target)})")
        
        if children_info:
            f.write(f"Paragraph {p_idx}:\n")
            for info in children_info:
                f.write(f"  {info}\n")
            f.write("\n")

print("Done. Wrote details to scratch/docx_full_details.txt")
