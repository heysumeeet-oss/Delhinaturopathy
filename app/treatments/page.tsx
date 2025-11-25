import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Natural Treatments & Therapies | Lucknow Naturopathy",
  description: "Explore our range of drugless treatments including Mud Therapy, Hydrotherapy, Shirodhara, and Acupuncture.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
         <Services />
      </main>
      <Footer />
    </div>
  );
}
