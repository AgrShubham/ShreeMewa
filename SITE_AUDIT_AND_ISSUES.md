# Shree Mewa — UI & Logic Audit Report

> **Document Version:** 1.0  
> **Date:** September 13, 2026  
> **Project Directory:** [`d:/PROJECTS/Shree Mewa/project folder`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder)  
> **Local Dev Server:** `http://localhost:3000/`  
> **Status:** Actionable Findings & Remediation Plan

---

## 📋 Executive Summary

This document provides a comprehensive technical audit of the **Shree Mewa** web application (React 19 + TypeScript + Tailwind CSS). The audit evaluates user interface fidelity, client-side routing, interactive components, mobile responsiveness, accessibility (WCAG), and form submission logic.

### Severity Summary
| Severity | Count | Primary Impact |
|---|:---:|---|
| 🔴 **Critical** | 3 | Broken HTTP 404 images and missing social meta assets |
| 🟠 **High** | 3 | Modal dismiss failures, back-button routing freeze, and mobile navbar height overlap |
| 🟡 **Medium** | 3 | Dead form state / lack of in-page confirmation, card click targets on mobile, missing print styles |
| 🟢 **Low / Polish** | 2 | Empty state text formatting and z-index overlap with floating action buttons |

---

## 🔍 Detailed Issue Breakdown

---

### 1. Broken Media & Missing Assets (HTTP 404 Errors)

