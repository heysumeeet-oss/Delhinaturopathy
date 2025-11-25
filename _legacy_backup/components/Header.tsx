import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP, TREATMENTS, CONDITIONS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
  }, [location]);

  return (
    <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white/50 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name for SEO */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-nature-green tracking-tight flex flex-col md:flex-row md:items-baseline">
              Lucknow<span className="text-earth-brown md:ml-1">Naturopathy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="text-stone-700 hover:text-nature-green font-medium text-sm tracking-wide transition-colors">Home</Link>

            {/* Treatments Dropdown */}
            <div className="relative group">
              <button className="text-stone-700 group-hover:text-nature-green font-medium text-sm tracking-wide transition-colors flex items-center outline-none py-2">
                Treatments <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
              </button>
              <div className="absolute left-0 mt-0 w-64 rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left translate-y-2 group-hover:translate-y-0">
                <div className="p-2 grid gap-1">
                  {TREATMENTS.slice(0, 6).map(item => (
                    <Link key={item.id} to={`/treatment/${item.id}`} className="block px-4 py-2.5 text-sm text-stone-600 hover:bg-nature-light hover:text-nature-green rounded-lg transition-colors">
                      {item.title}
                    </Link>
                  ))}
                  <Link to="/treatments" className="block px-4 py-3 text-sm font-bold text-nature-green hover:bg-nature-light rounded-lg border-t border-stone-100 mt-1 text-center">
                    View All Treatments
                  </Link>
                </div>
              </div>
            </div>

            {/* Conditions Dropdown */}
            <div className="relative group">
              <button className="text-stone-700 group-hover:text-nature-green font-medium text-sm tracking-wide transition-colors flex items-center outline-none py-2">
                Diseases We Cure <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
              </button>
              <div className="absolute left-0 mt-0 w-72 rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left translate-y-2 group-hover:translate-y-0">
                <div className="p-2 grid gap-1">
                  {CONDITIONS.slice(0, 6).map(item => (
                    <Link key={item.id} to={`/condition/${item.id}`} className="block px-4 py-2.5 text-sm text-stone-600 hover:bg-nature-light hover:text-nature-green rounded-lg transition-colors">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-stone-700 hover:text-nature-green font-medium text-sm tracking-wide transition-colors">Pricing</Link>
            <Link to="/doctor" className="text-stone-700 hover:text-nature-green font-medium text-sm tracking-wide transition-colors">About Doctor</Link>
            <Link to="/contact" className="text-stone-700 hover:text-nature-green font-medium text-sm tracking-wide transition-colors">Contact</Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center px-6 py-2.5 overflow-hidden rounded-full bg-nature-green text-white shadow-md transition-all duration-300 hover:bg-green-800 hover:shadow-lg"
            >
              <span className="relative flex items-center text-sm font-bold tracking-wide">
                <Phone className="w-4 h-4 mr-2" />
                Book Appointment
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
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
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl max-h-[90vh] overflow-y-auto z-40">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="block px-4 py-3 text-base font-medium text-stone-700 hover:bg-nature-light rounded-xl transition-colors">Home</Link>

            {/* Mobile Dropdown: Treatments */}
            <div>
              <button onClick={() => toggleDropdown('treatments')} className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-stone-700 hover:bg-nature-light rounded-xl transition-colors">
                Treatments <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'treatments' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'treatments' && (
                <div className="pl-4 space-y-1 mt-1 mb-2 border-l-2 border-nature-light ml-4">
                  {TREATMENTS.map(item => (
                    <Link key={item.id} to={`/treatment/${item.id}`} className="block px-4 py-2 text-sm text-stone-600 hover:text-nature-green">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown: Conditions */}
            <div>
              <button onClick={() => toggleDropdown('conditions')} className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-stone-700 hover:bg-nature-light rounded-xl transition-colors">
                Diseases We Cure <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'conditions' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'conditions' && (
                <div className="pl-4 space-y-1 mt-1 mb-2 border-l-2 border-nature-light ml-4">
                  {CONDITIONS.map(item => (
                    <Link key={item.id} to={`/condition/${item.id}`} className="block px-4 py-2 text-sm text-stone-600 hover:text-nature-green">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="block px-4 py-3 text-base font-medium text-stone-700 hover:bg-nature-light rounded-xl transition-colors">Pricing</Link>
            <Link to="/doctor" className="block px-4 py-3 text-base font-medium text-stone-700 hover:bg-nature-light rounded-xl transition-colors">About Doctor</Link>
            <Link to="/contact" className="block px-4 py-3 text-base font-medium text-stone-700 hover:bg-nature-light rounded-xl transition-colors">Contact</Link>

            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
              className="mt-6 w-full flex justify-center items-center px-6 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-nature-green hover:bg-green-800 shadow-lg transition-all"
              target="_blank"
              rel="noreferrer"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;