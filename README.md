# 🇯🇵 Nihongo Illustkun Downloader

A simple Python utility to automate the downloading of illustrative images from **Illustkun** for Japanese vocabulary learning. This tool is specifically designed to help create visual aids (like flashcards) for Japanese verbs.

## 🚀 Features

- **Automated Search**: Takes a list of Japanese verbs from a CSV file.
- **Multi-Option Retrieval**: Fetches up to 3 unique, high-resolution image options for each verb.
- **Smart Management**: Global duplicate tracking ensures that no repeated images are downloaded across different words.
- **Interactive Study**: Includes `kanji-card.html`, a premium web-based flashcard system with 3D flip animations and JLPT metadata.
- **Detailed Summary**: Generates a `download_summary.csv` mapping verbs to their local image paths.

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nihongo
   ```

2. **Install dependencies**:
   This project uses `requests` and `BeautifulSoup4`.
   ```bash
   pip install requests beautifulsoup4
   ```

## 📖 Usage

1. Prepare your input file `verbos.csv`. It should contain the Japanese words (Kanji/Kana) in the first column.
2. Run the downloader script:
   ```bash
   python illustkun_downloader.py
   ```
3. The images will be saved in the `images/` directory, and a summary will be created as `download_summary.csv`.

## 📁 Project Structure

- `illustkun_downloader.py`: The main Python script for image retrieval.
- `kanji-card.html`: Interactive web-based Kanji study tool with 3D flip animations.
- `verbos.csv`: Input file containing the list of words to process.
- `kanji_front.html` / `kanji_back.html`: HTML templates for printing physical flashcards.
- `images/`: (Ignored by git) Directory where downloaded images are stored.
- `download_summary.csv`: Output report of the download process.
- `agent.md`: Technical documentation and instructions for AI agents.

## ⚖️ License

This project is for educational and personal use. All images are property of **Illustkun** ([illustkun.com](https://illustkun.com/)). Please respect their terms of use.
