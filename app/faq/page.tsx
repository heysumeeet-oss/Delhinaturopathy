import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Naturopathy Lucknow",
  description: "Answers to common questions about Naturopathy, safety, treatment duration, and costs.",
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
         <FAQ />
      </main>
      <Footer />
    </div>
  );
}
