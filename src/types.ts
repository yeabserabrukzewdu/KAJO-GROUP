export type ProductCategoryKey = 'coffee' | 'pulses' | 'lithium' | 'investments' | 'all';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ProductDetail {
  id: 'coffee' | 'pulses' | 'lithium';
  name: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
  accentColor: string;
  specifications: { label: string; value: string }[];
  varieties: { name: string; description: string; image?: string }[];
  features: string[];
}

export interface CoreValueItem {
  number: string;
  title: string;
  description: string;
}

export interface QualityPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface WhyKajoItem {
  title: string;
  description: string;
}

export interface InvestmentDivision {
  id: string;
  sector: 'Healthcare & FMCG' | 'Agro-Processing' | 'Hospitality & Real Estate' | 'Logistics & Trade' | 'Industrial & Tech';
  name: string;
  tagline: string;
  scaleMetric: string;
  focusMetric: string;
  statusMetric: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  productCategory: ProductCategoryKey;
  estimatedVolume: string;
  destinationCountry: string;
  additionalMessage: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
