import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SEO_AREAS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SEO Schema Generators
export function generateMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Lucknow Naturopathy & Holistic Healing Centre",
    "image": "https://lucknownaturopathy.com/opengraph-image", // Updated to dynamic image
    "@id": "https://lucknownaturopathy.com",
    "url": "https://lucknownaturopathy.com",
    "telephone": "+918874206748",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wellness Lane, Gomti Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8467,
      "longitude": 80.9462
    },
    "hasMap": "https://maps.google.com/?q=Lucknow+Naturopathy+Centre",
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
        "opens": "08:00",
        "closes": "13:00"
      },
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
        "opens": "16:00",
        "closes": "19:00"
      }
    ],
    "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Bank Transfer",
    "currenciesAccepted": "INR",
    "sameAs": [
      "https://www.facebook.com/lucknownaturopathy",
      "https://www.instagram.com/lucknownaturopathy",
      "https://twitter.com/lucknownature"
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
