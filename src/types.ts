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
  pricingPolicy?: string; // e.g. "₹1,650 per 500g"
  pricePer500g?: number; // Numeric value for calculation / sorting
  packagingType?: string;
  keyFeatures?: string;
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
  moqText?: string; // e.g. "1 unit retail / 10 units for custom engraving"
  customizationOptions: string[];
  priceRange?: string; // e.g. "₹2,400 – ₹3,200"
}

export interface BusinessInfo {
  name: string;
  tradeName: string;
  hindiName: string;
  tagline: string;
  taglineHindi: string;
  subTagline: string;
  shortDescription: string;
  fullDescription: string;
  founderStory: string;
  sourcingUSP: string;
  yearEstablished: string;
  city: string;
  state: string;
  country: string;
  addressLine: string;
  landmark: string;
  pincode: string;
  phone: string;
  phoneDisplay: string;
  secondaryPhone: string;
  secondaryPhoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  openingHours: string;
  hoursWeekday?: string;
  hoursSunday?: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  googleReviewUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  facebookUrl: string;
  fssaiNumber: string;
  gstin: string;
  entityType: string;
  greenVegDot: boolean;
  deliveryCoverage: string;
  freeDeliveryThreshold: string;
  leadTime: string;
  samplePolicy: string;
  paymentModes: string;
  storageAdvice: string;
  returnPolicy: string;
  ga4Id: string;
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
