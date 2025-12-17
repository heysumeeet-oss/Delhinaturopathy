import React from 'react';
import { notFound } from 'next/navigation';
import { CONDITIONS, TREATMENTS, WHATSAPP } from '@/lib/constants';
import { ArrowRight, CheckCircle2, MessageCircle, AlertCircle, Phone, Clock, ChevronDown } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateBreadcrumbSchema } from '@/lib/utils';
import { getServiceData } from '@/lib/content';

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const condition = CONDITIONS.find(c => c.id === params.id);
  const richData = getServiceData(params.id);

  if (!condition) {
    return {
      title: 'Condition Not Found',
    };
  }

  return {
    title: richData?.metaTitle || `${condition.title} Natural Treatment in Delhi | Symptoms & Cure`,
    description: richData?.metaDescription || `Best Naturopathy treatment for ${condition.title} in Delhi. ${condition.shortDescription}`,
    keywords: richData?.keywords || [`${condition.title} cure Delhi`, `Naturopathy for ${condition.title}`, ...condition.symptoms],
    alternates: {
      canonical: `/condition/${params.id}`,
    },
    openGraph: {
        title: richData?.metaTitle || `${condition.title} Cure - Delhi Wellness Haven`,
        description: richData?.metaDescription || condition.shortDescription,
        url: `/condition/${params.id}`,
        type: 'article'
    }
  };
}

export async function generateStaticParams() {
  return CONDITIONS.map((condition) => ({
    id: condition.id,
  }));
}

