import React from 'react';
import { PRINCIPLES } from '../lib/constants';
import { CheckCircle2, Feather, Star } from 'lucide-react';
import Image from 'next/image';

const AboutPrinciples: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[500px] h-[500px] bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-[500px] h-[500px] bg-accent-teal/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Why Choose Naturopathy Section */}
        <div className="text-center mb-24 relative">
          <span className="text-primary-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Holistic Wellness</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-gray mb-8 leading-tight">
            Why Choose Naturopathy <br/><span className="italic text-primary-blue">in Delhi?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-dark-gray/70 leading-relaxed font-light">
            Naturopathy is an art and science of natural treatment by doctor for healthy living. It is a drugless system of healing that does not imply any kind of medicine. The fundamental difference between Naturopathy in Delhi and other systems is our holistic view point, treating the whole person rather than just the symptom.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group">
             {/* Decorative Border */}
            <div className="absolute inset-0 border-[10px] border-white/20 z-20 rounded-[2rem] pointer-events-none"></div>

            <Image
              src="https://images.unsplash.com/photo-1599558156182-13b306141158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
              alt="Naturopathy Treatment Center Delhi Interior"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

            <div className="absolute bottom-10 left-10 right-10 text-white z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-3">
                   <Star className="w-4 h-4 text-accent-teal fill-current" />
                   <Star className="w-4 h-4 text-accent-teal fill-current" />
                   <Star className="w-4 h-4 text-accent-teal fill-current" />
                   <Star className="w-4 h-4 text-accent-teal fill-current" />
                   <Star className="w-4 h-4 text-accent-teal fill-current" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest mb-2 text-accent-teal">Premium Care</p>
                <h3 className="text-4xl font-serif mb-4">Restore Your Balance</h3>
                <p className="text-white/80 font-light leading-relaxed">Experience a sanctuary of healing designed to rejuvenate your mind, body, and spirit through nature&apos;s wisdom.</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
                <span className="p-3 bg-primary-light rounded-full text-primary-blue shadow-sm"><Feather className="w-6 h-6"/></span>
                <span className="text-sm font-bold tracking-widest text-primary-blue uppercase">Holistic Approach</span>
            </div>
            <h2 className="text-5xl font-serif font-bold text-dark-gray mb-8 leading-[1.2]">Best Naturopathy Hospital in <span className="text-primary-blue underline decoration-4 decoration-accent-teal/30 underline-offset-4">Delhi</span></h2>
            <p className="text-dark-gray/70 mb-10 text-lg leading-relaxed">
              When we need to find the best Naturopathy hospital in Delhi we need such hospital which has Naturopathy experts who are the best Naturopathy doctors and know natural treatment without side effects for disease that we are suffering from.
            </p>

            <div className="space-y-4">
              {[
                { title: "Education & Prevention", desc: "Empowering patients with knowledge on self-care and lifestyle changes." },
                { title: "The 5 Elements", desc: "Using \"Pancha Maha Bhuthas\" (Earth, Water, Fire, Air, Ether) to restore balance." },
                { title: "Zero Side Effects", desc: "Providing completely harmless treatments that support the body's natural healing." }
              ].map((item, idx) => (
                 <div key={idx} className="flex items-start p-6 rounded-2xl bg-light-gray hover:bg-white border border-transparent hover:border-primary-blue/20 hover:shadow-lg transition-all duration-300 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-white border border-light-gray/70 flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 group-hover:border-primary-blue transition-all shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                        <h4 className="font-bold text-dark-gray text-lg mb-2 group-hover:text-primary-blue transition-colors">{item.title}</h4>
                        <p className="text-dark-gray/70 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </div>

        {/* Principles Section - ID for navigation */}
        <div id="principles" className="relative py-12">
            <div className="text-center mb-20">
                <span className="text-primary-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-gray">
                    Fundamental Principles
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRINCIPLES.map((principle, index) => (
                <article key={index} className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-light-gray hover:border-primary-blue/30 overflow-hidden">
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                           <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-light-gray text-dark-gray font-serif font-bold text-xl group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                              {index + 1}
                           </span>
                           <div className="w-8 h-8 rounded-full border border-light-gray/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                           </div>
                        </div>

                        <h3 className="text-2xl font-bold text-dark-gray mb-4 font-serif group-hover:text-primary-blue transition-colors">{principle.title}</h3>
                        <p className="text-dark-gray/70 leading-relaxed flex-grow group-hover:text-dark-gray">
                        {principle.content}
                        </p>
                    </div>
                </article>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPrinciples;