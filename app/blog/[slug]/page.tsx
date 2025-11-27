import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/utils';
import { Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { DOCTOR } from '@/lib/constants';

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
    }
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbJson = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://lucknownaturopathy.com' },
    { name: 'Blog', url: 'https://lucknownaturopathy.com/blog' },
    { name: post.title, url: `https://lucknownaturopathy.com/blog/${post.slug}` }
  ]);

  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://lucknownaturopathy.com/opengraph-image", // Fallback to OG image
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
        "@type": "Organization",
        "name": "Lucknow Naturopathy & Holistic Healing Centre",
        "logo": {
            "@type": "ImageObject",
            "url": "https://lucknownaturopathy.com/favicon.ico"
        }
    },
    "datePublished": post.date,
    "dateModified": post.date
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }}
        />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="mb-10 text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-stone-500 mb-6">
                    <span className="flex items-center bg-stone-100 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center bg-stone-100 px-3 py-1 rounded-full">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                    {post.title}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-nature-green bg-nature-light/50 px-2 py-1 rounded text-sm border border-nature-green/20">
                            #{tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-stone prose-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200">
                <div className="bg-nature-light/30 p-6 rounded-xl flex items-center gap-6">
                     <div className="w-16 h-16 rounded-full bg-nature-green/20 flex-shrink-0 flex items-center justify-center text-2xl">
                        👨‍⚕️
                     </div>
                     <div>
                        <h3 className="font-bold text-stone-900">Written by {DOCTOR.name}</h3>
                        <p className="text-sm text-stone-600">{DOCTOR.title}. {DOCTOR.bio[0].split('.')[0]}.</p>
                     </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                 <Link href="/blog" className="text-nature-green font-bold hover:underline">
                    &larr; Back to all articles
                 </Link>
            </div>
        </article>

      </main>
      <Footer />
    </div>
  );
}
