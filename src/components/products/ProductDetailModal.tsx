import React, { useEffect, useState } from 'react';
import {
  X,
  CheckCircle2,
  MessageCircle,
  MapPin,
  Sparkles,
  ShieldCheck,
  Scale,
  Phone,
  ShoppingBag,
  Plus,
  Minus
} from 'lucide-react';
import { Product } from '../../types';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';
import { useCart } from '../../context/CartContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addProduct } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>('500g');
  const [quantity, setQuantity] = useState<number>(1);

  // Initialize selected weight when product changes
  useEffect(() => {
    if (product) {
      const defaultWeight = product.weights.includes('500g')
        ? '500g'
        : product.weights[0] || '500g';
      setSelectedWeight(defaultWeight);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
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
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMsg = `Hello Shree Mewa, I am interested in ordering ${quantity} × "${product.name}" (${selectedWeight}, ${product.pricingPolicy || 'standard rates'}). Please confirm current stock and delivery at the Ramgarh store.`;

  const handleAddToBag = () => {
    addProduct(product, selectedWeight, quantity);
    onClose();
  };

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
                  <span>Harvest Origin: {product.origin}</span>
                </div>
              )}
            </div>

            {/* Top Left Veg Dot */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-md border border-[#E8DFD5] shadow-xs flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 border-2 border-emerald-600 flex items-center justify-center rounded-xs">
                <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              </div>
              <span className="text-[10px] font-semibold text-[#2A1810]">100% Vegetarian</span>
            </div>
          </div>

          {/* Right: Content & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto bg-white">
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

                {/* Direct Store Pricing Banner */}
                {product.pricingPolicy && (
                  <div className="mt-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8C6D53] block font-semibold">
                        Direct Store Price
                      </span>
                      <span className="text-xl font-serif font-bold text-[#2A1810]">
                        {product.pricingPolicy}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#9A7730] font-medium bg-white px-2 py-1 rounded-md border border-[#E8DFD5]">
                      Ramgarh Retail Rate
                    </span>
                  </div>
                )}
              </div>

              <p className="text-sm text-[#3D2314] leading-relaxed font-light">
                {product.description}
              </p>

              {/* Pack Sizes Selector */}
              <div className="space-y-2 pt-2 border-t border-[#E8DFD5]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5C3A21] font-bold">Select Pack Weight:</span>
                  <div className="flex items-center gap-1.5">
                    {product.weights.map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setSelectedWeight(w)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedWeight === w
                            ? 'bg-[#C5A059] text-[#2A1810] shadow-2xs'
                            : 'bg-[#FAF7F2] text-[#5C3A21] border border-[#E8DFD5] hover:border-[#C5A059]'
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Stepper */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[#5C3A21] font-bold">Quantity:</span>
                  <div className="inline-flex items-center border border-[#E8DFD5] rounded-lg bg-[#FAF7F2]">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1.5 hover:bg-[#E8DFD5] text-[#2A1810] rounded-l-lg transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-[#2A1810]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1.5 hover:bg-[#E8DFD5] text-[#2A1810] rounded-r-lg transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quality Highlights */}
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

              {/* FSSAI Regulatory Footnote */}
              <div className="flex items-center gap-2 text-[10px] text-[#7A5840] pt-1 border-t border-[#E8DFD5]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>FSSAI Lic. No: {BUSINESS_CONFIG.fssaiNumber} • 100% Unadulterated</span>
              </div>
            </div>

            {/* Actions: Add to Bag + WhatsApp */}
            <div className="space-y-2.5 pt-4 border-t border-[#E8DFD5]">
              <button
                type="button"
                onClick={handleAddToBag}
                className="w-full py-3 px-4 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#2A1810]" />
                <span>Add {quantity} × {selectedWeight} to Inquiry Bag</span>
              </button>

              <a
                href={getWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Order Directly on WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-[#7A5840] px-1 pt-1">
                <span>Available at Ramgarh Store</span>
                <span className="font-medium text-[#2A1810]">Desk: {BUSINESS_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
