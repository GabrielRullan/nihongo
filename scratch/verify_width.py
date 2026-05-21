import asyncio
import os
import sys
from pyppeteer import launch

async def test_widths():
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        print(f"Error: Chrome executable not found at {chrome_path}")
        sys.exit(1)
        
    browser = await launch(
        executablePath=chrome_path,
        headless=True,
        args=['--no-sandbox', '--disable-setuid-sandbox']
    )
    
    urls = [
        "http://localhost:8000/cards-printable-japanese/index.html",
        "http://localhost:8000/cards-printable-chinese/index.html",
        "http://localhost:8000/cards-printable-pokemon/index.html"
    ]
    
    for url in urls:
        print(f"\nChecking: {url}")
        page = await browser.newPage()
        await page.setViewport({'width': 1200, 'height': 800})
        
        try:
            await page.goto(url, {'waitUntil': 'networkidle2'})
            
            # Switch to 3_portrait_folding
            await page.evaluate("""() => {
                const select = document.querySelector('select');
                if (select) {
                    select.value = '3_portrait_folding';
                    select.dispatchEvent(new Event('change'));
                }
            }""")
            await asyncio.sleep(1) # wait for DOM update
            
            # Get computed width in pixels/mm
            unit_width = await page.evaluate("""() => {
                const unit = document.querySelector('.print-unit');
                if (!unit) return 'Not found';
                const style = window.getComputedStyle(unit);
                return style.width;
            }""")
            
            # Get CSS variable --card-width value
            card_width_var = await page.evaluate("""() => {
                return window.getComputedStyle(document.documentElement).getPropertyValue('--card-width').trim();
            }""")
            
            print(f"  --card-width variable: {card_width_var}")
            print(f"  Computed print-unit width: {unit_width}")
            
            # Check if print-unit width is double of expected width
            # Note: since the media query or viewport scale is applied, the layout class is mode-folding
            # We want to check if the .print-unit has width: calc(var(--card-width) * 2) applied
            
            # Let's inspect classList on print-container
            container_classes = await page.evaluate("""() => {
                const container = document.querySelector('.print-container');
                return container ? container.className : '';
            }""")
            print(f"  Container classes: {container_classes}")
            
        except Exception as e:
            print(f"  Error: {e}")
        finally:
            await page.close()
            
    await browser.close()

if __name__ == '__main__':
    asyncio.run(test_widths())
