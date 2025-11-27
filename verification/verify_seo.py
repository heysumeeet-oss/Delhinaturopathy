from playwright.sync_api import sync_playwright

def verify_blog(page):
    # Visit Blog Index
    page.goto("http://localhost:3000/blog")
    page.screenshot(path="verification/blog_index.png", full_page=True)
    print("Screenshot saved: verification/blog_index.png")

    # Visit Specific Blog Post
    page.goto("http://localhost:3000/blog/welcome-to-natural-healing")
    page.screenshot(path="verification/blog_post.png", full_page=True)
    print("Screenshot saved: verification/blog_post.png")

    # Visit Treatment Page (to verify breadcrumb/canonical existence in source if possible, but screenshot won't show it)
    # We will screenshot the updated Hero with Next/Image
    page.goto("http://localhost:3000/treatment/mud-therapy")
    page.screenshot(path="verification/treatment_page.png", full_page=True)
    print("Screenshot saved: verification/treatment_page.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_blog(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
