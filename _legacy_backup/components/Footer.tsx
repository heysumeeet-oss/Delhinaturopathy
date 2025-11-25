import React from 'react';
import { APP_NAME, SEO_AREAS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-12">

            {/* Brand Section */}
            <div className="md:col-span-4 space-y-6">
                <Link to="/" className="inline-block text-2xl font-serif font-bold text-white tracking-tight">
                Lucknow<span className="text-nature-green">Naturopathy</span>
                </Link>
                <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
                    Reversing Chronic Diseases Naturally since 2010. Your trusted partner for holistic healing and wellness in the heart of Lucknow.
                </p>
                <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nature-green hover:text-white transition-all duration-300">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nature-green hover:text-white transition-all duration-300">
                        <Facebook className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4">
                <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h5>
                <ul className="space-y-3 text-sm">
                    <li><Link to="/" className="hover:text-nature-green transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 opacity-50"/> Home</Link></li>
                    <li><Link to="/about-naturopathy" className="hover:text-nature-green transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 opacity-50"/> About Naturopathy</Link></li>
                    <li><Link to="/treatments" className="hover:text-nature-green transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 opacity-50"/> Treatments</Link></li>
                    <li><Link to="/doctor" className="hover:text-nature-green transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 opacity-50"/> About Dr. Verma</Link></li>
                    <li><Link to="/pricing" className="hover:text-nature-green transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 opacity-50"/> Packages & Pricing</Link></li>
                    <li><Link to="/contact" className="hover:text-nature-green transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 opacity-50"/> Contact Us</Link></li>
                </ul>
            </div>

            {/* Service Areas */}
            <div className="md:col-span-4">
                <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Areas We Serve</h5>
                <p className="text-xs text-stone-500 leading-relaxed mb-4">
                    {SEO_AREAS.join(', ')}
                </p>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-xs text-stone-400">
                        <strong className="text-nature-green block mb-1">Local SEO Note:</strong>
                        We are centrally located in Gomti Nagar, serving patients from all major localities in Lucknow.
                    </p>
                </div>
            </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
            <p>&copy; {new Date().getFullYear()} Lucknow Naturopathy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-stone-400 transition-colors">Sitemap</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;