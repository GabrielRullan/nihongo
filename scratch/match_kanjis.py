import re

kanjis_data = [
    ("一", "ICHI", "Uno"),
    ("右", "MIGI", "Derecha"),
    ("雨", "AME", "Lluvia"),
    ("円", "EN", "Yen"),
    ("王", "OU", "Rey"),
    ("音", "OTO", "Sonido"),
    ("下", "SHITA", "Abajo"),
    ("火", "HI", "Fuego"),
    ("花", "HANA", "Flor"),
    ("貝", "KAI", "Concha"),
    ("学", "GAKU", "Estudiar"),
    ("気", "KI", "Espíritu"),
    ("九", "KYUU", "Nueve"),
    ("休", "YASUMU", "Descansar"),
    ("玉", "TAMA", "Bola"),
    ("金", "KANE", "Dinero"),
    ("空", "SORA", "Cielo"),
    ("月", "TSUKI", "Luna"),
    ("犬", "INU", "Perro"),
    ("見", "MIRU", "Ver"),
    ("五", "GO", "Cinco"),
    ("口", "KUCHI", "Boca"),
    ("校", "KOU", "Escuela"),
    ("左", "HIDARI", "Izquierda"),
    ("三", "SAN", "Tres"),
    ("山", "YAMA", "Montaña"),
    ("子", "KO", "Niño"),
    ("四", "YON", "Cuatro"),
    ("糸", "ITO", "Hilo"),
    ("字", "JI", "Letra"),
    ("耳", "MIMI", "Oreja"),
    ("七", "NANA", "Siete"),
    ("車", "KURUMA", "Coche"),
    ("手", "TE", "Mano"),
    ("十", "JUU", "Diez"),
    ("出", "DERU", "Salir"),
    ("女", "ONNA", "Mujer"),
    ("小", "CHIISAI", "Pequeño"),
    ("上", "UE", "Arriba"),
    ("森", "MORI", "Bosque"),
    ("人", "HITO", "Persona"),
    ("水", "MIZU", "Agua"),
    ("正", "TADASHII", "Correcto"),
    ("生", "IKIRU", "Vida"),
    ("青", "AOI", "Azul"),
    ("夕", "YUU", "Tarde"),
    ("石", "ISHI", "Piedra"),
    ("赤", "AKAI", "Rojo"),
    ("千", "SEN", "Mil"),
    ("川", "KAWA", "Río"),
    ("先", "SAKI", "Antes"),
    ("早", "HAYAI", "Rápido"),
    ("草", "KUSA", "Hierba"),
    ("足", "ASHI", "Pie"),
    ("村", "MURA", "Pueblo"),
    ("大", "OOKII", "Grande"),
    ("男", "OTOKO", "Hombre"),
    ("竹", "TAKE", "Bambú"),
    ("中", "NAKA", "Dentro"),
    ("虫", "MUSHI", "Insecto"),
    ("町", "MACHI", "Pueblo/Ciudad"),
    ("天", "TEN", "Cielo/Paraíso"),
    ("田", "TA", "Campo de arroz"),
    ("土", "TSUCHI", "Tierra"),
    ("二", "NI", "Dos"),
    ("日", "HI", "Día/Sol"),
    ("入", "HAIRU", "Entrar"),
    ("年", "TOSHI", "Año"),
    ("白", "SHIROI", "Blanco"),
    ("八", "HACHI", "Ocho"),
    ("百", "HYAKU", "Cien"),
    ("文", "BUN", "Escritura"),
    ("木", "KI", "Árbol"),
    ("本", "HON", "Libro"),
    ("名", "NAMAE", "Nombre"),
    ("目", "ME", "Ojo"),
    ("立", "TATSU", "Levantarse"),
    ("力", "CHIKARA", "Fuerza"),
    ("林", "HAYASHI", "Arboleda"),
    ("六", "ROKU", "Seis")
]

