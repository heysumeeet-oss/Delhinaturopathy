import React from 'react';
import { DOCTOR, WHATSAPP } from '../constants';
import { Award, BookOpen, Clock, Star } from 'lucide-react';

const AboutDoctor: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-nature-light/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={DOCTOR.image} 
                  alt={DOCTOR.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h1 className="text-2xl font-bold text-white">{DOCTOR.name}</h1>
                  <p className="text-nature-green font-medium">{DOCTOR.title}</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                Meet Your Healer
              </h2>
              
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                {DOCTOR.bio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100 text-center">
                  <Clock className="w-8 h-8 text-nature-green mx-auto mb-2" />
                  <div className="font-bold text-2xl text-stone-800">{DOCTOR.experience}</div>
                  <div className="text-xs text-stone-500 uppercase tracking-wide">Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100 text-center">
                  <Star className="w-8 h-8 text-nature-green mx-auto mb-2" />
                  <div className="font-bold text-2xl text-stone-800">5000+</div>
                  <div className="text-xs text-stone-500 uppercase tracking-wide">Happy Patients</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100 text-center">
                  <Award className="w-8 h-8 text-nature-green mx-auto mb-2" />
                  <div className="font-bold text-2xl text-stone-800">100%</div>
                  <div className="text-xs text-stone-500 uppercase tracking-wide">Natural Cure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Qualifications */}
        <div>
          <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 text-nature-green mr-3" /> Education & Qualifications
          </h3>
          <ul className="space-y-4">
            {DOCTOR.qualifications.map((qual, idx) => (
              <li key={idx} className="flex items-center bg-stone-50 p-4 rounded-lg border-l-4 border-stone-300">
                <span className="font-semibold text-stone-700">{qual}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center">
            <Award className="w-6 h-6 text-nature-green mr-3" /> Expert In
          </h3>
          <div className="flex flex-wrap gap-3">
            {DOCTOR.specializations.map((spec, idx) => (
              <span key={idx} className="px-4 py-2 bg-nature-green/10 text-nature-green rounded-full font-medium text-sm border border-nature-green/20">
                {spec}
              </span>
            ))}
          </div>

          <div className="mt-10 bg-stone-900 text-white p-6 rounded-xl">
             <h4 className="font-bold text-lg mb-2">Direct Consultation</h4>
             <p className="text-stone-400 text-sm mb-4">Dr. {DOCTOR.name} is available for consultation from 10 AM to 2 PM.</p>
             <a 
               href={`https://wa.me/${WHATSAPP}?text=I%20want%20consultation%20with%20Dr.%20${DOCTOR.name}`} 
               className="text-nature-green font-bold hover:text-white transition-colors"
             >
               Book Slot &rarr;
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;