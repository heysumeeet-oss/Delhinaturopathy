import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Lucknow Naturopathy Centre",
  description: "Our commitment to protecting your personal and medical information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
            <h1 className="text-3xl font-serif font-bold text-stone-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-stone max-w-none">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

                <p>At Lucknow Naturopathy & Holistic Healing Centre, we are committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>

                <h3>1. Information We Collect</h3>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Name, phone number, email address, and age when you book an appointment or contact us.</li>
                    <li><strong>Health Information:</strong> Medical history, current symptoms, and treatment details provided during consultations (strictly confidential).</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address and browser type.</li>
                </ul>

                <h3>2. How We Use Your Information</h3>
                <p>Your data is used solely for:</p>
                <ul>
                    <li>Scheduling appointments and providing medical treatments.</li>
                    <li>Communicating with you regarding your health or clinic updates.</li>
                    <li>Improving our website and services.</li>
                    <li>Legal compliance as required by Indian medical regulations.</li>
                </ul>

                <h3>3. Data Security</h3>
                <p>We implement strict security measures to protect your personal information. Your medical records are stored securely and are only accessible by authorized medical staff.</p>

                <h3>4. Third-Party Sharing</h3>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted partners who assist us in operating our website, conducting our business, or serving you, so long as those parties agree to keep this information confidential.</p>

                <h3>5. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p>
                    <strong>Lucknow Naturopathy Centre</strong><br/>
                    Gomti Nagar, Lucknow<br/>
                    Email: biotb.instantreply@gmail.com
                </p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
