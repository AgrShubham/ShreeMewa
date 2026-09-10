import React, { useState } from 'react';
import {
  Building2,
  Briefcase,
  Sparkles,
  Award,
  Send,
  MessageCircle,
  FileSpreadsheet,
  CheckCircle2,
  Package,
  Layers,
  FileText
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';

export const CorporateGiftingView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    quantity: '50 - 100 units',
    budget: '₹800 - ₹1,500 per gift',
    occasion: 'Diwali Corporate Gifting',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `*Corporate Gifting Enquiry - Shree Mewa*\n\n• *Contact:* ${formData.name}\n• *Company:* ${formData.company || 'Not mentioned'}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || 'N/A'}\n• *Occasion:* ${formData.occasion}\n• *Quantity:* ${formData.quantity}\n• *Budget Per Unit:* ${formData.budget}\n• *Message:* ${formData.message || 'Please share catalogue & corporate pricing'}`;
    window.open(getWhatsAppLink(formattedMsg), '_blank');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2] py-8 sm:py-12 border-b border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionHeading
            label="Institutional Solutions"
            hindiSubtitle="व्यापारिक एवं संस्थागत उपहार समाधान"
            title="Premium Gifts for Your Clients & Teams"
            description="Elevate your brand presence with customized dry-fruit executive hampers, festival gifting suites, and employee recognition boxes with custom company logo branding."
          />
        </div>
      </section>

      {/* Corporate Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              Company Logo Hot-Foil Stamping
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Precision gold, silver, or blind-debossed corporate logo placement directly on outer gift lids or premium paper sleeves.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              Executive Client Appreciation
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Curated luxury wooden chests and brass platters designed to express profound gratitude to key clients, board members, and dignitaries.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              Employee Festival Gifting (Diwali / New Year)
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              High-volume standardized festive boxes with balanced nutrition and auspicious Panchmewa assortments packed for smooth distribution.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              GST Tax Invoicing & Compliance
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Clear corporate GST invoices, standardized procurement agreements, and transparent unit pricing breakdown.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              Personalized CEO Greeting Cards
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Custom-printed message cards with leadership signatures, company motto, and celebratory greetings inserted in every box.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-3 shadow-sm hover:border-[#C5A059] hover:shadow-xl hover:scale-[1.025] hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2A1810]">
              Pan-Regional Logistic Readiness
            </h3>
            <p className="text-xs text-[#5C3A21] font-light leading-relaxed">
              Batch-packed in heavy-duty transit corrugated shippers with moisture barrier protection.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate RFP / Enquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8DFD5] p-8 sm:p-12 lg:p-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9A7730] font-sans block">
                CORPORATE PROPOSAL
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#2A1810]">
                Request a Corporate Catalogue & Quotation
              </h2>
              <p className="text-sm text-[#3D2314] leading-relaxed font-light">
                Submit your project details to receive sample box options, tiered volume discounts, and customized mockups for your organization.
              </p>

              <div className="space-y-3 text-xs text-[#3D2314]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Physical prototypes prepared for management review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Strict adherence to delivery timelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Direct consultation at Ramgarh Cantonment</span>
                </div>
              </div>
            </div>

            {/* Right: Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#E8DFD5] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Tata Steel / Coal India / Private Firm"
                      className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
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
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="corporate@company.com"
                      className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Occasion
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Diwali Corporate Gifting">Diwali Gifting</option>
                      <option value="New Year / Annual Day">New Year / Annual Day</option>
                      <option value="Client Appreciation">Client Appreciation</option>
                      <option value="Employee Milestone">Employee Milestone</option>
                      <option value="Conference / Summit">Conference / Summit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Quantity (Units)
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="25 - 50 units">25 - 50 units</option>
                      <option value="50 - 100 units">50 - 100 units</option>
                      <option value="100 - 300 units">100 - 300 units</option>
                      <option value="300 - 1000+ units">300 - 1000+ units</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Budget Per Unit
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="₹500 - ₹800">₹500 - ₹800</option>
                      <option value="₹800 - ₹1,500">₹800 - ₹1,500</option>
                      <option value="₹1,500 - ₹3,000">₹1,500 - ₹3,000</option>
                      <option value="₹3,000+ (Executive)">₹3,000+ (Executive)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A1810] mb-1">
                    Specific Branding / Packaging Preferences
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify if logo foil stamping is required, customized dry fruit combinations, or specific target dispatch date..."
                    className="w-full px-4 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#2A1810]" />
                  <span>Submit Corporate RFP via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
