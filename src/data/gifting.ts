import { GiftCollectionItem } from '../types';

export const GIFT_COLLECTIONS: GiftCollectionItem[] = [
  {
    id: 'gift-royal-wooden-keepsake',
    slug: 'royal-wooden-heritage-chest',
    name: 'The Royal Wooden Keepsake Chest',
    category: 'luxury',
    categoryLabel: 'Luxury Collection',
    tagline: 'Hand-carved polished teak-finish chest with brass latch and 4 velvet compartments.',
    description: 'Our flagship gifting presentation. A sturdy handcrafted wooden keepsake adorned with antique brass clasps and lined with rich plush velvet. Designed to be treasured as a jewelry or keepsake box for decades after the dry fruits are enjoyed.',
    boxType: 'Handcrafted Wooden Chest with Brass Accents',
    includedItems: [
      'Royal Mamra Almonds (250g)',
      'King Jumbo Cashews W-180 (250g)',
      'Afghani Roasted Pistachios (250g)',
      'Kashmiri Snow White Walnut Giri (200g)'
    ],
    occasions: ['Royal Weddings', 'VIP Corporate Milestones', 'Diwali Gifting', 'Housewarming'],
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    minOrderQuantity: 1,
    customizationOptions: [
      'Custom laser engraving of family name or corporate logo',
      'Choice of interior velvet color (Royal Maroon, Forest Green, Ivory)',
      'Personalized calligraphy greeting card and wax seal'
    ]
  },
  {
    id: 'gift-emerald-velvet-hamper',
    slug: 'emerald-velvet-octagonal-box',
    name: 'The Imperial Emerald Velvet Box',
    category: 'premium',
    categoryLabel: 'Premium Collection',
    tagline: 'Rich emerald green micro-velvet box embossed with metallic gold foiling.',
    description: 'An exquisitely tactile gift box wrapped in deep emerald velvet with ornate gold mandala foil stamping. Opens to reveal four crystal-clear gold-rimmed jars showcasing radiant dry fruits.',
    boxType: 'Rigid Velvet Box with 4 Gold-Rimmed Canisters',
    includedItems: [
      'Jumbo California Almonds (200g)',
      'Slow-Roasted Himalayan Salt Cashews (200g)',
      'Royal Jumbo Medjool Dates (250g)',
      'Turkish Sun-Dried Anjeer Figs (200g)'
    ],
    occasions: ['Diwali', 'Weddings & Engagements', 'Raksha Bandhan', 'Anniversaries'],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    minOrderQuantity: 1,
    customizationOptions: [
      'Custom metallic gold ribbon with personalized printed text',
      'Matching designer shagun envelope',
      'Tailored dry-fruit selection upon request'
    ]
  },
  {
    id: 'gift-shubh-vivah-trousseau',
    slug: 'shubh-vivah-wedding-hamper',
    name: 'The Shubh Vivah Trousseau Hamper',
    category: 'wedding',
    categoryLabel: 'Wedding Collection',
    tagline: 'Magnificent tiered wedding tray crafted for bride & groom shagun presentations.',
    description: 'A grand celebration hamper built for auspicious wedding ceremonies, roka invitations, and bridal trousseau displays. Embellished with traditional gota-patti border work and floral zardozi accents.',
    boxType: 'Ornate Tiered Gift Hamper with Brocade & Gota-Patti Trimmings',
    includedItems: [
      'Royal Panchmewa Blend (500g)',
      'Mamra Almonds (250g)',
      'King Cashews W-180 (250g)',
      'Afghani Pistachios (250g)',
      'Kashmiri Walnut Giri (250g)',
      'Jumbo Medjool Dates (250g)'
    ],
    occasions: ['Wedding Invitations', 'Roka & Sagan Ceremony', 'Bridal Trousseau', 'Mehndi Favours'],
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    minOrderQuantity: 5,
    customizationOptions: [
      'Customized wedding monogram badge (Couples initials)',
      'Themed color palette matching your wedding invite cards',
      'Option to incorporate silver coins or mithai spaces',
      'Doorstep delivery assistance for bulk wedding orders'
    ]
  },
  {
    id: 'gift-regal-brass-platter',
    slug: 'regal-brass-heritage-platter',
    name: 'The Heritage Brass Platter Set',
    category: 'luxury',
    categoryLabel: 'Luxury Collection',
    tagline: 'Heavy-gauge artisan-crafted brass platter with 3 engraved brass serving bowls.',
    description: 'A timeless heirloom gift set combining pure metallic warmth with gastronomic indulgence. Features hand-hammered brass katoris seated on an engraved brass tray.',
    boxType: 'Pure Brass Hammered Platter with Suede Gift Box Packaging',
    includedItems: [
      'King Jumbo Cashews (200g)',
      'Royal Mamra Almonds (200g)',
      'Afghani Green Pistachios (200g)'
    ],
    occasions: ['Diwali Festivities', 'Corporate Executive Gifting', 'New Home Griha Pravesh', 'Milestone Birthdays'],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    minOrderQuantity: 1,
    customizationOptions: [
      'Custom brass engraving plate with company/family insignia',
      'Luxury gift sleeve with hand-tied tassel ribbon'
    ]
  },
  {
    id: 'gift-executive-corporate-sleeve',
    slug: 'executive-corporate-gift-box',
    name: 'The Executive Sovereign 4-Section Box',
    category: 'corporate',
    categoryLabel: 'Corporate Collection',
    tagline: 'Sleek matte midnight-brown presentation box engineered for corporate branding.',
    description: 'Designed specifically for corporate client appreciation, festive employee distribution, and conference dignitary gifting. Features clean lines, secure magnetic closure, and high-impact custom branding options.',
    boxType: 'Rigid Matte Soft-Touch Box with Magnetic Flap',
    includedItems: [
      'California Whole Almonds (150g)',
      'Roasted Salted Cashews (150g)',
      'Afghani Salted Pistachios (150g)',
      'Long Golden Raisins (150g)'
    ],
    occasions: ['Corporate Annual Gifting', 'Diwali Employee Gifts', 'Client Appreciation', 'Conference Delegates'],
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    minOrderQuantity: 10,
    customizationOptions: [
      'Custom corporate logo hot-foil stamped on outer lid',
      'Custom branded belly-band sleeve and CEO greeting note',
      'Bulk GST invoicing and pan-Jharkhand logistics support'
    ]
  },
  {
    id: 'gift-festive-potli-trio',
    slug: 'festive-silk-potli-trio',
    name: 'The Traditional Banarasi Potli Trio',
    category: 'classic',
    categoryLabel: 'Classic Collection',
    tagline: 'Three shimmering handwoven Banarasi brocade potlis nestled in a gold wire basket.',
    description: 'A vibrant, charming, and festive gift presentation celebrating classic Indian textile heritage. Perfect for return gifts, festive party hampers, and Rakhi celebrations.',
    boxType: 'Handwoven Brocade Silk Drawstring Potlis with Metal Basket',
    includedItems: [
      'Select California Almonds (150g)',
      'Whole White Cashews (150g)',
      'Selected Long Raisins (150g)'
    ],
    occasions: ['Rakhi Gifting', 'Puja Return Favours', 'Kitty Parties & Family Gatherings', 'Navratri'],
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    minOrderQuantity: 3,
    customizationOptions: [
      'Choice of potli color combinations (Gold, Crimson, Magenta, Turquoise)',
      'Personalized blessing tag'
    ]
  }
];

export const GIFT_CATEGORIES = [
  { id: 'all', label: 'All Collections' },
  { id: 'luxury', label: 'Luxury Keepsakes' },
  { id: 'premium', label: 'Velvet & Foil Boxes' },
  { id: 'wedding', label: 'Wedding & Shagun' },
  { id: 'corporate', label: 'Corporate Gifting' },
  { id: 'classic', label: 'Festive Potlis & Trays' },
];
