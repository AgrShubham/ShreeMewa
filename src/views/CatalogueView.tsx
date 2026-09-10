import React, { useState } from 'react';
import { Download, Share2, MessageCircle, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PRODUCTS_DATA } from '../data/products';
import { GIFT_COLLECTIONS } from '../data/gifting';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';
import { Logo } from '../components/brand/Logo';

export const CatalogueView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Shree Mewa — Digital Lookbook',
        text: 'Explore premium dry fruits and gifting collections at Shree Mewa in Ramgarh Cantonment.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F5EFEB] to-[#FAF7F2] py-8 sm:py-12 border-b border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionHeading
            label="Digital Lookbook"
            hindiSubtitle="डिजिटल उत्पाद एवं उपहार कैटलॉग"
            title="Collection & Harvest Catalogue"
            description="A comprehensive view of our origin-graded dry fruits, luxury wooden keepsake hampers, and wedding trousseau collections available at our Ramgarh Cantonment boutique."
          />

          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-full bg-[#3D2314] hover:bg-[#2A1810] text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Print / Save Lookbook</span>
            </button>

            <button
              onClick={handleShare}
              className="px-5 py-2.5 rounded-full bg-white border border-[#E8DFD5] hover:border-[#C5A059] text-[#2A1810] text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />}
              <span>{copied ? 'Link Copied' : 'Share Lookbook'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Digital Lookbook Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Cover Sheet Box */}
        <div className="relative rounded-3xl bg-[#2A1810] text-white p-8 sm:p-14 text-center overflow-hidden border border-[#3D2314] shadow-xl">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <Logo variant="seal" size="md" className="mx-auto text-white" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF7F2]">
              SHREE MEWA
            </h2>
            <p className="font-devanagari text-base text-[#DFCA9B]">
              रामगढ़ छावनी • विशिष्ट सूखे मेवे एवं पारंपरिक उपहार संग्रह
            </p>
            <div className="w-20 h-px bg-[#C5A059] mx-auto my-3" />
            <p className="text-xs sm:text-sm text-[#C9BEB2] font-light leading-relaxed">
              Curated Harvest Editions • Bespoke Packaging Atelier • Main Road, Ramgarh Cantonment, Jharkhand
            </p>
          </div>
        </div>

        {/* Section 1: Dry Fruits Harvests */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DFD5] pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#2A1810]">
                1. Single-Origin Dry Fruits Harvests
              </h3>
              <p className="text-xs text-[#7A5840]">
                100% natural, sorted without chemical glazing or preservatives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_DATA.map((p) => (
              <div
                key={p.id}
                className="p-5 bg-white rounded-2xl border border-[#E8DFD5] shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform flex flex-col justify-between space-y-4"
              >
                <div className="flex gap-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-20 h-20 rounded-xl object-cover bg-[#F4EFEA] shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C5A059]">
                      {p.categoryLabel}
                    </span>
                    <h4 className="font-serif font-bold text-[#2A1810] text-base leading-tight">
                      {p.name}
                    </h4>
                    {p.hindiName && (
                      <p className="text-xs text-[#7A5840] font-devanagari">{p.hindiName}</p>
                    )}
                    {p.grade && (
                      <p className="text-[10px] text-[#A8988A] font-medium">{p.grade}</p>
                    )}
                  </div>
                </div>

                <p className="text-xs text-[#5C3A21] font-light line-clamp-2">
                  {p.description}
                </p>

                <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
                  <div className="flex gap-1">
                    {p.weights.map((w) => (
                      <span key={w} className="px-2 py-0.5 rounded bg-[#FAF7F2] text-[#3D2314] text-[10px] font-medium border border-[#E8DFD5]">
                        {w}
                      </span>
                    ))}
                  </div>
                  <a
                    href={getWhatsAppLink(`Hello Shree Mewa, I am inquiring about "${p.name}" from your catalogue.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#25D366] hover:underline"
                  >
                    Enquire →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Gifting Collections */}
        <div className="space-y-6">
          <div className="border-b border-[#E8DFD5] pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#2A1810]">
                2. Signature Gifting & Wedding Hampers
              </h3>
              <p className="text-xs text-[#7A5840]">
                Bespoke containers in teak wood, brass platters, and luxury rigid velvet boxes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GIFT_COLLECTIONS.map((g) => (
              <div
                key={g.id}
                className="p-6 bg-white rounded-2xl border border-[#E8DFD5] shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform flex flex-col justify-between space-y-4"
              >
                <div className="flex gap-4">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-24 h-24 rounded-xl object-cover bg-[#F4EFEA] shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                      {g.categoryLabel}
                    </span>
                    <h4 className="font-serif font-bold text-[#2A1810] text-lg leading-tight">
                      {g.name}
                    </h4>
                    <p className="text-xs text-[#7A5840] font-light">{g.boxType}</p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-[#5C3A21] bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFD5]">
                  <span className="font-semibold text-[#2A1810] block text-[11px]">Contents:</span>
                  <p>{g.includedItems.join(' • ')}</p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#7A5840]">
                    Occasions: {g.occasions.slice(0, 2).join(', ')}
                  </span>
                  <a
                    href={getWhatsAppLink(`Hello Shree Mewa, I am inquiring about the "${g.name}" from your catalogue.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#25D366] hover:underline"
                  >
                    Enquire Box →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
