import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProductCard } from '../products/ProductCard';
import { PRODUCTS_DATA } from '../../data/products';
import { ActivePage, Product } from '../../types';

interface FeaturedHarvestsSectionProps {
  onNavigate: (page: ActivePage) => void;
  onSelectProduct: (product: Product) => void;
}

export const FeaturedHarvestsSection: React.FC<FeaturedHarvestsSectionProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const featuredProducts = PRODUCTS_DATA.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          centered={false}
          label="Harvest Selections"
          hindiSubtitle="शुद्धता एवं ताजगी की गारंटी"
          title="Selected for Every Occasion"
          description="Handpicked almonds, cashews, pistachios, walnuts, raisins, and dates carefully graded for uniform size and pristine crunch."
        />

        <button
          onClick={() => {
            onNavigate('products');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A7730] hover:text-[#2A1810] transition-colors shrink-0 cursor-pointer"
        >
          <span>View All Dry Fruits</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
};
