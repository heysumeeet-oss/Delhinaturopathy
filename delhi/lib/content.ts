import fs from 'fs';
import path from 'path';

export interface RichContentSection {
  title: string;
  content: string; // HTML or Markdown
  image?: string;
  imageAlt?: string;
}

export interface RichServiceData {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage?: string;
  introduction: string; // First big block
  tableOfContents?: boolean;
  sections: RichContentSection[];
  faq: { question: string, answer: string }[];
  relatedConditions?: string[];
  relatedTreatments?: string[];
}

const servicesDirectory = path.join(process.cwd(), 'data/services');

export function getServiceData(id: string): RichServiceData | null {
  const fullPath = path.join(servicesDirectory, `${id}.json`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const serviceData = JSON.parse(fileContents);
    return serviceData as RichServiceData;
  } catch (error) {
    console.error(`Error reading service data for ${id}:`, error);
    return null;
  }
}
