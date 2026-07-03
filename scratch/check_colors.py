import re

def main():
    path = "cards-chinese/data.js"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Simple regex to find character blocks
    blocks = re.findall(r'\{[^{}]+\}', content)
    print(f"Total card blocks found: {len(blocks)}")
    
    color_keywords = ['blanco', 'rojo', 'azul', 'verde', 'amarillo', 'negro', 'naranja', 'morado', 'rosa', 'gris', 'dorado', 'plateado', 'color', 'plata', 'oro', 'marrón']
    
    found = []
    for b in blocks:
        char_match = re.search(r'character:\s*"([^"]+)"', b)
        mean_match = re.search(r'meaning:\s*"([^"]+)"', b)
        if char_match and mean_match:
            char = char_match.group(1)
            mean = mean_match.group(1)
            if any(k in mean.lower() for k in color_keywords):
                found.append((char, mean))
                
    if found:
        print("Found color-related cards:")
        for c, m in found:
            print(f"- {c}: {m}")
    else:
        print("No color-related cards found.")

if __name__ == "__main__":
    main()
