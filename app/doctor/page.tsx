import React from 'react';
import { DOCTOR, WHATSAPP } from '@/lib/constants';
import { Award, GraduationCap, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: `${DOCTOR.name} - Best Naturopath in Lucknow | Profile`,
  description: `Meet ${DOCTOR.name}, Senior Naturopath in Lucknow with ${DOCTOR.experience} experience. Expert in Chronic Pain, Diabetes Reversal & Detoxification.`,
  alternates: {
    canonical: '/doctor',
  },
};

export default function AboutDoctor() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": DOCTOR.name,
    "medicalSpecialty": DOCTOR.specializations,
    "description": DOCTOR.bio[0],
    "image": DOCTOR.image,
    "telephone": "+918874206748",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="bg-stone-50 min-h-screen pb-20">

        {/* Profile Header */}
        <div className="bg-white border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="flex flex-col md:flex-row items-center gap-12">

                {/* Image */}
                <div className="relative flex-shrink-0">
                <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-nature-green shadow-2xl">
                    <Image
                    src={DOCTOR.image}
                    alt={DOCTOR.name}
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="absolute bottom-4 right-4 bg-nature-green text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {DOCTOR.experience} Exp.
                </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left">
                <span className="text-nature-green font-bold tracking-widest uppercase text-xs mb-2 block">Our Lead Specialist</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">{DOCTOR.name}</h1>
                <p className="text-xl text-stone-500 font-medium mb-6">{DOCTOR.title}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                    {DOCTOR.specializations.map((spec, idx) => (
                    <span key={idx} className="bg-nature-light text-nature-green px-3 py-1 rounded-lg text-sm font-medium border border-nature-green/20">
                        {spec}
                    </span>
                    ))}
                </div>

                <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20want%20to%20book%20an%20appointment%20with%20${DOCTOR.name}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center bg-[#25D366] text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Appointment
                </a>
                </div>

            </div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

            {/* Bio */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
                <Award className="w-6 h-6 text-nature-green mr-3" />
                About Dr. Gupta
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
                {DOCTOR.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
                ))}
            </div>
            </div>

            {/* Qualifications */}
            <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 text-nature-green mr-3" />
                Education
                </h3>
                <ul className="space-y-4">
                {DOCTOR.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-nature-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 font-medium">{qual}</span>
                    </li>
                ))}
                </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                <Clock className="w-5 h-5 text-nature-green mr-3" />
                Consultation Hours
                </h3>
                <div className="space-y-3 text-stone-600">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Monday - Saturday</span>
                    <span className="font-bold text-stone-800">8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>(Evening)</span>
                    <span className="font-bold text-stone-800">4:00 PM - 7:00 PM</span>
                </div>
                <div className="flex justify-between text-red-500 font-medium pt-1">
                    <span>Sunday</span>
                    <span>Closed</span>
                </div>
                </div>
            </div>
            </div>

        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
