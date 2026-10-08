import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GiftCard } from '../gifting/GiftCard';
import { GIFT_COLLECTIONS } from '../../data/gifting';
import { ActivePage, GiftCollectionItem } from '../../types';

interface SignatureGiftingSectionProps {
  onNavigate: (page: ActivePage) => void;
  onSelectGift: (gift: GiftCollectionItem) => void;
}

export const SignatureGiftingSection: React.FC<SignatureGiftingSectionProps> = ({
  onNavigate,
  onSelectGift,
}) => {
  const featuredGifts = GIFT_COLLECTIONS.slice(0, 4);

  return (
    <section className="bg-[#F5EFEB] py-12 border-y border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            centered={false}
            label="Signature Hampers"
            hindiSubtitle="उपहार जो दिल जीत लें"
            title="Gifts That Make an Impression"
            description="Thoughtfully curated dry-fruit gifts for celebrations, festivals, and special moments. Housed in heirloom wooden boxes, velvet containers, and artisan platters."
          />

          <button
            onClick={() => {
              onNavigate('gifting');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059] text-[#2A1810] hover:bg-[#B38E46] text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs"
          >
            <span>Explore Gifting</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2A1810]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredGifts.map((gift) => (
            <GiftCard
              key={gift.id}
              gift={gift}
              onSelect={onSelectGift}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
