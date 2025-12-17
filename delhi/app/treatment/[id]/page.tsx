import React from 'react';
import { notFound } from 'next/navigation';
import { TREATMENTS, WHATSAPP } from '@/lib/constants';
import { CheckCircle2, Clock, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/utils';
import Image from 'next/image';
import { getServiceData } from '@/lib/content';

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = TREATMENTS.find(t => t.id === params.id);
  const richData = getServiceData(params.id);

  if (!service) {
    return {
      title: 'Treatment Not Found',
    };
  }

  return {
    title: richData?.metaTitle || `${service.title} in Delhi | Natural Cure & Benefits`,
    description: richData?.metaDescription || service.shortDescription + " Best Naturopathy treatment in Delhi. Book appointment.",
    keywords: richData?.keywords || [`${service.title} Delhi`, `Naturopathy for ${service.title}`, "Natural Cure", "Holistic Healing", ...service.benefits],
    alternates: {
      canonical: `/treatment/${params.id}`,
    },
    openGraph: {
        title: richData?.metaTitle || `${service.title} - Natural Healing Delhi`,
        description: richData?.metaDescription || service.shortDescription,
        url: `/treatment/${params.id}`,
    }
  };
}

// Generate static params for all treatments to enable SSG (Static Site Generation)
export async function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({
    id: treatment.id,
  }));
}

export default function ServiceDetail({ params }: Props) {
  const service = TREATMENTS.find(t => t.id === params.id);
  const richData = getServiceData(params.id);

  if (!service) {
    notFound();
  }

  // Schema Markup for Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": service.title,
    "description": richData?.metaDescription || service.shortDescription,
    "bodyLocation": "Whole body", // Generalized, could be specific if data allowed
    "provider": {
      "@type": "MedicalClinic",
      "name": "Delhi Wellness Haven & Holistic Healing Centre",
      "image": "https://delhinaturopath.in/opengraph-image"
    }
  };

    // Add FAQ Schema if rich data exists
  if (richData?.faq) {
      Object.assign(jsonLd, {
          "mainEntity": richData.faq.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
              }
          }))
      });
  }

  const breadcrumbJson = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://delhinaturopath.in' },
    { name: 'Treatments', url: 'https://delhinaturopath.in/treatments' },
    { name: service.title, url: `https://delhinaturopath.in/treatment/${service.id}` }
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />
        <div className="bg-white min-h-screen pb-20">
        {/* Hero Header - Optimized with Next/Image */}
        <div className="relative h-[400px] w-full bg-stone-900 text-white overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-stone-900 z-0"></div>
             <div className="absolute inset-0 opacity-20 z-0">
                <Image
                  src="https://www.transparenttextures.com/patterns/cubes.png" // External pattern, keeping as is but wrapped
                  alt="Background pattern"
                  fill
                  className="object-cover"
                  priority
                  unoptimized // External texture pattern
                />
             </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-2 block">Natural Therapies</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{richData?.title || service.title}</h1>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto">{service.shortDescription}</p>
                 <div className="mt-8 flex justify-center gap-4">
                     <a href={`https://wa.me/${WHATSAPP}?text=I%20am%20interested%20in%20${service.title}`} target="_blank" className="bg-nature-green hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg flex items-center text-sm">
                        <MessageCircle className="w-4 h-4 mr-2" /> Book Now
                     </a>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
            <div className="grid md:grid-cols-3 gap-10">

            {/* Main Content */}
            <div className="md:col-span-2 space-y-10">

                <div className="bg-white rounded-xl shadow-xl p-8">
                    {richData?.introduction ? (
                         <div className="prose prose-stone prose-lg text-stone-600 mb-10" dangerouslySetInnerHTML={{ __html: richData.introduction }} />
                    ) : (
                         <>
                            <h2 className="text-2xl font-bold text-stone-800 mb-6">About {service.title}</h2>
                            <div className="prose prose-stone prose-lg text-stone-600 mb-10">
                            {service.fullDescription.map((para, idx) => (
                                <p key={idx} className="mb-4">{para}</p>
                            ))}
                            </div>
                         </>
                    )}

                     {/* Table of Contents (if enabled) */}
                    {richData?.tableOfContents && richData.sections.length > 0 && (
                         <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mb-10">
                            <h3 className="font-serif font-bold text-xl mb-4 text-stone-800">In This Guide</h3>
                            <ul className="space-y-2 grid md:grid-cols-2 gap-x-8">
                                {richData.sections.map((section, idx) => (
                                    <li key={idx}>
                                        <a href={`#section-${idx}`} className="text-nature-green hover:underline flex items-center text-sm font-medium">
                                            <ArrowRight className="w-3 h-3 mr-2" /> {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                         </div>
                    )}

                    {/* Rich Content Sections */}
                    {richData?.sections.map((section, idx) => (
                        <div key={idx} id={`section-${idx}`} className="mb-12 border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                             <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
                                {section.title}
                             </h2>
                             <div className="prose prose-lg prose-stone max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}

                    {/* Benefits Section - Fallback to existing if no rich content sections cover it */}
                    {!richData && (
                        <div className="bg-nature-light/50 rounded-xl p-8 mb-10 border border-nature-green/20">
                        <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
                            <CheckCircle2 className="w-6 h-6 text-nature-green mr-2" />
                            Benefits of {service.title}
                        </h3>
                        <ul className="grid gap-4">
                            {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 bg-nature-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-stone-700 font-medium">{benefit}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    )}

                    {/* Procedure if available and no rich data (rich data usually covers this) */}
                    {!richData && service.procedure && (
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-stone-800 mb-4">How it is performed?</h3>
                            <ol className="space-y-4">
                            {service.procedure.map((step, idx) => (
                                <li key={idx} className="flex">
                                <span className="font-bold text-nature-green mr-4">{idx + 1}.</span>
                                <span className="text-stone-600">{step}</span>
                                </li>
                            ))}
                            </ol>
                        </div>
                    )}

                     {/* FAQ Section for Treatments */}
                    {richData?.faq && richData.faq.length > 0 && (
                         <div className="mt-12 pt-8 border-t border-stone-200">
                            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {richData.faq.map((item, idx) => (
                                    <div key={idx} className="bg-stone-50 rounded-lg p-6">
                                        <h3 className="font-bold text-stone-800 text-lg mb-2 flex items-start">
                                            <span className="text-nature-green mr-3">Q.</span> {item.question}
                                        </h3>
                                        <p className="text-stone-600 ml-8">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                         </div>
                    )}
                </div>
            </div>

            {/* Sidebar CTA */}
            <div className="md:col-span-1 space-y-6 relative">
                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-nature-green sticky top-24">
                <h3 className="text-lg font-bold text-stone-900 mb-2">Interested in this therapy?</h3>
                <p className="text-sm text-stone-500 mb-6">Book a consultation with our doctor to see if {service.title} is right for you.</p>

                <div className="space-y-4">
                    <div className="flex items-center text-stone-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-nature-green" />
                    <span>Duration: 30 - 45 Mins</span>
                    </div>
                    <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20am%20interested%20in%20${service.title}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors shadow-md"
                    >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                    </a>
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
