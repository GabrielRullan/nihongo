import asyncio
import os
import sys
from pyppeteer import launch

async def check_globals():
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        print(f"Error: Chrome executable not found at {chrome_path}")
        sys.exit(1)
        
    browser = await launch(
        executablePath=chrome_path,
        headless=True,
        args=['--no-sandbox', '--disable-setuid-sandbox']
    )
    
    page = await browser.newPage()
    await page.goto("http://localhost:8000/cards-printable-japanese/index.html", {'waitUntil': 'networkidle2'})
    
    res = await page.evaluate("""() => {
        return {
            html2pdf: typeof window.html2pdf,
            html2canvas: typeof window.html2canvas,
            jsPDF: typeof window.jsPDF,
            jspdf_jsPDF: window.jspdf ? typeof window.jspdf.jsPDF : 'undefined'
        };
    }""")
    print("GLOBALS:", res)
    await browser.close()

if __name__ == '__main__':
    asyncio.run(check_globals())
