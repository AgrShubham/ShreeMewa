import React from 'react';
import {
  HomeHero,
  BrandIntroSection,
  CoreCategoriesSection,
  FeaturedHarvestsSection,
  SignatureGiftingSection,
  WeddingSpotlightSection,
  CorporateSpotlightSection,
  TrustPillarsSection,
  StoreShowcaseSection,
  HomeFinalCta,
} from '../components/home';
import { ActivePage, Product, GiftCollectionItem } from '../types';

interface HomeViewProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProduct: (product: Product) => void;
  onSelectGift: (gift: GiftCollectionItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProduct,
  onSelectGift,
}) => {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-32 pb-20">
      <HomeHero onNavigate={onNavigate} />
      <BrandIntroSection onNavigate={onNavigate} />
      <CoreCategoriesSection onNavigate={onNavigate} />
      <FeaturedHarvestsSection
        onNavigate={onNavigate}
        onSelectProduct={onSelectProduct}
      />
      <SignatureGiftingSection
        onNavigate={onNavigate}
        onSelectGift={onSelectGift}
      />
      <WeddingSpotlightSection onNavigate={onNavigate} />
      <CorporateSpotlightSection onNavigate={onNavigate} />
      <TrustPillarsSection />
      <StoreShowcaseSection />
      <HomeFinalCta onNavigate={onNavigate} />
    </div>
  );
};
