import React from 'react';
import { X, CheckCircle2, MessageCircle, MapPin, Sparkles, ShieldCheck, Scale } from 'lucide-react';
import { Product } from '../../types';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMsg = `Hello Shree Mewa, I am interested in inquiring about "${product.name}" (${product.categoryLabel}). Please share details on current availability and prices at the Ramgarh store.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD5] animate-in zoom-in-95 duration-200 text-[#2A1810]"
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
          {/* Left: Image & Badge */}
          <div className="relative aspect-4/3 md:aspect-auto h-64 md:h-full bg-[#F5EFEB] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#DFCA9B] font-semibold">
                {product.categoryLabel}
              </span>
              <p className="font-devanagari text-lg font-bold">{product.hindiName}</p>
              {product.origin && (
                <div className="flex items-center gap-1.5 text-xs text-[#E8DFD5] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{product.origin}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Content & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#FAF7F2] text-[#8C6D53] border border-[#E8DFD5]">
                    SKU: {product.sku}
                  </span>
                  {product.grade && (
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#C5A059] text-[#2A1810]">
                      {product.grade}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2A1810]">
                  {product.name}
                </h3>
                <p className="text-xs text-[#5C3A21] font-light mt-1">
                  {product.tagline}
                </p>
              </div>

              <p className="text-sm text-[#3D2314] leading-relaxed font-light">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2 pt-2 border-t border-[#E8DFD5]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9A7730]">
                  Quality Highlights:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#3D2314]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pack Sizes & Packaging */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5C3A21] font-medium">Standard Pack Sizes:</span>
                  <div className="flex items-center gap-1.5">
                    {product.weights.map((w) => (
                      <span key={w} className="px-2 py-0.5 rounded bg-[#FAF7F2] text-[#2A1810] font-semibold border border-[#E8DFD5]">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
                {product.packagingType && (
                  <p className="text-[11px] text-[#7A5840]">
                    Packaging: <span className="text-[#2A1810] font-medium">{product.packagingType}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Store & WhatsApp CTA */}
            <div className="space-y-3 pt-4 border-t border-[#E8DFD5]">
              <a
                href={getWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire Availability on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-[#7A5840] px-1">
                <span>Available at Ramgarh Store</span>
                <span className="font-medium text-[#2A1810]">Call: {BUSINESS_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
