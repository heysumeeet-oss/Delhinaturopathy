import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  date: string;
  author: string;
  tags: string[];
  keywords: string[]; // For SEO meta tags
}

const dataDirectory = path.join(process.cwd(), 'data');
const blogFilePath = path.join(dataDirectory, 'blogs.json');

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogFilePath)) {
    return [];
  }
  const fileContents = fs.readFileSync(blogFilePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

// Function to save a new blog post (simulating DB write)
export function saveBlogPost(post: BlogPost): void {
  const posts = getBlogPosts();
  // Check for duplicates
  if (posts.some(p => p.slug === post.slug)) {
      throw new Error("Slug already exists");
  }

  // Add new post to the beginning
  posts.unshift(post);

  // Ensure directory exists
  if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory, { recursive: true });
  }

  fs.writeFileSync(blogFilePath, JSON.stringify(posts, null, 2));
}
