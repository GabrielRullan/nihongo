import os
import csv
import time
import requests
import sys
import re
from bs4 import BeautifulSoup
from urllib.parse import quote

# Set stdout to UTF-8 for Windows consoles
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

JAPANESE_MAPPING = {
    "我": "私", "你": "あなた", "他": "彼", "她": "彼女", "我们": "私たち",
    "这": "これ", "那": "それ", "哪": "どれ", "哪儿": "どこ", "谁": "誰",
    "什么": "何", "多少": "いくら", "几": "いくつ", "怎么": "どう", "怎么样": "どうですか",
    "每": "毎", "是": "です", "有": "ある", "看": "見る", "听": "聞く",
    "说话": "話す", "读": "読む", "写": "書く", "看见": "見える", "叫": "呼ぶ",
    "来": "来る", "回": "帰る", "去": "行く", "吃": "食べる", "喝": "飲む",
    "睡觉": "寝る", "做": "作る", "买": "買う", "开": "開ける", "坐": "座る",
    "住": "住む", "学习": "勉強する", "工作": "働く", "下雨": "雨", "爱": "愛",
    "喜欢": "好き", "想": "思う", "认识": "知る", "会": "できる", "能": "できる",
    "请": "お願い", "谢谢": "ありがとう", "再见": "さようなら", "对不起": "ごめんなさい",
    "没关系": "大丈夫", "家": "家", "爸爸": "お父さん", "妈妈": "お母さん",
    "儿子": "息子", "女儿": "娘", "老师": "先生", "学生": "学生", "同学": "同級生",
    "朋友": "友達", "医生": "医者", "先生": "さん", "小姐": "さん", "人": "人",
    "学校": "学校", "饭馆": "レストラン", "商店": "店", "医院": "病院", "火车站": "駅",
    "中国": "中国", "北京": "北京", "上": "上", "下": "下", "前面": "前",
    "后面": "後ろ", "里面": "中", "年": "年", "月": "月", "日": "日",
    "星期": "曜日", "点": "時", "分钟": "分", "现在": "今", "时候": "時",
    "今天": "今日", "明天": "明日", "昨天": "昨日", "上午": "午前", "中午": "昼",
    "下午": "午後", "桌子": "机", "椅子": "椅子", "杯子": "コップ", "茶": "お茶",
    "水": "水", "菜": "料理", "米饭": "ご飯", "苹果": "りんご", "衣服": "服",
    "钱": "お金", "书": "本", "汉语": "中国語", "字": "字", "名字": "名前",
    "电脑": "パソコン", "电视": "テレビ", "电影": "映画", "飞机": "飛行機",
    "出租车": "タクシー", "猫": "猫", "狗": "犬", "东西": "物", "天气": "天気",
    "个": "個", "岁": "歳", "本": "冊", "些": "いくつか", "块": "塊",
    "一": "一", "二": "二", "三": "三", "四": "四", "五": "五",
    "六": "六", "七": "七", "八": "八", "九": "九", "十": "十",
    "零": "ゼロ", "不": "ない", "没": "ない", "很": "とても", "太": "とても",
    "都": "全て", "和": "と", "在": "いる", "吗": "か", "呢": "ね",
    "了": "た", "的": "の", "大": "大きい", "小": "小さい", "多": "多い",
    "少": "少ない", "好": "良い", "冷": "寒い", "热": "暑い", "高兴": "嬉しい",
    "漂亮": "綺麗"
}

