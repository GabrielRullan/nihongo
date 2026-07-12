import os
from google import genai

api_key = os.environ.get("GEMINI_API_KEY")
print(f"GEMINI_API_KEY present: {api_key is not None}")

if api_key:
    try:
        client = genai.Client()
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents='Return a JSON breakdown of Chinese character "草". Format: {"char": "草", "pinyin": "cao3", "definition": "grass"}. Use lowercase for keys.'
        )
        print(response.text)
    except Exception as e:
        print(f"Error calling Gemini: {e}")
