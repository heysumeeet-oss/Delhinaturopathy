import React from 'react';
import { Star, Quote, MapPin, BadgeCheck } from 'lucide-react';
import { REVIEWS } from '../lib/reviews';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-primary-dark relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent-teal text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Patient Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Real Stories, <span className="text-primary-light italic">Real Healing</span>
            </h2>
            <p className="text-lg text-primary-light/70 max-w-2xl mx-auto font-light">
                Discover how our holistic approach has transformed lives across Delhi.
                Read genuine experiences from our patients.
            </p>
        </div>

        {/* Reviews Carousel Container */}
        <div className="relative group">
            <div
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4 -mx-4 md:mx-0 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {REVIEWS.map((review, idx) => (
                    <div
                        key={idx}
                        className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
                    >
                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-stone-600'}`}
                                />
                            ))}
                        </div>

                        {/* Text */}
                        <div className="relative mb-6 flex-grow">
                             <Quote className="absolute -top-2 -left-2 w-8 h-8 text-nature-green/20 -z-10 transform -scale-x-100" />
                             <p className="text-stone-300 italic leading-relaxed text-sm md:text-base">
                                &quot;{review.text}&quot;
                             </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-auto border-t border-white/5 pt-4 flex items-center justify-between">
                            <div>
                                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                                    {review.author}
                                    <BadgeCheck className="w-4 h-4 text-blue-400" />
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <MapPin className="w-3 h-3 text-stone-500" />
                                    <span className="text-xs text-stone-500">{review.location}</span>
                                </div>
                            </div>
                            {review.treatment && (
                                <span className="text-[10px] font-medium px-2 py-1 rounded bg-nature-green/20 text-nature-light border border-nature-green/30">
                                    {review.treatment}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Indication Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-900 to-transparent pointer-events-none md:block hidden"></div>
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-900 to-transparent pointer-events-none md:block hidden"></div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{REVIEWS.length}+</div>
                <div className="text-xs text-stone-500 uppercase tracking-widest">5-Star Reviews</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs text-stone-500 uppercase tracking-widest">Years Experience</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-xs text-stone-500 uppercase tracking-widest">Patients Cured</div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
