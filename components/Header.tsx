'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, ArrowRight, Leaf } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WHATSAPP, TREATMENTS, CONDITIONS } from '../lib/constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes or screen resizes to desktop
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const navLinkClass = "group flex items-center text-sm font-semibold tracking-wide text-stone-700 hover:text-nature-green transition-colors duration-300 py-2 cursor-pointer";

  return (
    <>
      {/*
        Main Header Bar
        Z-Index: 50 - High enough to sit over content, but mobile menu will be higher (60).
      */}
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100 py-3'
            : 'bg-white/80 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center relative z-50">
              <Link href="/" className="group flex flex-col md:flex-row md:items-baseline gap-1">
                 <div className="relative">
                    <Leaf className="w-6 h-6 text-nature-green absolute -left-7 top-1 opacity-0 group-hover:opacity-100 transition-all duration-500 -rotate-12" />
                    <span className="text-2xl md:text-3xl font-serif font-bold text-nature-green tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    Lucknow
                    </span>
                 </div>
                <span className="text-earth-brown text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors duration-300 group-hover:text-nature-dark">
                  Naturopathy
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center" aria-label="Main Navigation">
              <Link href="/" className={navLinkClass}>Home</Link>

              {/* Desktop Dropdown: Treatments */}
              <div className="relative group">
                <button
                  className={navLinkClass}
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Treatments <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                {/*
                  Dropdown Content
                  Using invisible/opacity group-hover for pure CSS interaction.
                  Added 'pt-4' to bridge the gap so mouse doesn't leave hover area.
                */}
                <div className="absolute left-0 top-full pt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                   <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden ring-1 ring-black ring-opacity-5">
                      <div className="py-2">
                        {TREATMENTS.slice(0, 6).map(item => (
                            <Link key={item.id} href={`/treatment/${item.id}`} className="flex items-center justify-between px-6 py-3 text-sm text-stone-600 hover:bg-nature-light/50 hover:text-nature-green transition-colors group/item">
                            {item.title}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-nature-green" />
                            </Link>
                        ))}
                        <div className="border-t border-stone-100 mt-2 pt-2 pb-2 px-2">
                            <Link href="/treatments" className="flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-nature-green bg-nature-light/30 rounded-xl hover:bg-nature-light transition-colors">
                                View All Treatments
                            </Link>
                        </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Desktop Dropdown: Conditions */}
              <div className="relative group">
                <button
                  className={navLinkClass}
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Diseases We Cure <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                 <div className="absolute left-0 top-full pt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                   <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden ring-1 ring-black ring-opacity-5">
                      <div className="py-2">
                        {CONDITIONS.slice(0, 6).map(item => (
                            <Link key={item.id} href={`/condition/${item.id}`} className="flex items-center justify-between px-6 py-3 text-sm text-stone-600 hover:bg-nature-light/50 hover:text-nature-green transition-colors group/item">
                            {item.title}
                             <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-nature-green" />
                            </Link>
                        ))}
                      </div>
                   </div>
                </div>
              </div>

              <Link href="/pricing" className={navLinkClass}>Pricing</Link>
              <Link href="/doctor" className={navLinkClass}>About Doctor</Link>
              <Link href="/contact" className={navLinkClass}>Contact</Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center px-6 py-2.5 overflow-hidden rounded-full bg-nature-green text-white shadow-lg shadow-nature-green/20 transition-all duration-300 hover:shadow-xl hover:shadow-nature-green/30 hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                <span className="relative flex items-center text-sm font-bold tracking-wide">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Appointment
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-stone-600 hover:text-nature-green hover:bg-nature-light focus:outline-none transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/*
        Mobile Menu Overlay
        Z-Index: 40 - Just below the header bar so the logo/X button stay visible on top,
        BUT we need the content to be fully accessible.
        Actually, let's make it cover everything below the header.
        Top padding handles the header height.
      */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: '85px' }} // Hardcoded offset to ensure it sits below the header bar
      >
        <div className="h-full overflow-y-auto px-4 pb-20">
            <nav className="space-y-1">
                <Link href="/" className="block px-4 py-4 text-lg font-medium text-stone-800 border-b border-stone-100 active:bg-nature-light/50">Home</Link>

                {/* Mobile Dropdown: Treatments */}
                <div className="border-b border-stone-100">
                    <button
                        onClick={() => toggleMobileDropdown('treatments')}
                        className="w-full flex justify-between items-center px-4 py-4 text-lg font-medium text-stone-800 active:bg-nature-light/50 outline-none"
                    >
                        Treatments
                        <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${activeMobileDropdown === 'treatments' ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-stone-50/50 ${activeMobileDropdown === 'treatments' ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-4 py-2 space-y-1">
                            {TREATMENTS.map(item => (
                                <Link key={item.id} href={`/treatment/${item.id}`} className="block px-4 py-3 text-base text-stone-600 rounded-lg active:bg-white active:text-nature-green">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown: Conditions */}
                <div className="border-b border-stone-100">
                    <button
                        onClick={() => toggleMobileDropdown('conditions')}
                        className="w-full flex justify-between items-center px-4 py-4 text-lg font-medium text-stone-800 active:bg-nature-light/50 outline-none"
                    >
                        Diseases We Cure
                        <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${activeMobileDropdown === 'conditions' ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-stone-50/50 ${activeMobileDropdown === 'conditions' ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-4 py-2 space-y-1">
                            {CONDITIONS.map(item => (
                                <Link key={item.id} href={`/condition/${item.id}`} className="block px-4 py-3 text-base text-stone-600 rounded-lg active:bg-white active:text-nature-green">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Link href="/pricing" className="block px-4 py-4 text-lg font-medium text-stone-800 border-b border-stone-100 active:bg-nature-light/50">Pricing</Link>
                <Link href="/doctor" className="block px-4 py-4 text-lg font-medium text-stone-800 border-b border-stone-100 active:bg-nature-light/50">About Doctor</Link>
                <Link href="/contact" className="block px-4 py-4 text-lg font-medium text-stone-800 border-b border-stone-100 active:bg-nature-light/50">Contact</Link>
            </nav>

            <div className="mt-8 px-4">
                <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
                    className="w-full flex justify-center items-center px-6 py-4 text-lg font-bold rounded-xl text-white bg-nature-green shadow-lg shadow-nature-green/20 active:scale-[0.98] transition-all"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Phone className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
