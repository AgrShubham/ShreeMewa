/**
 * Shree Mewa - Type Definitions
 */

export type ProductCategory = 
  | 'all'
  | 'almonds'
  | 'cashews'
  | 'pistachios'
  | 'walnuts'
  | 'dates'
  | 'raisins'
  | 'figs-speciality'
  | 'mixed-mewa';

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  hindiName?: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  origin?: string;
  grade?: string;
  weights: string[];
  features: string[];
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  priceEstimate?: string; // Optional indication or note
  packagingType?: string;
}

export type GiftCategory = 
  | 'all'
  | 'classic'
  | 'premium'
  | 'luxury'
  | 'wedding'
  | 'corporate'
  | 'custom';

export interface GiftCollectionItem {
  id: string;
  slug: string;
  name: string;
  category: GiftCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  boxType: string;
  includedItems: string[];
  occasions: string[];
  image: string;
  featured?: boolean;
  minOrderQuantity?: number;
  customizationOptions: string[];
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  shortDescription: string;
  fullDescription: string;
  city: string;
  state: string;
  country: string;
  addressLine: string;
  landmark: string;
  pincode: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  openingHours: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  facebookUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'gifting' | 'wedding' | 'corporate' | 'store';
}

export type ActivePage = 
  | 'home'
  | 'products'
  | 'gifting'
  | 'wedding-gifting'
  | 'corporate-gifting'
  | 'about'
  | 'store'
  | 'contact'
  | 'catalogue';
