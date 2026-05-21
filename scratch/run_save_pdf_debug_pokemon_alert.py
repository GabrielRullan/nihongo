import asyncio
import os
import sys
from pyppeteer import launch

async def debug_pdf():
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
    await page.setViewport({'width': 1200, 'height': 800})
    
    # Listen to dialog events
    page.on('dialog', lambda dialog: print(f"DIALOG: [{dialog.type}] message: {dialog.message}"))
    
    # Listen to console events
    page.on('console', lambda msg: print(f"BROWSER CONSOLE [{msg.type}]: {msg.text}"))
    
    # Listen to page errors
    page.on('error', lambda err: print(f"PAGE ERROR: {err}"))
    page.on('pageerror', lambda err: print(f"PAGE UNHANDLED EXCEPTION: {err}"))
    
    url = "http://localhost:8000/cards-printable-pokemon/index.html"
    print(f"Loading {url}...")
    await page.goto(url, {'waitUntil': 'networkidle2'})
    
    print("Clicking 'Guardar como PDF'...")
    await page.click('.btn-pdf-main')
    
    print("Waiting 15 seconds for PDF generation to finish or pop up alert...")
    await asyncio.sleep(15)
    
    await browser.close()

if __name__ == '__main__':
    asyncio.run(debug_pdf())
