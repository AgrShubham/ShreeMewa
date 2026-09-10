import { BusinessInfo } from '../types';

export const BUSINESS_CONFIG: BusinessInfo = {
  name: 'Shree Mewa',
  tagline: 'Premium Dry Fruits & Handcrafted Gifting',
  subTagline: 'Where Sourced Perfection Meets Thoughtful Presentation',
  shortDescription: 'Discover carefully selected dry fruits and elegant gifting collections at Shree Mewa in Ramgarh Cantonment, Jharkhand.',
  fullDescription: 'Shree Mewa is a premier dry-fruit and bespoke gifting boutique based in Ramgarh Cantonment, Jharkhand. We curate the finest harvest of almonds, cashews, pistachios, walnuts, dates, and exotic dry fruits, presenting them in handcrafted wooden keepsakes, luxury velvet boxes, and custom celebratory hampers for weddings, corporate milestones, and festive occasions.',
  city: 'Ramgarh Cantonment',
  state: 'Jharkhand',
  country: 'India',
  addressLine: 'Main Road, Ramgarh Cantonment',
  landmark: 'Near Gandhi Chowk / Cantt Market',
  pincode: '829122',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '919876543210',
  whatsappDisplay: '+91 98765 43210',
  email: 'enquiry@shreemewa.com',
  openingHours: '10:00 AM – 9:00 PM (Open All 7 Days)',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14644.223940173264!2d85.5002446!3d23.6309852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e240212fefc7%3A0x6b6c0e0b490f23d4!2sRamgarh%20Cantonment%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Ramgarh+Cantonment,+Jharkhand,+India',
  instagramHandle: '@shreemewa.official',
  instagramUrl: 'https://instagram.com/shreemewa.official',
  facebookUrl: 'https://facebook.com/shreemewa.official',
};

export const getWhatsAppLink = (message?: string): string => {
  const defaultMsg = 'Hello Shree Mewa, I would like to know more about your dry fruits and premium gifting collections.';
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${text}`;
};