export default function ConditionDetail({ params }: Props) {
  const condition = CONDITIONS.find(c => c.id === params.id);
  const richData = getServiceData(params.id);

  if (!condition) {
    notFound();
  }

  // Find related treatments
  const relatedTreatmentsData = TREATMENTS.filter(t => condition.relatedTreatments.includes(t.id));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.title,
    "description": richData?.metaDescription || condition.shortDescription,
    "possibleTreatment": relatedTreatmentsData.map(t => ({
        "@type": "TherapeuticProcedure",
        "name": t.title
    })),
    "signOrSymptom": condition.symptoms.map(s => ({
        "@type": "MedicalSymptom",
        "name": s
    }))
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
    { name: 'Conditions', url: 'https://delhinaturopath.in/conditions' },
    { name: condition.title, url: `https://delhinaturopath.in/condition/${condition.id}` }
  ]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
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
        <div className="bg-stone-50 min-h-screen pb-20">

        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white overflow-hidden">
             <div className="absolute inset-0 opacity-20 z-0">
                <Image
                  src="https://www.transparenttextures.com/patterns/cubes.png"
                  alt="Background pattern"
                  fill
                  className="object-cover"
                  unoptimized
                />
             </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-4 block">Disease Management</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
                    {richData?.title || condition.title}
                </h1>
                <p className="text-xl md:text-2xl text-stone-300 max-w-3xl leading-relaxed">
                    {condition.shortDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                     <a href={`https://wa.me/${WHATSAPP}?text=I%20am%20interested%20in%20${condition.title}`} target="_blank" className="bg-nature-green hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg flex items-center">
                        <MessageCircle className="w-5 h-5 mr-2" /> Book Consultation
                     </a>
                     <a href="#overview" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center">
                        Read More <ChevronDown className="w-5 h-5 ml-2" />
                     </a>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-12 gap-12">

            {/* Main Content Column */}
            <div className="md:col-span-8 space-y-12">

                {/* Introduction / Overview */}
                <div id="overview" className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 prose prose-lg prose-stone max-w-none">
                    {richData?.introduction ? (
                        <div dangerouslySetInnerHTML={{ __html: richData.introduction }} />
                    ) : (
                        <p className="lead">{condition.shortDescription}</p>
                    )}
                </div>

                {/* Table of Contents (if enabled) */}
                {richData?.tableOfContents && richData.sections.length > 0 && (
                     <div className="bg-stone-100 p-6 rounded-xl border border-stone-200">
                        <h3 className="font-serif font-bold text-xl mb-4 text-stone-800">In This Article</h3>
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

                {/* Symptoms & Causes Grid (Keep existing if no rich content, or enhance) */}
                {!richData && (
                    <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                        <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                        Symptoms
                        </h3>
                        <ul className="space-y-2">
                        {condition.symptoms.map((symptom, idx) => (
                            <li key={idx} className="flex items-start text-stone-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {symptom}
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                        <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center">
                        <AlertCircle className="w-5 h-5 text-orange-500 mr-2" />
                        Root Causes
                        </h3>
                        <ul className="space-y-2">
                        {condition.causes.map((cause, idx) => (
                            <li key={idx} className="flex items-start text-stone-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {cause}
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                )}

                {/* Rich Content Sections */}
                {richData?.sections.map((section, idx) => (
                    <div key={idx} id={`section-${idx}`} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                         <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 pb-4 border-b border-stone-100">
                            {section.title}
                         </h2>
                         <div className="prose prose-lg prose-stone max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                ))}

                {/* Our Approach (Existing Fallback) */}
                {!richData && (
                    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-nature-green">
                    <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Our Natural Cure Approach</h2>
                    <div className="space-y-4">
                        {condition.naturopathicTreatment.map((treatment, idx) => (
                        <div key={idx} className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-nature-green mr-3 flex-shrink-0" />
                            <span className="text-stone-700 text-lg">{treatment}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                )}

                {/* FAQ Section */}
                {richData?.faq && richData.faq.length > 0 && (
                     <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
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

                {/* Recommended Therapies */}
                <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Related Therapies</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {relatedTreatmentsData.map(treatment => (
                    <Link key={treatment.id} href={`/treatment/${treatment.id}`} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-stone-200 hover:border-nature-green transition-all flex justify-between items-center">
                        <span className="font-bold text-stone-700 group-hover:text-nature-green text-lg">{treatment.title}</span>
                        <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-nature-green group-hover:translate-x-1 transition-all" />
                    </Link>
                    ))}
                </div>
                </div>

            </div>

            {/* Sticky Sidebar */}
            <div className="md:col-span-4 space-y-8 relative">
                <div className="sticky top-24 space-y-8">
                    {/* CTA Card */}
                    <div className="bg-nature-green text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>

                        <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Start Your Healing Journey</h3>
                        <p className="text-nature-light mb-8 text-sm relative z-10 leading-relaxed">
                            Every journey to health begins with a single step. Consult Dr. Rajesh Verma to create a personalized {condition.title} reversal plan.
                        </p>

                        <div className="space-y-4 relative z-10">
                            <a
                                href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20want%20to%20consult%20for%20${condition.title}.`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center w-full bg-white text-nature-green font-bold py-3 px-4 rounded-lg hover:bg-stone-100 transition-colors shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Consultation
                            </a>
                            <a
                                href="tel:+919988776655"
                                className="flex items-center justify-center w-full bg-nature-green-dark border border-white/20 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-800 transition-colors"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Call Clinic
                            </a>
                        </div>
                    </div>

                    {/* Quick Facts / Info */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100">
                        <h4 className="font-bold text-stone-800 mb-4 border-b border-stone-100 pb-2">Treatment At A Glance</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <Clock className="w-5 h-5 text-nature-green mr-3 flex-shrink-0" />
                                <div>
                                    <span className="block font-medium text-stone-900">Duration</span>
                                    <span className="text-stone-500">7 - 21 Days (Typical)</span>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-nature-green mr-3 flex-shrink-0" />
                                <div>
                                    <span className="block font-medium text-stone-900">Success Rate</span>
                                    <span className="text-stone-500">High success in early stages</span>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <AlertCircle className="w-5 h-5 text-nature-green mr-3 flex-shrink-0" />
                                <div>
                                    <span className="block font-medium text-stone-900">Ideally Suited For</span>
                                    <span className="text-stone-500">Those seeking drug-free cure</span>
                                </div>
                            </li>
                        </ul>
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
