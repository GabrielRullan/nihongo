import json
import sys

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')

log_path = r'C:\Users\gabri\.gemini\antigravity-ide\brain\d00f4319-4ad4-4464-83b8-bb8a89e63772\.system_generated\logs\transcript.jsonl'
with open(log_path, 'r', encoding='utf-8') as f:
    lines = [json.loads(line) for line in f]

total = len(lines)
print(f"Total entries in log: {total}")
for i in range(max(0, total - 25), total):
    line = lines[i]
    step = line.get("step_index")
    source = line.get("source")
    type_ = line.get("type")
    content = line.get("content", "")
    print(f"Index {i} | Step {step} | Source: {source} | Type: {type_}")
    if content:
        print("  Content:", content[:300].replace('\n', ' '))
