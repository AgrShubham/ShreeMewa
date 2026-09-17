import React from 'react';
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  Package,
  HeartHandshake,
  Gift,
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Store,
  Layers,
  Clock
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/products/ProductCard';
import { GiftCard } from '../components/gifting/GiftCard';
import { Logo } from '../components/brand/Logo';
import { PRODUCTS_DATA } from '../data/products';
import { GIFT_COLLECTIONS } from '../data/gifting';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';
import { ActivePage, Product, GiftCollectionItem } from '../types';

interface HomeViewProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProduct: (product: Product) => void;
  onSelectGift: (gift: GiftCollectionItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProduct,
  onSelectGift,
}) => {
  const featuredProducts = PRODUCTS_DATA.slice(0, 6);
  const featuredGifts = GIFT_COLLECTIONS.slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-32 pb-20">
      {/* =========================================================================
          SECTION 1 — HERO
          ========================================================================= */}
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

      {/* =========================================================================
          SECTION 2 — BRAND INTRODUCTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5EFEB] rounded-3xl border border-[#E8DFD5] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1200&q=80"
                  alt="Authentic Dry Fruit Selection at Shree Mewa"
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

      {/* =========================================================================
          SECTION 3 — CORE CATEGORIES (3 Large Visual Editorial Cards)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Portfolio"
          hindiSubtitle="हमारे तीन मुख्य संग्रह"
          title="Curated For Every Milestone"
          description="Explore our three specialized verticals designed for everyday nourishment, festive gifting, and bespoke ceremonial celebrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1: Premium Dry Fruits */}
          <div
            onClick={() => onNavigate('products')}
            className="group relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white hover:border-[#C5A059] hover:shadow-2xl hover:scale-[1.025] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1200&q=80"
                alt="Premium Dry Fruits Collection"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2A1810]/90 text-[#DFCA9B] border border-[#3D2314]">
                  01 • Single Harvests
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-[#2A1810] group-hover:text-[#9A7730] transition-colors">
                  Premium Dry Fruits
                </h3>
                <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
                  Authentic Mamra badam, Jumbo W-180 cashews, Kashmiri walnuts, Afghani pistachios, and luscious Medjool dates sorted for peak vitality.
                </p>
              </div>
              <div className="pt-2 flex items-center text-xs font-bold text-[#9A7730] group-hover:text-[#2A1810] transition-colors">
                <span>View Dry Fruits Catalogue</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Card 2: Premium Gifting */}
          <div
            onClick={() => onNavigate('gifting')}
            className="group relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white hover:border-[#C5A059] hover:shadow-2xl hover:scale-[1.025] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
                alt="Premium Gifting Hampers"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2A1810]/90 text-[#DFCA9B] border border-[#3D2314]">
                  02 • Celebrations
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-[#2A1810] group-hover:text-[#9A7730] transition-colors">
                  Premium Gifting
                </h3>
                <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
                  Thoughtfully curated festive hampers, rigid gold-foiled velvet boxes, and brass platter sets designed for memorable Diwali and family greetings.
                </p>
              </div>
              <div className="pt-2 flex items-center text-xs font-bold text-[#9A7730] group-hover:text-[#2A1810] transition-colors">
                <span>Explore Gift Boxes</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Card 3: Custom Gifting */}
          <div
            onClick={() => onNavigate('wedding-gifting')}
            className="group relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white hover:border-[#C5A059] hover:shadow-2xl hover:scale-[1.025] hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform flex flex-col cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-[#F5EFEB]">
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
                alt="Custom Wedding & Corporate Gifting"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2A1810]/90 text-[#DFCA9B] border border-[#3D2314]">
                  03 • Bespoke Orders
                </span>
              </div>
            </div>
            <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-[#2A1810] group-hover:text-[#9A7730] transition-colors">
                  Custom & Wedding Gifting
                </h3>
                <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
                  Tailor-made wedding invitation boxes, bride/groom trousseau hampers, and corporate bulk branding with custom laser engraving and monogram seals.
                </p>
              </div>
              <div className="pt-2 flex items-center text-xs font-bold text-[#9A7730] group-hover:text-[#2A1810] transition-colors">
                <span>Discuss Custom Requirements</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — FEATURED DRY FRUITS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            centered={false}
            label="Harvest Selections"
            hindiSubtitle="शुद्धता एवं ताजगी की गारंटी"
            title="Selected for Every Occasion"
            description="Handpicked almonds, cashews, pistachios, walnuts, raisins, and dates carefully graded for uniform size and pristine crunch."
          />

          <button
            onClick={() => {
              onNavigate('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A7730] hover:text-[#2A1810] transition-colors shrink-0 cursor-pointer"
          >
            <span>View All Dry Fruits</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — PREMIUM GIFTING
          ========================================================================= */}
      <section className="bg-[#F5EFEB] py-12 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              centered={false}
              label="Signature Hampers"
              hindiSubtitle="उपहार जो दिल जीत लें"
              title="Gifts That Make an Impression"
              description="Thoughtfully curated dry-fruit gifts for celebrations, festivals, and special moments. Housed in heirloom wooden boxes, velvet containers, and artisan platters."
            />

            <button
              onClick={() => {
                onNavigate('gifting');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059] text-[#2A1810] hover:bg-[#B38E46] text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs"
            >
              <span>Explore Gifting</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2A1810]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredGifts.map((gift) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                onSelect={onSelectGift}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — WEDDING GIFTING
          ========================================================================= */}
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
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
                  alt="Wedding Dry Fruit Gift Hampers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — CORPORATE GIFTING
          ========================================================================= */}
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

      {/* =========================================================================
          SECTION 8 — WHY SHREE MEWA (4 Pillar Columns)
          ========================================================================= */}
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

      {/* =========================================================================
          SECTION 9 — STORE EXPERIENCE (Ramgarh Cantonment, Jharkhand)
          ========================================================================= */}
      <section className="bg-[#F5EFEB] py-12 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            label="Ramgarh Boutique"
            hindiSubtitle="रामगढ़ छावनी में हमारा स्टोर"
            title="Visit Shree Mewa"
            description="Experience our complete harvest and gifting collections in person. Inspect box finishes, taste select varieties, and discuss custom wedding requirements with our team."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Store Photos & Information (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                    alt="Shree Mewa Store Interior Display"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-white shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"
                    alt="Dry Fruits Harvest Showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Address & Hours Detail Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8DFD5] shadow-lg space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#2A1810]">
                      {BUSINESS_CONFIG.name} Showroom
                    </h4>
                    <p className="text-xs text-[#3D2314] mt-0.5 font-medium">
                      {BUSINESS_CONFIG.addressLine}, {BUSINESS_CONFIG.landmark}
                    </p>
                    <p className="text-xs text-[#7A5840]">
                      {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} — {BUSINESS_CONFIG.pincode}, India
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#E8DFD5] text-xs">
                  <div className="flex items-center gap-2 text-[#3D2314]">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    <span>{BUSINESS_CONFIG.openingHours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3D2314]">
                    <Phone className="w-4 h-4 text-[#C5A059]" />
                    <span>{BUSINESS_CONFIG.phoneDisplay}</span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <a
                    href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] rounded-xl text-xs font-bold text-center transition-colors shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#2A1810]" />
                    <span>Directions</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_CONFIG.phone}`}
                    className="py-2.5 px-3 bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#2A1810] border border-[#E8DFD5] rounded-xl text-xs font-bold text-center transition-colors shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Call Us</span>
                  </a>

                  <a
                    href={getWhatsAppLink('Hello Shree Mewa, I am planning to visit your Ramgarh store today.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold text-center transition-colors shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white shadow-lg min-h-[320px] flex flex-col">
              <iframe
                title="Shree Mewa Ramgarh Cantonment Location"
                src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                className="w-full flex-grow min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-3 bg-[#FAF7F2] text-[11px] text-[#5C3A21] text-center border-t border-[#E8DFD5] font-medium">
                📍 {BUSINESS_CONFIG.addressLine}, {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — FINAL CTA
          ========================================================================= */}
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
    </div>
  );
};
