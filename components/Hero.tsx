import React from 'react';
import { HERO_SUBTITLE } from '../lib/constants';
import { ArrowRight, Leaf, Sun, Droplets, Activity, Play } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100vh] flex content-center items-center justify-center text-white overflow-hidden">
      {/* Background Image with Improved Overlay */}
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-nature-green/40 to-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-nature-green/90 via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center text-center">
        <div className="w-full lg:w-9/12 xl:w-8/12 animate-fade-in-up">

          {/* Decorative Element */}
          <div className="mb-8 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
             <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.2em] uppercase shadow-lg">
                <Leaf className="w-3 h-3 text-nature-light animate-pulse" />
                Holistic Healing Center
             </span>
          </div>

          {/* H1 with Split Animation */}
          <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 drop-shadow-2xl tracking-tight text-white grid place-items-center">
            {/* Part 1: Appears then disappears */}
            <span className="col-start-1 row-start-1 animate-title-part-1 opacity-0">
              Best Naturopathy in Lucknow
            </span>
            <span className="sr-only"> </span>
            {/* Part 2: Appears after delay and stays */}
            <span className="col-start-1 row-start-1 animate-title-part-2 opacity-0">
              Natural Treatment Hospital
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-stone-100/90 mb-12 font-light max-w-3xl mx-auto drop-shadow-lg leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            {HERO_SUBTITLE}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <Link
              href="/contact"
              className="group relative bg-white text-nature-green font-bold text-sm tracking-wide px-10 py-5 rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <span className="relative z-10 flex items-center group-hover:text-nature-dark transition-colors">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-nature-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>

            <Link
              href="/about-naturopathy"
              className="group relative bg-white/10 backdrop-blur-sm border border-white/40 text-white font-bold text-sm tracking-wide px-10 py-5 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
               <span className="mr-2 w-6 h-6 rounded-full bg-white text-nature-green flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 ml-0.5 fill-current" />
               </span>
              Learn About Naturopathy
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Glassmorphism Keyword Bar */}
      <div className="absolute bottom-10 w-full z-20 hidden md:block px-4 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors duration-500">
          <div className="flex justify-between items-center text-white text-sm font-medium tracking-wide">

            {[
              { icon: Leaf, label: "Diet Therapy" },
              { icon: Sun, label: "Yoga & Meditation" },
              { icon: Droplets, label: "Hydrotherapy" },
              { icon: Activity, label: "Detoxification" },
              { icon: null, label: "Acupressure", customIcon: "P" }
            ].map((item, index) => (
               <React.Fragment key={index}>
                  <div className="flex items-center gap-3 group cursor-default">
                    {item.icon ? (
                       <item.icon className="w-5 h-5 text-nature-light/70 group-hover:text-white transition-colors" />
                    ) : (
                       <span className="w-5 h-5 flex items-center justify-center border border-nature-light/70 rounded-full text-[10px] text-nature-light/70 group-hover:text-white group-hover:border-white transition-colors">{item.customIcon}</span>
                    )}
                    <span className="text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                  </div>
                  {index < 4 && <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>}
               </React.Fragment>
            ))}

          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden sm:block">
         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
