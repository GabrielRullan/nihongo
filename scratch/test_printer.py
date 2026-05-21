import asyncio
import os
import sys
from pyppeteer import launch

async def run_tests():
    # Use the local Chrome browser installed in standard location
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    if not os.path.exists(chrome_path):
        print(f"Error: Chrome executable not found at {chrome_path}")
        sys.exit(1)
        
    print(f"Launching Chrome from: {chrome_path}...")
    browser = await launch(
        executablePath=chrome_path,
        headless=True,
        args=['--no-sandbox', '--disable-setuid-sandbox']
    )
    
    # We will test three pages: Japanese, Chinese, and Pokemon printers
    urls = {
        "Japanese": ("http://localhost:8000/cards-printable-japanese/index.html", "cardsData"),
        "Chinese": ("http://localhost:8000/cards-printable-chinese/index.html", "cardsData"),
        "Pokemon": ("http://localhost:8000/cards-printable-pokemon/index.html", "pokemonData")
    }
    
    for lang, (url, var_name) in urls.items():
        print("\n" + "="*50)
        print(f" TESTING: {lang} Printable Cards Generator")
        print(f" URL: {url}")
        print("="*50)
        
        page = await browser.newPage()
        # Set viewport to standard A4 size
        await page.setViewport({'width': 1200, 'height': 800})
        
        try:
            await page.goto(url, {'waitUntil': 'networkidle2', 'timeout': 30000})
        except Exception as e:
            print(f"Failed to load page: {e}")
            await page.close()
            continue
            
        # Get count of total cards from the data array
        try:
            total_cards = await page.evaluate(f"() => typeof {var_name} !== 'undefined' ? {var_name}.length : 0")
            print(f"Total cards loaded from database: {total_cards}")
        except Exception as e:
            print(f"Could not load {var_name} count: {e}")
            total_cards = 0

        # Formats to test
        formats = [
            "3_portrait_duplex",
            "3_portrait_folding",
            "8_landscape_duplex",
            "8_landscape_folding"
        ]
        
        for fmt in formats:
            print(f"\n---> Testing Format: {fmt}")
            
            # Select the first select element on the page (Format select)
            # Set its value, dispatch a change event, and wait.
            await page.evaluate(f"""(fmt) => {{
                const select = document.querySelector('select');
                if (select) {{
                    select.value = fmt;
                    select.dispatchEvent(new Event('change'));
                }} else {{
                    console.error("Format select not found!");
                }}
            }}""", fmt)
            
            # Wait a short moment for Vue to update the DOM
            await asyncio.sleep(1)
            
            # Verify details
            pages_info = await page.evaluate("""() => {
                const pages = Array.from(document.querySelectorAll('.print-page'));
                return pages.map((page, idx) => {
                    const isFront = page.classList.contains('fronts-page');
                    const isBack = page.classList.contains('backs-page');
                    const label = page.querySelector('.page-sheet-label')?.innerText || '';
                    
                    // Count unit cards
                    const units = Array.from(page.querySelectorAll('.print-unit'));
                    const totalUnits = units.length;
                    const placeholderUnits = units.filter(u => u.classList.contains('placeholder-unit')).length;
                    const realUnits = totalUnits - placeholderUnits;
                    
                    // Count images
                    const imgElements = Array.from(page.querySelectorAll('.print-unit img'));
                    // Filter out hidden or broken/empty source images
                    const validImages = imgElements.filter(img => img.src && !img.src.includes('undefined') && img.style.display !== 'none').length;
                    
                    return {
                        pageIndex: idx + 1,
                        isFront,
                        isBack,
                        label,
                        totalUnits,
                        realUnits,
                        placeholderUnits,
                        validImages
                    };
                });
            }""")
            
            total_pages = len(pages_info)
            print(f"Total pages rendered in preview: {total_pages}")
            
            if total_pages == 0:
                print("🚨 ERROR: 0 pages generated!")
                continue
                
            empty_pages = 0
            for info in pages_info:
                # An empty page has 0 real units (i.e. only placeholders or nothing)
                if info['realUnits'] == 0:
                    empty_pages += 1
                    print(f"  🚨 PAGE {info['pageIndex']} is EMPTY! (0 real units, {info['placeholderUnits']} placeholders)")
                    
            print(f"Empty pages detected: {empty_pages}")
            
            # Count backs and folding sheets
            is_folding = 'folding' in fmt
            backs_or_folding_pages = [info for info in pages_info if info['isBack'] or (is_folding and info['isFront'])]
            print(f"Total sheets with back faces/folding faces: {len(backs_or_folding_pages)}")
            
            # Inspect first, middle, and last sheets to verify layout
            indices_to_show = [0, len(backs_or_folding_pages)//2, len(backs_or_folding_pages)-1]
            indices_to_show = sorted(list(set(indices_to_show)))
            
            for idx in indices_to_show:
                if idx < len(backs_or_folding_pages):
                    info = backs_or_folding_pages[idx]
                    page_type_label = 'BACK' if info['isBack'] else 'FOLDING'
                    print(f"  Sample Page {info['pageIndex']} ({page_type_label}): "
                          f"Real Cards: {info['realUnits']}, "
                          f"Images found: {info['validImages']}, "
                          f"Placeholders: {info['placeholderUnits']}")
                          
        await page.close()
        
    await browser.close()
    print("\nTests completed successfully.")

if __name__ == '__main__':
    asyncio.run(run_tests())
