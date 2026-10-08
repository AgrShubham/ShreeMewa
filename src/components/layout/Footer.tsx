import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Instagram, Facebook, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';
import { ActivePage } from '../../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: ActivePage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24140D] text-[#E8DFD5] border-t border-[#3D2314] relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#3D2314]">
          {/* Col 1: Brand Info & Seal (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center">
              <Logo variant="white" size="lg" />
            </div>

            <p className="text-sm text-[#C9BEB2] leading-relaxed font-light pr-4">
              Purveyors of rare, origin-graded dry fruits and bespoke handcrafted hampers. Serving families, weddings, and corporate patrons from our physical boutique in Ramgarh Cantonment, Jharkhand.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Logo variant="seal" size="sm" className="opacity-90 text-white" />
              <div className="text-xs text-[#DFCA9B]">
                <p className="font-semibold tracking-wide">AUTHENTIC HARVESTS</p>
                <p className="text-[11px] text-[#A8988A]">Hand-sorted • Zero Additives</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D2314] hover:bg-[#C5A059] hover:text-[#2A1810] flex items-center justify-center transition-all text-[#E8DFD5]"
                aria-label="Follow Shree Mewa on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3D2314] hover:bg-[#C5A059] hover:text-[#2A1810] flex items-center justify-center transition-all text-[#E8DFD5]"
                aria-label="Follow Shree Mewa on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all"
                aria-label="Direct WhatsApp Message"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA9B] font-sans">
              Discover
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-[#C9BEB2] hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="text-[#C9BEB2] hover:text-white transition-colors cursor-pointer"
                >
                  Our Dry Fruits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gifting')}
                  className="text-[#C9BEB2] hover:text-white transition-colors cursor-pointer"
                >
                  Premium Gifting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('wedding-gifting')}
                  className="text-[#C9BEB2] hover:text-white transition-colors cursor-pointer"
                >
                  Wedding Hampers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('corporate-gifting')}
                  className="text-[#C9BEB2] hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Gifts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-[#C9BEB2] hover:text-white transition-colors cursor-pointer"
                >
                  About Shree Mewa
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Selections & Occasions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA9B] font-sans">
              Collections & Occasions
            </h3>
            <ul className="space-y-2.5 text-sm text-[#C9BEB2]">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Royal Mamra Almonds & Cashews</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Handcrafted Wooden Keepsake Chests</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Bridal Shagun & Trousseau Trays</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Executive Diwali Gifting Suites</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Auspicious Royal Panchmewa Blends</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                <span>Custom Laser Engraving & Wax Seals</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Visit & Ramgarh Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA9B] font-sans">
              Visit Boutique
            </h3>

            <div className="space-y-3 text-sm text-[#C9BEB2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#FAF7F2]">{BUSINESS_CONFIG.addressLine}</p>
                  <p className="text-xs text-[#A8988A]">{BUSINESS_CONFIG.landmark}</p>
                  <p className="text-xs text-[#A8988A] font-light">
                    {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} — {BUSINESS_CONFIG.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <p className="text-xs text-[#E8DFD5]">{BUSINESS_CONFIG.openingHours}</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <div className="text-xs text-[#E8DFD5]">
                  <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white transition-colors block">
                    Desk: {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                  <a href={`tel:${BUSINESS_CONFIG.secondaryPhone}`} className="text-[#A8988A] hover:text-white transition-colors text-[11px] block">
                    Alt: {BUSINESS_CONFIG.secondaryPhoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#25D366] hover:underline"
                >
                  WhatsApp: +{BUSINESS_CONFIG.whatsapp}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#2A1810] bg-[#DFCA9B] hover:bg-[#C5A059] rounded-lg transition-colors"
              >
                <span>Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={BUSINESS_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FAF7F2] bg-[#3D2314] hover:bg-[#5C3A21] border border-[#5C3A21] rounded-lg transition-colors"
                title="Write a Google Review"
              >
                <span>⭐ Google Review</span>
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory & Food Compliance Trust Strip */}
        <div className="py-6 border-b border-[#3D2314] flex flex-wrap items-center justify-between gap-4 text-xs text-[#A8988A]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 border-2 border-emerald-500 flex items-center justify-center rounded-xs shrink-0">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              </div>
              <span className="text-[#E8DFD5] font-medium">100% Pure Vegetarian</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>FSSAI Lic. No: <strong className="text-[#FAF7F2] font-mono">{BUSINESS_CONFIG.fssaiNumber}</strong></span>
            </div>

            <div className="flex items-center gap-1.5">
              <span>GSTIN: <strong className="text-[#FAF7F2] font-mono">{BUSINESS_CONFIG.gstin}</strong></span>
            </div>
          </div>

          <div className="text-[11px] text-[#A8988A]">
            <span>{BUSINESS_CONFIG.entityType} • Bazar Samiti, Ramgarh</span>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8988A]">
          <p>© {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Ramgarh Cantonment, Jharkhand, India</span>
            <span>•</span>
            <span>Est. {BUSINESS_CONFIG.yearEstablished}</span>
            <span>•</span>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