#### 🔴 Issue 1.1: King Jumbo Cashews (W-180) Image 404
* **File:** [`src/data/products.ts:L70`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/products.ts#L70)
* **Current Value:** `https://images.unsplash.com/photo-1536591375315-1b836815776a?auto=format&fit=crop&w=1200&q=80`
* **Symptoms:** The image URL returns HTTP `404 Not Found`. A broken image icon or empty gray block displays on the **Products page**, on the **Home page Bestseller grid**, and inside the **Product Detail Modal**.
* **Fix:** Replace with an active, high-resolution Unsplash photo of whole jumbo cashew kernels (e.g. `https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80` or a dedicated local asset).

#### 🔴 Issue 1.2: Traditional Banarasi Potli Trio Image 404
* **File:** [`src/data/gifting.ts:L145`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/gifting.ts#L145)
* **Current Value:** `https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80`
* **Symptoms:** The URL returns HTTP `404 Not Found`. Breaks the gift card in the **Gifting collection**, the **Catalogue list**, and the **Gift Detail Modal**.
* **Fix:** Replace with an active Unsplash festive gifting / hamper image (e.g. `https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80`).

#### 🔴 Issue 1.3: Wedding Consultation Gallery Image 404
* **File:** [`src/views/WeddingGiftingView.tsx:L145`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/WeddingGiftingView.tsx#L145)
* **Current Value:** `https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80`
* **Symptoms:** Left photo in the consultation gallery is broken on the Wedding Gifting page.
* **Fix:** Update to an active luxury hamper / wedding tray photograph.

#### 🔴 Issue 1.4: Missing OpenGraph Social Image (`og:image`)
* **File:** [`index.html:L13`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/index.html#L13)
* **Current Value:** `<meta property="og:image" content="/assets/logo-seal.svg" />`
* **Symptoms:** `/assets/logo-seal.svg` does not exist in the [`assets/`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/assets) folder (only `shree-mewa.svg` and `shree-mewa-logo.png` exist). Social link previews on WhatsApp, LinkedIn, and Facebook show broken or blank preview cards.
* **Fix:** Update to `<meta property="og:image" content="/assets/shree-mewa.svg" />` or generate a 1200x630px social banner.

---

### 2. Modal Dismissal & Accessibility Logic Flaws

#### 🟠 Issue 2.1: Clicking Backdrop Does Not Close Modals
* **Files:**
  * [`src/components/products/ProductDetailModal.tsx:L17-L21`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/products/ProductDetailModal.tsx#L17-L21)
  * [`src/components/gifting/GiftDetailModal.tsx:L17-L21`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/gifting/GiftDetailModal.tsx#L17-L21)
  * [`src/components/catalogue/CatalogueModal.tsx:L37-L41`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/catalogue/CatalogueModal.tsx#L37-L41)
* **Symptoms:** The outer backdrop container has `onClick={(e) => e.stopPropagation()}` on the modal card, but the backdrop `div` itself has **no `onClick={onClose}` handler**. Clicking outside the modal container does nothing, violating standard UX patterns and frustrating users.
* **Fix:** Add `onClick={onClose}` to the backdrop wrapper element.

#### 🟠 Issue 2.2: Missing Keyboard `Escape` Key Dismissal
* **Files:** Same modal components as above.
* **Symptoms:** Pressing the `Escape` key while inspecting a product, gift box, or lookbook does nothing.
* **Fix:** Add a `useEffect` hook listening to `keydown` events:
  ```tsx
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  ```

#### 🟠 Issue 2.3: Background Page Scroll Leakage
* **Files:** All modal components and [`src/components/layout/Navbar.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/layout/Navbar.tsx).
* **Symptoms:** While a modal or the mobile navigation menu is open, scrolling with a mouse wheel or trackpad continues to scroll the background page.
* **Fix:** Toggle `document.body.style.overflow = 'hidden'` when open and reset to `''` on cleanup.

---

### 3. Hash Routing & Browser Back-Button Bug

#### 🟠 Issue 3.1: Browser Back to Root URL Fails to Update View
* **File:** [`src/App.tsx:L35-L56`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/App.tsx#L35-L56)
* **The Code:**
  ```tsx
  const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '') as ActivePage;
    const validPages: ActivePage[] = [
      'home', 'products', 'gifting', 'wedding-gifting',
      'corporate-gifting', 'about', 'store', 'contact', 'catalogue',
    ];
    if (validPages.includes(hash)) {
      setActivePage(hash);
    }
  };
  ```
* **Symptoms:** 
  1. User starts at `http://localhost:3000/` (`home`).
  2. User clicks "Products" -> URL becomes `http://localhost:3000/#products`.
  3. User clicks the browser **Back** button to return to root `http://localhost:3000/`.
  4. `window.location.hash` becomes `""` (empty string).
  5. `validPages.includes("")` evaluates to `false`.
  6. **Bug:** `setActivePage` is never triggered; the user remains stuck on the Products view despite the address bar being at the root URL.
* **Fix:** Explicitly handle empty hash:
  ```tsx
  if (!hash || hash === 'home') {
    setActivePage('home');
  } else if (validPages.includes(hash)) {
    setActivePage(hash);
  }
  ```

---

### 4. Form Submission & User Feedback Bugs

#### 🟡 Issue 4.1: Dead `submitted` State in Wedding Gifting Form
* **File:** [`src/views/WeddingGiftingView.tsx:L26-L33`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/WeddingGiftingView.tsx#L26-L33)
* **The Code:**
  ```tsx
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ...
    window.open(getWhatsAppLink(formattedMsg), '_blank');
    setSubmitted(true);
  };
  ```
* **Symptoms:** `submitted` is set to `true`, but **is never referenced anywhere in the JSX template**. The form remains displayed with input values intact.

#### 🟡 Issue 4.2: Lack of In-Page Confirmation & Popup-Blocker Vulnerability
* **Files:**
  * [`src/views/WeddingGiftingView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/WeddingGiftingView.tsx)
  * [`src/views/CorporateGiftingView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/CorporateGiftingView.tsx)
  * [`src/views/ContactView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/ContactView.tsx)
* **Symptoms:**
  1. Forms rely strictly on `window.open(..., '_blank')`. Browsers (especially Safari on iOS or mobile browsers with popup blockers) frequently block synthetic `window.open` calls.
  2. If blocked, the page provides zero visual feedback; the user assumes the website form is broken.
  3. The form fields do not reset after submission.
* **Fix:** Render an inline success banner with a direct fallback link:
  ```tsx
  {submitted ? (
    <div className="p-6 rounded-2xl bg-white border border-[#C5A059] text-center space-y-3">
      <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto" />
      <h4 className="font-serif font-bold text-lg">Enquiry Prepared!</h4>
      <p className="text-xs text-[#5C3A21]">If WhatsApp did not open automatically, tap below:</p>
      <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-bold">
        Open WhatsApp Chat
      </a>
    </div>
  ) : ( ...form... )}
  ```

---

### 5. Mobile Navigation & Z-Index Collision

#### 🟠 Issue 5.1: Undefined `--nav-height` CSS Variable
* **File:** [`src/components/layout/Navbar.tsx:L166`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/layout/Navbar.tsx#L166)
* **The Code:**
  ```tsx
  <div className="lg:hidden fixed inset-x-0 top-[calc(var(--nav-height,78px))] bottom-0 z-40 ...">
  ```
* **Symptoms:** `--nav-height` is never declared in [`src/index.css`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/index.css). The header contains both the top announcement bar (`~30px`) and the main navbar (`~80px`), totaling approximately `110px`. Falling back to `78px` causes the mobile menu to awkwardly overlap the bottom portion of the header.
* **Fix:** Declare `--nav-height: 108px` in `:root` inside [`src/index.css`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/index.css), or calculate the position dynamically.

#### 🟡 Issue 5.2: Z-Index Collision with Floating WhatsApp Action
* **Files:**
  * [`src/components/layout/Navbar.tsx:L166`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/layout/Navbar.tsx#L166) (`z-40`)
  * [`src/components/ui/WhatsAppFloating.tsx:L9`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/ui/WhatsAppFloating.tsx#L9) (`z-40`)
* **Symptoms:** On mobile viewports, opening the mobile hamburger drawer leaves the floating WhatsApp button and tooltip bubble rendering over the bottom links of the drawer.
* **Fix:** Set the mobile drawer to `z-50` or hide `WhatsAppFloating` when the mobile drawer or any modal is active.

---

### 6. Product Card Touch & Click Targets (Mobile Friction)

#### 🟡 Issue 6.1: Overlay Button Inactive on Touchscreens
* **File:** [`src/components/products/ProductCard.tsx:L26-L34`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/products/ProductCard.tsx#L26-L34)
* **The Code:**
  ```tsx
  <div className="absolute inset-0 bg-gradient-to-t ... opacity-0 group-hover:opacity-100 ...">
    <button onClick={() => onSelect(product)}>View Harvest Details</button>
  </div>
  ```
* **Symptoms:** Hover states do not trigger naturally on mobile touchscreens. The "View Harvest Details" button remains hidden.
* **Fix:** Make the entire image area and card header directly clickable with `onClick={() => onSelect(product)}` and `cursor-pointer`.

---

### 7. Lookbook Print Styles Missing

#### 🟡 Issue 7.1: `window.print()` Captures Web Page Elements
* **Files:**
  * [`src/views/CatalogueView.tsx:L26-L28`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/CatalogueView.tsx#L26-L28)
  * [`src/components/catalogue/CatalogueModal.tsx:L32-L34`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/catalogue/CatalogueModal.tsx#L32-L34)
* **Symptoms:** Clicking "Print / Save Lookbook" invokes `window.print()`. Without `@media print` CSS rules in [`src/index.css`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/index.css), the print output includes the sticky announcement bar, main navbar, website footer, and floating WhatsApp buttons, causing content to break across pages.
* **Fix:** Add print-specific rules to hide chrome:
  ```css
  @media print {
    header, footer, aside, .no-print {
      display: none !important;
    }
    body {
      background: white !important;
      color: black !important;
    }
  }
  ```

---

### 8. Search & Filter Empty-State Glitches

#### 🟢 Issue 8.1: Awkward Empty Quote in Search Feedback
* **File:** [`src/views/ProductsView.tsx:L92`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/ProductsView.tsx#L92)
* **The Code:**
  ```tsx
  <p className="text-base font-serif font-bold text-[#2A1810]">
    No dry fruits found matching "{searchQuery}"
  </p>
  ```
* **Symptoms:** If a category has no matching items while the search box is blank, it renders `No dry fruits found matching ""` (empty quotation marks).
* **Fix:** Check `searchQuery ? ... : 'No dry fruits found in this category'`.

#### 🟢 Issue 8.2: Missing Empty State in Gifting View
* **File:** [`src/views/GiftingView.tsx:L54-L62`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/GiftingView.tsx#L54-L62)
* **Symptoms:** If a filtered category returns zero items, the view renders an empty container with no explanatory message or reset button.
* **Fix:** Add an empty state component with a "Reset Filters" action.

---

## 🛠️ Remediation Priority Plan

1. **Sprint 1 (Critical & High Priority):**
   - [x] Replace 404 Unsplash image URLs in [`products.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/products.ts), [`gifting.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/gifting.ts), and [`WeddingGiftingView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/WeddingGiftingView.tsx). *(RESOLVED)*
   - [x] Fix `og:image` path in [`index.html`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/index.html). *(RESOLVED)*
   - [x] Add backdrop click-to-close, ESC key handler, and body scroll lock to all 3 modals. *(RESOLVED)*
   - [x] Fix root URL back-button handling in [`App.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/App.tsx). *(RESOLVED)*

2. **Sprint 2 (Form & Mobile UX):**
   - [x] Add inline confirmation state and fallback WhatsApp links to all 3 enquiry forms. *(RESOLVED)*
   - [x] Define `--nav-height` in [`index.css`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/index.css) to eliminate mobile menu overlap. *(RESOLVED)*
   - [x] Separate `z-index` levels between the mobile menu drawer (`z-50`) and floating WhatsApp button (`z-40`). *(RESOLVED)*
   - [x] Make entire product card image/header clickable on mobile devices. *(RESOLVED)*

3. **Sprint 3 (Polish & Aesthetics):**
   - [x] Add `@media print` rules for clean PDF/print export of the Lookbook. *(RESOLVED)*
   - [x] Refine empty-state messages for category filters in Products and Gifting views. *(RESOLVED)*
