'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WHATSAPP, TREATMENTS, CONDITIONS } from '../lib/constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const navLinkClass = "relative group text-sm font-medium tracking-wide text-stone-700 hover:text-nature-green transition-colors duration-300 py-2";
  const navUnderlineClass = "absolute bottom-0 left-0 w-0 h-0.5 bg-nature-green transition-all duration-300 group-hover:w-full";

  return (
    <header
        className={`fixed w-full top-0 z-[100] transition-all duration-500 border-b ${
            scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-stone-200 py-3'
            : 'bg-white/60 backdrop-blur-md border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name for SEO */}
          <div className="flex-shrink-0 flex items-center relative z-50">
            <Link href="/" className="group flex flex-col md:flex-row md:items-baseline">
              <span className="text-2xl md:text-3xl font-serif font-bold text-nature-green tracking-tight transition-transform duration-300 group-hover:scale-105">
                Lucknow
              </span>
              <span className="text-earth-brown md:ml-1 text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors duration-300 group-hover:text-nature-dark">
                Naturopathy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className={navLinkClass}>
              Home
              <span className={navUnderlineClass}></span>
            </Link>
            
            {/* Treatments Dropdown */}
            <div className="relative group">
              <button className={`${navLinkClass} flex items-center outline-none`}>
                Treatments <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                <span className={navUnderlineClass}></span>
              </button>
              <div className="absolute left-0 mt-0 w-72 z-[101] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/95 backdrop-blur-md border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left translate-y-4 group-hover:translate-y-0 overflow-hidden">
                <div className="p-3 grid gap-1">
                  {TREATMENTS.slice(0, 6).map(item => (
                    <Link key={item.id} href={`/treatment/${item.id}`} className="flex items-center justify-between px-4 py-3 text-sm text-stone-600 hover:bg-nature-light hover:text-nature-green rounded-xl transition-all duration-200 group/item">
                      {item.title}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  ))}
                  <div className="border-t border-stone-100 mt-2 pt-2">
                    <Link href="/treatments" className="block px-4 py-3 text-sm font-bold text-nature-green hover:bg-nature-light rounded-xl text-center transition-colors">
                        View All Treatments
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Conditions Dropdown */}
            <div className="relative group">
              <button className={`${navLinkClass} flex items-center outline-none`}>
                Diseases We Cure <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                <span className={navUnderlineClass}></span>
              </button>
              <div className="absolute left-0 mt-0 w-72 z-[101] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/95 backdrop-blur-md border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left translate-y-4 group-hover:translate-y-0 overflow-hidden">
                <div className="p-3 grid gap-1">
                  {CONDITIONS.slice(0, 6).map(item => (
                    <Link key={item.id} href={`/condition/${item.id}`} className="flex items-center justify-between px-4 py-3 text-sm text-stone-600 hover:bg-nature-light hover:text-nature-green rounded-xl transition-all duration-200 group/item">
                      {item.title}
                       <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/pricing" className={navLinkClass}>
              Pricing
              <span className={navUnderlineClass}></span>
            </Link>
            <Link href="/doctor" className={navLinkClass}>
              About Doctor
              <span className={navUnderlineClass}></span>
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
              <span className={navUnderlineClass}></span>
            </Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full bg-nature-green text-white shadow-lg shadow-nature-green/30 transition-all duration-300 hover:shadow-xl hover:shadow-nature-green/40 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
              <span className="relative flex items-center text-sm font-bold tracking-wide">
                <Phone className="w-4 h-4 mr-2" />
                Book Appointment
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-stone-600 hover:text-nature-green hover:bg-nature-light focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', paddingTop: '80px' }} // Offset for header height
      >
          <div className="px-4 pb-6 space-y-2 h-full overflow-y-auto">
            <Link href="/" className="block px-4 py-4 text-lg font-medium text-stone-800 hover:bg-nature-light rounded-2xl transition-colors border-b border-stone-100">Home</Link>
            
            {/* Mobile Dropdown: Treatments */}
            <div>
              <button onClick={() => toggleDropdown('treatments')} className="w-full flex justify-between items-center px-4 py-4 text-lg font-medium text-stone-800 hover:bg-nature-light rounded-2xl transition-colors border-b border-stone-100">
                Treatments <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${openDropdown === 'treatments' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'treatments' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1 mt-2 mb-4 ml-4 border-l-2 border-nature-green/20">
                  {TREATMENTS.map(item => (
                    <Link key={item.id} href={`/treatment/${item.id}`} className="block px-4 py-3 text-base text-stone-600 hover:text-nature-green hover:bg-stone-50 rounded-lg">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Dropdown: Conditions */}
            <div>
              <button onClick={() => toggleDropdown('conditions')} className="w-full flex justify-between items-center px-4 py-4 text-lg font-medium text-stone-800 hover:bg-nature-light rounded-2xl transition-colors border-b border-stone-100">
                Diseases We Cure <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${openDropdown === 'conditions' ? 'rotate-180' : ''}`} />
              </button>
               <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDropdown === 'conditions' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1 mt-2 mb-4 ml-4 border-l-2 border-nature-green/20">
                  {CONDITIONS.map(item => (
                    <Link key={item.id} href={`/condition/${item.id}`} className="block px-4 py-3 text-base text-stone-600 hover:text-nature-green hover:bg-stone-50 rounded-lg">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/pricing" className="block px-4 py-4 text-lg font-medium text-stone-800 hover:bg-nature-light rounded-2xl transition-colors border-b border-stone-100">Pricing</Link>
            <Link href="/doctor" className="block px-4 py-4 text-lg font-medium text-stone-800 hover:bg-nature-light rounded-2xl transition-colors border-b border-stone-100">About Doctor</Link>
            <Link href="/contact" className="block px-4 py-4 text-lg font-medium text-stone-800 hover:bg-nature-light rounded-2xl transition-colors border-b border-stone-100">Contact</Link>
            
            <div className="pt-6 px-4">
                <a
                href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
                className="w-full flex justify-center items-center px-6 py-5 border border-transparent text-lg font-bold rounded-2xl text-white bg-nature-green hover:bg-green-800 shadow-xl shadow-nature-green/20 transition-all active:scale-95"
                target="_blank"
                rel="noreferrer"
                >
                <Phone className="w-5 h-5 mr-2" />
                Book via WhatsApp
                </a>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;