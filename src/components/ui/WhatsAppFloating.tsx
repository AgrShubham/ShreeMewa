import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp Instant Enquiry" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none">
      {/* Friendly Notification Popup Bubble */}
      {showTooltip && (
        <div className="relative max-w-xs bg-white text-[#2A1810] p-3.5 rounded-2xl shadow-xl border border-[#E8DFD5] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#A8988A] hover:text-[#2A1810] p-0.5 rounded"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5 pr-3">
            <div className="w-7 h-7 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#25D366]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#2A1810]">Shree Mewa Concierge</p>
              <p className="text-[11px] text-[#5C3A21] mt-0.5 leading-snug">
                Planning a wedding, festival gift, or need store directions in Ramgarh? Chat with us instantly!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white px-4 py-3.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
        aria-label="Direct WhatsApp Chat with Shree Mewa"
      >
        {/* Pulse effect */}
        <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping -z-10" />

        <MessageCircle className="w-6 h-6 fill-white shrink-0" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
