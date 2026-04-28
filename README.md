# 🇯🇵 Nihongo Irasutoya Downloader

A simple Python utility to automate the downloading of illustrative images from **Irasutoya** for Japanese vocabulary learning. This tool is specifically designed to help create visual aids (like Anki cards) for Japanese verbs.

## 🚀 Features

- **Automated Search**: Takes a list of Japanese verbs from a CSV file.
- **Multi-Option Retrieval**: Fetches the top 3 high-resolution image options for each verb.
- **Smart Management**: Skips already downloaded images to save time and bandwidth.
- **Detailed Summary**: Generates a `download_summary.csv` mapping verbs to their local image paths and original URLs.

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
   python irasutoya_downloader.py
   ```
3. The images will be saved in the `images/` directory, and a summary will be created as `download_summary.csv`.

## 📁 Project Structure

- `irasutoya_downloader.py`: The main Python script.
- `verbos.csv`: Input file containing the list of words to process.
- `images/`: (Ignored by git) Directory where downloaded images are stored.
- `download_summary.csv`: Output report of the download process.

## ⚖️ License

This project is for educational and personal use. All images are property of **Irasutoya** ([irasutoya.com](https://www.irasutoya.com/)). Please respect their terms of use.
