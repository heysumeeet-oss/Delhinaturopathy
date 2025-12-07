import google.generativeai as genai
import json
import os
import datetime
import re
import argparse

# --- CONFIGURATION ---
# SECURITY WARNING: Do not hardcode API keys in this file.
# Set the GEMINI_API_KEY environment variable before running this script.
# Example: export GEMINI_API_KEY='your_api_key_here'
API_KEY = os.environ.get("GEMINI_API_KEY")

BLOG_DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "blogs.json")

# --- PROMPT TEMPLATE ---
# This prompt is designed for "Pillar Pages" with high E-E-A-T.
PILLAR_PAGE_PROMPT_TEMPLATE = """
You are Dr. Ravi Gupta, a highly experienced Naturopathic Doctor based in Delhi with 15+ years of experience.
You are writing a "Pillar Page" blog post for your website "Natural Treatment Hospital".

**Topic:** {topic}

**Instructions:**
1. **Length:** The content MUST be approximately 2000 words. Go deep.
2. **Tone:** Professional, authoritative, empathetic, and scientifically grounded (E-E-A-T).
3. **Local Context:** Mention "Delhi", "Gomti Nagar", local lifestyle habits (e.g., specific foods like Malai Makkhan, Tunday Kababi - as unhealthy examples if needed), and local patients.
4. **Structure:**
   - **Lead:** Hook the reader with a relatable problem.
   - **Table of Contents:** (HTML links to sections).
   - **Deep Dive:** Explain the pathophysiology (root cause) simply but accurately.
   - **Naturopathic Perspective:** Explain "Morbid Matter", "Vital Force", etc.
   - **Protocol:** A step-by-step treatment protocol (Mud packs, Enema, Diet, Yoga).
   - **Diet Chart:** A specific table with times (Morning, Breakfast, etc.) and foods.
   - **Case Studies:** Mention anonymized success stories from Delhi.
   - **FAQ:** 3-5 common questions.
   - **Call to Action:** Encourage booking an appointment at the clinic.
5. **Format:**
   - Return ONLY a valid JSON object.
   - Fields: `title`, `excerpt` (150 chars), `content` (HTML string), `tags` (array), `keywords` (array).
   - The `content` HTML should use semantic tags (`<h2>`, `<h3>`, `<p>`, `<ul>`, `<table>`).
   - Use Tailwind CSS classes for styling where appropriate (e.g., `text-nature-green`, `bg-stone-50`).

**Specific Requirement:**
{specific_instructions}

**Output:**
Provide raw JSON only. No markdown formatting.
"""

def clean_json_string(text):
    """Cleans markdown code blocks from the response text."""
    text = text.replace("```json", "").replace("```", "").strip()
    return text

def slugify(text):
    """Creates a URL-friendly slug from the title."""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')

def load_existing_blogs():
    if not os.path.exists(BLOG_DB_PATH):
        return []
    with open(BLOG_DB_PATH, 'r', encoding='utf-8') as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_blog(new_blog):
    blogs = load_existing_blogs()

    # Check for duplicate slug
    slug = new_blog['slug']
    original_slug = slug
    counter = 1
    while any(b['slug'] == slug for b in blogs):
        slug = f"{original_slug}-{counter}"
        counter += 1
    new_blog['slug'] = slug

    # Prepend the new blog (newest first)
    blogs.insert(0, new_blog)

    with open(BLOG_DB_PATH, 'w', encoding='utf-8') as f:
        json.dump(blogs, f, indent=2, ensure_ascii=False)
    print(f"✅ Blog saved successfully to {BLOG_DB_PATH}")
    print(f"   Title: {new_blog['title']}")
    print(f"   Slug:  {new_blog['slug']}")

def generate_blog(topic, specific_instructions):
    if not API_KEY:
        print("❌ Error: GEMINI_API_KEY environment variable not set.")
        print("   Please export it: export GEMINI_API_KEY='your_api_key'")
        return None

    # Configure Gemini
    genai.configure(api_key=API_KEY)

    print(f"🤖 Generating Pillar Page for: '{topic}'...")
    print("   (This may take a minute due to length...)")

    model = genai.GenerativeModel('gemini-pro')

    prompt = PILLAR_PAGE_PROMPT_TEMPLATE.format(
        topic=topic,
        specific_instructions=specific_instructions
    )

    try:
        response = model.generate_content(prompt)
        json_str = clean_json_string(response.text)
        blog_data = json.loads(json_str)

        # Add metadata
        final_blog = {
            "slug": slugify(blog_data['title']),
            "title": blog_data['title'],
            "excerpt": blog_data['excerpt'],
            "content": blog_data['content'],
            "date": datetime.datetime.now().isoformat(),
            "author": "Dr. Ravi Gupta",
            "tags": blog_data.get('tags', []),
            "keywords": blog_data.get('keywords', [])
        }

        return final_blog

    except Exception as e:
        print(f"❌ Error generating content: {e}")
        return None

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate a Pillar Page Blog Post")
    parser.add_argument("--topic", help="The main topic of the blog post")
    parser.add_argument("--instructions", help="Specific instructions for the content")
    parser.add_argument("--dry-run", action="store_true", help="Print generated JSON without saving")

    args = parser.parse_args()

    # Default behavior if no args provided (demonstration mode / diabetes example)
    if not args.topic:
        print("⚠️ No topic provided. Using default Diabetes topic as an example/template.")
        topic = "The Complete Guide to Reversing Diabetes Naturally in Delhi"
        instructions = "Focus on a 5-step protocol, diet chart, and success stories."
    else:
        topic = args.topic
        instructions = args.instructions or "Write a detailed guide."

    blog = generate_blog(topic, instructions)

    if blog:
        if args.dry_run:
            print(json.dumps(blog, indent=2))
        else:
            save_blog(blog)
