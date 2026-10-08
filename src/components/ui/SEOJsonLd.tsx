import React from 'react';
import { BUSINESS_CONFIG } from '../../data/business';
import { PRODUCTS_DATA } from '../../data/products';

export const SEOJsonLd: React.FC = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_CONFIG.tradeName,
    alternateName: BUSINESS_CONFIG.hindiName,
    legalName: BUSINESS_CONFIG.tradeName,
    image: 'https://shreemewa.com/assets/gifting/royal-wooden-chest.jpg',
    '@id': 'https://shreemewa.com',
    url: 'https://shreemewa.com',
    telephone: BUSINESS_CONFIG.phone,
    hasMap: BUSINESS_CONFIG.googleMapsDirectionsUrl,
    priceRange: '₹340 - ₹5,500',
    taxID: BUSINESS_CONFIG.gstin,
    identifier: {
      '@type': 'PropertyValue',
      name: 'FSSAI License',
      value: BUSINESS_CONFIG.fssaiNumber,
    },
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
      latitude: 23.6334,
      longitude: 85.5144,
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
        telephone: BUSINESS_CONFIG.phone,
      },
      {
        '@type': 'LocalBusiness',
        name: 'Shree Mewa Wedding & Corporate Gifting',
        telephone: BUSINESS_CONFIG.secondaryPhone,
      },
    ],
    servesCuisine: 'Dry Fruits, Single-Harvest Nuts, Seeds, Festive Hampers',
    areaServed: [
      'Ramgarh Cantonment',
      'Ramgarh',
      'Ranchi',
      'Hazaribagh',
      'Bokaro',
      'Jharkhand',
      'Pan-India',
    ],
    sameAs: [
      BUSINESS_CONFIG.instagramUrl,
      BUSINESS_CONFIG.facebookUrl,
      BUSINESS_CONFIG.googleReviewUrl,
    ],
  };

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: PRODUCTS_DATA.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        image: product.image,
        description: product.description,
        sku: product.sku,
        brand: {
          '@type': 'Brand',
          name: 'Shree Mewa',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: product.pricePer500g || 500,
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: 'https://shreemewa.com/#products',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
    </>
  );
};
