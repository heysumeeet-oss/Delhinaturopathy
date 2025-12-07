import React from 'react';
import { SEO_AREAS } from '../lib/constants';
import Link from 'next/link';
import { ArrowRight, Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
<footer className="bg-primary-dark text-primary-light/70 pt-24 pb-12 border-t border-primary-blue/20 font-sans relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-teal to-transparent opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">

            {/* Brand Section */}
            <div className="md:col-span-4 space-y-6">
                <Link href="/" className="inline-block text-3xl font-serif font-bold text-white tracking-tight group">
                Wellness<span className="text-accent-teal group-hover:text-white transition-colors">Haven</span>
                </Link>
                <p className="text-sm text-primary-light/60 leading-relaxed max-w-sm">
                    Nurturing health naturally since 2012. We provide a sanctuary for healing in the bustling heart of New Delhi.
                </p>
                <div className="flex space-x-4 pt-2">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary-blue/10 border border-primary-blue/30 flex items-center justify-center hover:bg-accent-teal hover:border-accent-teal hover:text-white transition-all duration-300 group">
                        <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-primary-blue/10 border border-primary-blue/30 flex items-center justify-center hover:bg-accent-teal hover:border-accent-teal hover:text-white transition-all duration-300 group">
                        <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4">
                <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Quick Links</h5>
                <ul className="space-y-4 text-sm">
                    {[
                        { label: "Home", href: "/" },
                        { label: "About Naturopathy", href: "/about-naturopathy" },
                        { label: "Treatments", href: "/treatments" },
                        { label: "About Our Doctor", href: "/doctor" },
                        { label: "Packages & Pricing", href: "/pricing" },
                        { label: "Contact Us", href: "/contact" },
                    ].map((link, idx) => (
                         <li key={idx}>
                            <Link href={link.href} className="group flex items-center hover:text-white transition-colors duration-300">
                                <span className="w-6 h-px bg-primary-blue/50 mr-3 group-hover:bg-accent-teal group-hover:w-8 transition-all duration-300"></span>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Service Areas */}
            <div className="md:col-span-4">
                <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Areas We Serve</h5>
                <p className="text-xs text-primary-light/60 leading-relaxed mb-6 font-light">
                    {SEO_AREAS.join(', ')}
                </p>
                <div className="p-5 bg-gradient-to-br from-primary-dark/50 to-transparent rounded-xl border border-white/10">
                    <p className="text-xs text-primary-light/70">
                        <strong className="text-accent-teal block mb-2 font-serif text-sm">Local SEO Note</strong>
                        Our clinic is centrally located, providing care to patients from all major localities in Delhi.
                    </p>
                </div>
            </div>
        </div>

        <div className="border-t border-primary-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-light/60">
            <p className="flex items-center gap-1">
                &copy; {new Date().getFullYear()} Delhi Wellness Haven. Crafted with <Heart className="w-3 h-3 text-accent-teal fill-current" /> by Nature's Design.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;