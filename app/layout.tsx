import type { Metadata } from "next";
import { generateMedicalClinicSchema } from "@/lib/utils";
import { Lato, Playfair_Display } from 'next/font/google';
import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lucknow Naturopathy & Holistic Healing Centre",
    default: "Best Naturopathy Clinic in Lucknow | Holistic Healing Centre",
  },
  description: "Top-rated Naturopathy Centre in Lucknow. Specializing in drugless healing, mud therapy, shirodhara, yoga, and detox. Cure chronic diseases naturally.",
  keywords: ["Naturopathy in Lucknow", "Naturopathy Centre Lucknow", "Natural Healing Lucknow", "Yoga Therapy Lucknow", "Detox Center Lucknow", "Mud Therapy", "Shirodhara Lucknow", "Drugless Treatment", "Best Naturopath Lucknow"],
  metadataBase: new URL('https://lucknownaturopathy.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "verification_token",
    yandex: "yandex_verification",
    other: {
      "me": ["biotb.instantreply@gmail.com", "https://lucknownaturopathy.com"],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://lucknownaturopathy.com/',
    siteName: 'Lucknow Naturopathy & Holistic Healing Centre',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Lucknow Naturopathy & Holistic Healing Centre',
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
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
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
