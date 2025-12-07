import type { Metadata } from "next";
import { generateMedicalClinicSchema } from "@/lib/utils";
import { Montserrat, Lora } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Delhi Wellness Haven",
    default: "Premier Naturopathy & Holistic Wellness Centre in Delhi",
  },
  description: "Delhi's leading sanctuary for natural healing. Specializing in mud therapy, hydrotherapy, and holistic detox. Reclaim your health naturally at Wellness Haven.",
  keywords: ["Naturopathy Delhi", "Wellness Haven Delhi", "Holistic Health Centre", "Yoga Therapy Delhi", "Detox Clinic", "Mud Therapy Delhi", "Natural Cure", "Dr. Rajesh Verma", "Best Naturopath Delhi"],
  metadataBase: new URL('https://delhiwellnesshaven.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "verification_token",
    yandex: "yandex_verification",
    other: {
      "me": ["info@delhiwellnesshaven.com", "https://delhiwellnesshaven.com"],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://delhiwellnesshaven.com/',
    siteName: 'Delhi Wellness Haven',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Delhi Wellness Haven',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateMedicalClinicSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
