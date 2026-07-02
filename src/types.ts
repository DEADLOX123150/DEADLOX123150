export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  priceEstimate?: string;
  benefits: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Homeowner", "Office Manager"
  rating: number; // 1-5
  text: string;
  image: string; // Unsplash avatar URL
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string; // e.g. "+", "%"
  label: string;
  icon: string; // Lucide icon name
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
}
