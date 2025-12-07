import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Delhi Naturopath Centre",
  description: "Terms and conditions for using our website and services.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-light-gray">
      <Header />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-light-gray/70">
            <h1 className="text-3xl font-serif font-bold text-dark-gray mb-8">Terms of Service</h1>

            <div className="prose prose-stone max-w-none">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

                <p>Welcome to Delhi Naturopath & Holistic Healing Centre. By accessing our website or booking our services, you agree to comply with and be bound by the following terms and conditions.</p>

                <h3>1. Medical Disclaimer</h3>
                <p>The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition.</p>

                <h3>2. Appointment & Cancellation Policy</h3>
                <ul>
                    <li>Appointments must be booked in advance via phone or WhatsApp.</li>
                    <li>Cancellations should be made at least 24 hours prior to the scheduled time.</li>
                    <li>Late arrivals may result in a shortened treatment session to accommodate other patients.</li>
                </ul>

                <h3>3. Treatment Outcomes</h3>
                <p>Naturopathy is a holistic healing system that relies on the body&apos;s self-healing capacity. Results vary from individual to individual and depend on lifestyle adherence. We do not guarantee specific outcomes for every patient.</p>

                <h3>4. Code of Conduct</h3>
                <p>We maintain a peaceful and respectful environment. Any inappropriate behavior towards staff or other patients will result in immediate termination of services.</p>

                <h3>5. Intellectual Property</h3>
                <p>All content, images, and text on this website are the property of Delhi Naturopath Centre and may not be reproduced without permission.</p>

                <h3>6. Changes to Terms</h3>
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
