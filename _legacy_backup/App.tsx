import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutPrinciples from './components/AboutPrinciples';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LocationPage from './components/LocationPage';
import ServiceDetail from './components/ServiceDetail';
import ConditionDetail from './components/ConditionDetail';
import AboutDoctor from './components/AboutDoctor';
import PriceList from './components/PriceList';
import { WHATSAPP } from './constants';
import { MessageCircle } from 'lucide-react';

// Home Page Component - Aggregates all sections for a seamless landing page experience
const HomePage = () => (
  <div className="flex flex-col w-full">
    <Hero />
    <AboutPrinciples />
    <Services />
    <FAQ />
    <Contact />
  </div>
);

// PageWrapper for inner pages to ensure consistent spacing below the fixed header
const PageWrapper = ({ children, title }: { children?: React.ReactNode, title: string }) => (
  <div className="pt-10 min-h-screen bg-stone-50">
    <div className="bg-nature-green/10 py-12 mb-8 text-center border-b border-nature-green/20">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">{title}</h1>
    </div>
    {children}
  </div>
);

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50">
      <Header />
      
      <main className="flex-grow w-full">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Dynamic SEO Pages - The Core of the Update */}
          <Route path="/treatment/:id" element={<ServiceDetail />} />
          <Route path="/condition/:id" element={<ConditionDetail />} />
          <Route path="/doctor" element={<AboutDoctor />} />
          <Route path="/pricing" element={<PriceList />} />
          <Route path="/location/:area" element={<LocationPage />} />

          {/* Static Pages */}
          <Route path="/about-naturopathy" element={
            <PageWrapper title="About Naturopathy">
              <AboutPrinciples />
            </PageWrapper>
          } />
          
          <Route path="/principles" element={
            <PageWrapper title="Our Principles">
              <AboutPrinciples />
            </PageWrapper>
          } />
          
          <Route path="/treatments" element={
            <PageWrapper title="Natural Treatments">
              <Services />
            </PageWrapper>
          } />
          
          <Route path="/faq" element={
            <PageWrapper title="Frequently Asked Questions">
              <FAQ />
            </PageWrapper>
          } />
          
          <Route path="/contact" element={
            <PageWrapper title="Contact Our Clinic">
              <Contact />
            </PageWrapper>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Sticky WhatsApp Button for Mobile Conversions */}
      <a 
        href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:bg-[#20bd5a] transition-colors duration-300 hover:scale-110 hover:shadow-nature-green/50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;