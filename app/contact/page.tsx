import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Lucknow Naturopathy Centre | Book Appointment",
  description: "Visit our clinic in Gomti Nagar, Lucknow. Call +91 88742 06748 for appointments. Open Mon-Sat 8AM-7PM.",
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
