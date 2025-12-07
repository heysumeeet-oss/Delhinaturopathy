import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogPosts } from '@/lib/blog';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Health & Wellness Blog | Naturopathy Tips Delhi',
  description: 'Read our latest articles on natural healing, diet therapy, yoga, and holistic living from Dr. Ravi Gupta.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  const breadcrumbJson = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://delhinaturopath.in' },
    { name: 'Blog', url: 'https://delhinaturopath.in/blog' }
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      <main className="flex-grow pt-20">
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />

        {/* Header */}
        <div className="bg-white border-b border-stone-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-xs mb-2 block">Knowledge Center</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Nature Cure Insights</h1>
                <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                    Expert advice on living a disease-free life through the power of nature.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {posts.length === 0 ? (
                <div className="text-center py-20 text-stone-500">
                    <p>No articles found. Check back later!</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex items-center text-xs text-stone-500 mb-3 space-x-3">
                                    <span className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {new Date(post.date).toLocaleDateString()}
                                    </span>
                                    <span className="flex items-center">
                                        <User className="w-3 h-3 mr-1" />
                                        {post.author}
                                    </span>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="block group">
                                    <h2 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-nature-green transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="pt-4 mt-auto border-t border-stone-100">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-nature-green font-bold text-sm hover:underline">
                                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
