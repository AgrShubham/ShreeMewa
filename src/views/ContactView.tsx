import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  HelpCircle,
  ChevronDown,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FAQS_DATA } from '../data/faqs';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/business';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Dry Fruits',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS_DATA[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `*General Enquiry - Shree Mewa*\n\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || 'N/A'}\n• *Type:* ${formData.enquiryType}\n• *Message:* ${formData.message || 'I would like more information'}`;
    window.open(getWhatsAppLink(formattedMsg), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2] py-8 sm:py-12 border-b border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionHeading
            label="Get in Touch"
            hindiSubtitle="संपर्क करें एवं परामर्श प्राप्त करें"
            title="Contact Shree Mewa"
            description="Whether you have questions regarding dry fruit harvests, bespoke gift boxes, or bulk wedding orders, our Ramgarh team is at your service."
          />
        </div>
      </section>

      {/* Main Grid: Form + Quick Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#E8DFD5] shadow-lg">
            {submitted ? (
              <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/15 text-[#1E7E34] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-serif font-bold text-[#2A1810]">
                    Enquiry Formatted!
                  </h3>
                  <p className="text-xs text-[#5C3A21] max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <span className="font-semibold text-[#2A1810]">{formData.name}</span>. Your {formData.enquiryType} enquiry has been formatted for WhatsApp dispatch.
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-3 max-w-xs mx-auto">
                  <a
                    href={getWhatsAppLink(`*General Enquiry - Shree Mewa*\n\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || 'N/A'}\n• *Type:* ${formData.enquiryType}\n• *Message:* ${formData.message || 'I would like more information'}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#9A7730] hover:text-[#2A1810] font-semibold transition-colors cursor-pointer py-1"
                  >
                    ← Edit Details or Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif font-bold text-[#2A1810] mb-2">
                  Send an Enquiry
                </h3>
                <p className="text-xs text-[#5C3A21] font-light mb-6">
                  Complete the form below to receive a swift response from our boutique concierge.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#2A1810] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priyanshu Sharma"
                        className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

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
                        className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#2A1810] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2A1810] mb-1">
                        Enquiry Type *
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="Dry Fruits">Dry Fruits (Harvest / Pricing)</option>
                        <option value="Premium Gift Box">Premium Festive Gift Box</option>
                        <option value="Wedding Gifting">Wedding Gifting / Trousseau</option>
                        <option value="Corporate Gifting">Corporate Bulk Gifting</option>
                        <option value="Bulk Order">Bulk Order Requirement</option>
                        <option value="General Enquiry">General Store Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A1810] mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe what you are looking for (e.g. quantity, specific dry fruit grades, occasion date)..."
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
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
              </>
            )}
          </div>

          {/* Right: Quick Action Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Store Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#E8DFD5] space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#2A1810]">Ramgarh Store</h4>
                  <p className="text-xs text-[#5C3A21]">{BUSINESS_CONFIG.city}, Jharkhand</p>
                </div>
              </div>
              <p className="text-xs text-[#7A5840] leading-relaxed">
                {BUSINESS_CONFIG.addressLine}, {BUSINESS_CONFIG.landmark}, Pincode {BUSINESS_CONFIG.pincode}
              </p>
              <div className="pt-1">
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#9A7730] hover:text-[#2A1810] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Open Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="p-5 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#C5A059] transition-all space-y-2 block shadow-sm"
              >
                <Phone className="w-5 h-5 text-[#C5A059]" />
                <p className="text-xs font-bold text-[#2A1810]">Call Store</p>
                <p className="text-[11px] text-[#7A5840]">{BUSINESS_CONFIG.phoneDisplay}</p>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#25D366] transition-all space-y-2 block shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <p className="text-xs font-bold text-[#2A1810]">WhatsApp Chat</p>
                <p className="text-[11px] text-[#7A5840]">Instant response</p>
              </a>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] space-y-2 text-xs shadow-sm">
              <div className="flex items-center gap-2 font-bold text-[#2A1810]">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Showroom Hours</span>
              </div>
              <p className="text-[#3D2314]">{BUSINESS_CONFIG.openingHours}</p>
              <p className="text-[11px] text-[#7A5840]">
                Open on all Sundays, national holidays, and major festival days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Common Queries"
          hindiSubtitle="अक्सर पूछे जाने वाले प्रश्न"
          title="Frequently Asked Questions"
          description="Everything you need to know about our products, custom packaging, wedding bulk orders, and visiting our store."
        />

        <div className="mt-10 space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#E8DFD5] bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#2A1810]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9A7730] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#5C3A21] leading-relaxed font-light border-t border-[#E8DFD5] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
