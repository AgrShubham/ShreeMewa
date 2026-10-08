import React from 'react';

interface LogoProps {
  variant?: 'full' | 'seal' | 'horizontal' | 'mark' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const isWhite = variant === 'white';

  // Size configurations tuned for elegance without layout blowout
  const sizeMap = {
    sm: { imgH: 36, titleSize: 'text-base sm:text-lg', subScale: 'text-[9px]' },
    md: { imgH: 42, titleSize: 'text-lg sm:text-xl', subScale: 'text-[10px]' },
    lg: { imgH: 56, titleSize: 'text-2xl', subScale: 'text-xs' },
    xl: { imgH: 72, titleSize: 'text-3xl', subScale: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // Circular Seal Variant
  if (variant === 'seal') {
    const sealDim = size === 'sm' ? 48 : size === 'md' ? 68 : size === 'lg' ? 96 : 120;
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/assets/shree-mewa.svg"
          alt="Shree Mewa Seal"
          width={sealDim}
          height={sealDim}
          className="object-contain drop-shadow-sm select-none"
          style={{
            filter: isWhite ? 'brightness(0) invert(1)' : 'none',
          }}
        />
      </div>
    );
  }

  // Mark Only — just the logo image without subtitle
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/assets/shree-mewa.svg"
          alt="Shree Mewa"
          style={{ height: currentSize.imgH, width: currentSize.imgH }}
          className="object-contain select-none"
        />
      </div>
    );
  }

  // Full / Horizontal / White Layout
  return (
    <div className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity shrink-0 ${className}`}>
      {/* Brand Logo SVG */}
      <img
        src="/assets/shree-mewa.svg"
        alt=""
        aria-hidden="true"
        onError={(e) => {
          // Graceful fallback to PNG if SVG encounters any rendering issue
          e.currentTarget.src = '/assets/shree-mewa-logo.png';
        }}
        style={{
          height: currentSize.imgH,
          width: currentSize.imgH,
          filter: isWhite ? 'brightness(0) invert(1)' : 'none',
        }}
        className="object-contain select-none transition-transform duration-300 group-hover:scale-105 shrink-0"
      />

      {/* Brand Name & Subtitle */}
      <div className="flex flex-col justify-center leading-none text-left select-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif font-bold tracking-tight ${
              isWhite ? 'text-[#FAF7F2]' : 'text-[#2A1810]'
            } ${currentSize.titleSize}`}
          >
            Shree Mewa
          </span>
          <span
            className={`font-devanagari text-[10px] font-medium opacity-80 ${
              isWhite ? 'text-[#DFCA9B]' : 'text-[#9A7730]'
            }`}
          >
            श्री मेवा
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1 whitespace-nowrap">
            <span
              className={`font-sans uppercase tracking-[0.2em] font-semibold ${
                currentSize.subScale
              } ${isWhite ? 'text-[#E8DFD5]/80' : 'text-[#8C6D53]'}`}
            >
              Dry Fruits & Gifting
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#C5A059] opacity-75" />
            <span
              className={`font-sans tracking-wider uppercase font-bold text-[8.5px] ${
                isWhite ? 'text-[#DFCA9B]' : 'text-[#9A7730]'
              }`}
            >
              Ramgarh
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
