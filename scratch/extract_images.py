import zipfile
import os

docx_path = 'scratch/redo_images.docx'
extract_dir = 'scratch/extracted_images'
os.makedirs(extract_dir, exist_ok=True)

with zipfile.ZipFile(docx_path) as z:
    for name in z.namelist():
        if name.startswith('word/media/'):
            basename = os.path.basename(name)
            # Find the rId that maps to this target in word/_rels/document.xml.rels
            # Actually we can just write the files first
            dest = os.path.join(extract_dir, basename)
            with open(dest, 'wb') as f:
                f.write(z.read(name))
            print(f"Extracted {name} to {dest}")
