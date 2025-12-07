import React from 'react';
import { notFound } from 'next/navigation';
import { SEO_AREAS, WHATSAPP } from '@/lib/constants';
import { MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { generateBreadcrumbSchema, generateMedicalClinicSchema } from '@/lib/utils';

interface Props {
  params: { area: string }
}

// Decode URL params for clean titles
function decodeArea(area: string) {
  return decodeURIComponent(area).replace(/-/g, ' ');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const areaName = decodeArea(params.area);
  // Case insensitive check
  const isValidArea = SEO_AREAS.some(a => a.toLowerCase() === areaName.toLowerCase());

  if (!isValidArea) {
     return { title: 'Location Not Found' };
  }

  return {
    title: `Premier Wellness Centre serving ${areaName} | Natural Cure Clinic`,
    description: `Searching for a Naturopath near ${areaName}? Delhi Wellness Haven offers top-rated holistic healing and is conveniently located in Green Park Main.`,
    keywords: [`Naturopathy ${areaName}`, `Yoga classes ${areaName}`, `Detox center ${areaName}`],
    alternates: {
      canonical: `/location/${params.area}`,
    },
    openGraph: {
      title: `Naturopathy Centre near ${areaName} - Delhi`,
      description: `Best Natural Cure Clinic accessible from ${areaName}.`,
      url: `/location/${params.area}`,
    }
  };
}

export async function generateStaticParams() {
    return SEO_AREAS.map(area => ({
        area: area.replace(/\s+/g, '-').toLowerCase()
    }));
}

export default function LocationPage({ params }: Props) {
  const areaName = decodeArea(params.area);
  // Matching logic needs to handle the URL slug back to the original name or just use the slugified comparison
  const originalArea = SEO_AREAS.find(a => a.toLowerCase() === areaName.replace(/-/g, ' ').toLowerCase());

  if (!originalArea) {
    notFound();
  }

  // Generate specific LocalBusiness Schema with areaServed focus
  const locationSchema = {
    ...generateMedicalClinicSchema(),
    "areaServed": {
      "@type": "Place",
      "name": originalArea
    }
  };

  const breadcrumbJson = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://delhinaturopath.in' },
    { name: 'Locations', url: 'https://delhinaturopath.in' }, // Locations aren't listed on a separate page, pointing to home
    { name: `Naturopath near ${originalArea}`, url: `https://delhinaturopath.in/location/${params.area}` }
  ]);


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
        />
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />
        <div className="bg-white min-h-screen">

        {/* Local SEO Header */}
        <div className="bg-nature-light py-20 border-b border-nature-green/10">
            <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
                <MapPin className="w-6 h-6 text-nature-green" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                Holistic Health Services for <span className="text-primary-blue">{originalArea}</span> Residents
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
                Experience premier natural healing without the long commute. Our Green Park Main center is easily accessible from {originalArea}.
            </p>
            </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 flex flex-col md:flex-row">
                <div className="p-8 md:p-12 md:w-2/3">
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Choose Us from {originalArea}?</h2>
                    <p className="text-stone-600 mb-6">
                        While there may be options in {originalArea}, our center provides a unique, immersive healing environment.
                        We offer:
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary-blue mr-3 mt-1" />
                            <span className="text-stone-700"><strong>Specialized Hydrotherapy</strong> units designed for therapeutic efficacy.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary-blue mr-3 mt-1" />
                            <span className="text-stone-700"><strong>Expert Care</strong> under Dr. Rajesh Verma with nearly 20 years of experience.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary-blue mr-3 mt-1" />
                            <span className="text-stone-700"><strong>Tranquil Setting</strong> that promotes mental clarity and relaxation.</span>
                        </li>
                    </ul>

                    <Link href="/contact" className="inline-flex items-center text-primary-blue font-bold hover:underline">
                        Get Directions to Our Center <MapPin className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="bg-primary-blue p-8 md:w-1/3 text-white flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold mb-4">Schedule Your Visit</h3>
                    <p className="text-primary-light text-sm mb-6">
                        Prioritized slots available for patients coming from {originalArea}.
                    </p>
                    <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20am%20from%20${originalArea}%20and%20want%20to%20book%20an%20appointment.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-white text-nature-green font-bold py-3 rounded-lg hover:bg-stone-100 transition-colors shadow-lg"
                    >
                        <MessageCircle className="w-5 h-5 inline-block mr-2" />
                        WhatsApp Us
                    </a>
                </div>
            </div>

        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
