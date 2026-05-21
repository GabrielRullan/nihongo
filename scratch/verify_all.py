import asyncio
import os
import sys
from pyppeteer import launch

async def test_page(browser, relative_path, is_http=False):
    page = await browser.newPage()
    await page.setViewport({'width': 1200, 'height': 800})
    
    captured_errors = []
    dialogs = []
    
    def on_console(msg):
        if msg.type == 'error':
            text = msg.text
            # Filter out resource load / network errors which are not JS execution bugs
            if not ("Failed to load resource" in text or "net::ERR_" in text or "status of 404" in text):
                captured_errors.append(f"CONSOLE ERROR: {text}")
        print(f"[{relative_path}] BROWSER CONSOLE [{msg.type}]: {msg.text}")
        
    page.on('console', on_console)
    page.on('error', lambda err: captured_errors.append(f"PAGE ERROR: {err}"))
    page.on('pageerror', lambda err: captured_errors.append(f"UNHANDLED EXCEPTION: {err}"))
    page.on('dialog', lambda dialog: dialogs.append(dialog.message) or asyncio.ensure_future(dialog.dismiss()))
    
    if is_http:
        url = f"http://localhost:8000/{relative_path}/index.html"
    else:
        file_path = os.path.abspath(f"{relative_path}/index.html")
        url = f"file:///{file_path.replace(os.sep, '/')}"
        
    print(f"\n--- Testing {url} ---")
    try:
        await page.goto(url, {'waitUntil': 'load', 'timeout': 10000})
        
        # Click the button
        print("Clicking 'Guardar como PDF'...")
        await page.click('.btn-pdf-main')
        
        # Wait up to 25 seconds for the button to not be disabled or the state to change
        for _ in range(50):
            await asyncio.sleep(0.5)
            is_generating = await page.evaluate("""() => {
                const btn = document.querySelector('.btn-pdf-main');
                return btn ? btn.disabled || btn.innerText.includes('Generando') : false;
            }""")
            if not is_generating:
                break
                
        print("Done waiting.")
    except Exception as e:
        print(f"Exception during goto/click: {e}")
        captured_errors.append(f"EXCEPTION: {e}")
        
    await page.close()
    return captured_errors, dialogs

async def main():
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        print(f"Error: Chrome executable not found at {chrome_path}")
        sys.exit(1)
        
    browser = await launch(
        executablePath=chrome_path,
        headless=True,
        args=['--no-sandbox', '--disable-setuid-sandbox']
    )
    
    targets = [
        "cards-printable-japanese",
        "cards-printable-chinese",
        "cards-printable-pokemon"
    ]
    
    all_success = True
    
    for target in targets:
        # Test file://
        errs, dlgs = await test_page(browser, target, is_http=False)
        print(f"Result for {target} (file://): Errors={errs}, Dialogs={dlgs}")
        if errs or dlgs:
            print(f"FAIL: {target} (file://)")
            all_success = False
        else:
            print(f"PASS: {target} (file://)")
            
        # Test http://
        errs, dlgs = await test_page(browser, target, is_http=True)
        print(f"Result for {target} (http://): Errors={errs}, Dialogs={dlgs}")
        if errs or dlgs:
            print(f"FAIL: {target} (http://)")
            all_success = False
        else:
            print(f"PASS: {target} (http://)")
            
    await browser.close()
    if not all_success:
        print("\nSOME TESTS FAILED.")
        sys.exit(1)
    else:
        print("\nALL TESTS PASSED SUCCESSFULLY!")

if __name__ == '__main__':
    asyncio.run(main())
