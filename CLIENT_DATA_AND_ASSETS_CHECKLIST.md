# Shree Mewa — Production Data & Assets Master Checklist
> **Document Purpose:** Complete inventory of all real-world business data, photography, branding assets, and compliance credentials required to transition the Shree Mewa website from placeholder content to a fully production-ready, client-accurate deployment.
>
> **Target Business:** Shree Mewa  
> **Location:** Ramgarh Cantonment, Jharkhand, India

---

## Quick Navigation
1. [Brand Identity & Story](#1-brand-identity--story)
2. [Contact, Location & Showroom Data](#2-contact-location--showroom-data)
3. [Legal, Tax & Regulatory Compliance](#3-legal-tax--regulatory-compliance)
4. [Digital Branding Assets (Logos, Icons, OpenGraph)](#4-digital-branding-assets)
5. [Photography Assets Required](#5-photography-assets-required)
6. [Product Inventory Data (Single-Harvest Dry Fruits)](#6-product-inventory-data)
7. [Gifting & Hampers Data (Boxes, Trays, Chests)](#7-gifting--hampers-data)
8. [Store Operations & Customer Policies](#8-store-operations--customer-policies)
9. [Technical & Deployment Configuration](#9-technical--deployment-configuration)

---

## 1. Brand Identity & Story

*Currently in code: [`src/data/business.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/business.ts) & [`src/views/AboutView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/AboutView.tsx)*

| Field | Current Placeholder | Client's Original Data Needed |
| :--- | :--- | :--- |
| **Exact Registered Trade Name** | `Shree Mewa` | Official name as registered on GST/FSSAI |
| **Hindi Brand Name** | `श्री मेवा` | Exact spelling & Devanagari styling |
| **Primary Tagline** | `Premium Dry Fruits & Handcrafted Gifting` | Client's verified English tagline |
| **Hindi Tagline** | `विशिष्ट सूखे मेवे एवं पारंपरिक उपहार संग्रह` | Client's verified Hindi tagline |
| **Sub-Tagline** | `Where Sourced Perfection Meets Thoughtful Presentation` | Secondary motto or marketing hook |
| **Year of Establishment** | Not specified | Founding year (e.g., *Est. 2018* or *Since 1995*) |
| **Founder / Family Backstory** | Generic narrative | 2–3 paragraphs about the owners, their lineage in Ramgarh trading, and why Shree Mewa was created |
| **Sourcing Story & USP** | Generic origin references | Real sourcing channels (e.g., *direct imports from California & Iran, Kashmir Valley grower partnerships, Khari Baoli wholesale tie-ups*) |

---

## 2. Contact, Location & Showroom Data

*Currently in code: [`src/data/business.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/business.ts) & [`src/views/StoreView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/StoreView.tsx)*

| Field | Current Placeholder | Client's Original Data Needed |
| :--- | :--- | :--- |
| **Calling Phone Number** | `+91 7004584139` | Primary store desk / landline / mobile number |
| **Secondary Phone Number** | None | Alternate store manager phone (optional) |
| **WhatsApp Business Number** | `91 7004584139` | **Crucial:** Verified WhatsApp number receiving all website customer leads |
| **Official Customer Email** | `shreemewaofficial@gmail.com` | Official email (e.g., info@, sales@, or gmail) |
| **Shop Address (Line 1)** | `Shree Mewa, Shop no- B/15` | Building name, Shop number, Road name |
| **Prominent Landmark** | `Bazar Samiti` | Immediate visible landmark for visitors |
| **City, State, Pincode** | `Ramgarh Cantonment, Jharkhand — 829122` | Verified pin code & municipality |
| **Google Maps Embed URL** | Generic Ramgarh coordinates | Real Google Maps `<iframe>` embed code for the exact store pin |
| **Google Maps Directions Link** | `https://maps.google.com/?q=...` | Direct share link / Google Business Profile link |
| **Google Review URL** | None | Direct "Write a Review" link from Google Business profile |
| **Operating Hours (Weekdays)** | `10:00 AM – 9:00 PM` | Exact opening and closing times |
| **Operating Hours (Sundays/Festivals)** | `Open All 7 Days` | Any special holiday or festival timings |
| **Instagram Profile URL** | `https://instagram.com/shreemewa.official` | Real Instagram profile handle & link |
| **Facebook Page URL** | `https://facebook.com/shreemewa.official` | Real Facebook page URL |

---

## 3. Legal, Tax & Regulatory Compliance

*Mandatory for Indian packaged food & dry-fruit businesses:*

| Item | Requirement | Where Displayed on Site |
| :--- | :--- | :--- |
| **FSSAI License Number** | 14-digit state/central license number (e.g., `11122233344455`) | Footer, About Page, Product Modals, and SEO Schema |
| **GSTIN (GST Number)** | 15-digit GST registration (e.g., `20AAAAA0000A1Z5` for Jharkhand) | Corporate Gifting Page & Footer for B2B buyers |
| **Registered Firm Type** | Proprietorship / Partnership / Private Limited | Terms & Privacy policy / Corporate invoices |
| **Package Compliance Label** | Net Quantity declaration, Batch/Lot No. note, FSSAI Green Vegetarian Dot | Product detail pages |

---

## 4. Digital Branding Assets

*Files to be placed in `assets/` and `public/` directories:*

| Asset File | Format & Specs | Description |
| :--- | :--- | :--- |
| **Primary Brand Logo (Dark on Light)** | Vector `.svg` + High-res Transparent `.png` (min 1200px width) | Logo used on header navbar against light cream background |
| **Alternate Brand Logo (White / Gold)** | Vector `.svg` + Transparent `.png` | Logo used on dark backgrounds (Footer, Cover Cards, Dark Hero banners) |
| **Brand Seal / Circular Emblem** | Vector `.svg` or `.png` | Circular icon / crest used as watermark and stamps |
| **Favicon Package** | `.svg`, `favicon.ico`, `apple-touch-icon.png` (180x180), `icon-192.png`, `icon-512.png` | Browser tab icon and mobile home-screen icon |
| **Social Media OpenGraph Banner** | `.jpg` or `.png` (Exact: **1200 x 630 px**, < 300 KB) | Image that appears automatically when sharing the link on WhatsApp, Facebook, or iMessage |
| **FSSAI Logo Mark** | Transparent `.png` or `.svg` | Official FSSAI badge with license text |
| **Brand Color Codes** | Hex color values | Verify if brand colors match current Gold (`#C5A059`) & Nut Brown (`#2A1810`) or need adjustment |

---

## 5. Photography Assets Required

*Currently, the site uses high-quality Unsplash stock photos. These must be replaced with client's actual photography:*

### 5.1 Physical Showroom Photography (Minimum 4–6 Photos)
- [ ] **Exterior Storefront:** High-res day shot showing the storefront, entry, and main signage.
- [ ] **Store Interior (Wide View):** Showcasing clean display shelves, lighting, and layout.
- [ ] **Dry Fruit Counter / Bins:** Close-up of pristine dry fruit display counters or glass canisters.
- [ ] **Gifting Hamper Gallery Shelf:** Display area showing luxury boxes, platters, and wooden chests.
- [ ] **Tasting / Hospitality Area (Optional):** Customer consultation desk or seating.

### 5.2 Product Photography (Single-Harvest Dry Fruits)
*For each dry fruit item, supply 1–2 authentic photos (aspect ratio 4:3 or 1:1, min 1200x900px, warm lighting):*
- [ ] **Raw Nut View:** Clean, close-up photograph of nuts in a luxury ceramic/brass bowl or rustic slate.
- [ ] **Packaged View:** Nut inside Shree Mewa’s branded pouch, tin, or jar.

### 5.3 Gifting Collection Photography
*For each gift hamper or box design, supply 2–3 photos:*
- [ ] **Top-Down Open View:** Showing all compartments and contents clearly arranged.
- [ ] **Closed Box Perspective View:** Showing exterior finish (velvet texture, wooden grain, brass latch, or foil stamping).
- [ ] **Detail Close-Up:** Monogram tag, ribbon tying, wax seal, or laser engraving detail.

---

## 6. Product Inventory Data (Single-Harvest Dry Fruits)

*Currently in code: [`src/data/products.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/products.ts)*  
*For every dry fruit product sold in the shop, provide the following parameters:*

### Product Data Sheet Template

```
Product #1:
• Name (English): [e.g. Royal Mamra Almonds]
• Name (Hindi): [e.g. रॉयल मामरा बादाम]
• Category: [Almonds / Cashews / Pistachios / Walnuts / Dates / Raisins / Figs / Seeds & Berries / Mix]
• Origin: [e.g. Iran / California / Kashmir / Afghanistan / Turkey]
• Grade / Variety: [e.g. Royal Grade A+, W-180 King, W-240, Extra Light Halves]
• Pack Sizes Offered: [e.g. 250g, 500g, 1kg]
• Packaging Type: [e.g. Vacuum Sealed Foil, Golden Tin Canister, Resealable Ziplock Pouch]
• Pricing Policy: [Starting price, MRP, or "Market-linked rate on inquiry"]
• 3–4 Key Features: [e.g. High natural oil content, zero chemical polish, hand-graded]
• Description: [2-3 sentences explaining crunch, taste, and nutrition]
```

### Current Items in Code Needing Verification or Replacement:
1. **Mamra Almonds** (*Royal Mamra / Iranian*)
2. **California Almonds** (*Extra Supreme / Jumbo*)
3. **Cashews W-180** (*King Jumbo Whole White*)
4. **Roasted Cashews** (*Himalayan Pink Salt / Pepper / Plain Roasted*)
5. **Afghani Pistachios** (*Salted & Roasted / Plain Green Kernels*)
6. **Kashmiri Walnut Kernels (Giri)** (*Extra Light Snow White Halves*)
7. **Medjool Dates** (*Royal Jumbo Dates*)
8. **Afghani Raisins (Kishmish)** (*Long Golden / Green Afghani / Black Raisins*)
9. **Turkish Anjeer** (*Sun-dried garland figs*)
10. **Royal Panchmewa** (*Traditional 5-mewa puja / festive blend*)
11. **Any additions?** (e.g., Pine Nuts/Chilgoza, Macadamia, Hazelnuts, Chia/Flax Seeds, Dried Cranberries/Blueberries, Saffron/Kesar).

---

## 7. Gifting & Hampers Data

*Currently in code: [`src/data/gifting.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/gifting.ts)*  
*For every gift box, hamper, tray, or potli offered, provide:*

### Gift Hamper Data Sheet Template

```
Hamper #1:
• Collection Title: [e.g. The Royal Wooden Keepsake Chest]
• Category: [Luxury Keepsake / Velvet & Foil Box / Wedding & Shagun / Corporate / Classic Potli]
• Box / Container Type: [e.g. Polished Teak Wood Chest with Antique Brass Clasp]
• Exact Items Included: [e.g. Mamra Almonds (250g), King Cashews (250g), Pistachios (250g), Walnuts (200g)]
• Recommended Occasions: [e.g. Weddings, VIP Corporate, Diwali, Housewarming]
• Minimum Order Quantity (MOQ): [e.g. 1 unit for retail, 10 units for custom laser engraving]
• Customization Options: [e.g. Laser engraving family name, interior velvet color choice, wax seal card]
• Indicative Price / Range: [e.g. ₹2,200 – ₹2,800 depending on nut selection]
```

### Current Collections in Code Needing Verification or Replacement:
1. **The Royal Wooden Keepsake Chest** (Teak finish, 4 brass-latched compartments)
2. **The Imperial Emerald Velvet Box** (Micro-velvet rigid box, gold foiling, 4 canisters)
3. **The Shubh Vivah Trousseau Hamper** (Tiered decorative wedding tray, gota-patti trimmings)
4. **The Heritage Brass Platter Set** (Pure hand-hammered brass tray + 3 katoris)
5. **The Executive Sovereign Box** (Matte midnight-brown magnetic closure for corporate branding)
6. **The Traditional Banarasi Potli Trio** (3 Brocade silk drawstring pouches in golden basket)
7. **Client’s other box styles** (Acrylic dry fruit boxes, Mithai-Mewa fusion boxes, MDF carved boxes).

---

## 8. Store Operations & Customer Policies

*Currently in code: [`src/data/faqs.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/faqs.ts) & [`src/views/ContactView.tsx`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/views/ContactView.tsx)*

| Operational Parameter | Details Needed from Client |
| :--- | :--- |
| **Delivery & Dispatch Radius** | Local home delivery in Ramgarh? Delivery to Ranchi/Bokaro/Hazaribagh? Courier pan-India? |
| **Minimum Order for Delivery** | Free delivery threshold (e.g., Free above ₹1,500) or fixed delivery charges |
| **Sample Box Policy** | Can bulk buyers see physical samples before placing wedding/corporate orders? |
| **Bulk Order Lead Time** | How many days in advance should wedding/corporate orders be booked? (e.g., 7–14 days) |
| **Accepted Payment Modes** | UPI (GPay, PhonePe, Paytm), Cash on Delivery, Credit/Debit Cards, Bank NEFT/RTGS for corporate |
| **Shelf Life & Storage Instructions** | Specific storage advice given to buyers (e.g., *store in airtight glass jar under 20°C for 6–9 months*) |
| **Return / Exchange Policy** | Exact policy on food/perishable items (usually no returns unless damaged in transit) |

---

## 9. Technical & Deployment Configuration

| Technical Component | Client / Host Information Needed |
| :--- | :--- |
| **Domain Name** | The purchased domain (e.g. `shreemewa.com` or `shreemewa.in`) and registrar access (GoDaddy, Namecheap, Hostinger) |
| **Hosting Platform** | Target production host (Vercel, Netlify, Cloudflare Pages, Firebase Hosting, or VPS) |
| **SSL Certificate** | HTTPS setup (automatic on Vercel/Netlify/Cloudflare) |
| **Google Business Profile** | Verification code/access to connect website link directly to the verified Google Maps pin |
| **Google Analytics / Search Console** | GA4 Measurement ID (`G-XXXXXXXXXX`) and Search Console verification tag |
| **Meta Pixel ID (Optional)** | If client intends to run Instagram / Facebook ads for Diwali or Wedding seasons |
| **WhatsApp Business Setup** | Ensure the target WhatsApp number has WhatsApp Business app with profile photo, catalog, and automated greeting |

---

## Action Plan to Finalize

1. **Share this checklist** with the shop owner or client.
2. **Collect high-resolution photographs** of the showroom, real products, and gift boxes.
3. **Update [`src/data/business.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/business.ts)** with the real phone number, WhatsApp, and Google Maps pin.
4. **Update [`src/data/products.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/products.ts) & [`src/data/gifting.ts`](file:///d:/PROJECTS/Shree%20Mewa/project%20folder/src/data/gifting.ts)** with authentic weights, descriptions, and actual photo URLs.
5. **Run `npm run build`** and deploy to the custom production domain.
