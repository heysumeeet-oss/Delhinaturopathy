import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { saveBlogPost, BlogPost } from '@/lib/blog';
import slugify from 'slugify';
import { TREATMENTS, CONDITIONS } from '@/lib/constants';

// Initialize Gemini
// NOTE: In a real production environment, use process.env.GEMINI_API_KEY
// For this specific requested implementation, we are using the provided key.
const API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyBdmAFw3C4KoFQMeYvIoT9H91DzPuVbhv4';
const genAI = new GoogleGenerativeAI(API_KEY);

const TOPICS = [
  ...TREATMENTS.map(t => `Benefits of ${t.title} in Naturopathy`),
  ...CONDITIONS.map(c => `Natural Cure for ${c.title}`),
  "Importance of Diet in Healing",
  "Detoxification Methods at Home",
  "Yoga for Stress Relief",
  "Understanding the 5 Elements of Nature",
  "Why Choose Drugless Therapy?",
  "Mud Therapy Secrets",
  "Hydrotherapy Benefits",
  "Lifestyle Changes for Diabetes"
];

export async function GET(request: NextRequest) {
  // Security check: In production, add a secret token check here
  // const authHeader = request.headers.get('authorization');
  // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //   return new NextResponse('Unauthorized', { status: 401 });
  // }

  try {
    // Reverting to gemini-pro as it is the most standard model.
    // If 404 persists, ensure the API Key has the "Generative Language API" enabled in Google Cloud Console.
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Pick a random topic
    const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];

    const prompt = `
      You are an expert Naturopathic Doctor and SEO Content Writer.
      Write a comprehensive, engaging, and SEO-optimized blog post about: "${topic}".

      The content should be formatted as a JSON object with the following fields:
      - title: A catchy, keyword-rich title.
      - excerpt: A short summary (150 chars).
      - content: The full article in semantic HTML format (use <h2>, <h3>, <p>, <ul>). Do not include the title in the HTML. Include advice relevant to "Lucknow Naturopathy Centre".
      - tags: An array of 5 relevant tags.
      - keywords: An array of 5 SEO keywords.

      Ensure the tone is professional, empathetic, and encouraging.
      Output ONLY valid JSON.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean up markdown code blocks if present
    const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();

    const blogData = JSON.parse(jsonString);

    const newPost: BlogPost = {
      slug: slugify(blogData.title, { lower: true, strict: true }),
      title: blogData.title,
      excerpt: blogData.excerpt,
      content: blogData.content,
      date: new Date().toISOString(),
      author: "Dr. Ravi Gupta", // Default author
      tags: blogData.tags,
      keywords: blogData.keywords
    };

    try {
      saveBlogPost(newPost);
    } catch (e: any) {
      if (e.message === "Slug already exists") {
        // Simple retry logic: append timestamp
        newPost.slug = `${newPost.slug}-${Date.now()}`;
        saveBlogPost(newPost);
      } else {
        throw e;
      }
    }

    return NextResponse.json({ success: true, post: newPost });

  } catch (error: any) {
    console.error("Blog Generation Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
