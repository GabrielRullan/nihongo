import requests
from bs4 import BeautifulSoup
import json

url = "https://bulbapedia.bulbagarden.net/wiki/List_of_Chinese_Pok%C3%A9mon_names"
headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    tables = soup.find_all('table', class_='roundtable')
    print(f"Number of roundtable tables: {len(tables)}")
    
    for idx, t in enumerate(tables):
        rows = t.find_all('tr')
        # Check first data row (usually row 2, after 2 header rows)
        if len(rows) > 2:
            first_data_row = [col.get_text(strip=True) for col in rows[2].find_all(['th', 'td'])]
            last_data_row = [col.get_text(strip=True) for col in rows[-1].find_all(['th', 'td'])]
            print(f"Table {idx}: rows={len(rows)}")
            print(f"  First data row: {json.dumps(first_data_row, ensure_ascii=True)}")
            print(f"  Last data row: {json.dumps(last_data_row, ensure_ascii=True)}")
