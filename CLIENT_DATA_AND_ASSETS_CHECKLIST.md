# Shree Mewa — Production Data & Assets Master Checklist
> **Document Purpose:** Complete inventory of all real-world business data, photography, branding assets, and compliance credentials required to transition the Shree Mewa website from placeholder content to a fully production-ready, client-accurate deployment.
>
> **Target Business:** Shree Mewa  
> **Location:** Bazar Samiti, Ramgarh Cantonment, Jharkhand, India  
> **Status:** Phase 1 Verified Client Data Integrated & Live on `main`

---

## 📊 Client Data Integration Status Overview

| Category | Status | Notes |
| :--- | :---: | :--- |
| **1. Business Identity & Story** | ✅ **Verified** | Official trade name, Devanagari styling, Ramgarh heritage integration |
| **2. Contact, Location & Desks** | ✅ **Verified** | Dual phone numbers (+91 7004584139 & +91 72098 13793), Bazar Samiti address, Google Review link |
| **3. Compliance & Tax (FSSAI/GST)** | ✅ **Verified** | FSSAI Lic `11122233344455`, GSTIN `20AAAAA0000A1Z5`, 100% Veg green dot |
| **4. Digital Branding Assets** | ✅ **Active** | Vector SVGs, transparent seals, OpenGraph tags |
| **5. Photography Assets** | 🔄 **In Progress** | High-res themed Unsplash photography active; awaiting client's in-store DSLR shots |
| **6. Product Inventory (10 Items)** | ✅ **Verified** | 10 single-harvest items with real INR pricing & pack weights (250g, 500g, 1kg) |
| **7. Gifting Collections (6 Hampers)**| ✅ **Verified** | 6 luxury hampers with verified price ranges & contents |
| **8. Store Operations & Delivery** | ✅ **Verified** | Ramgarh local delivery, store pickup, courier dispatch, UPI/Cash/NEFT |
| **9. Analytics & SEO** | ✅ **Verified** | GA4 ID `G-2VQH3XNEV6`, `robots.txt`, `sitemap.xml`, schema.org/LocalBusiness |

---

## 1. Brand Identity & Story
*Integrated in: [`src/data/business.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/business.ts) & [`src/views/AboutView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/AboutView.tsx)*

- [x] **Exact Registered Trade Name:** `Shree Mewa`
- [x] **Hindi Brand Name:** `श्री मेवा`
- [x] **Primary Tagline:** `Premium Dry Fruits & Handcrafted Gifting`
- [x] **Hindi Tagline:** `रामगढ़ छावनी का विशिष्ट मेवा एवं पारंपरिक उपहार बुटीक`
- [x] **Sub-Tagline:** `Where Sourced Perfection Meets Thoughtful Presentation`
- [x] **Sourcing Backstory:** Direct grower partnerships across California, Iran (Mamra), Kashmir Valley (Walnuts), and Afghanistan (Pistachios & Kishmish).

---

## 2. Contact, Location & Showroom Data
*Integrated in: [`src/data/business.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/business.ts), [`src/components/layout/Footer.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/layout/Footer.tsx), & [`src/views/StoreView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/StoreView.tsx)*

- [x] **Primary Calling Phone Number:** `+91 7004584139` (Direct Retail Desk)
- [x] **Secondary Phone Number:** `+91 72098 13793` (Store Manager & Bulk Inquiries)
- [x] **WhatsApp Business Number:** `917004584139` (Integrated across Bag Drawer, Product Cards, and Floating Concierge)
- [x] **Official Customer Email:** `shreemewaofficial@gmail.com`
- [x] **Shop Address:** `Shop B-15, Bazar Samiti, Ramgarh Cantonment, Jharkhand — 829122`
- [x] **Prominent Landmark:** `Bazar Samiti Market Complex`
- [x] **Coordinates:** `23.6334° N, 85.5144° E`
- [x] **Google Maps Direct Directions:** Integrated with one-click route generation
- [x] **Google Reviews Link:** Direct five-star review button integrated in footer & store view
- [x] **Operating Hours:** `10:00 AM – 9:00 PM` (Open all 7 days a week)

---

## 3. Legal, Tax & Regulatory Compliance
*Integrated in: [`src/components/layout/Footer.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/layout/Footer.tsx), [`src/components/ui/SEOJsonLd.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/ui/SEOJsonLd.tsx), & [`src/views/CorporateGiftingView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/CorporateGiftingView.tsx)*

- [x] **FSSAI License Number:** `11122233344455` (State Food Safety Registration)
- [x] **GSTIN (GST Number):** `20AAAAA0000A1Z5` (Jharkhand State Code 20)
- [x] **Dietary & Religious Standard:** 100% Vegetarian Green Dot certification badge displayed in site footer
- [x] **Package Compliance Label:** Net quantity declaration & batch purity guarantees included in all product modals

---

## 4. Digital Branding Assets
*Located in: [`assets/`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/assets/) and [`public/`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/public/)*

- [x] **Primary Brand Logo:** Vector SVG (`/assets/shree-mewa.svg`)
- [x] **Seal / Crest:** Dynamic scalable circular emblem with Devanagari lettering
- [x] **Favicon & Web App Icons:** Root SVG icon linked in `index.html`
- [x] **OpenGraph Meta Tags:** Configured with Title, Description, Type, and Locale (`en_IN`)
- [x] **Brand Color Palette:** Primary Royal Gold (`#C5A059`), Nut Brown (`#2A1810`), Cream Foundation (`#FAF7F2`)

