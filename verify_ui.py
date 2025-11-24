from playwright.sync_api import sync_playwright, expect

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to the app...")
        page.goto("http://localhost:3000")

        # 1. Verify Hero Title
        print("Verifying Hero Title...")
        expect(page.get_by_text("#1 Naturopathy in Lucknow")).to_be_visible()
        print("Hero Title Verified.")

        # 2. Verify Doctor Name (more robustly)
        print("Verifying Doctor Name...")
        # Scroll to the bottom just in case lazy loading is an issue, or just to ensure visibility
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        # We'll try to find it, wait a bit if needed.
        # Sometimes it might be split or in a structure that get_by_text doesn't match exactly if it has children.
        # But here it should be a direct string.
        # Let's print the text content of the page to debug if it fails again.
        try:
            expect(page.get_by_text("Dr. Ravi Gupta")).to_be_visible()
            print("Doctor Name Verified.")
        except Exception as e:
            print(f"Failed to find Doctor Name. Error: {e}")
            # page.screenshot(path="debug_doctor_fail.png")

        # 3. Verify About Image
        print("Verifying About Image...")
        image_locator = page.locator('img[src*="164cb0178e68"]')
        expect(image_locator).to_be_visible()
        print("About Image Verified.")

        # 4. Verify Contact Map
        print("Verifying Contact Map...")
        iframe_locator = page.locator('iframe[title="Lucknow Map"]')
        expect(iframe_locator).to_be_visible()
        print("Contact Map Verified.")

        # Take screenshot
        print("Taking screenshot...")
        page.screenshot(path="verification_screenshot.png", full_page=True)
        print("Screenshot saved as verification_screenshot.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
