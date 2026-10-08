import { ActivePage } from '../types';

export interface NavItem {
  label: string;
  hindiLabel?: string;
  page: ActivePage;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dry Fruits', hindiLabel: 'सूखे मेवे', page: 'products' },
  { label: 'Gifting', hindiLabel: 'गिफ्टिंग', page: 'gifting' },
  { label: 'Weddings', hindiLabel: 'विवाह उपहार', page: 'wedding-gifting' },
  { label: 'Corporate', hindiLabel: 'कॉर्पोरेट', page: 'corporate-gifting' },
  { label: 'About', page: 'about' },
  { label: 'Visit Store', hindiLabel: 'स्टोर देखें', page: 'store' },
];
