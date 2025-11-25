import React from 'react';
import { PACKAGES, WHATSAPP } from '../constants';
import { Check, Clock } from 'lucide-react';

const PriceList: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Treatment Packages</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">Transparent pricing for our most popular healing programs. All packages include initial doctor consultation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 hover:border-nature-green transition-colors relative flex flex-col">
              {/* Header */}
              <div className="p-6 bg-stone-900 text-white text-center">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <div className="text-3xl font-serif font-bold text-nature-green">{pkg.price}</div>
                <div className="flex items-center justify-center text-sm text-stone-400 mt-2">
                  <Clock className="w-3 h-3 mr-1" /> {pkg.duration}
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-grow">
                <p className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-4">Best Suited For:</p>
                <p className="text-sm font-medium text-stone-800 mb-6 bg-yellow-50 p-3 rounded border border-yellow-100">
                  {pkg.recommendedFor}
                </p>

                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-stone-600">
                      <Check className="w-5 h-5 text-nature-green mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="p-6 bg-stone-50 border-t border-stone-100">
                <a 
                  href={`https://wa.me/${WHATSAPP}?text=I%20am%20interested%20in%20${pkg.title}`}
                  className="block w-full bg-white border-2 border-nature-green text-nature-green font-bold py-3 rounded-lg hover:bg-nature-green hover:text-white transition-all text-center"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-500 text-sm">
            * Prices are subject to change based on individual medical conditions. 
            <br/>Accommodation charges are extra for residential patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceList;