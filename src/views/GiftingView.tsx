import React, { useState, useMemo } from 'react';
import { Gift, Sparkles, MessageCircle, Heart, Award, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GiftCard } from '../components/gifting/GiftCard';
import { GIFT_COLLECTIONS, GIFT_CATEGORIES } from '../data/gifting';
import { GiftCategory, GiftCollectionItem } from '../types';
import { getWhatsAppLink } from '../data/business';

interface GiftingViewProps {
  onSelectGift: (gift: GiftCollectionItem) => void;
}

export const GiftingView: React.FC<GiftingViewProps> = ({ onSelectGift }) => {
  const [selectedCategory, setSelectedCategory] = useState<GiftCategory>('all');

  const filteredGifts = useMemo(() => {
    if (selectedCategory === 'all') return GIFT_COLLECTIONS;
    return GIFT_COLLECTIONS.filter((g) => g.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Gifting Hero */}
      <section className="bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2] py-8 sm:py-12 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionHeading
            label="Handcrafted Presentations"
            hindiSubtitle="विशिष्ट अवसरों हेतु शाही उपहार संग्रह"
            title="Premium Gifting, Beautifully Presented"
            description="Explore heirloom wooden keepsake chests, gold-foiled velvet boxes, and handcrafted festive hampers crafted for weddings, festivals, and milestone moments."
          />
        </div>
      </section>

      {/* Occasions / Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {GIFT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as GiftCategory)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#C5A059] text-[#2A1810] shadow-xs'
                  : 'bg-white text-[#5C3A21] border border-[#E8DFD5] hover:border-[#C5A059] hover:bg-[#FAF7F2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gift Cards Grid */}
        <div className="mt-10">
          {filteredGifts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGifts.map((gift) => (
                <GiftCard
                  key={gift.id}
                  gift={gift}
                  onSelect={onSelectGift}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-3xl border border-[#E8DFD5] p-8 space-y-3 shadow-sm">
              <p className="text-base font-serif font-bold text-[#2A1810]">
                No gift hampers found in this collection
              </p>
              <p className="text-xs text-[#5C3A21]">
                Try selecting a different occasion or reset filters to browse all hampers.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-2 px-4 py-2 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] text-xs font-bold rounded-full cursor-pointer shadow-xs"
              >
                View All Hampers
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Packaging Walkthrough Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#24140D] text-white p-8 sm:p-12 lg:p-16 border border-[#3D2314] shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#DFCA9B]">
              BESPOKE ATELIER
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF7F2]">
              Need a Custom Gift Box Crafted?
            </h3>
            <p className="text-sm text-[#C9BEB2] leading-relaxed font-light">
              We specialize in custom creations for families and organizations. Select your container material (teak wood, brass, brocade silk, or imported rigid board), choose specific dry fruits and weights, and personalize with custom ribbon printing and wax-sealed stationery.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppLink('Hello Shree Mewa, I would like to discuss creating a custom bespoke dry fruit gift box.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#DFCA9B] hover:bg-[#C5A059] text-[#2A1810] font-bold text-xs rounded-full transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#2A1810]" />
                <span>Enquire Custom Packaging on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
