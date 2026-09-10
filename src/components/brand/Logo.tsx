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

  // Size configurations for the logo image (1.5x scaled)
  const sizeMap = {
    sm: { imgH: 54, subScale: 'text-[9px]' },
    md: { imgH: 75, subScale: 'text-[11px]' },
    lg: { imgH: 108, subScale: 'text-xs' },
    xl: { imgH: 144, subScale: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // Circular Seal Variant
  if (variant === 'seal') {
    const sealDim = size === 'sm' ? 60 : size === 'md' ? 84 : size === 'lg' ? 120 : 150;
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
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
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src="/assets/shree-mewa.svg"
          alt="Shree Mewa"
          style={{ height: currentSize.imgH }}
          className="object-contain select-none"
        />
      </div>
    );
  }

  // Full / Horizontal / White Layout
  return (
    <div className={`group inline-flex items-center gap-2.5 sm:gap-3 transition-opacity ${className}`}>
      {/* Brand Logo SVG */}
      <img
        src="/assets/shree-mewa.svg"
        alt="Shree Mewa — Premium Dry Fruits & Gifting"
        style={{
          height: currentSize.imgH,
          filter: isWhite ? 'brightness(0) invert(1)' : 'none',
        }}
        className="object-contain select-none transition-transform duration-300 group-hover:scale-105"
      />

      {/* Subtitle (Dry Fruits & Gifting • Ramgarh) */}
      {showSubtitle && (
        <div className="flex flex-col leading-none justify-center">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-sans uppercase tracking-[0.22em] font-medium transition-colors ${currentSize.subScale}`}
              style={{ color: isWhite ? 'rgba(255,255,255,0.75)' : '#7A5840' }}
            >
              Dry Fruits & Gifting
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#C5A059]"></span>
            <span
              className={`font-sans tracking-wider uppercase font-semibold text-[8px] sm:text-[9px] ${
                isWhite ? 'text-[#DFCA9B]' : 'text-[#9A7730]'
              }`}
            >
              Ramgarh
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
