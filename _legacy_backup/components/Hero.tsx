import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';
import { ArrowRight, Leaf, Sun, Droplets, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex content-center items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover z-0 transform scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')"
        }}
      >
        <span className="w-full h-full absolute opacity-40 bg-gradient-to-b from-black/70 to-nature-green/90 mix-blend-multiply"></span>
      </div>

      <div className="container relative mx-auto px-4 z-10 flex flex-col items-center justify-center text-center">
        <div className="w-full lg:w-8/12">
          {/* Decorative Element */}
          <div className="mb-6 flex justify-center">
             <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-widest uppercase mb-4">
                Holistic Healing Center
             </span>
          </div>

          <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 drop-shadow-2xl tracking-tight">
            {HERO_TITLE}
          </h1>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-stone-100 mb-10 font-light max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
            {HERO_SUBTITLE}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="group bg-white text-nature-green hover:bg-nature-light font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about-naturopathy"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-nature-green font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1"
            >
              Learn About Naturopathy
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Glassmorphism Keyword Bar */}
      <div className="absolute bottom-10 w-full z-20 hidden md:block px-4">
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
          <div className="flex justify-between items-center text-white text-sm font-medium tracking-wide">
            <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-nature-light" />
                <span>Diet Therapy</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-nature-light" />
                <span>Yoga & Meditation</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-nature-light" />
                <span>Hydrotherapy</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-nature-light" />
                <span>Detoxification</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center border border-nature-light rounded-full text-[10px]">P</span>
                <span>Acupressure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;