# Read full details
with open('scratch/docx_full_details.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Split by paragraphs
paragraphs = content.strip().split('\n\n')

parsed_paragraphs = []
for p in paragraphs:
    lines = p.strip().split('\n')
    if not lines:
        continue
    p_num = int(re.search(r'Paragraph (\d+):', lines[0]).group(1))
    texts = []
    images = []
    for line in lines[1:]:
        line = line.strip()
        if line.startswith('TEXT:'):
            texts.append(line[5:].strip())
        elif line.startswith('IMAGE:'):
            images.append(line[6:].strip())
    parsed_paragraphs.append((p_num, texts, images))

# Now let's trace sequentially and assign paragraphs to each Kanji.
# A paragraph belongs to the current Kanji until we match a keyword indicating the next Kanji.
# We will construct a mapping.
kanji_to_paragraphs = {k[0]: [] for k in kanjis_data}

# To make this match, let's look at keywords for each Kanji
kanji_keywords = {
    "一": ["ICHÍ", "sillón"],
    "右": ["MIGÍ", "RATON"],
    "雨": ["AME", "ARCOIRIS", "LLUVIA"],
    "円": ["YEN"],
    "王": ["REY", "TREN"],
    "音": ["SONIDO ON"],
    "下": ["SHITA", "ABAJO"],
    "火": ["HI FUEGO", "HANABI"],
    "花": ["HANÁ", "FLOR GRANDE"],
    "貝": ["KAI", "NO ES MARISCO"],
    "学": ["MANABU"],
    "気": ["KI", "NIÑA", "POWER"],
    "九": ["9", "NUMERO"],
    "休": ["YASUMU", "COLEGIO"],
    "玉": ["TAMA", "PROVINCIA", "BOLA"],
    "金": ["OKANE"],
    "空": ["SORA", "NEVERA"],
    "月": ["TSUKI", "MOON"],
    "犬": ["INÚ", "DOG HEART"],
    "見": ["MIRU", "OKURIGANA RU"],
    "五": ["5", "STAR", "FINGERS"],
    "口": ["KUCHI", "SEÑAL"],
    "校": ["KOU", "MOCHILA"],
    "左": ["HIDARI", "HANDKERCHIEF"],
    "三": ["SAN", "DANGO"],
    "山": ["YAMÁ"],
    "子": ["KO", "JUDO"],
    "四": ["YON", "CUADRADO"],
    "糸": ["ITO"],
    "字": ["JI", "2026"],
    "耳": ["MIMI", "MIMIKAKI"],
    "七": ["NANA"],
    "車": ["KURUMÁ"],
    "手": ["TÉ", "MANO"],
    "十": ["JYUU", "ESTRELLA"],
    "出": ["DERU", "PLANTA"],
    "女": ["ONNA OK"],
    "小": ["CHIISAI", "ADD OKURIGANA"],
    "上": ["UE", "CALENDARIO"],
    "森": ["MORI", "MAPA"],
    "人": ["HITO", "ABUELA"],
    "水": ["MIZU", "CASA CON LLUVIA"],
    "正": ["TADASHII"],
    "生": ["SEI/ IKIRU"],
    "青": ["AO", "FUEGO ARTIFICIAL"],
    "夕": ["YUU", "ATARDECER"],
    "石": ["ISHI", "MOCHI"],
    "赤": ["AKA", "MAPA ROJO"],
    "千": ["SEN"],
    "川": ["KAWA", "RIO"],
    "先": ["SEI ANTERIOR."],
    "早": ["HAYAI", "NIÑO CAZANDO"],
    "草": ["KUSA", "PODANDO"],
    "足": ["ASHI", "KANI"],
    "村": ["MURÁ"],
    "大": ["OOKII"],
    "男": ["OTOKO"],
    "竹": ["TAKÉ"],
    "中": ["NAKA", "BANDERA"],
    "虫": ["MUSHI."],
    "町": ["MACHI"],
    "天": ["TEN", "SKY TREE"],
    "田": ["TA", "TAMBO"],
    "土": ["TSUCHI", "GALLETA"],
    "二": ["2", "LITERA"],
    "日": ["HI", "SOL"],
    "入": ["HAIRU", "ARROZ"],
    "年": ["NEN TOSHI", "CABALLO"],
    "白": ["SHIROI"],
    "八": ["8"],
    "百": ["HYAKU"],
    "文": ["BUN"],
    "木": ["KI"],
    "本": ["HON", "LIBRO"],
    "名": ["Namae", "名前"],
    "目": ["ME", "Niña mareada"],
    "立": ["TATSU", "pino"],
    "力": ["CHIKARA", "oculista"],
    "林": ["HAYASHI"],
    "六": ["6 ROKU"]
}

# We will match paragraph texts to determine where a Kanji starts.
# Since we know the sequence can be slightly out of order (like YUU and AO),
# let's just do a greedy match: for each paragraph, check if it contains any of the keywords
# of our kanjis, and keep track of the current active kanji.
current_kanji = "一"

for p_num, texts, images in parsed_paragraphs:
    # Check if this paragraph text matches any kanji's keywords
    matched_kanji = None
    for k, keywords in kanji_keywords.items():
        for text in texts:
            # Check for exact or substring match
            for kw in keywords:
                if kw.lower() in text.lower():
                    matched_kanji = k
                    break
            if matched_kanji:
                break
        if matched_kanji:
            break
            
    if matched_kanji:
        current_kanji = matched_kanji
        
    kanji_to_paragraphs[current_kanji].append((p_num, texts, images))

# Write mapping summary to file
with open('scratch/kanji_image_mapping.txt', 'w', encoding='utf-8') as out_f:
    for k, p_list in kanji_to_paragraphs.items():
        imgs = []
        txts = []
        for p_num, texts, images in p_list:
            imgs.extend(images)
            txts.extend(texts)
        out_f.write(f"Kanji: {k} | Images: {imgs} | Texts: {txts[:5]}\n")

print("Done. Wrote mapping to scratch/kanji_image_mapping.txt")

