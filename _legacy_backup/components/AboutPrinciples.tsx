import React from 'react';
import { PRINCIPLES } from '../constants';
import { CheckCircle2, Feather } from 'lucide-react';

const AboutPrinciples: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why Choose Naturopathy Section */}
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            Why Choose Naturopathy?
          </h2>
          <div className="w-24 h-1 bg-nature-green mx-auto mb-8 rounded-full"></div>
          <p className="max-w-4xl mx-auto text-xl text-stone-600 leading-relaxed font-light">
            Naturopathy is an art and science of natural treatment for healthy living. It is a drugless system
            of healing that does not imply any kind of medicine. The fundamental difference between Naturopathy
            and other systems is our <strong>holistic view point</strong>—treating the whole person rather than just the symptom.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src="https://plus.unsplash.com/premium_photo-1663126957077-164cb0178e68?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VsbG5lc3MlMjBjZW50ZXIlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA=="
              alt="Naturopathy Treatment Center Lucknow Interior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 text-white">
                <p className="text-lg font-bold uppercase tracking-widest mb-2">Natural Healing</p>
                <h3 className="text-3xl font-serif">Restore Your Balance</h3>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-4">
                <span className="p-2 bg-nature-light rounded-full text-nature-green"><Feather className="w-5 h-5"/></span>
                <span className="text-sm font-bold tracking-widest text-nature-green uppercase">Holistic Approach</span>
            </div>
            <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">Restoring Health <span className="text-nature-green">Naturally</span></h3>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed">
              In Naturopathy, we believe that the primary cause of disease is the accumulation of
              <strong> morbid matter</strong>. Bacteria and viruses are secondary; they only survive
              when the body's internal atmosphere allows them to.
            </p>

            <div className="space-y-6 bg-nature-light/30 p-8 rounded-2xl border border-nature-green/10">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-nature-green mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-stone-800 text-lg">Education & Prevention</h4>
                    <p className="text-stone-600 mt-1">Empowering patients with knowledge on self-care and lifestyle changes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-nature-green mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-stone-800 text-lg">The 5 Elements</h4>
                    <p className="text-stone-600 mt-1">Using "Pancha Maha Bhuthas" (Earth, Water, Fire, Air, Ether) to restore balance.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-nature-green mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-stone-800 text-lg">Zero Side Effects</h4>
                    <p className="text-stone-600 mt-1">Providing completely harmless treatments that support the body's natural healing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Principles Section - ID for navigation */}
        <div id="principles" className="relative">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-full bg-stone-50 rounded-3xl -skew-y-1 transform origin-top-left -z-10"></div>

            <div className="py-16 px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-nature-green font-bold tracking-widest uppercase text-xs mb-2 block">Our Philosophy</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">
                        Fundamental Principles
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRINCIPLES.map((principle, index) => (
                    <article key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-nature-green flex flex-col">
                        <div className="mb-4 text-earth-brown text-4xl font-serif opacity-20 font-bold">0{index + 1}</div>
                        <h3 className="text-xl font-bold text-stone-900 mb-4">{principle.title}</h3>
                        <p className="text-stone-600 leading-relaxed flex-grow">
                        {principle.content}
                        </p>
                    </article>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPrinciples;