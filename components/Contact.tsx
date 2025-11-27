'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { ADDRESS, EMAIL, PHONE, WHATSAPP, SEO_AREAS } from '../lib/constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <p className="text-lg font-medium mb-4 text-stone-200">Contact Best Naturopathy Doctor in Lucknow for Naturopathic Treatment</p>
            <p className="text-lg md:text-xl font-serif text-stone-300 mb-10">Natural Treatment in Lucknow, Naturopath for Disease Cure without Side Effects</p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="p-3 bg-white/5 rounded-lg mr-4 group-hover:bg-nature-green transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-stone-300 leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 bg-white/5 rounded-lg mr-4 group-hover:bg-nature-green transition-colors duration-300">
                    <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone & WhatsApp</h3>
                  <p className="text-stone-300">{PHONE}</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 bg-white/5 rounded-lg mr-4 group-hover:bg-nature-green transition-colors duration-300">
                    <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-stone-300">{EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="p-3 bg-white/5 rounded-lg mr-4 group-hover:bg-nature-green transition-colors duration-300">
                    <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Clinic Hours</h3>
                  <p className="text-stone-300">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p className="text-stone-300">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Local SEO Keyword block - Static Tags for Ranking */}
            <div className="mt-16 pt-8 border-t border-stone-800">
              <p className="text-xs text-stone-500 font-bold mb-4 tracking-widest uppercase">Serving Patients From Across Lucknow</p>
              <div className="flex flex-wrap gap-2">
                {SEO_AREAS.slice(0, 10).map((area, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] font-medium text-stone-400 bg-stone-800/50 px-3 py-1 rounded-full border border-stone-700/50 select-none hover:border-nature-green/50 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12 rounded-xl overflow-hidden border border-stone-700/50 h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9871031435!2d80.80242469145657!3d26.848902830209425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba23b119a9bb!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709665555555!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lucknow Map"
              ></iframe>
            </div>
          </div>

          {/* Map / Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 text-stone-800 shadow-2xl relative">
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-nature-green rounded-full blur-3xl opacity-20"></div>

            <h3 className="text-2xl font-bold mb-2 font-serif">Book Your Appointment</h3>
            <p className="text-stone-500 mb-8 text-sm">Fill out the form below or chat with us directly.</p>
            
            {/* Primary CTA */}
            <a 
              href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 shadow-lg shadow-green-500/20 flex items-center justify-center mb-8 text-base"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp Now
            </a>

            <div className="relative flex py-2 items-center mb-6">
                <div className="flex-grow border-t border-stone-200"></div>
                <span className="flex-shrink-0 mx-4 text-stone-400 text-xs font-bold tracking-widest uppercase">Or Request Callback</span>
                <div className="flex-grow border-t border-stone-200"></div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-5">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-stone-500 uppercase mb-1">Full Name</label>
                    <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-nature-green/50 focus:border-nature-green outline-none transition-all"
                    placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-stone-500 uppercase mb-1">Phone Number</label>
                    <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-nature-green/50 focus:border-nature-green outline-none transition-all"
                    placeholder="+91 98765 43210"
                    />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-stone-800 transition-all shadow-md mt-4 flex justify-center items-center group"
              >
                Submit Request
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;