import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';

export const StoreShowcaseSection: React.FC = () => {
  return (
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
                  src="/assets/gifting/royal-wooden-chest.jpg"
                  alt="Shree Mewa Luxury Keepsake Hampers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-white shadow-sm">
                <img
                  src="/assets/products/royal-panchmewa.jpg"
                  alt="Authentic Dry Fruits Harvest Selection"
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
  );
};
