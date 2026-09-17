import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Car,
  CheckCircle2,
  Navigation,
  Sparkles,
  Store,
  ShieldCheck
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';

export const StoreView: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2] py-8 sm:py-12 border-b border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionHeading
            label="Flagship Showroom"
            hindiSubtitle="रामगढ़ छावनी में हमारा स्टोर पधारें"
            title="Visit Our Store"
            description="Experience our complete range of premium dry fruits, examine the gift box craftsmanship in person, and taste select harvests at our Ramgarh Cantonment boutique."
          />
        </div>
      </section>

      {/* Main Store Information & Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Address & Visiting Guide (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFD5] shadow-lg space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#9A7730] shrink-0">
                  <Store className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#9A7730] block">
                    Boutique Location
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#2A1810]">
                    {BUSINESS_CONFIG.name} Showroom
                  </h3>
                  <p className="text-xs text-[#3D2314] mt-1 font-medium">
                    {BUSINESS_CONFIG.addressLine}, {BUSINESS_CONFIG.landmark}
                  </p>
                  <p className="text-xs text-[#7A5840]">
                    {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} — {BUSINESS_CONFIG.pincode}, India
                  </p>
                </div>
              </div>

              {/* Hours & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DFD5] text-xs">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#2A1810]">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    <span>Opening Hours</span>
                  </div>
                  <p className="text-[#3D2314] font-light">{BUSINESS_CONFIG.openingHours}</p>
                  <p className="text-[10px] text-[#7A5840]">Open all holidays & festivals</p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#2A1810]">
                    <Phone className="w-4 h-4 text-[#C5A059]" />
                    <span>Direct Desk</span>
                  </div>
                  <p className="text-[#2A1810] font-bold">{BUSINESS_CONFIG.phoneDisplay}</p>
                  <p className="text-[10px] text-[#7A5840]">Call for directions or inquiries</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] rounded-xl text-xs font-bold text-center transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#2A1810]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="py-3 px-4 bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#2A1810] border border-[#E8DFD5] rounded-xl text-xs font-bold text-center transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Store</span>
                </a>

                <a
                  href={getWhatsAppLink('Hello Shree Mewa, I am on my way to visit your Ramgarh store.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold text-center transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* In-Store Benefits */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A1810]">
                What to Expect During Your Visit:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#5C3A21]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7730] shrink-0" />
                  <span>Inspect physical gift box finishes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7730] shrink-0" />
                  <span>Taste select dry fruit grades</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7730] shrink-0" />
                  <span>Immediate custom hamper packing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7730] shrink-0" />
                  <span>Dedicated wedding gift consultation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Embedded Interactive Map (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white shadow-lg flex flex-col min-h-[420px]">
            <iframe
              title="Shree Mewa Ramgarh Cantonment Google Map"
              src={BUSINESS_CONFIG.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              className="w-full flex-grow min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 bg-[#FAF7F2] text-xs text-[#5C3A21] flex items-center justify-between border-t border-[#E8DFD5]">
              <span>📍 {BUSINESS_CONFIG.addressLine}, {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}</span>
              <a
                href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#9A7730] hover:text-[#2A1810] transition-colors"
              >
                Open in Maps App →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Store Atmosphere Photo Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Gallery"
          hindiSubtitle="हमारे शोरूम की कुछ झलकियां"
          title="Store Atmosphere & Display"
          description="A glimpse of our curated counters, dry fruit dispensers, and luxury gift presentation shelves."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-white shadow-sm hover:shadow-xl hover:border-[#C5A059] hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform group">
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
              alt="Artisan Brass Platters Counter"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-white shadow-sm hover:shadow-xl hover:border-[#C5A059] hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform group">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
              alt="Wooden Keepsake Hamper Display"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-white shadow-sm hover:shadow-xl hover:border-[#C5A059] hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform group">
            <img
              src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"
              alt="Fresh Harvest Nut Grading"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-white shadow-sm hover:shadow-xl hover:border-[#C5A059] hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform group">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
              alt="Velvet Festive Boxes Shelf"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
