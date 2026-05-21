import urllib.request
import json
import os
import sys

def load_env():
    env_path = ".env"
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, val = line.split("=", 1)
                    key = key.strip()
                    val = val.strip().strip('"').strip("'")
                    os.environ[key] = val

load_env()
api_key = os.environ.get("GEMINI_API_KEY")

if not api_key:
    print("Error: GEMINI_API_KEY not found in .env file.")
    sys.exit(1)

url = f"https://generativelanguage.googleapis.com/v1beta/models?key={api_key}"

try:
    with urllib.request.urlopen(url) as response:
        data = json.loads(response.read().decode('utf-8'))
        models = data.get("models", [])
        print("Available models:")
        for model in models:
            name = model.get("name", "")
            displayName = model.get("displayName", "")
            supportedMethods = model.get("supportedEffects", model.get("supportedGenerationMethods", []))
            print(f"- {name} ({displayName}) - Methods: {supportedMethods}")
except Exception as e:
    print(f"Error fetching models: {e}")
