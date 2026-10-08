import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ActivePage } from '../../types';

interface BrandIntroSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const BrandIntroSection: React.FC<BrandIntroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F5EFEB] rounded-3xl border border-[#E8DFD5] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white">
              <img
                src="/assets/gifting/royal-wooden-chest.jpg"
                alt="Authentic Handcrafted Dry Fruit Keepsake Chest at Shree Mewa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2A1810] text-[#DFCA9B] border border-[#3D2314] py-2 px-4 rounded-xl text-xs font-bold shadow-md">
              Pure • Unadulterated • Hand-graded
            </div>
          </div>

          {/* Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9A7730] font-sans block">
                THE SHREE MEWA EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1810] tracking-tight leading-tight">
                Where Quality Meets Beautiful Gifting
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#3D2314] leading-relaxed font-light">
              At Shree Mewa, we believe that sharing dry fruits is an age-old Indian tradition of blessing, vitality, and respect. We source only peak-harvest nuts—from rich oil-bearing Iranian Mamra almonds to snow-white Kashmiri walnut kernels—and unite them with bespoke handcrafted boxes that leave an indelible impression on your recipients.
            </p>

            <p className="text-sm text-[#5C3A21] leading-relaxed font-light">
              Whether you are curating gifts for a grand wedding celebration, preparing corporate executive tokens, or picking up daily wholesome nutrition from our Ramgarh Cantonment boutique, every pack reflects genuine care.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#9A7730] hover:text-[#2A1810] transition-colors group cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
