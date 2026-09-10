# Shree Mewa — Premium Dry Fruits & Handcrafted Gifting
> **Flagship Boutique:** Main Road, Ramgarh Cantonment, Jharkhand, India  
> **Digital Showroom & Bespoke Gifting Concierge**

![Shree Mewa Banner](assets/shree-mewa-logo.png)

---

## 🌟 Overview

**Shree Mewa** is a luxury dry fruits boutique and ceremonial gifting platform rooted in Ramgarh Cantonment, Jharkhand. Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**, this digital experience delivers a high-touch concierge commerce model tailored for Indian ceremonial, wedding, and corporate gifting traditions.

Instead of generic shopping cart abandonment, the platform empowers customers to inspect unadulterated single-harvest nuts, browse handcrafted keepsake boxes, and seamlessly initiate pre-formatted **WhatsApp Concierge Orders** directly with the boutique staff.

---

## ✨ Key Features

- **🌾 Curated Single-Harvest Harvests:**
  - Mamra Almonds, California Supreme Almonds, King Cashews (W-180), Afghani Salted Pistachios, Kashmiri Walnut Kernels (Giri), Royal Medjool Dates, Long Kishmish, Turkish Anjeer, and Royal Panchmewa.
  - Granular details on origin, grading, natural oil content, and pack sizes (250g, 500g, 1kg).

- **🎁 Artisanal Keepsake Gifting:**
  - Teak-finish handcrafted wooden chests with antique brass clasps.
  - Deep emerald micro-velvet boxes with gold mandala foil stamping.
  - Hand-hammered pure brass platters and Banarasi brocade silk potli sets.

- **💍 Bespoke Wedding & Event Services:**
  - Bridal trousseau trays, Roka ceremony hampers, and wedding invite gift boxes.
  - Custom packaging color matching and laser-engraved monogram insignias.
  - Multi-attribute wedding inquiry funnel integrated with WhatsApp.

- **🏢 Corporate & Institutional Solutions:**
  - Standardized employee festive gifting (Diwali, New Year) and executive client suites.
  - Hot-foil company logo stamping, CEO greeting cards, and GST-compliant invoicing.

- **📍 Ramgarh Boutique Experience:**
  - Full showroom information: timings (10 AM – 9 PM, 7 days), location guide, direct phone desk, and interactive embedded Google Map.

- **📖 Digital Lookbook & Print Support:**
  - Dedicated collection catalog with one-click print stylesheet (`window.print()`) and native mobile sharing via the **Web Share API**.

- **🔍 Local SEO & Structured Data:**
  - Built-in `schema.org/LocalBusiness` JSON-LD schema with geo-coordinates, business hours, and Jharkhand service areas for high local search visibility.

---

## 🛠️ Technology Stack

- **Frontend Core:** React 19 (`react`, `react-dom`)
- **Language:** TypeScript 5.8 (Strict typing across data contracts)
- **Bundler & Build Tool:** Vite 6
- **Styling Engine:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Typography:** Google Fonts (`Cormorant Garamond`, `Plus Jakarta Sans`, `Noto Serif Devanagari`)
- **Icons:** Lucide React
- **Architecture:** Component-driven design, lightweight hash-based URL routing, responsive drawer navigation, and accessible modals

---

## 📁 Project Structure

```
project folder/
├── assets/                       # Vector & high-res brand logos and seals
├── src/
│   ├── components/
│   │   ├── brand/                # Multi-variant responsive Logo component
│   │   ├── catalogue/            # Digital Lookbook modal with print & share
│   │   ├── gifting/              # Gift card & deep inspection modals
│   │   ├── layout/               # Sticky Navbar & global Footer
│   │   ├── products/             # Product card & nutritional detail modals
│   │   └── ui/                   # SectionHeading, SEOJsonLd, WhatsAppFloating
│   ├── data/
│   │   ├── business.ts           # Store address, contact, maps, and WhatsApp helper
│   │   ├── faqs.ts               # Categorized FAQ knowledge base
│   │   ├── gifting.ts            # Curated gift box specifications
│   │   ├── navigation.ts         # Navigation items and bilingual badges
│   │   └── products.ts           # Single-harvest dry fruits catalogue
│   ├── views/                    # 9 Core application views (Home, Products, Gifting, etc.)
│   ├── types.ts                  # Shared TypeScript interfaces & models
│   ├── App.tsx                   # Main layout shell and hash router
│   ├── index.css                 # Design tokens and custom scrollbars
│   └── main.tsx                  # React entry point
├── CLIENT_DATA_AND_ASSETS_CHECKLIST.md # Client data & photography onboarding checklist
├── .env.example                  # Environment configuration template
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AgrShubham/ShreeMewa.git
   cd ShreeMewa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (optional):**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local dev server on port `3000` (`--host=0.0.0.0`) |
| `npm run build` | Compiles the production bundle into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript compiler checks (`tsc --noEmit`) |

---

## 📄 License & Ownership
Copyright © 2026 Shree Mewa. All rights reserved.
Developed for Shree Mewa Boutique, Ramgarh Cantonment, Jharkhand.
