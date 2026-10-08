import React from 'react';
import { MessageCircle, Sparkles, ChevronRight, Eye, MapPin } from 'lucide-react';
import { Product } from '../../types';
import { getWhatsAppLink } from '../../data/business';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const whatsappMsg = `Hello Shree Mewa, I am interested in "${product.name}" (${product.hindiName || ''}) priced at ${product.pricingPolicy || 'standard rates'}. Could you please confirm current stock and pack sizes available at your Ramgarh store?`;

  return (
    <div className="group bg-white rounded-2xl border border-[#E8DFD5] overflow-hidden hover:shadow-2xl hover:border-[#C5A059] hover:scale-[1.025] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col h-full">
      {/* Product Image Container */}
      <div
        onClick={() => onSelect(product)}
        className="relative aspect-4/3 overflow-hidden bg-[#F5EFEB] cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="w-full py-2 px-3 bg-white/95 backdrop-blur-sm text-[#2A1810] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border border-[#E8DFD5] hover:border-[#C5A059] shadow-sm hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>View Harvest Details</span>
          </button>
        </div>

        {/* Badges Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.bestseller && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C5A059] text-[#2A1810] shadow-xs">
              <Sparkles className="w-3 h-3" />
              <span>Bestseller</span>
            </span>
          )}
          {product.grade && (
            <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold bg-[#2A1810]/85 backdrop-blur-xs text-[#DFCA9B] border border-[#3D2314]">
              {product.grade}
            </span>
          )}
        </div>

        {/* Top Right: Green Veg Dot */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs p-1 rounded-md border border-[#E8DFD5] shadow-xs flex items-center justify-center" title="100% Certified Vegetarian">
          <div className="w-3.5 h-3.5 border-2 border-emerald-600 flex items-center justify-center rounded-xs">
            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4 bg-white">
        <div>
          {/* Category & Origin */}
          <div className="flex items-center justify-between text-xs text-[#7A5840] mb-1">
            <span className="uppercase tracking-wider font-semibold text-[10px] text-[#9A7730]">
              {product.categoryLabel}
            </span>
            {product.origin && (
              <span className="inline-flex items-center gap-1 text-[10px] text-[#8C6D53]">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>{product.origin}</span>
              </span>
            )}
          </div>

          {/* Title & Hindi Name */}
          <div className="flex items-start justify-between gap-2">
            <h3
              onClick={() => onSelect(product)}
              className="text-lg font-serif font-bold text-[#2A1810] group-hover:text-[#9A7730] transition-colors cursor-pointer"
            >
              {product.name}
            </h3>
            {product.hindiName && (
              <span className="font-devanagari text-xs text-[#7A5840] shrink-0 mt-1">
                {product.hindiName}
              </span>
            )}
          </div>

          {/* Tagline */}
          <p className="text-xs text-[#5C3A21] line-clamp-2 mt-1.5 font-light leading-relaxed">
            {product.tagline}
          </p>

          {/* Price & Pack Sizes Strip */}
          <div className="mt-3 pt-3 border-t border-[#F0EAE1] flex items-center justify-between">
            {product.pricingPolicy ? (
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8C6D53] block">Direct Store Price</span>
                <span className="text-base font-serif font-bold text-[#2A1810]">
                  {product.pricingPolicy}
                </span>
              </div>
            ) : (
              <span className="text-xs font-medium text-[#9A7730]">Enquire for Today's Rate</span>
            )}

            <div className="flex items-center gap-1">
              {product.weights.map((w) => (
                <span
                  key={w}
                  className="text-[9px] px-1.5 py-0.5 rounded bg-[#FAF7F2] text-[#5C3A21] font-semibold border border-[#E8DFD5]"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-[#E8DFD5] flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(product)}
            className="text-xs font-medium text-[#5C3A21] hover:text-[#2A1810] inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Harvest Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={getWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/15 hover:bg-[#25D366] text-[#1E7E34] hover:text-white rounded-lg text-xs font-semibold transition-all duration-200"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};
