import React, { useState, useEffect } from 'react';
import { X, Download, Share2, MessageCircle, BookOpen, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/products';
import { GIFT_COLLECTIONS } from '../../data/gifting';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';
import { Logo } from '../brand/Logo';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Shree Mewa — Premium Dry Fruits & Gifting Catalogue',
        text: 'Explore the curated dry fruit collections and bespoke hampers from Shree Mewa, Ramgarh Cantonment.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 cursor-pointer"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-[#FAF7F2] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD5] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 text-[#2A1810] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#24140D] text-white px-6 py-4 flex items-center justify-between border-b border-[#3D2314]">
          <div className="flex items-center gap-3">
            <Logo variant="white" size="sm" />
            <div className="hidden sm:block pl-3 border-l border-[#3D2314] text-xs text-[#DFCA9B]">
              <span>Digital Lookbook & Collection Overview</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg bg-[#3D2314] hover:bg-[#C5A059] hover:text-[#2A1810] text-xs text-[#DFCA9B] flex items-center gap-1.5 transition-colors cursor-pointer border border-[#5C3A21]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={handlePrintOrDownload}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#DFCA9B] hover:bg-[#C5A059] text-[#2A1810] text-xs font-bold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#C9BEB2] hover:text-white hover:bg-[#3D2314] transition-colors cursor-pointer ml-1"
              aria-label="Close catalogue"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Catalogue Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10 bg-[#FAF7F2]">
          {/* Cover Page Card */}
          <div className="relative rounded-2xl bg-[#24140D] text-white p-8 sm:p-12 text-center overflow-hidden border border-[#3D2314] shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DFCA9B_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#3D2314] border border-[#5C3A21] text-[#DFCA9B] mb-2">
                <Logo variant="seal" size="sm" className="text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF7F2]">
                SHREE MEWA
              </h2>
              <p className="font-devanagari text-base text-[#DFCA9B]">
                विशिष्ट सूखे मेवे एवं पारंपरिक उपहार संग्रह
              </p>
              <div className="w-16 h-px bg-[#DFCA9B] mx-auto my-3" />
              <p className="text-xs sm:text-sm text-[#C9BEB2] font-light leading-relaxed">
                Ramgarh Cantonment, Jharkhand, India • Retail Boutique & Custom Gifting Atelier
              </p>
            </div>
          </div>

          {/* Section: Premium Dry Fruits Overview */}
          <div className="space-y-4">
            <div className="border-b border-[#E8DFD5] pb-2 flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-[#2A1810]">
                1. Core Dry Fruits Harvest
              </h3>
              <span className="text-xs text-[#9A7730] font-bold uppercase tracking-wider">
                Origin-Graded
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCTS_DATA.map((p) => (
                <div key={p.id} className="p-4 bg-white rounded-xl border border-[#E8DFD5] flex gap-3 items-start shadow-sm">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 rounded-lg object-cover bg-[#F5EFEB] shrink-0 border border-[#E8DFD5]"
                  />
                  <div className="space-y-1 text-xs">
                    <p className="font-serif font-bold text-[#2A1810] text-sm leading-tight">{p.name}</p>
                    <p className="text-[11px] text-[#5C3A21] font-devanagari">{p.hindiName}</p>
                    <p className="text-[10px] text-[#7A5840]">{p.grade}</p>
                    <div className="flex gap-1 pt-1">
                      {p.weights.map((w) => (
                        <span key={w} className="text-[9px] px-1 py-0.5 rounded bg-[#FAF7F2] text-[#5C3A21] border border-[#E8DFD5]">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Gifting Collections */}
          <div className="space-y-4">
            <div className="border-b border-[#E8DFD5] pb-2 flex items-center justify-between">
              <h3 className="text-xl font-serif font-bold text-[#2A1810]">
                2. Signature Gifting & Wedding Hampers
              </h3>
              <span className="text-xs text-[#9A7730] font-bold uppercase tracking-wider">
                Bespoke Packaging
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GIFT_COLLECTIONS.map((g) => (
                <div key={g.id} className="p-4 bg-white rounded-xl border border-[#E8DFD5] flex flex-col justify-between space-y-3 shadow-sm">
                  <div className="flex gap-3">
                    <img
                      src={g.image}
                      alt={g.name}
                      className="w-20 h-20 rounded-lg object-cover bg-[#F5EFEB] shrink-0 border border-[#E8DFD5]"
                    />
                    <div className="space-y-1 text-xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7730]">
                        {g.categoryLabel}
                      </span>
                      <p className="font-serif font-bold text-[#2A1810] text-sm leading-tight">{g.name}</p>
                      <p className="text-[11px] text-[#5C3A21] line-clamp-2">{g.boxType}</p>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#7A5840] border-t border-[#E8DFD5] pt-2">
                    <span className="font-semibold text-[#2A1810]">Includes: </span>
                    {g.includedItems.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Store Visit Footer Card */}
          <div className="p-6 rounded-2xl bg-[#24140D] border border-[#3D2314] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg text-white">
            <div>
              <p className="font-serif font-bold text-lg text-[#FAF7F2]">
                Visit Shree Mewa in Ramgarh Cantonment
              </p>
              <p className="text-xs text-[#C9BEB2]">
                {BUSINESS_CONFIG.addressLine} • Open All 7 Days ({BUSINESS_CONFIG.openingHours})
              </p>
            </div>

            <a
              href={getWhatsAppLink('Hello Shree Mewa, I reviewed your digital catalogue and would like to place an order or schedule a store visit.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-semibold transition-colors shrink-0 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Catalogue Enquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