def get_post_details(post_url):
    if not post_url: return "N/A", None
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        response = requests.get(post_url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        full_title = soup.title.string if soup.title else "No Title"
        image_title = full_title.split('-')[0].strip()
        
        if "アーカイブ" in image_title:
            return image_title, None
            
        img_container = soup.select_one('figure.wp-block-image img') or soup.select_one('.entry-content img') or soup.select_one('article img')
        if img_container:
            img_url = img_container.get('src')
            img_url = re.sub(r'-\d+x\d+(?=\.(png|jpe?g|gif)$)', '', img_url, flags=re.IGNORECASE)
            return image_title, img_url
        return image_title, None
    except:
        return "Unknown Title", None

def search_illustkun(target_word):
    headers = {"User-Agent": "Mozilla/5.0"}
    encoded_query = quote(target_word)
    search_url = f"https://illustkun.com/?s={encoded_query}"
    
    try:
        response = requests.get(search_url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        potential_links = soup.select('article a')
        links = [a.get('href') for a in potential_links if a.get('href') and '/category/' not in a.get('href') and '/tag/' not in a.get('href')]
        
        seen = set()
        unique_links = []
        for l in links:
            if l not in seen:
                unique_links.append(l)
                seen.add(l)
            if len(unique_links) == 10: break
            
        return unique_links
    except:
        return []

def download_image(img_url, filename, save_dir="images"):
    if not img_url: return None
    if not os.path.exists(save_dir): os.makedirs(save_dir)
    
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        img_data = requests.get(img_url, headers=headers, timeout=10).content
        ext = "png" if ".png" in img_url.lower() else "jpg"
        file_path = os.path.join(save_dir, f"{filename}.{ext}")
        with open(file_path, 'wb') as f:
            f.write(img_data)
        return file_path
    except:
        return None

def process_workflow(summary_path="chinese_summary.csv"):
    print("Reading data.js to extract characters...")
    try:
        with open("data.js", "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        print("Error reading data.js:", e)
        return
        
    matches = re.finditer(r'character:\s*"([^"]+)"', content)
    data_to_process = []
    for match in matches:
        char = match.group(1)
        if char not in data_to_process:
            data_to_process.append(char)
            
    print(f"Found {len(data_to_process)} unique characters.")
    
    existing_choices = {}
    if os.path.exists(summary_path):
        try:
            with open(summary_path, mode='r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    if row.get("Original Word") and row.get("Chosen"):
                        existing_choices[row["Original Word"]] = row["Chosen"]
        except:
            pass

    final_results = []
    downloaded_img_urls = set()
    
    for word in data_to_process:
        print(f"\n--- {word} ---", flush=True)
        
        def fetch_images(search_term):
            links = search_illustkun(search_term)
            results = []
            link_index = 0
            while len(results) < 3 and link_index < len(links):
                url = links[link_index]
                link_index += 1
                title, img_url = get_post_details(url)
                if img_url and img_url not in downloaded_img_urls:
                    downloaded_img_urls.add(img_url)
                    results.append((title, url, img_url))
            return results
            
        results = fetch_images(word)
        
        if not results and word in JAPANESE_MAPPING:
            jp_word = JAPANESE_MAPPING[word]
            print(f"  [!] No valid images for '{word}'. Trying Japanese '{jp_word}'...", flush=True)
            results = fetch_images(jp_word)
        elif not results:
            print(f"  [!] No valid images for '{word}' and no Japanese equivalent found.", flush=True)
        
        chosen_val = existing_choices.get(word, "1")
        entry = {"Original Word": word, "Chosen": chosen_val}
        
        for i, (title, url, img_url) in enumerate(results):
            entry[f"Option {i+1} Title"] = title
            entry[f"Option {i+1} URL"] = url
            filename = f"{word}-{i+1}"
            ext = "png" if ".png" in img_url.lower() else "jpg"
            check_path = os.path.join("images", f"{filename}.{ext}")
            
            if os.path.exists(check_path):
                entry[f"Option {i+1} Path"] = check_path
                print(f"  [{i+1}] Already exists: {title}", flush=True)
            else:
                path = download_image(img_url, filename)
                entry[f"Option {i+1} Path"] = path if path else "Failed"
                print(f"  [{i+1}] Downloaded: {title}", flush=True)
                
        for i in range(len(results), 3):
            entry[f"Option {i+1} Title"] = "N/A"
            entry[f"Option {i+1} URL"] = "N/A"
            entry[f"Option {i+1} Path"] = "N/A"
                
        final_results.append(entry)
        time.sleep(0.3)

    fieldnames = ["Original Word", "Chosen",
                  "Option 1 Title", "Option 1 Path", "Option 1 URL",
                  "Option 2 Title", "Option 2 Path", "Option 2 URL",
                  "Option 3 Title", "Option 3 Path", "Option 3 URL"]
    
    with open(summary_path, mode='w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(final_results)
    
    print(f"\nWork complete. Summary updated: {summary_path}", flush=True)

if __name__ == "__main__":
    process_workflow()
