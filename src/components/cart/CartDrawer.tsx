import React, { useEffect, useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Truck,
  Store,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useCart, CartItem } from '../../context/CartContext';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/business';

interface CartDrawerProps {
  onNavigateToProducts?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigateToProducts }) => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalItemsCount,
    estimatedSubtotal,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [fulfillmentType, setFulfillmentType] = useState<'ramgarh_delivery' | 'pickup' | 'dispatch'>(
    'ramgarh_delivery'
  );
  const [customerNotes, setCustomerNotes] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!isOpen) {
      setOrderSent(false);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const fulfillmentLabels = {
    ramgarh_delivery: 'Local Ramgarh Delivery (Same Day)',
    pickup: 'Store Pickup at Bazar Samiti Showroom',
    dispatch: 'Ranchi / Bokaro / Pan-India Courier',
  };

  const handleSendWhatsApp = () => {
    const today = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const itemListText = items
      .map((item, idx) => {
        const itemTotal = item.estimatedUnitPrice * item.quantity;
        const details = item.selectedWeight ? `(${item.selectedWeight})` : '';
        return `${idx + 1}. *${item.name}* ${details} × ${item.quantity} = ₹${itemTotal.toLocaleString('en-IN')}`;
      })
      .join('\n');

    const message = [
      `*New Order Inquiry — Shree Mewa*`,
      `📅 *Date:* ${today}`,
      customerName ? `👤 *Customer Name:* ${customerName}` : null,
      `📍 *Preference:* ${fulfillmentLabels[fulfillmentType]}`,
      customerNotes ? `📝 *Notes:* ${customerNotes}` : null,
      `\n*Order Summary (${totalItemsCount} items):*`,
      itemListText,
      `\n*Estimated Total:* ~₹${estimatedSubtotal.toLocaleString('en-IN')}`,
      `\n_Please confirm stock availability, pack sizes, and total bill at the Ramgarh store. Thank you!_`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(getWhatsAppLink(message), '_blank');
    setOrderSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={closeCart}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-[#FAF7F2] h-full flex flex-col shadow-2xl border-l border-[#E8DFD5] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-[#E8DFD5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C5A059]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2A1810]">
                Your Inquiry Bag
              </h3>
              <p className="text-[11px] text-[#7A5840]">
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>

          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#E8DFD5] text-[#2A1810] flex items-center justify-center transition-colors cursor-pointer border border-[#E8DFD5]"
            aria-label="Close Inquiry Bag"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-grow overflow-y-auto p-5 sm:p-6 space-y-5">
          {orderSent ? (
            <div className="py-8 text-center space-y-4 bg-white rounded-3xl p-6 border border-[#E8DFD5]">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/15 text-[#1E7E34] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-xl text-[#2A1810]">
                  Inquiry Dispatched!
                </h4>
                <p className="text-xs text-[#5C3A21] leading-relaxed">
                  Your WhatsApp inquiry has been prepared. If WhatsApp didn't open automatically, tap below:
                </p>
              </div>
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Re-Open WhatsApp</span>
              </button>
              <button
                onClick={() => setOrderSent(false)}
                className="text-xs text-[#9A7730] hover:text-[#2A1810] font-semibold transition-colors block mx-auto pt-1 cursor-pointer"
              >
                ← Return to Bag
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#E8DFD5] flex items-center justify-center mx-auto text-[#C5A059] shadow-xs">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-lg text-[#2A1810]">
                  Your Bag is Currently Empty
                </h4>
                <p className="text-xs text-[#7A5840] max-w-xs mx-auto">
                  Browse our single-harvest almonds, cashews, walnuts, or luxury gift hampers to assemble your custom inquiry.
                </p>
              </div>
              <button
                onClick={() => {
                  closeCart();
                  if (onNavigateToProducts) onNavigateToProducts();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#B38E46] text-[#2A1810] text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                <span>Browse Dry Fruits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Itemized List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-white rounded-2xl border border-[#E8DFD5] flex items-start gap-3 shadow-2xs hover:border-[#C5A059] transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#F5EFEB] border border-[#E8DFD5]"
                    />

                    <div className="flex-grow min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif font-bold text-sm text-[#2A1810] truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#8C6D53] hover:text-red-600 transition-colors p-1 -m-1 cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-[#7A5840]">
                        {item.selectedWeight && (
                          <span className="px-1.5 py-0.2 rounded bg-[#FAF7F2] font-semibold text-[#2A1810] border border-[#E8DFD5]">
                            {item.selectedWeight}
                          </span>
                        )}
                        <span className="font-medium text-[#9A7730]">
                          {item.priceFormatted}
                        </span>
                      </div>

                      {/* Quantity Selector */}
                      <div className="pt-1.5 flex items-center justify-between">
                        <div className="inline-flex items-center border border-[#E8DFD5] rounded-lg bg-[#FAF7F2]">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-[#E8DFD5] text-[#2A1810] rounded-l-lg transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#2A1810]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-[#E8DFD5] text-[#2A1810] rounded-r-lg transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-[#2A1810]">
                          ₹{(item.estimatedUnitPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Bag Action */}
              <div className="flex justify-end">
                <button
                  onClick={clearCart}
                  className="text-[11px] text-[#8C6D53] hover:text-[#2A1810] underline cursor-pointer"
                >
                  Clear All Items
                </button>
              </div>

              {/* Order Options */}
              <div className="p-4 bg-white rounded-2xl border border-[#E8DFD5] space-y-3">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C6D53] block">
                  Delivery / Pickup Preference:
                </span>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setFulfillmentType('ramgarh_delivery')}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                      fulfillmentType === 'ramgarh_delivery'
                        ? 'border-[#C5A059] bg-[#FAF7F2] font-bold text-[#2A1810]'
                        : 'border-[#E8DFD5] text-[#5C3A21]'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Local Ramgarh Delivery (Same Day)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillmentType('pickup')}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                      fulfillmentType === 'pickup'
                        ? 'border-[#C5A059] bg-[#FAF7F2] font-bold text-[#2A1810]'
                        : 'border-[#E8DFD5] text-[#5C3A21]'
                    }`}
                  >
                    <Store className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Store Pickup (Bazar Samiti Showroom)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillmentType('dispatch')}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                      fulfillmentType === 'dispatch'
                        ? 'border-[#C5A059] bg-[#FAF7F2] font-bold text-[#2A1810]'
                        : 'border-[#E8DFD5] text-[#5C3A21]'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-[#9A7730] shrink-0" />
                    <span>Ranchi / Bokaro / Courier Dispatch</span>
                  </button>
                </div>

                {/* Optional Customer Name */}
                <div className="pt-2">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xl text-xs text-[#2A1810] placeholder-[#8C6D53] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Subtotal & WhatsApp CTA */}
        {items.length > 0 && !orderSent && (
          <div className="p-5 sm:p-6 bg-white border-t border-[#E8DFD5] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#5C3A21] font-medium">Estimated Subtotal:</span>
              <span className="text-lg font-serif font-bold text-[#2A1810]">
                ₹{estimatedSubtotal.toLocaleString('en-IN')}*
              </span>
            </div>

            <p className="text-[10px] text-[#7A5840] leading-tight">
              * Indicative retail total. Exact bill, pack weights, and delivery charge (free on orders above ₹1,500 in Ramgarh) are confirmed on WhatsApp.
            </p>

            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Order to WhatsApp ({totalItemsCount} items)</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#8C6D53] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>FSSAI Lic: {BUSINESS_CONFIG.fssaiNumber} • Direct Boutique Desk</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
