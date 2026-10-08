import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ActivePage } from '../../types';

interface CoreCategoriesSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const CoreCategoriesSection: React.FC<CoreCategoriesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="Our Portfolio"
        hindiSubtitle="हमारे तीन मुख्य संग्रह"
        title="Curated For Every Milestone"
        description="Explore our three specialized verticals designed for everyday nourishment, festive gifting, and bespoke ceremonial celebrations."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Card 1: Premium Dry Fruits */}
        <div
          onClick={() => onNavigate('products')}
          className="group relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white hover:border-[#C5A059] hover:shadow-2xl hover:scale-[1.025] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col cursor-pointer"
        >
          <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFEB]">
            <img
              src="/assets/products/mamra-almonds.jpg"
              alt="Premium Dry Fruits Collection"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2A1810]/90 text-[#DFCA9B] border border-[#3D2314]">
                01 • Single Harvests
              </span>
            </div>
          </div>
          <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-[#2A1810] group-hover:text-[#9A7730] transition-colors">
                Premium Dry Fruits
              </h3>
              <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
                Authentic Mamra badam, Jumbo W-180 cashews, Kashmiri walnuts, Afghani pistachios, and luscious Medjool dates sorted for peak vitality.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-[#9A7730] group-hover:text-[#2A1810] transition-colors">
              <span>View Dry Fruits Catalogue</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>

        {/* Card 2: Premium Gifting */}
        <div
          onClick={() => onNavigate('gifting')}
          className="group relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white hover:border-[#C5A059] hover:shadow-2xl hover:scale-[1.025] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col cursor-pointer"
        >
          <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFEB]">
            <img
              src="/assets/gifting/imperial-velvet-box.jpg"
              alt="Premium Gifting Hampers"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2A1810]/90 text-[#DFCA9B] border border-[#3D2314]">
                02 • Celebrations
              </span>
            </div>
          </div>
          <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-[#2A1810] group-hover:text-[#9A7730] transition-colors">
                Premium Gifting
              </h3>
              <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
                Thoughtfully curated festive hampers, rigid gold-foiled velvet boxes, and brass platter sets designed for memorable Diwali and family greetings.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-[#9A7730] group-hover:text-[#2A1810] transition-colors">
              <span>Explore Gift Boxes</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>

        {/* Card 3: Custom Gifting */}
        <div
          onClick={() => onNavigate('wedding-gifting')}
          className="group relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white hover:border-[#C5A059] hover:shadow-2xl hover:scale-[1.025] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col cursor-pointer"
        >
          <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFEB]">
            <img
              src="/assets/gifting/trousseau-hamper.jpg"
              alt="Custom Wedding & Corporate Gifting"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2A1810]/90 text-[#DFCA9B] border border-[#3D2314]">
                03 • Bespoke Orders
              </span>
            </div>
          </div>
          <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-[#2A1810] group-hover:text-[#9A7730] transition-colors">
                Custom & Wedding Gifting
              </h3>
              <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
                Tailor-made wedding invitation boxes, bride/groom trousseau hampers, and corporate bulk branding with custom laser engraving and monogram seals.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-[#9A7730] group-hover:text-[#2A1810] transition-colors">
              <span>Discuss Custom Requirements</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
