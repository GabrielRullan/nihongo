import asyncio
import os
import sys
from pyppeteer import launch

async def test_file_protocol():
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
    
    # Listen to dialog alerts
    page.on('dialog', lambda dialog: print(f"BROWSER DIALOG: {dialog.message}") or asyncio.ensure_future(dialog.dismiss()))

    # Load via file:// protocol
    file_path = os.path.abspath("cards-printable-japanese/index.html")
    url = f"file:///{file_path.replace(os.sep, '/')}"
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
        
        print("Waiting for 8 seconds for PDF generation to process...")
        await asyncio.sleep(8)
        
    except Exception as e:
        print(f"Error during test execution: {e}")
    finally:
        await page.close()
        await browser.close()

if __name__ == '__main__':
    asyncio.run(test_file_protocol())
