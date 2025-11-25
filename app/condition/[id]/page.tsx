import React from 'react';
import { notFound } from 'next/navigation';
import { CONDITIONS, TREATMENTS, WHATSAPP } from '@/lib/constants';
import { ArrowRight, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const condition = CONDITIONS.find(c => c.id === params.id);

  if (!condition) {
    return {
      title: 'Condition Not Found',
    };
  }

  return {
    title: `${condition.title} Natural Treatment in Lucknow | Symptoms & Cure`,
    description: `Best Naturopathy treatment for ${condition.title} in Lucknow. ${condition.shortDescription}`,
    keywords: [`${condition.title} cure Lucknow`, `Naturopathy for ${condition.title}`, ...condition.symptoms],
  };
}

export async function generateStaticParams() {
  return CONDITIONS.map((condition) => ({
    id: condition.id,
  }));
}

export default function ConditionDetail({ params }: Props) {
  const condition = CONDITIONS.find(c => c.id === params.id);

  if (!condition) {
    notFound();
  }

  // Find related treatments
  const relatedTreatmentsData = TREATMENTS.filter(t => condition.relatedTreatments.includes(t.id));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": condition.title,
    "possibleTreatment": relatedTreatmentsData.map(t => ({
        "@type": "TherapeuticProcedure",
        "name": t.title
    })),
    "signOrSymptom": condition.symptoms.map(s => ({
        "@type": "MedicalSymptom",
        "name": s
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
        <div className="bg-stone-50 min-h-screen pb-20">

        {/* Header Section */}
        <div className="bg-white border-b border-stone-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-nature-green font-bold tracking-widest uppercase text-xs mb-2 block">Disease Management</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">{condition.title}</h1>
            <p className="text-xl text-stone-600 max-w-3xl">{condition.shortDescription}</p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-12 gap-12">

            {/* Main Information */}
            <div className="md:col-span-8 space-y-12">

                {/* Symptoms & Causes Grid */}
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

                {/* Our Approach */}
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

                {/* Recommended Therapies */}
                <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Recommended Therapies</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {relatedTreatmentsData.map(treatment => (
                    <Link key={treatment.id} href={`/treatment/${treatment.id}`} className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md border border-stone-200 hover:border-nature-green transition-all flex justify-between items-center">
                        <span className="font-bold text-stone-700 group-hover:text-nature-green">{treatment.title}</span>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-nature-green group-hover:translate-x-1 transition-all" />
                    </Link>
                    ))}
                </div>
                </div>

            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 space-y-8">
                <div className="bg-nature-green text-white p-8 rounded-xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>

                <h3 className="text-xl font-bold mb-4 relative z-10">Suffering from {condition.title}?</h3>
                <p className="text-nature-light mb-8 text-sm relative z-10">
                    Don't let it become chronic. Our specialized Naturopathy plan can help reverse this condition naturally.
                </p>

                <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20want%20to%20consult%20for%20${condition.title}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-full bg-white text-nature-green font-bold py-3 px-4 rounded-lg hover:bg-stone-100 transition-colors shadow-lg relative z-10"
                >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consult Doctor Now
                </a>
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
