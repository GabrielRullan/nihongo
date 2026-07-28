import zipfile
import xml.etree.ElementTree as ET

docx_path = 'scratch/redo_images.docx'

with zipfile.ZipFile(docx_path) as z:
    doc_xml = z.read('word/document.xml')

root = ET.fromstring(doc_xml)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

# Find paragraph at index 37 (or let's find the w:p elements and inspect the 37th one)
p_elements = root.findall('.//w:p', ns)
p_37 = p_elements[37]

# Let's print a pretty XML or structure of this paragraph
print(ET.tostring(p_37, encoding='utf-8').decode('utf-8')[:2000])
