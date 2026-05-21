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
    
    file_path = os.path.abspath("cards-printable-pokemon/index.html")
    url = f"file:///{file_path.replace(os.sep, '/')}"
    print(f"Loading {url}...")
    await page.goto(url, {'waitUntil': 'networkidle2'})
    
    # Overwrite console.error to capture error details
    await page.evaluate("""() => {
        window.capturedErrors = [];
        const originalError = console.error;
        console.error = function(...args) {
            originalError.apply(console, args);
            window.capturedErrors.push(args.map(arg => {
                if (arg instanceof Error) {
                    return arg.message + "\\n" + arg.stack;
                }
                return String(arg);
            }).join(" "));
        };
    }""")
    
    print("Clicking 'Guardar como PDF'...")
    await page.click('.btn-pdf-main')
    
    print("Waiting 10 seconds...")
    await asyncio.sleep(10)
    
    errors = await page.evaluate("window.capturedErrors")
    print("CAPTURED ERRORS IN CONSOLE:")
    for err in errors:
        print("---")
        print(err)
        print("---")
        
    await browser.close()

if __name__ == '__main__':
    asyncio.run(debug_pdf())
