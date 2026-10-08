import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Sparkles, Gift, Layers, Calendar, Tag } from 'lucide-react';
import { GiftCollectionItem } from '../../types';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';

interface GiftDetailModalProps {
  gift: GiftCollectionItem | null;
  onClose: () => void;
}

export const GiftDetailModal: React.FC<GiftDetailModalProps> = ({ gift, onClose }) => {
  useEffect(() => {
    if (!gift) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gift, onClose]);

  if (!gift) return null;

  const whatsappMsg = `Hello Shree Mewa, I would like to inquire about "${gift.name}" (${gift.categoryLabel}, Price range: ${gift.priceRange || 'on request'}). Please share bulk pricing, lead time, and customization options for our upcoming celebration.`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 cursor-pointer"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD5] animate-in zoom-in-95 duration-200 text-[#2A1810] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-[#FAF7F2] text-[#2A1810] rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer border border-[#E8DFD5]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative aspect-4/3 md:aspect-auto h-64 md:h-full bg-[#F5EFEB] overflow-hidden">
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#DFCA9B] font-semibold">
                {gift.categoryLabel}
              </span>
              <p className="font-serif text-xl font-bold">{gift.name}</p>
              <p className="text-xs text-[#E8DFD5] mt-1">{gift.boxType}</p>
            </div>

            {gift.moqText && (
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#E8DFD5] text-[10px] font-bold text-[#2A1810] shadow-xs">
                {gift.moqText}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto bg-white">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#FAF7F2] text-[#9A7730] border border-[#E8DFD5]">
                  {gift.categoryLabel}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#2A1810] mt-2">
                  {gift.name}
                </h3>
                <p className="text-xs text-[#5C3A21] font-light mt-1">
                  {gift.tagline}
                </p>

                {/* Price Range Banner */}
                {gift.priceRange && (
                  <div className="mt-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8C6D53] block font-semibold">
                        Estimated Budget Range
                      </span>
                      <span className="text-xl font-serif font-bold text-[#2A1810]">
                        {gift.priceRange}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#9A7730] font-medium bg-white px-2 py-1 rounded-md border border-[#E8DFD5]">
                      Direct Boutique Rate
                    </span>
                  </div>
                )}
              </div>

              <p className="text-sm text-[#3D2314] leading-relaxed font-light">
                {gift.description}
              </p>

              {/* Inclusions */}
              <div className="space-y-2 pt-2 border-t border-[#E8DFD5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A7730]">
                  <Gift className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Curated Harvest Inclusions:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#3D2314]">
                  {gift.includedItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bespoke Customization Options */}
              <div className="space-y-2 pt-2 border-t border-[#E8DFD5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9A7730]">
                  <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Customization Highlights:</span>
                </div>
                <ul className="space-y-1 text-xs text-[#3D2314]">
                  {gift.customizationOptions.map((opt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#C5A059] font-bold">•</span>
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Occasions */}
              <div className="space-y-1.5 pt-2 border-t border-[#E8DFD5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A5840]">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Recommended Occasions:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {gift.occasions.map((occ) => (
                    <span key={occ} className="text-xs px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#5C3A21] font-medium border border-[#E8DFD5]">
                      {occ}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#E8DFD5]">
              <a
                href={getWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire Gifting on WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-[#7A5840]">
                Custom bulk orders handled with personal consultation at our Ramgarh Cantonment boutique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
