import React from 'react';

interface SectionHeadingProps {
  label?: string;
  hindiSubtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  hindiSubtitle,
  title,
  description,
  centered = true,
  light = false,
  className = '',
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {label && (
        <div className={`flex items-center gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-px bg-[#C5A059]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] font-sans">
            {label}
          </span>
          <span className="w-6 h-px bg-[#C5A059]" />
        </div>
      )}

      <div className="space-y-1">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight ${
            light ? 'text-[#FAF7F2]' : 'text-[#2A1810]'
          }`}
        >
          {title}
        </h2>
        {hindiSubtitle && (
          <p className={`font-devanagari text-xs sm:text-sm font-medium tracking-wide ${light ? 'text-[#DFCA9B]' : 'text-[#9A7730]'}`}>
            {hindiSubtitle}
          </p>
        )}
      </div>

      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed font-light pt-1 ${
            light ? 'text-[#C9BEB2]' : 'text-[#5C3A21]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
