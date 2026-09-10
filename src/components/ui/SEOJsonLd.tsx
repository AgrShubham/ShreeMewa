import React from 'react';
import { BUSINESS_CONFIG } from '../../data/business';

export const SEOJsonLd: React.FC = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_CONFIG.name,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
    '@id': 'https://shreemewa.com',
    url: 'https://shreemewa.com',
    telephone: BUSINESS_CONFIG.phone,
    priceRange: '₹₹ - ₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_CONFIG.addressLine,
      addressLocality: BUSINESS_CONFIG.city,
      addressRegion: BUSINESS_CONFIG.state,
      postalCode: BUSINESS_CONFIG.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.6310,
      longitude: 85.5002,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '21:00',
    },
    department: [
      {
        '@type': 'LocalBusiness',
        name: 'Shree Mewa Dry Fruits Store',
      },
      {
        '@type': 'LocalBusiness',
        name: 'Shree Mewa Wedding & Corporate Gifting',
      },
    ],
    servesCuisine: 'Dry Fruits, Nuts, Seeds, Festive Hampers',
    areaServed: [
      'Ramgarh Cantonment',
      'Ramgarh',
      'Ranchi',
      'Hazaribagh',
      'Bokaro',
      'Jharkhand',
    ],
    sameAs: [
      BUSINESS_CONFIG.instagramUrl,
      BUSINESS_CONFIG.facebookUrl,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
