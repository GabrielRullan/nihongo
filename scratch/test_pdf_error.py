import asyncio
import os
import sys
from pyppeteer import launch

async def test_pdf_error():
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
    
    # Listen to console events
    page.on('console', lambda msg: print(f"BROWSER CONSOLE [{msg.type}]: {msg.text}"))
    
    # Listen to page errors
    page.on('error', lambda err: print(f"PAGE ERROR: {err}"))
    page.on('pageerror', lambda err: print(f"PAGE UNHANDLED EXCEPTION: {err}"))

    # We test the Japanese index as an example (and start server if needed, but we can also load via http://localhost:8000)
    url = "http://localhost:8000/cards-printable-japanese/index.html"
    print(f"Loading {url}...")
    
    try:
        await page.goto(url, {'waitUntil': 'networkidle2'})
        print("Clicking 'Guardar como PDF' button...")
        
        # Click the button
        await page.evaluate("""() => {
            const btn = document.querySelector('.btn-pdf-main');
            if (btn) {
                btn.click();
            } else {
                console.error("PDF button not found");
            }
        }""")
        
        # Let's wait a few seconds to see if errors occur
        print("Waiting for 8 seconds for PDF generation to process...")
        await asyncio.sleep(8)
        
    except Exception as e:
        print(f"Error during test execution: {e}")
    finally:
        await page.close()
        await browser.close()

if __name__ == '__main__':
    asyncio.run(test_pdf_error())
