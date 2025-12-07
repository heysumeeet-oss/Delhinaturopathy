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
    template: "%s | Delhi Naturopath & Holistic Healing Centre",
    default: "Best Naturopathy Clinic in Delhi | Holistic Healing Centre",
  },
  description: "Top-rated Naturopathy Centre in Delhi. Specializing in drugless healing, mud therapy, shirodhara, yoga, and detox. Cure chronic diseases naturally.",
  keywords: ["Naturopathy in Delhi", "Naturopathy Centre Delhi", "Natural Healing Delhi", "Yoga Therapy Delhi", "Detox Center Delhi", "Mud Therapy", "Shirodhara Delhi", "Drugless Treatment", "Best Naturopath Delhi"],
  metadataBase: new URL('https://delhinaturopath.in'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "verification_token",
    yandex: "yandex_verification",
    other: {
      "me": ["contact@delhinaturopath.in", "https://delhinaturopath.in"],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://delhinaturopath.in/',
    siteName: 'Delhi Naturopath & Holistic Healing Centre',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Delhi Naturopath & Holistic Healing Centre',
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
