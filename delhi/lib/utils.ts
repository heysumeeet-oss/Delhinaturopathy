import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SEO_AREAS } from "./constants";
import { REVIEWS } from "./reviews";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SEO Schema Generators
export function generateMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Delhi Wellness Haven & Holistic Healing Centre",
    "image": "https://delhinaturopath.in/opengraph-image", // Updated to dynamic image
    "@id": "https://delhinaturopath.in",
    "url": "https://delhinaturopath.in",
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "456 Health Avenue, Saket",
      "addressLocality": "New Delhi",
      "addressRegion": "DL",
      "postalCode": "110017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5273,
      "longitude": 77.2177
    },
    "hasMap": "https://maps.google.com/?q=Delhi+Naturopathy+Centre",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Bank Transfer",
    "currenciesAccepted": "INR",
    "sameAs": [
      "https://www.facebook.com/delhinaturopath",
      "https://www.instagram.com/delhinaturopath",
      "https://twitter.com/delhinature"
    ],
    "areaServed": SEO_AREAS.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "priceRange": "₹"
  };
}

export function generateFAQSchema(faqs: {question: string, answer: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: {name: string, url: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
