import requests

url = "https://raw.githubusercontent.com/mwohlg/cc-cedict/master/cedict_ts.u8"
response = requests.head(url)
print(f"Status: {response.status_code}")
if response.status_code == 200:
    print(f"Content-Length: {response.headers.get('Content-Length')} bytes")
