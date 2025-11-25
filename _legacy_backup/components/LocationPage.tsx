import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { WHATSAPP } from '../constants';

const LocationPage: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  
  // Format area name from slug (e.g., "gomti-nagar" -> "Gomti Nagar")
  const formatAreaName = (slug: string | undefined) => {
    if (!slug) return "Lucknow";
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const areaName = formatAreaName(area);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [area]);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Local SEO Header */}
      <div className="bg-nature-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm mb-6">
                <MapPin className="w-5 h-5 text-nature-green mr-2" />
                <span className="text-sm font-bold text-stone-600">Serving {areaName}, Lucknow</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                Best Naturopathy Centre near {areaName}
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Searching for a "Naturopathy clinic near me" in {areaName}? We provide world-class holistic healing, yoga therapy, and detoxification services just a short drive away.
            </p>
        </div>
      </div>

      {/* SEO Content Block */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="prose prose-stone prose-lg mx-auto">
            <p>
                Residents of <strong>{areaName}</strong> can now access premier natural healing services without relying on heavy medication. At Lucknow Naturopathy, we understand that living in busy areas like {areaName} can lead to lifestyle disorders such as stress, indigestion, and hypertension.
            </p>
            
            <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Why {areaName} residents choose us?</h2>
            <p>
                Our center is easily accessible for patients traveling from {areaName}. We specialize in treating chronic ailments through:
            </p>
            <ul className="space-y-2 my-6 not-prose">
                <li className="flex items-center text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-nature-green mr-3" />
                    Mud Therapy and Hydrotherapy
                </li>
                <li className="flex items-center text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-nature-green mr-3" />
                    Full Body Detox & Enema
                </li>
                <li className="flex items-center text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-nature-green mr-3" />
                    Therapeutic Massage & Shirodhara
                </li>
                <li className="flex items-center text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-nature-green mr-3" />
                    Weight Loss Programs
                </li>
            </ul>

            <p>
                Whether you are looking for <em>Yoga classes in {areaName}</em> or a <em>Dietician in {areaName}</em>, our holistic approach covers all aspects of well-being. We believe that the body heals itself when given the right environment.
            </p>

            <div className="bg-stone-50 p-8 rounded-xl border-l-4 border-nature-green my-10">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Book an Appointment Today</h3>
                <p className="mb-6 text-stone-600">
                    Don't let chronic pain control your life. Visit the most trusted naturopathic doctor serving the {areaName} community.
                </p>
                <a 
                    href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20am%20from%20${areaName}%20and%20would%20like%20to%20book%20an%20appointment.`}
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center bg-nature-green text-white font-bold px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
                >
                    Chat on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;