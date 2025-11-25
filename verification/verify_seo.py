from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to the home page
            page.goto("http://localhost:3000")
            page.wait_for_load_state("networkidle")

            # Verify Title
            title = page.title()
            print(f"Page Title: {title}")

            # Screenshot Home
            page.screenshot(path="verification/home_page.png", full_page=True)
            print("Home page screenshot taken.")

            # Navigate to a Treatment Page (Dynamic Route)
            # Find a link to "Mud Therapy" or similar
            # Since we replaced the content, we expect "Mud Therapy" to be in the "Treatments" section
            # Adjust selector based on the DOM structure we built
            # We used Link href="/treatment/mud-therapy"

            # Let's try direct navigation to verify dynamic routing + metadata
            page.goto("http://localhost:3000/treatment/mud-therapy")
            page.wait_for_load_state("networkidle")

            treatment_title = page.title()
            print(f"Treatment Page Title: {treatment_title}")

            page.screenshot(path="verification/treatment_page.png", full_page=True)
            print("Treatment page screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_frontend()
