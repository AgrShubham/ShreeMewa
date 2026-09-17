import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, ShieldCheck, RefreshCw, MessageCircle } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/products/ProductCard';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '../data/products';
import { ProductCategory, Product } from '../types';
import { getWhatsAppLink } from '../data/business';

interface ProductsViewProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.hindiName && product.hindiName.includes(searchQuery)) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Products Page Hero */}
      <section className="bg-gradient-to-b from-[#F5EFEB] via-[#FAF7F2] to-[#FAF7F2] py-8 sm:py-12 border-b border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <SectionHeading
            label="Harvest Catalogue"
            hindiSubtitle="स्वादिष्ट, ताज़ा एवं पौष्टिक सूखे मेवे"
            title="Premium Dry Fruits"
            description="Carefully selected favourites for everyday indulgence and special occasions. Hand-graded for size, freshness, and zero chemical processing."
          />
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#E8DFD5]">
          {/* Category Pills (Horizontally Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#C5A059] text-[#2A1810] shadow-xs'
                    : 'bg-white text-[#5C3A21] border border-[#E8DFD5] hover:border-[#C5A059] hover:bg-[#FAF7F2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C6D53] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search almonds, cashews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#E8DFD5] rounded-full text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-3xl border border-[#E8DFD5] p-8 space-y-3 shadow-sm">
              <p className="text-base font-serif font-bold text-[#2A1810]">
                {searchQuery
                  ? `No dry fruits found matching "${searchQuery}"`
                  : 'No dry fruits found in this category'}
              </p>
              <p className="text-xs text-[#5C3A21]">
                Try clearing your search query or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-2 px-4 py-2 bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] text-xs font-bold rounded-full cursor-pointer shadow-xs"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quality Standards Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E8DFD5] grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left shadow-md">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-[#2A1810]">Direct Origin Sourcing</h4>
            <p className="text-xs text-[#5C3A21] font-light">
              Origin-traceable harvests from orchards with established climate perfection.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-[#2A1810]">Hand-Graded Purity</h4>
            <p className="text-xs text-[#5C3A21] font-light">
              Inspected manually to filter out discolored pieces, split halves, or dust.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-[#2A1810]">Freshness Preservation</h4>
            <p className="text-xs text-[#5C3A21] font-light">
              Stored in controlled cool environments in Ramgarh to retain natural oils and crunch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
