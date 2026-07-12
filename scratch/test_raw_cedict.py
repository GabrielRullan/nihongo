import requests

urls = [
    "https://raw.githubusercontent.com/larryhou/dict/master/cedict_ts.u8",
    "https://raw.githubusercontent.com/edvardsr/cc-cedict/master/cedict_ts.u8",
    "https://raw.githubusercontent.com/simon-z/cc-cedict/master/cedict_ts.u8",
    "https://raw.githubusercontent.com/gkovacs/cc-cedict/master/cedict_ts.u8",
    "https://raw.githubusercontent.com/cantino/cedict/master/cedict_ts.u8"
]

for url in urls:
    try:
        res = requests.head(url, timeout=5)
        print(f"URL: {url} -> Status: {res.status_code}")
        if res.status_code == 200:
            print(f"SUCCESS! Length: {res.headers.get('Content-Length')} bytes")
            break
    except Exception as e:
        print(f"Failed {url}: {e}")