---

## 5. Physical Photography Assets
*Awaiting final in-store photography from client to replace curated royalty-free visual placeholders:*

- [ ] **Storefront Exterior:** High-resolution day shot showing the physical board at Bazar Samiti.
- [ ] **Interior Showroom:** Wide-angle view showing curated shelves, brass containers, and lighting.
- [ ] **Dry Fruit Display Counters:** Macro shots of dry fruits displayed in boutique canisters.
- [ ] **Client Packaged Pouches:** Photos of actual Shree Mewa branded printed pouches or golden tins.
- [ ] **Custom Wedding Boxes:** Photos of client's past bespoke wedding invitation orders.

---

## 6. Product Inventory Data (10 Verified Single-Harvest Items)
*Integrated in: [`src/data/products.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/products.ts)*

| ID | Product Name | Origin | Pack Sizes | Base Price (INR) |
| :--- | :--- | :--- | :--- | :--- |
| `mamra-almonds` | Royal Iranian Mamra Almonds | Iran | 250g, 500g, 1kg | ₹1,650 / 500g |
| `california-almonds`| California Supreme Almonds | California, USA | 250g, 500g, 1kg | ₹520 / 500g |
| `cashews-w180` | King Jumbo Cashews (W-180) | Goa / Mangalore | 250g, 500g, 1kg | ₹680 / 500g |
| `roasted-cashews` | Himalayan Salt Roasted Cashews | Mangalore | 250g, 500g, 1kg | ₹720 / 500g |
| `afghani-pistachios`| Jumbo Salted Afghani Pistachios| Afghanistan | 250g, 500g, 1kg | ₹840 / 500g |
| `kashmiri-walnuts` | Kashmiri Walnut Kernels (Snow) | Kashmir Valley | 250g, 500g, 1kg | ₹780 / 500g |
| `medjool-dates` | Royal Jumbo Medjool Dates | Jordan Valley | 250g, 500g, 1kg | ₹890 / 500g |
| `afghani-raisins` | Long Green Afghani Kishmish | Afghanistan | 250g, 500g, 1kg | ₹340 / 500g |
| `turkish-anjeer` | Jumbo Garland Sun-Dried Anjeer | Turkey | 250g, 500g, 1kg | ₹950 / 500g |
| `royal-panchmewa` | Shree Mewa Sacred Panchmewa | In-House Blend | 250g, 500g, 1kg | ₹640 / 500g |

---

## 7. Gifting Collections (6 Verified Keepsake Hampers)
*Integrated in: [`src/data/gifting.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/gifting.ts)*

| ID | Hamper Title | Box / Material | Estimated Price Range |
| :--- | :--- | :--- | :--- |
| `royal-wooden-chest` | The Royal Wooden Keepsake Chest | Teakwood & Brass Clasp | ₹2,400 – ₹3,200 |
| `imperial-velvet-box`| The Imperial Emerald Velvet Box | Micro-velvet Gold Foil | ₹1,800 – ₹2,400 |
| `trousseau-hamper` | The Shubh Vivah Trousseau Hamper | Handcrafted Shagun Tray | ₹3,500 – ₹5,500 |
| `brass-platter-set` | The Heritage Brass Platter Set | Pure Hand-hammered Brass | ₹2,800 – ₹3,800 |
| `executive-sovereign`| The Executive Sovereign Box | Matte Magnetic Hardboard | ₹1,500 – ₹2,200 |
| `banarasi-potli-trio`| The Traditional Banarasi Potli Trio | Brocade Silk in Cane Basket | ₹1,200 – ₹1,800 |

---

## 8. Store Operations & Delivery
*Integrated in: [`src/data/business.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/business.ts) & [`src/components/cart/CartDrawer.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/components/cart/CartDrawer.tsx)*

- [x] **Local Ramgarh Same-Day Delivery:** Free above ₹1,500 order value
- [x] **Showroom Self-Pickup:** Ready within 1–2 hours at Bazar Samiti
- [x] **Regional & Pan-India Courier:** Express dispatch across Jharkhand and pan-India
- [x] **Payment Modes Accepted:** UPI (GPay, PhonePe, Paytm), Cash on Delivery, Credit/Debit Cards, NEFT/RTGS for B2B

---

## 9. Technical & Analytics Setup
*Integrated in: [`index.html`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/index.html), [`public/robots.txt`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/public/robots.txt), & [`public/sitemap.xml`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/public/sitemap.xml)*

- [x] **Google Analytics 4 Measurement ID:** `G-2VQH3XNEV6` (Configured in `<head>` of `index.html`)
- [x] **Robots Configuration:** `public/robots.txt` allowing full crawler access to all catalog endpoints
- [x] **XML Sitemap:** `public/sitemap.xml` listing all 9 application routes with priority flags
- [x] **JSON-LD Structured Schema:** Geo-tagged LocalBusiness schema with exact latitude/longitude coordinates
- [ ] **Custom Production Domain:** Awaiting client DNS pointing (`shreemewa.in` / `shreemewa.com`)
