import React, { useState } from 'react';
import {
  Sparkles,
  Heart,
  Calendar,
  Layers,
  Send,
  MessageCircle,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  Gift
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';

export const WeddingGiftingView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    quantity: '50 - 100 boxes',
    budgetRange: '₹1,000 - ₹2,500 per box',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `*Wedding Gifting Enquiry - Shree Mewa*\n\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Event Date:* ${formData.eventDate || 'Not specified'}\n• *Estimated Quantity:* ${formData.quantity}\n• *Target Budget:* ${formData.budgetRange}\n• *Notes:* ${formData.message || 'None'}`;
    window.open(getWhatsAppLink(formattedMsg), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2] py-8 sm:py-12 border-b border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionHeading
            label="Wedding & Event Gifting"
            hindiSubtitle="शुभ विवाह एवं मांगलिक अवसरों हेतु विशिष्ट उपहार"
            title="Your Celebration Deserves Something Special"
            description="Premium dry-fruit hampers, bridal trousseau trays, and elegant invitation boxes custom-crafted in Ramgarh Cantonment for weddings, engagements, and momentous family celebrations."
          />
        </div>
      </section>

      {/* 6 Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Gift className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              1. Wedding Gift Boxes
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Exquisite rigid keepsake boxes with magnetic lids, rich velvet linings, and gold mandala foil stamping.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              2. Dry Fruit Hampers
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Tiered trousseau hampers, brass platter arrangements, and brocade silk potli sets for shagun and roka rituals.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              3. Custom Packaging
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Custom color themes matched exactly to your wedding invitation cards and bridal attire themes.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              4. Personalized Cards & Monograms
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Laser-engraved initials of the bride and groom, custom gold wax seals, and printed heartfelt thank-you notes.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              5. Bulk Order Coordination
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Timely batch processing from 25 to 1,000+ units, individually packed in protective outer transit boxes.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              6. Peak Freshness Guarantee
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Packed fresh right before your ceremony dates to ensure peak crunch, natural aroma, and immaculate appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Showcase & Enquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8DFD5] p-8 sm:p-12 lg:p-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Visual Gallery & Consultation Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9A7730] font-sans block">
                PERSONALIZED CONSULTATION
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2A1810]">
                Plan Your Wedding Hampers With Us
              </h2>
              <p className="text-sm text-[#3D2314] leading-relaxed font-light">
                Every wedding is a momentous milestone. Visit our store in Ramgarh Cantonment to touch and inspect our wooden and velvet boxes, or send your requirements online. We will curate a custom proposal with physical samples.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-[#FAF7F2]">
                  <img
                    src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80"
                    alt="Wedding Gifting Platter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-4/3 rounded-2xl overflow-hidden border border-[#E8DFD5] bg-[#FAF7F2]">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
                    alt="Wooden Keepsake Box"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] text-xs text-[#3D2314] space-y-1">
                <p className="font-bold text-[#9A7730]">📍 In-Store Sample Preview Available</p>
                <p className="font-light text-[#5C3A21]">
                  Inspect box finishes, velvet linings, and taste our dry fruit grades at our Ramgarh Cantonment showroom.
                </p>
              </div>
            </div>

            {/* Right: Wedding Enquiry Form (6 cols) */}
            <div className="lg:col-span-6 bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#E8DFD5] shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#2A1810] mb-2">
                Discuss Your Wedding Requirement
              </h3>
              <p className="text-xs text-[#5C3A21] font-light mb-6">
                Fill in your preliminary details below to start a direct consultation via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#2A1810] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Agrawal"
                    className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Approximate Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="15 - 50 boxes">15 - 50 boxes</option>
                      <option value="50 - 100 boxes">50 - 100 boxes</option>
                      <option value="100 - 250 boxes">100 - 250 boxes</option>
                      <option value="250 - 500+ boxes">250 - 500+ boxes</option>
                      <option value="Custom Quantity">Custom Quantity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="₹750 - ₹1,200 per box">₹750 - ₹1,200 per box</option>
                      <option value="₹1,200 - ₹2,500 per box">₹1,200 - ₹2,500 per box</option>
                      <option value="₹2,500 - ₹5,000+ per box">₹2,500 - ₹5,000+ per box</option>
                      <option value="Custom Luxury Budget">Custom Luxury Budget</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A1810] mb-1">
                    Special Preferences / Wedding Theme
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your invitation theme, dry fruit preferences (e.g. Mamra, Cashews, Dates), or box style..."
                    className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#2A1810]" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
