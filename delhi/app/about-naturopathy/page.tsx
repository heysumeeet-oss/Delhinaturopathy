import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutPrinciples from '@/components/AboutPrinciples';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Naturopathy | Philosophy & Principles",
  description: "Learn about the 5 elements of nature cure and how we treat the root cause of diseases without medicines.",
  alternates: {
    canonical: '/about-naturopathy',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
         <AboutPrinciples />
      </main>
      <Footer />
    </div>
  );
}
