import requests
import json
url = "https://pokeapi.co/api/v2/pokemon-species/152/"
response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    names = data.get("names", [])
    languages = {n['language']['name']: n['name'] for n in names}
    print(json.dumps(languages, ensure_ascii=True, indent=2))
