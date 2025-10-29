export interface PackageFeature {
  id: number;
  name: string;
}

export interface Plan {
  id?: number;
  name?: 'Starter' | 'Pro' | 'Growth';
  title?: string;
  subtitle?: string;
  price?: number;
  deliveryTime?: string;
  features?: PackageFeature[];
  ctaText?: string;
  ctaLink?: string;
  isRecommended?: boolean;
  isConsultation?: boolean;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ServicesPageProps {
  packages: Plan[];
  faq: FAQItem[];
}
