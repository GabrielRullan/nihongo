import requests
from bs4 import BeautifulSoup
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

url = 'https://illustkun.com/08377-20240815-a/'
res = requests.get(url)
soup = BeautifulSoup(res.text, 'html.parser')

full_title = soup.title.string if soup.title else "No Title"
image_title = full_title.split('-')[0].strip()

img_container = soup.select_one('figure.wp-block-image img') or soup.select_one('.entry-content img') or soup.select_one('article img')
if img_container:
    img_url = img_container.get('src')
    # Try to get full resolution by removing the dimensions suffix (e.g. -300x300)
    high_res_url = re.sub(r'-\d+x\d+(?=\.(png|jpe?g|gif)$)', '', img_url, flags=re.IGNORECASE)
    print("Title:", image_title)
    print("Original URL:", img_url)
    print("High-res URL:", high_res_url)
else:
    print("No image found")
