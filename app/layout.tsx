import type { Metadata } from "next";
import { generateMedicalClinicSchema } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Lucknow Naturopathy & Holistic Healing Centre",
    default: "Best Naturopathy Clinic in Lucknow | Holistic Healing Centre",
  },
  description: "Top-rated Naturopathy Centre in Lucknow. Specializing in drugless healing, mud therapy, shirodhara, yoga, and detox. Cure chronic diseases naturally.",
  keywords: ["Naturopathy in Lucknow", "Naturopathy Centre Lucknow", "Natural Healing Lucknow", "Yoga Therapy Lucknow", "Detox Center Lucknow", "Mud Therapy", "Shirodhara Lucknow", "Drugless Treatment", "Best Naturopath Lucknow"],
  metadataBase: new URL('https://lucknownaturopathy.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://lucknownaturopathy.com/',
    siteName: 'Lucknow Naturopathy & Holistic Healing Centre',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateMedicalClinicSchema()),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
