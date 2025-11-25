import React from 'react';
import { TREATMENTS } from '../lib/constants';
import { Leaf, Droplets, Sun, Wind, Flower, Activity, HeartPulse, Brain, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Helper to render icon by name
const IconRenderer = ({ name, className }: { name: string, className: string }) => {
  switch (name) {
    case 'Leaf': return <Leaf className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Flower': return <Flower className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Brain': return <Brain className={className} />;
    default: return <Leaf className={className} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-nature-green/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth-brown/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-nature-green font-bold tracking-widest uppercase text-xs mb-2 block">Our Treatments</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            Natural Therapies Offered in Lucknow
          </h2>
          <div className="w-24 h-1 bg-earth-brown mx-auto rounded-full mb-6"></div>
          <p className="mt-4 max-w-2xl mx-auto text-stone-600 text-lg leading-relaxed">
            We customize treatment plans according to your disease condition using pure, natural elements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TREATMENTS.map((service) => (
            <Link 
              key={service.id} 
              href={`/treatment/${service.id}`}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-nature-green/30 flex flex-col items-start relative overflow-hidden transform hover:-translate-y-2"
            >
              {/* Card Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-nature-light rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>

              <div className="w-14 h-14 bg-nature-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-nature-green transition-colors duration-300 shadow-inner">
                <IconRenderer name={service.iconName} className="w-7 h-7 text-nature-green group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-nature-green transition-colors font-serif">
                {service.title}
              </h3>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.shortDescription}
              </p>

              <div className="flex items-center text-nature-green text-sm font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
            <div className="inline-block p-10 bg-nature-light/50 backdrop-blur-sm rounded-3xl border border-nature-green/10 shadow-lg max-w-4xl mx-auto relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md">
                     <Leaf className="w-6 h-6 text-nature-green" />
                </div>
                <p className="text-stone-700 italic text-xl font-serif mb-6 leading-relaxed">
                    &quot;A Naturopathy doctor will customize your treatment plan according to your disease condition, focusing on Education, Prevention, and Holistic Health.&quot;
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-500 font-bold uppercase tracking-widest">
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">Steam Bath</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">Sauna Bath</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">Hip Bath</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">Spinal Bath</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">Jal Neti</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm">Sutra Neti</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;