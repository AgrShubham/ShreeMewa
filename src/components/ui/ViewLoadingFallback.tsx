import React from 'react';
import { Logo } from '../brand/Logo';

export const ViewLoadingFallback: React.FC = () => {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 text-center select-none"
    >
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-2 border-[#E8DFD5] border-t-[#C5A059] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Logo variant="seal" size="sm" className="opacity-80 scale-75" />
        </div>
      </div>
      <p className="font-serif text-lg font-bold text-[#2A1810] tracking-wide">
        Shree Mewa
      </p>
      <p className="text-[11px] text-[#9A7730] mt-1 font-semibold tracking-widest uppercase">
        Curating Fresh Harvests...
      </p>
    </div>
  );
};
