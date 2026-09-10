import React from 'react';
import { ShieldCheck, Heart, Sparkles, MapPin, Store, Award } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Logo } from '../components/brand/Logo';
import { BUSINESS_CONFIG } from '../data/business';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2] py-8 sm:py-12 border-b border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionHeading
            label="Heritage & Craft"
            hindiSubtitle="गुणवत्ता, परंपरा एवं निष्ठा की कहानी"
            title="The Story Behind Shree Mewa"
            description="Founded with a singular dedication to bring unadulterated harvest dry fruits and thoughtful Indian presentation aesthetics to families in Ramgarh Cantonment and across Jharkhand."
          />
        </div>
      </section>

      {/* Brand Narrative Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 text-left">
          {/* Chapter 1: The Origin */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 aspect-4/3 rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80"
                alt="Selected Almonds and Dry Fruits"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A7730]">
                OUR PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1810]">
                Dry Fruits as Sacred Tokens of Well-Being
              </h3>
              <p className="text-sm text-[#5C3A21] leading-relaxed font-light">
                In Indian culture, presenting mewa (dry fruits) is not merely a gesture of gift-giving; it is an auspicious blessing for health, longevity, and prosperity. Shree Mewa was founded to restore reverence to this tradition by eliminating chemical polish, sub-standard mixing, and lackluster packaging.
              </p>
            </div>
          </div>

          {/* Chapter 2: The Sourcing */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 order-2 md:order-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A7730]">
                SELECTION DISCIPLINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1810]">
                Rigorous Grading, Zero Compromise
              </h3>
              <p className="text-sm text-[#5C3A21] leading-relaxed font-light">
                Every batch arriving at our Ramgarh Cantonment facility undergoes strict physical inspection. We assess kernel size uniformity, moisture balance, natural sweetness, and crunch. From oil-dense Mamra almonds to natural whole-white W-180 cashews, we offer only produce we are proud to serve in our own homes.
              </p>
            </div>
            <div className="md:col-span-5 aspect-4/3 rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white order-1 md:order-2 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"
                alt="Kashmiri Walnuts and Grade Screening"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Chapter 3: The Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 aspect-4/3 rounded-3xl overflow-hidden border border-[#E8DFD5] bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
                alt="Handcrafted Gifting Presentation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A7730]">
                ARTISANAL PACKAGING
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1810]">
                Packaging Designed to Be Cherished
              </h3>
              <p className="text-sm text-[#5C3A21] leading-relaxed font-light">
                A gift should be memorable long after the feast is over. We design heirloom wooden keepsake chests, handcrafted brass trays, and rigid luxury velvet boxes that recipients treasure as organizers and decorative centerpieces for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooted in Ramgarh Cantonment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8DFD5] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-lg">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] text-[#9A7730] shadow-xs">
            <MapPin className="w-6 h-6 text-[#C5A059]" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1810]">
              Deeply Rooted in Ramgarh Cantonment
            </h3>
            <p className="text-xs text-[#9A7730] font-devanagari font-bold">
              रामगढ़ छावनी के परिवारों का विश्वसनीय मेवा गंतव्य
            </p>
          </div>

          <p className="text-sm text-[#5C3A21] leading-relaxed font-light">
            We are honored to serve the vibrant community of Ramgarh Cantonment, Ranchi, Hazaribagh, and neighboring districts. We welcome you to visit our physical showroom on Main Road to experience our warm hospitality and harvest treasures firsthand.
          </p>

          <div className="pt-2 text-xs text-[#8C6D53]">
            <span className="font-semibold text-[#2A1810]">{BUSINESS_CONFIG.addressLine}</span> • <span>Open 7 Days (10 AM - 9 PM)</span>
          </div>
        </div>
      </section>
    </div>
  );
};
