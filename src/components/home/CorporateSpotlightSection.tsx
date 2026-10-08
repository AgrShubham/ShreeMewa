import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ActivePage } from '../../types';

interface CorporateSpotlightSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const CorporateSpotlightSection: React.FC<CorporateSpotlightSectionProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl border border-[#E8DFD5] p-8 sm:p-12 lg:p-16 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-4/3 rounded-2xl overflow-hidden border-2 border-[#E8DFD5] shadow-md bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Gifting Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9A7730] font-sans block">
                INSTITUTIONAL & B2B
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1810]">
                Premium Gifts for Clients & Teams
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#3D2314] leading-relaxed font-light">
              Strengthen corporate relationships and honor your key stakeholders with bespoke dry-fruit gifting suites. Ideal for festive employee appreciation, annual milestones, and high-value client gestures.
            </p>

            {/* Corporate Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#3D2314] pt-1">
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD5] space-y-1">
                <p className="font-bold text-[#2A1810]">Employee Gifting</p>
                <p className="text-[11px] text-[#7A5840]">Diwali & milestones</p>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD5] space-y-1">
                <p className="font-bold text-[#2A1810]">Client Tokens</p>
                <p className="text-[11px] text-[#7A5840]">Executive suites</p>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD5] space-y-1">
                <p className="font-bold text-[#2A1810]">Custom Branding</p>
                <p className="text-[11px] text-[#7A5840]">Logo hot-foil stamping</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('corporate-gifting');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] font-bold text-xs rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Enquire for Corporate Gifting</span>
                <ArrowRight className="w-4 h-4 text-[#2A1810]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
