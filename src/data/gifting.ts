import { GiftCollectionItem } from '../types';

export const GIFT_COLLECTIONS: GiftCollectionItem[] = [
  {
    id: 'gift-royal-wooden-keepsake',
    slug: 'royal-wooden-keepsake-chest',
    name: 'The Royal Wooden Keepsake Chest',
    category: 'luxury',
    categoryLabel: 'Luxury Keepsake',
    tagline: 'Hand-carved polished teak-finish chest with antique brass clasp and 4 velvet compartments.',
    description: 'Our flagship gifting presentation. A sturdy handcrafted wooden keepsake adorned with antique brass clasps and lined with rich plush velvet. Designed to be treasured as a jewelry or keepsake box for decades after the dry fruits are enjoyed.',
    boxType: 'Polished Teak Wood Chest with Antique Brass Clasp',
    includedItems: [
      'Royal Mamra Almonds (250g)',
      'King Cashews W-180 (250g)',
      'Salted Pistachios (250g)',
      'Kashmiri Walnut Giri (200g)'
    ],
    occasions: ['Weddings', 'VIP Corporate', 'Griha Pravesh', 'Diwali'],
    image: '/assets/gifting/royal-wooden-chest.jpg',
    featured: true,
    minOrderQuantity: 1,
    moqText: '1 unit retail / 10 units for custom name engraving',
    priceRange: '₹2,400 – ₹3,200',
    customizationOptions: [
      'Laser engraved family name or corporate logo',
      'Brass monogram badge with couple initials',
      'Choice of interior velvet color (Royal Maroon, Emerald, Ivory)',
      'Calligraphy parchment greeting note'
    ]
  },
  {
    id: 'gift-emerald-velvet-hamper',
    slug: 'imperial-emerald-velvet-box',
    name: 'The Imperial Emerald Velvet Box',
    category: 'premium',
    categoryLabel: 'Velvet Rigid Box',
    tagline: 'Rich emerald green micro-velvet box embossed with 24K metallic gold mandala foiling.',
    description: 'An exquisitely tactile gift box wrapped in deep emerald velvet with ornate gold mandala foil stamping. Opens to reveal four crystal-clear gold-rimmed canisters showcasing radiant dry fruits.',
    boxType: 'Micro-Velvet Rigid Box with 24K Gold Foil Stamping',
    includedItems: [
      'California Jumbo Almonds (200g)',
      'King Cashews W-180 (200g)',
      'Royal Medjool Dates (250g)',
      'Turkish Garland Anjeer (200g)'
    ],
    occasions: ['Diwali Gifts', 'Corporate Executives', 'Milestone Celebrations', 'Raksha Bandhan'],
    image: '/assets/gifting/imperial-velvet-box.jpg',
    featured: true,
    minOrderQuantity: 1,
    moqText: '1 unit retail / 20 units corporate',
    priceRange: '₹1,800 – ₹2,500',
    customizationOptions: [
      'Custom metallic gold ribbon with personalized printed text',
      'Foil stamped corporate logo or monogram',
      'Matching designer shagun envelope',
      'Tailored dry-fruit selection upon request'
    ]
  },
  {
    id: 'gift-shubh-vivah-trousseau',
    slug: 'shubh-vivah-trousseau-hamper',
    name: 'The Shubh Vivah Trousseau Hamper',
    category: 'wedding',
    categoryLabel: 'Wedding Shagun Trousseau',
    tagline: 'Magnificent tiered wedding tray crafted for bride & groom shagun presentations.',
    description: 'A grand celebration hamper built for auspicious wedding ceremonies, roka invitations, and bridal trousseau displays. Embellished with traditional gota-patti border work, pearl detailing, and floral zardozi trimmings.',
    boxType: 'Handcrafted Two-Tier Platter with Traditional Gota-Patti & Pearl Detailing',
    includedItems: [
      'Royal Mamra Almonds (250g)',
      'King Cashews W-180 (250g)',
      'Afghani Salted Pistachios (250g)',
      'Kashmiri Walnut Giri (250g)',
      'Afghani Long Kishmish (250g)',
      'Pure Kashmiri Saffron (1g blister pack)'
    ],
    occasions: ['Wedding Shagun', 'Ring Ceremony', 'Roka', 'Sagan & Tilak'],
    image: '/assets/gifting/trousseau-hamper.jpg',
    featured: true,
    minOrderQuantity: 5,
    moqText: 'Minimum Order: 5 units',
    priceRange: '₹3,500 – ₹5,500',
    customizationOptions: [
      'Color coordination with bridal lehenga or invitation cards',
      'Customized wedding monogram badge (Couples initials)',
      'Option to incorporate silver coins or mithai spaces',
      'Doorstep delivery assistance for bulk wedding orders in Jharkhand'
    ]
  },
  {
    id: 'gift-regal-brass-platter',
    slug: 'heritage-brass-platter-set',
    name: 'The Heritage Brass Platter Set',
    category: 'luxury',
    categoryLabel: 'Handcrafted Brassware',
    tagline: 'Heavy-gauge artisan-crafted brass platter with 3 engraved brass serving bowls.',
    description: 'A timeless heirloom gift set combining pure metallic warmth with gastronomic indulgence. Features hand-hammered brass katoris seated on an engraved brass tray, housed in a bespoke velvet keepsake trunk.',
    boxType: 'Hand-Hammered Pure Brass Meenakari Platter with 3 Covered Brass Katoris',
    includedItems: [
      'California Jumbo Almonds (200g)',
      'Roasted & Salted Cashews (200g)',
      'Afghani Long Green Kishmish (200g)'
    ],
    occasions: ['Diwali', 'Karwa Chauth', 'Royal Hospitality', 'Griha Pravesh'],
    image: '/assets/gifting/heritage-brass-platter.jpg',
    featured: false,
    minOrderQuantity: 1,
    moqText: '1 unit retail',
    priceRange: '₹2,800 – ₹3,800',
    customizationOptions: [
      'Handmade velvet presentation casing with customized brass gift card',
      'Custom brass engraving plate with family insignia or corporate seal',
      'Luxury gift sleeve with hand-tied tassel ribbon'
    ]
  },
  {
    id: 'gift-executive-corporate-sleeve',
    slug: 'executive-sovereign-box',
    name: 'The Executive Sovereign Box',
    category: 'corporate',
    categoryLabel: 'Corporate Collection',
    tagline: 'Sleek matte midnight-brown presentation box engineered for corporate branding.',
    description: 'Designed specifically for corporate client appreciation, festive employee distribution, and conference dignitary gifting. Features clean lines, secure magnetic closure, and high-impact custom branding options.',
    boxType: 'Matte Midnight-Brown Rigid Magnetic Box with Ribbon Pull',
    includedItems: [
      'California Jumbo Almonds (200g)',
      'King Cashews W-180 (200g)',
      'Roasted Salted Pistachios (200g)'
    ],
    occasions: ['Corporate Annual Meets', 'Client Appreciation', 'Year-End Gifting', 'Employee Diwali'],
    image: '/assets/gifting/executive-sovereign-box.jpg',
    featured: true,
    minOrderQuantity: 15,
    moqText: 'Minimum Order: 15 units',
    priceRange: '₹1,250 – ₹1,750',
    customizationOptions: [
      'Custom UV printed company logo sleeve and company message insert',
      'Hot-foil company logo stamping on outer lid',
      'Bulk GST invoicing and pan-Jharkhand logistics support'
    ]
  },
  {
    id: 'gift-festive-potli-trio',
    slug: 'traditional-banarasi-silk-potli-trio',
    name: 'The Traditional Banarasi Silk Potli Trio',
    category: 'classic',
    categoryLabel: 'Classic Silk Potli',
    tagline: 'Three shimmering handwoven Banarasi brocade potlis nestled in a gold cane basket.',
    description: 'A vibrant, charming, and festive gift presentation celebrating classic Indian textile heritage. Perfect for return gifts, festive party hampers, and Rakhi celebrations.',
    boxType: '3 Zari Embroidered Brocade Potli Pouches in a Hand-Woven Golden Cane Basket',
    includedItems: [
      'California Jumbo Almonds (150g)',
      'King Cashews W-180 (150g)',
      'Afghani Long Green Kishmish (150g)'
    ],
    occasions: ['Return Gifts', 'Housewarming', 'Festive Puja', 'Mehendi Giveaways'],
    image: '/assets/gifting/banarasi-potli-trio.jpg',
    featured: false,
    minOrderQuantity: 10,
    moqText: 'Minimum Order: 10 units',
    priceRange: '₹750 – ₹1,100',
    customizationOptions: [
      'Choice of potli color combinations (Gold, Crimson, Magenta, Turquoise)',
      'Custom gift tag with family monogram',
      'Personalized blessing note'
    ]
  }
];

export const GIFT_CATEGORIES = [
  { id: 'all', label: 'All Collections' },
  { id: 'luxury', label: 'Luxury Keepsakes' },
  { id: 'premium', label: 'Velvet & Rigid Boxes' },
  { id: 'wedding', label: 'Wedding & Shagun' },
  { id: 'corporate', label: 'Corporate Suites' },
  { id: 'classic', label: 'Classic Potlis' },
];
