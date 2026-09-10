import React from 'react';
import { Sparkles, MessageCircle, Gift, ChevronRight, Eye } from 'lucide-react';
import { GiftCollectionItem } from '../../types';
import { getWhatsAppLink } from '../../data/business';

interface GiftCardProps {
  gift: GiftCollectionItem;
  onSelect: (gift: GiftCollectionItem) => void;
}

export const GiftCard: React.FC<GiftCardProps> = ({ gift, onSelect }) => {
  const whatsappMsg = `Hello Shree Mewa, I am interested in inquiring about the "${gift.name}" (${gift.categoryLabel}). Please share photos, box customization options, and pricing.`;

  return (
    <div className="group bg-white rounded-3xl border border-[#E8DFD5] overflow-hidden hover:shadow-2xl hover:border-[#C5A059] hover:scale-[1.025] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col h-full">
      {/* Visual Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFEB]">
        <img
          src={gift.image}
          alt={gift.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <button
            onClick={() => onSelect(gift)}
            className="w-full py-2.5 px-4 bg-white/95 backdrop-blur-sm text-[#2A1810] text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 border border-[#E8DFD5] hover:border-[#C5A059] shadow-sm hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>View Gifting Details & Inclusions</span>
          </button>
        </div>

        {/* Category Pill */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2A1810]/90 text-[#DFCA9B] border border-[#3D2314] shadow-xs">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>{gift.categoryLabel}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-5 bg-white">
        <div className="space-y-3">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#9A7730] block mb-1">
              {gift.boxType}
            </span>
            <h3
              onClick={() => onSelect(gift)}
              className="text-xl font-serif font-bold text-[#2A1810] group-hover:text-[#9A7730] transition-colors cursor-pointer"
            >
              {gift.name}
            </h3>
          </div>

          <p className="text-xs text-[#5C3A21] font-light leading-relaxed line-clamp-2">
            {gift.tagline}
          </p>

          {/* Included Items Preview */}
          <div className="space-y-1.5 pt-2 border-t border-[#E8DFD5]">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6D53] block">
              Curated Contents:
            </span>
            <ul className="text-xs text-[#3D2314] space-y-1">
              {gift.includedItems.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5 truncate">
                  <span className="w-1 h-1 rounded-full bg-[#C5A059] shrink-0" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
              {gift.includedItems.length > 3 && (
                <li className="text-[11px] text-[#7A5840] italic">
                  + {gift.includedItems.length - 3} more specialty items
                </li>
              )}
            </ul>
          </div>

          {/* Suitable Occasions Pills */}
          <div className="flex flex-wrap gap-1 pt-1">
            {gift.occasions.slice(0, 3).map((occ) => (
              <span
                key={occ}
                className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#5C3A21] border border-[#E8DFD5]"
              >
                {occ}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between gap-3">
          <button
            onClick={() => onSelect(gift)}
            className="text-xs font-medium text-[#5C3A21] hover:text-[#2A1810] inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Customization</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#1E7E34] hover:text-white rounded-xl text-xs font-semibold transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Enquire Box</span>
          </a>
        </div>
      </div>
    </div>
  );
};
