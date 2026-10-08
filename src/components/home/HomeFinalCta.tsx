import React from 'react';
import { Logo } from '../brand/Logo';
import { ActivePage } from '../../types';

interface HomeFinalCtaProps {
  onNavigate: (page: ActivePage) => void;
}

export const HomeFinalCta: React.FC<HomeFinalCtaProps> = ({ onNavigate }) => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <div className="p-10 sm:p-14 rounded-3xl bg-white border border-[#E8DFD5] shadow-xl space-y-6">
        <div className="flex justify-center">
          <Logo variant="mark" size="md" />
        </div>

        <div className="space-y-2 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1810]">
            Something Special Awaits.
          </h2>
          <p className="text-sm sm:text-base text-[#5C3A21] font-light">
            Discover premium dry fruits and beautiful gifting at Shree Mewa. Visit our showroom in Ramgarh Cantonment or enquire directly on WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              onNavigate('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] font-bold text-xs rounded-full transition-all shadow-sm cursor-pointer"
          >
            Explore Collection
          </button>

          <button
            onClick={() => {
              onNavigate('store');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#2A1810] border border-[#E8DFD5] font-bold text-xs rounded-full transition-all cursor-pointer"
          >
            Visit Our Store
          </button>
        </div>
      </div>
    </section>
  );
};
