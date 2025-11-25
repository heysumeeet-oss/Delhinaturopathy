import React from 'react';
import { FAQS } from '../constants';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
            Common Questions about Naturopathy in Lucknow
          </h2>
          <p className="text-stone-600">
            Understanding how natural healing works for you.
          </p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-stone-50 rounded-lg p-6 border border-stone-100 hover:border-nature-green/30 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-nature-green mt-1" />
                </div>
                <div>
                  {/* H3 is critical here for Google to parse the Question */}
                  <h3 className="text-lg font-bold text-stone-800 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;