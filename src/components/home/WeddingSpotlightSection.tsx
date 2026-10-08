import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../../data/business';
import { ActivePage } from '../../types';

interface WeddingSpotlightSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const WeddingSpotlightSection: React.FC<WeddingSpotlightSectionProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#24140D] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#3D2314] shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D2314] border border-[#5C3A21] text-xs text-[#DFCA9B]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Wedding & Event Gifting</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF7F2] leading-tight">
              Make Your Celebration Memorable
            </h2>

            <p className="text-sm sm:text-base text-[#C9BEB2] leading-relaxed font-light">
              Premium dry-fruit hampers and elegant packaging for weddings, engagements, and special family celebrations. We design bespoke boxes aligned with your wedding invitation aesthetic.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#E8DFD5]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Custom Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Bulk Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Personalized Gifting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Multiple Collections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Event Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Doorstep Coordination</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  onNavigate('wedding-gifting');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 bg-[#DFCA9B] hover:bg-[#C5A059] text-[#2A1810] font-bold text-xs rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Explore Wedding Gifting</span>
                <ArrowRight className="w-4 h-4 text-[#2A1810]" />
              </button>

              <a
                href={getWhatsAppLink('Hello Shree Mewa, I would like to inquire about wedding gift hampers for our upcoming celebration in Ramgarh/Jharkhand.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#3D2314] border border-[#5C3A21] hover:bg-[#5C3A21] text-[#DFCA9B] font-semibold text-xs rounded-full transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss On WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-4/3 rounded-2xl overflow-hidden border-2 border-[#5C3A21] shadow-2xl bg-[#3D2314]">
              <img
                src="/assets/gifting/trousseau-hamper.jpg"
                alt="Wedding Dry Fruit Gift Hampers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
