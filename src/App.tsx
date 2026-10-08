/**
 * Shree Mewa — Premium Dry Fruits & Gifting
 * Physical Boutique: Ramgarh Cantonment, Jharkhand, India
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloating } from './components/ui/WhatsAppFloating';
import { SEOJsonLd } from './components/ui/SEOJsonLd';
import { ProductDetailModal } from './components/products/ProductDetailModal';
import { GiftDetailModal } from './components/gifting/GiftDetailModal';
import { CatalogueModal } from './components/catalogue/CatalogueModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { CartProvider } from './context/CartContext';

import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { GiftingView } from './views/GiftingView';
import { WeddingGiftingView } from './views/WeddingGiftingView';
import { CorporateGiftingView } from './views/CorporateGiftingView';
import { AboutView } from './views/AboutView';
import { StoreView } from './views/StoreView';
import { ContactView } from './views/ContactView';
import { CatalogueView } from './views/CatalogueView';

import { ActivePage, Product, GiftCollectionItem } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedGift, setSelectedGift] = useState<GiftCollectionItem | null>(null);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);

  // Sync hash in URL with active page for bookmarking / deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ActivePage;
      const validPages: ActivePage[] = [
        'home',
        'products',
        'gifting',
        'wedding-gifting',
        'corporate-gifting',
        'about',
        'store',
        'contact',
        'catalogue',
      ];
      if (!hash || hash === 'home') {
        setActivePage('home');
      } else if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update dynamic document title for high SEO clarity per view
  useEffect(() => {
    const titles: Record<ActivePage, string> = {
      home: 'Shree Mewa — Premium Dry Fruits & Handcrafted Gifting | Ramgarh Cantonment',
      products: 'Single-Harvest Dry Fruits, Nuts & Dates | Shree Mewa Ramgarh',
      gifting: 'Handcrafted Keepsake Gift Boxes & Hampers | Shree Mewa',
      'wedding-gifting': 'Bespoke Wedding Dry Fruit Hampers & Shagun Trays | Shree Mewa',
      'corporate-gifting': 'Corporate Dry Fruit Gifting & Custom Logo Branding | Shree Mewa',
      about: 'Our Heritage, Backstory & Single-Harvest Sourcing | Shree Mewa',
      store: 'Visit Our Showroom at Bazar Samiti | Ramgarh Cantonment | Shree Mewa',
      contact: 'Contact Us & Store Inquiries | Shree Mewa Ramgarh',
      catalogue: 'Digital Gifting Lookbook & Festive Catalogue | Shree Mewa',
    };
    document.title = titles[activePage] || titles.home;
  }, [activePage]);

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A1810] selection:bg-[#EBDDC8] selection:text-[#2A1810]">
        {/* LocalBusiness & Organization SEO Schema */}
        <SEOJsonLd />

        {/* Global Navigation Header (with responsive mobile hamburger & inquiry bag) */}
        <Navbar
          activePage={activePage}
          onNavigate={navigateTo}
          onOpenCatalogue={() => setIsCatalogueModalOpen(true)}
        />

        {/* Main Content View Switcher */}
        <main className="flex-grow">
          {activePage === 'home' && (
            <HomeView
              onNavigate={navigateTo}
              onSelectProduct={setSelectedProduct}
              onSelectGift={setSelectedGift}
            />
          )}
          {activePage === 'products' && (
            <ProductsView onSelectProduct={setSelectedProduct} />
          )}
          {activePage === 'gifting' && (
            <GiftingView onSelectGift={setSelectedGift} />
          )}
          {activePage === 'wedding-gifting' && <WeddingGiftingView />}
          {activePage === 'corporate-gifting' && <CorporateGiftingView />}
          {activePage === 'about' && <AboutView />}
          {activePage === 'store' && <StoreView />}
          {activePage === 'contact' && <ContactView />}
          {activePage === 'catalogue' && <CatalogueView />}
        </main>

        {/* Global Footer with Ramgarh Store Presence & Links */}
        <Footer onNavigate={navigateTo} />

        {/* Floating WhatsApp Action Concierge */}
        <WhatsAppFloating />

        {/* Multi-Item WhatsApp Inquiry Bag Drawer */}
        <CartDrawer onNavigateToProducts={() => navigateTo('products')} />

        {/* Modals */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        <GiftDetailModal
          gift={selectedGift}
          onClose={() => setSelectedGift(null)}
        />

        <CatalogueModal
          isOpen={isCatalogueModalOpen}
          onClose={() => setIsCatalogueModalOpen(false)}
        />
      </div>
    </CartProvider>
  );
}
