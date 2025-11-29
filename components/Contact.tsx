'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { ADDRESS, EMAIL, PHONE, WHATSAPP, SEO_AREAS } from '../lib/constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/30 -skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-nature-green/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <div className="inline-block p-2 px-4 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase mb-6 text-nature-green">Get In Touch</div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-white leading-tight">
              Contact Best Naturopathy Doctor in Lucknow
            </h2>
             <p className="text-lg text-stone-300/80 mb-10 leading-relaxed font-light max-w-lg">
               Ready to start your natural healing journey? Reach out to us for disease cure without side effects.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Address", content: ADDRESS },
                { icon: Phone, title: "Phone & WhatsApp", content: PHONE },
                { icon: Mail, title: "Email", content: EMAIL },
                { icon: Clock, title: "Clinic Hours", content: <>Mon - Sat: 8:00 AM - 1:00 PM<br/>& 4:00 PM - 7:00 PM<br/>Sunday: Closed</> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
                  <div className="p-3 bg-nature-green/20 rounded-xl mr-5 group-hover:bg-nature-green transition-colors duration-300 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-nature-green group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">{item.title}</h3>
                    <div className="text-stone-400 leading-relaxed group-hover:text-stone-300 transition-colors">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Local SEO Keyword block */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-xs text-stone-500 font-bold mb-4 tracking-widest uppercase">Serving Patients From Across Lucknow</p>
              <div className="flex flex-wrap gap-2">
                {SEO_AREAS.slice(0, 10).map((area, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] font-medium text-stone-400 bg-stone-800/50 px-3 py-1.5 rounded-full border border-stone-700/50 select-none hover:border-nature-green/50 hover:text-nature-green transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map / Form */}
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-nature-green rounded-full blur-[80px] opacity-30"></div>

             <div className="bg-white rounded-3xl p-8 lg:p-12 text-stone-800 shadow-2xl relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-full -mr-16 -mt-16"></div>

                <h3 className="relative z-10 text-2xl font-bold mb-2 font-serif">Book Your Appointment</h3>
                <p className="relative z-10 text-stone-500 mb-8 text-sm">Fill out the form below or chat with us directly.</p>

                {/* Primary CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 shadow-lg shadow-green-500/20 flex items-center justify-center mb-8 text-base overflow-hidden group"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                  <MessageCircle className="w-5 h-5 mr-2 relative z-20" />
                  <span className="relative z-20">Chat on WhatsApp Now</span>
                </a>

                <div className="relative flex py-2 items-center mb-6">
                    <div className="flex-grow border-t border-stone-200"></div>
                    <span className="flex-shrink-0 mx-4 text-stone-400 text-xs font-bold tracking-widest uppercase">Or Request Callback</span>
                    <div className="flex-grow border-t border-stone-200"></div>
                </div>

                <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <div className="group relative">
                        <input
                        type="text"
                        id="name"
                        className="peer w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-nature-green/20 focus:border-nature-green outline-none transition-all placeholder-transparent"
                        placeholder="John Doe"
                        />
                        <label htmlFor="name" className="absolute left-4 top-4 text-stone-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-nature-green peer-focus:bg-white peer-focus:px-1 pointer-events-none">Full Name</label>
                    </div>
                    <div className="group relative">
                        <input
                        type="tel"
                        id="phone"
                        className="peer w-full px-4 py-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-nature-green/20 focus:border-nature-green outline-none transition-all placeholder-transparent"
                        placeholder="+91 98765 43210"
                        />
                        <label htmlFor="phone" className="absolute left-4 top-4 text-stone-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-nature-green peer-focus:bg-white peer-focus:px-1 pointer-events-none">Phone Number</label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-stone-800 transition-all shadow-xl hover:shadow-2xl mt-4 flex justify-center items-center group overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center">
                        Submit Request
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </form>
             </div>

             {/* Google Map - Tucked below visually */}
             <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 h-48 w-full opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
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

        </div>
      </div>
    </section>
  );
};

export default Contact;