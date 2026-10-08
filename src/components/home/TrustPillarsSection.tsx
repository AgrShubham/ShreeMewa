import React from 'react';
import { ShieldCheck, Sparkles, Package, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const TrustPillarsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        label="Our Standard"
        hindiSubtitle="हमारा समर्पण एवं मानक"
        title="Why Discerning Families Choose Shree Mewa"
        description="Built on transparent grading, uncompromised freshness, and artisanal packaging craftsmanship."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* Pillar 1 */}
        <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#C5A059] hover:shadow-lg transition-all space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] flex items-center justify-center text-[#9A7730] border border-[#E8DFD5]">
            <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
          </div>
          <h3 className="text-lg font-serif font-bold text-[#2A1810]">
            Premium Selection
          </h3>
          <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
            Strict visual and crunch grading. No broken fragments, chemical bleaching, or artificial glazing.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#C5A059] hover:shadow-lg transition-all space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] flex items-center justify-center text-[#9A7730] border border-[#E8DFD5]">
            <Sparkles className="w-6 h-6 text-[#C5A059]" />
          </div>
          <h3 className="text-lg font-serif font-bold text-[#2A1810]">
            Thoughtful Presentation
          </h3>
          <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
            Every dry-fruit compartment is arranged with optical balance, sealing in aroma and aesthetic distinction.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#C5A059] hover:shadow-lg transition-all space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] flex items-center justify-center text-[#9A7730] border border-[#E8DFD5]">
            <Package className="w-6 h-6 text-[#C5A059]" />
          </div>
          <h3 className="text-lg font-serif font-bold text-[#2A1810]">
            Beautiful Packaging
          </h3>
          <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
            Hand-carved wooden chests, metallic-embossed velvet boxes, and reusable brass heirloom platters.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#C5A059] hover:shadow-lg transition-all space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] flex items-center justify-center text-[#9A7730] border border-[#E8DFD5]">
            <HeartHandshake className="w-6 h-6 text-[#C5A059]" />
          </div>
          <h3 className="text-lg font-serif font-bold text-[#2A1810]">
            Personal Service
          </h3>
          <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
            Warm hospitality at our Ramgarh store, with customized batch preparation tailored to your preferences.
          </p>
        </div>
      </div>
    </section>
  );
};
