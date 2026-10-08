import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, GiftCollectionItem } from '../types';

export interface CartItem {
  id: string; // unique item id (e.g. `prod-mamra-almond-500g` or `gift-royal-wooden-keepsake`)
  type: 'product' | 'gift';
  itemId: string;
  name: string;
  hindiName?: string;
  image: string;
  selectedWeight?: string;
  priceFormatted: string;
  estimatedUnitPrice: number; // numeric value for subtotal calculation
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addProduct: (product: Product, weight?: string, quantity?: number) => void;
  addGift: (gift: GiftCollectionItem, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  estimatedSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'shree_mewa_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable or quota exceeded
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  // Helper to calculate price per weight based on 500g base rate
  const calculateProductPrice = (product: Product, weight: string): { formatted: string; num: number } => {
    const base500g = product.pricePer500g || 500;
    if (weight === '250g') {
      const price250g = Math.round(base500g * 0.52); // slightly higher packaging cost margin
      return { formatted: `₹${price250g}`, num: price250g };
    }
    if (weight === '1kg') {
      const price1kg = Math.round(base500g * 1.95); // slight bulk savings
      return { formatted: `₹${price1kg}`, num: price1kg };
    }
    // Default 500g
    return { formatted: `₹${base500g}`, num: base500g };
  };

  const addProduct = (product: Product, weight = '500g', quantity = 1) => {
    const { formatted, num } = calculateProductPrice(product, weight);
    const cartItemId = `${product.id}-${weight}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      const newItem: CartItem = {
        id: cartItemId,
        type: 'product',
        itemId: product.id,
        name: product.name,
        hindiName: product.hindiName,
        image: product.image,
        selectedWeight: weight,
        priceFormatted: `${formatted} (${weight})`,
        estimatedUnitPrice: num,
        quantity,
      };
      return [...prev, newItem];
    });

    setIsOpen(true);
  };

  const addGift = (gift: GiftCollectionItem, quantity = 1) => {
    const cartItemId = gift.id;
    // Extract base price estimate from range string like "₹2,400 – ₹3,200" -> 2400
    let numericEst = 2000;
    if (gift.priceRange) {
      const match = gift.priceRange.replace(/,/g, '').match(/\d+/);
      if (match) numericEst = parseInt(match[0], 10);
    }

    setItems((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      const newItem: CartItem = {
        id: cartItemId,
        type: 'gift',
        itemId: gift.id,
        name: gift.name,
        image: gift.image,
        priceFormatted: gift.priceRange || 'On Request',
        estimatedUnitPrice: numericEst,
        quantity: Math.max(quantity, gift.minOrderQuantity || 1),
      };
      return [...prev, newItem];
    });

    setIsOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const estimatedSubtotal = items.reduce(
    (sum, item) => sum + item.estimatedUnitPrice * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addProduct,
        addGift,
        updateQuantity,
        removeItem,
        clearCart,
        totalItemsCount,
        estimatedSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
