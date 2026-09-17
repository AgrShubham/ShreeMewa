import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { NAV_ITEMS } from '../../data/navigation';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';
import { ActivePage } from '../../types';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenCatalogue?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenCatalogue,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on navigate
  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#2A1810] text-[#FAF7F2] text-[11px] sm:text-xs py-1.5 px-4 text-center border-b border-[#3D2314]">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#C5A059] text-[#2A1810]">
              VISIT OUR STORE
            </span>
            <span className="hidden sm:inline font-light text-[#E8DFD5]">
              Experience our curated harvests & handcrafted hampers in Ramgarh Cantonment, Jharkhand
            </span>
            <span className="sm:hidden font-light truncate text-[#E8DFD5]">
              Retail Store in Ramgarh Cantonment, Jharkhand
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] text-[#DFCA9B]">
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-[#5C3A21]">•</span>
            <span className="text-[#C9BEB2] font-light">Open 7 Days (10 AM - 9 PM)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-[#E8DFD5] py-2.5 sm:py-3'
            : 'bg-[#FAF7F2] border-[#E8DFD5] py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-lg p-1 -m-1 cursor-pointer"
            aria-label="Shree Mewa - Return to Homepage"
          >
            <Logo size={scrolled ? 'sm' : 'md'} />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer ${
                    isActive
                      ? 'text-[#2A1810] font-bold bg-[#EFE8DF]'
                      : 'text-[#5C3A21] hover:text-[#2A1810] hover:bg-[#F3EDE4]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1.5 text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#9A7730] border border-[#C5A059]/40">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs: Catalogue + WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenCatalogue) onOpenCatalogue();
                else handleNavClick('catalogue');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#2A1810] bg-white border border-[#E8DFD5] hover:border-[#C5A059] hover:bg-[#F7F2EB] rounded-full transition-all shadow-2xs cursor-pointer"
              title="View Digital Gifting Catalogue"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Lookbook</span>
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-98 rounded-full transition-all shadow-sm shadow-[#25D366]/20"
              aria-label="Enquire with Shree Mewa on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-full bg-[#25D366] text-white shadow-2xs"
              aria-label="WhatsApp quick chat"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#2A1810] hover:bg-[#EFE8DF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Collapsible) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[var(--nav-height,108px)] bottom-0 z-50 bg-[#FAF7F2] overflow-y-auto border-t border-[#E8DFD5] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="p-6 space-y-6 max-w-md mx-auto">
            {/* Store Location Pill */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8DFD5] shadow-xs">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div className="text-left text-xs">
                <p className="font-semibold text-[#2A1810]">Physical Store in Ramgarh</p>
                <p className="text-[#7A5840]">{BUSINESS_CONFIG.addressLine}, {BUSINESS_CONFIG.city}</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#2A1810] font-bold border border-[#C5A059] shadow-xs'
                        : 'text-[#5C3A21] hover:bg-[#F3EDE4]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span>{item.label}</span>
                      {item.hindiLabel && (
                        <span className={`text-xs ${isActive ? 'text-[#9A7730]' : 'text-[#7A5840]'}`}>
                          ({item.hindiLabel})
                        </span>
                      )}
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-[#C5A059] text-[#2A1810]'
                            : 'bg-[#EFE8DF] text-[#5C3A21]'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}

              <button
                onClick={() => {
                  if (onOpenCatalogue) onOpenCatalogue();
                  else handleNavClick('catalogue');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-colors text-left cursor-pointer ${
                  activePage === 'catalogue'
                    ? 'bg-white text-[#2A1810] font-bold border border-[#C5A059]'
                    : 'text-[#5C3A21] hover:bg-[#F3EDE4]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#C5A059]" />
                  <span>Digital Gifting Catalogue</span>
                </div>
                <span className="text-xs text-[#9A7730] font-semibold">PDF View</span>
              </button>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-4 border-t border-[#E8DFD5] space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold text-[#2A1810] bg-white border border-[#E8DFD5] hover:bg-[#F5EFEB] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Store</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold text-[#2A1810] bg-white border border-[#E8DFD5] hover:bg-[#F5EFEB] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Store Hours & Assurance */}
            <div className="text-center text-xs text-[#7A5840] pt-2">
              <p>Store Hours: {BUSINESS_CONFIG.openingHours}</p>
              <p className="mt-1 text-[11px] text-[#A8988A]">
                Handcrafted in India • Sourced with Integrity
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
