import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Delhi Wellness Haven Centre | Book Appointment",
  description: "Visit our clinic in Gomti Nagar, Delhi. Call +91 88742 06748. Open Mon-Sat 08:00-13:00 & 16:00-19:00.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-stone-900 min-h-screen">
            <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
