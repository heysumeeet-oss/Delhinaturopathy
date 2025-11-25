export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[]; // Array of paragraphs for long-form content
  benefits: string[];
  procedure?: string[];
  iconName: string;
}

export interface ConditionItem {
  id: string;
  title: string;
  shortDescription: string;
  symptoms: string[];
  causes: string[];
  naturopathicTreatment: string[]; // Detailed "Answer Format" content
  relatedTreatments: string[]; // IDs of related ServiceItems for internal linking
}

export interface PrincipleItem {
  title: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[]; // For dropdowns
}

export interface PackageItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  features: string[];
  recommendedFor: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  qualifications: string[];
  specializations: string[];
  experience: string;
  bio: string[];
  image: string;
}