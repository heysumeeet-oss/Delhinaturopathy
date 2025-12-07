import React from 'react';
import { PACKAGES, WHATSAPP } from '@/lib/constants';
import { Check, MessageCircle, Star } from 'lucide-react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Naturopathy Packages Price List | Detox & Weight Loss Delhi",
  description: "Affordable Naturopathy treatment packages in Delhi. 7 Days Detox, Weight Loss, and Pain Relief programs starting at ₹6,500.",
  alternates: {
    canonical: '/pricing',
  },
};

export default function PriceList() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PACKAGES.map((pkg, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": pkg.title,
      "description": pkg.recommendedFor,
      "offers": {
        "@type": "Offer",
        "price": pkg.price.replace(/[^0-9]/g, ''),
        "priceCurrency": "INR"
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="bg-light-gray min-h-screen pb-20">

        {/* Header */}
        <div className="bg-primary-blue py-20 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Treatment Packages</h1>
            <p className="text-primary-light/70 text-lg max-w-2xl mx-auto px-4">
            Transparent pricing for holistic wellness. Choose a program that suits your health goals.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
            <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, index) => (
                <div key={pkg.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden border transform hover:-translate-y-2 transition-all duration-300 relative flex flex-col ${index === 1 ? 'border-primary-blue ring-4 ring-primary-blue/10 md:-mt-8 md:mb-8' : 'border-light-gray/70'}`}>

                {index === 1 && (
                    <div className="bg-primary-blue text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                    Most Popular
                    </div>
                )}

                <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold text-dark-gray mb-2">{pkg.title}</h3>
                    <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-serif font-bold text-primary-blue">{pkg.price}</span>
                    <span className="text-dark-gray/50 ml-2">/ {pkg.duration}</span>
                    </div>

                    <p className="text-sm text-dark-gray/70 mb-6 bg-light-gray p-3 rounded-lg border border-light-gray/70">
                    <strong className="block text-dark-gray mb-1">Recommended For:</strong>
                    {pkg.recommendedFor}
                    </p>

                    <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-blue mr-3 flex-shrink-0" />
                        <span className="text-dark-gray/70 text-sm">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="p-6 bg-light-gray border-t border-light-gray/70 mt-auto">
                    <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20am%20interested%20in%20the%20${pkg.title}.`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex items-center justify-center py-3 rounded-xl font-bold transition-colors ${index === 1 ? 'bg-primary-blue text-white hover:bg-blue-800' : 'bg-white text-dark-gray border-2 border-light-gray/70 hover:border-primary-blue hover:text-primary-blue'}`}
                    >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Now
                    </a>
                </div>
                </div>
            ))}
            </div>

            {/* Note */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl flex items-start text-left">
                <Star className="w-6 h-6 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                <h4 className="font-bold text-yellow-800 mb-2">Important Note</h4>
                <p className="text-sm text-yellow-700 leading-relaxed">
                    Prices may vary depending on the severity of the disease and customization of the treatment plan.
                    Accommodation charges are extra for residential patients. Please consult with the doctor for a final quote.
                </p>
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
