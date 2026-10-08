import React from 'react';
import { ArrowRight, MapPin, Store } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { ActivePage } from '../../types';

interface HomeHeroProps {
  onNavigate: (page: ActivePage) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-12 lg:py-16 bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#E8DFD5]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A059_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFD5] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#9A7730]">
                Ramgarh Cantonment, Jharkhand
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-[#2A1810] leading-[1.1]">
                Premium Dry Fruits.
                <span className="block italic text-[#9A7730] font-normal">
                  Beautifully Presented.
                </span>
              </h1>
              <p className="font-devanagari text-sm sm:text-base text-[#9A7730] font-medium tracking-wide">
                रामगढ़ छावनी का विशिष्ट मेवा एवं पारंपरिक उपहार बुटीक
              </p>
            </div>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-[#5C3A21] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Discover carefully selected dry fruits and elegant gifting collections at Shree Mewa. Handcrafted keepsakes, wedding trousseau trays, and festive hampers curated for discerning celebrations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  onNavigate('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#B38E46] active:scale-98 text-[#2A1810] font-bold text-sm rounded-full transition-all shadow-md shadow-[#C5A059]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-[#2A1810]" />
              </button>

              <button
                onClick={() => {
                  onNavigate('store');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#FAF7F2] text-[#2A1810] border border-[#E8DFD5] hover:border-[#C5A059] font-bold text-sm rounded-full transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Store className="w-4 h-4 text-[#C5A059]" />
                <span>Visit Our Store</span>
              </button>
            </div>

            {/* Quick Assurance Badges */}
            <div className="pt-4 border-t border-[#E8DFD5] grid grid-cols-3 gap-3 text-center lg:text-left text-xs text-[#7A5840]">
              <div>
                <p className="font-bold text-[#2A1810]">Origin Graded</p>
                <p className="text-[11px] font-light text-[#8C6D53]">Zero artificial polish</p>
              </div>
              <div>
                <p className="font-bold text-[#2A1810]">Custom Boxes</p>
                <p className="text-[11px] font-light text-[#8C6D53]">Laser engraved & seals</p>
              </div>
              <div>
                <p className="font-bold text-[#2A1810]">Ramgarh Retail</p>
                <p className="text-[11px] font-light text-[#8C6D53]">Open 7 days a week</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image & Seal (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Hero Visual Card */}
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F5EFEB]">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80"
                  alt="Shree Mewa Handcrafted Dry Fruit Gift Box"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFCA9B]">
                    Handcrafted Collection
                  </span>
                  <p className="text-xl sm:text-2xl font-serif font-bold">
                    The Royal Wooden Keepsake
                  </p>
                  <p className="text-xs text-[#E8DFD5] font-light mt-1">
                    Featuring Mamra Almonds, W-180 Cashews, & Kashmiri Walnut Giri
                  </p>
                </div>
              </div>

              {/* Floating Seal Stamp */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E8DFD5] hidden sm:flex items-center gap-3">
                <Logo variant="seal" size="sm" />
                <div className="text-left text-xs pr-2">
                  <p className="font-serif font-bold text-[#2A1810]">Shree Mewa</p>
                  <p className="text-[11px] text-[#9A7730] font-bold">Boutique Guarantee</p>
                  <p className="text-[10px] text-[#8C6D53]">Ramgarh Cantt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
