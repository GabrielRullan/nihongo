import requests
import json

url = "https://pokeapi.co/api/v2/pokemon-species/152/"
response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    # Find names
    names = data.get("names", [])
    zh_name = None
    en_name = None
    for name_info in names:
        lang = name_info["language"]["name"]
        if lang == "zh-Hans":
            zh_name = name_info["name"]
        elif lang == "en":
            en_name = name_info["name"]
    print(f"English: {en_name}, Chinese Simplified: {zh_name}")
else:
    print(f"Failed to fetch species data: {response.status_code}")

# Check pokemon endpoint for types
poke_url = "https://pokeapi.co/api/v2/pokemon/152/"
response = requests.get(poke_url)
if response.status_code == 200:
    data = response.json()
    types = [t["type"]["name"] for t in data.get("types", [])]
    image = data.get("sprites", {}).get("other", {}).get("official-artwork", {}).get("front_default")
    print(f"Types: {types}")
    print(f"Image: {image}")
