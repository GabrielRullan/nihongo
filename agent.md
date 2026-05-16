# Agent Instructions - Nihongo Project

This repository is dedicated to automating the creation of Japanese learning materials. As an AI assistant, follow these patterns and principles when working on this codebase.

## 🛠️ Core Tools

### 1. Illustkun Downloader (`illustkun_downloader.py`)
- **Purpose**: Automates image retrieval for vocabulary.
- **Workflow**: 
    1. Reads `verbos.csv`.
    2. Searches [Illustkun](https://illustkun.com/).
    3. Downloads top 3 unique options per word.
    4. Logs everything in `download_summary.csv`.
- **Maintenance**: If the website structure changes, update the CSS selectors in `get_post_details` and `search_illustkun`.

### 2. Interactive Kanji Cards (`kanji-card.html`)
- **Purpose**: A premium, web-based interactive study tool.
- **Design System**: Uses a clean, modern UI with:
    - **Typography**: "Yu Mincho" for Kanji, system sans-serif for others.
    - **Interactivity**: CSS-based 3D flip animation triggered by JS.
    - **Content**: Includes Ruby (Furigana), Romaji, JLPT level, meaning, and example sentences.
- **Expansion**: When adding new cards, follow the `card-container` HTML structure. Ensure `viewBox` in SVGs is consistent (24x24 or adjusted proportionally).

## 🎨 Design Principles
- **Visuals**: Use vibrant but harmonious colors (defined in `:root`).
- **Typography**: Prioritize legibility. Use large Kanji sizes (e.g., `15rem` on card fronts).
- **UX**: Ensure the interface feels "alive" with transitions and hover effects.

## 📁 File Organization
- `cards/`: Production Japanese N5 Kanji cards loaded from `data.js`.
- `cards-chinese/`: Interactive Chinese HSK 1 characters cards with built-in voice synthesis (TTS), radical definitions, stroke counts, search, and pinyin example phrases.
- `cards-grammar/`: Interactive Japanese grammar cards (JLPT N5/N4) featuring connecting formulas, full explanations, category filtering, search, and voice pronunciation of Japanese sentences.
- `images/`: Stores downloaded assets.
- `verbos.csv`: The source of truth for vocabulary to be processed.
- `*.html`: Flashcard templates (Static/Print and Interactive).

