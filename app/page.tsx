import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutPrinciples from '@/components/AboutPrinciples';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP } from '@/lib/constants';

export const metadata: Metadata = {
  title: "No.1 Naturopathy in Lucknow, Natural Treatment Hospital, Naturopath Doctor | Holistic Healing Lucknow",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50">
      <Header />

      <main className="flex-grow w-full">
        <Hero />
        <AboutPrinciples />
        <Services />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Sticky WhatsApp Button for Mobile Conversions */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:bg-[#20bd5a] transition-colors duration-300 hover:scale-110 hover:shadow-nature-green/50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
