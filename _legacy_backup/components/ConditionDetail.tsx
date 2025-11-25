import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CONDITIONS, TREATMENTS, WHATSAPP } from '../constants';
import { AlertCircle, ArrowRight, Activity } from 'lucide-react';

const ConditionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const condition = CONDITIONS.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!condition) {
    return <Navigate to="/" replace />;
  }

  // Resolve related treatments
  const relatedTherapies = TREATMENTS.filter(t => condition.relatedTreatments.includes(t.id));

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-stone-100 py-16 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-xs font-bold tracking-wider uppercase mb-4">Condition & Cure</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">{condition.title}</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">{condition.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Symptoms & Causes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 p-8 rounded-xl border border-red-100">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" /> Symptoms
            </h3>
            <ul className="space-y-2">
              {condition.symptoms.map((sym, idx) => (
                <li key={idx} className="flex items-start text-stone-700">
                  <span className="mr-2">•</span> {sym}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
            <h3 className="text-xl font-bold text-stone-800 mb-4">Root Causes</h3>
            <ul className="space-y-2">
              {condition.causes.map((cause, idx) => (
                <li key={idx} className="flex items-start text-stone-700">
                  <span className="mr-2">•</span> {cause}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Naturopathic Cure Section - The "Authority" Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Our Naturopathic Approach</h2>
          <div className="bg-white border-l-4 border-nature-green shadow-lg p-8 rounded-r-xl">
            <p className="text-stone-600 mb-6 italic">
              "We do not just treat the symptoms of {condition.title}. We target the root cause—toxin accumulation and imbalance in vital force."
            </p>
            <div className="space-y-4">
              {condition.naturopathicTreatment.map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-8 h-8 bg-nature-green text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-stone-700 text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Internal Linking: Related Therapies */}
        {relatedTherapies.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Recommended Therapies</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedTherapies.map(therapy => (
                <Link key={therapy.id} to={`/treatment/${therapy.id}`} className="group block bg-white border border-stone-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-nature-green">
                  <div className="flex items-center justify-between mb-4">
                    <Activity className="w-6 h-6 text-nature-green" />
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-nature-green transition-colors" />
                  </div>
                  <h4 className="font-bold text-lg text-stone-800 mb-2">{therapy.title}</h4>
                  <p className="text-sm text-stone-500 line-clamp-2">{therapy.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Reverse {condition.title}?</h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">Book an appointment with our specialists and start your journey towards a medicine-free life.</p>
          <a 
            href={`https://wa.me/${WHATSAPP}?text=I%20need%20consultation%20for%20${condition.title}`}
            className="inline-flex items-center bg-nature-green text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Consult Doctor Now
          </a>
        </div>

      </div>
    </div>
  );
};

export default ConditionDetail;