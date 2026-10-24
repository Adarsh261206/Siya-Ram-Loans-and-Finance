# Siyaram Loans & Finance — Modern Web Portal

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_React-0.475.0-F97316?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![Static Frontend](https://img.shields.io/badge/Backend-100%25_Static-22C55E?style=for-the-badge)](https://github.com/)

> **"Empowering Your Dreams, Financing Your Future."**  
> Premium, responsive, conversion-focused static financial services website designed for **Siyaram Loans & Finance** (Proprietor: Ramesh Sawant).

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Configuration & Data Management](#-configuration--data-management)
- [Design System & Theme](#-design-system--theme)
- [Deployment](#-deployment)
- [Contact & Business Inquiries](#-contact--business-inquiries)

---

## 🌟 Overview

**Siyaram Loans & Finance** is a premier loan consultancy active since 2012, facilitating over **₹10,000 Cr+** in institutional disbursements across a network of **270+ banking and NBFC partners**. 

This repository delivers a modern, high-performance static web experience built with **React**, **Vite**, and **Tailwind CSS**. It provides an institutional-grade aesthetic featuring deep navy backgrounds, royal blue tones, subtle gold accents, glassmorphic cards, interactive loan calculators, and direct WhatsApp/Email dispatch integration.

### Core Value Proposition Highlighted:
- **0% Customer Fees:** Siyaram is compensated directly by panel institutions upon successful loan matching. Zero consulting fees or hidden markups are charged to borrowers.
- **Pan-India Coverage:** Streamlined end-to-end case processing across all states and union territories.
- **Rate-Focused Optimization:** Lowering customer borrowing costs through strategic balance transfers and multi-lender rate comparisons.

---

## 🚀 Key Features

### 1. Sticky Glassmorphic Navigation
- Mobile-responsive navigation bar with smooth anchor scrolling to all page sections.
- Quick contact indicators (phone, email) and a prominent **"Get Free Consultation"** call-to-action button.

### 2. High-Impact Hero Section
- Animated counter statistics displaying **₹10,000 Cr+ Disbursement**, **270+ Partners**, **Since 2012 Experience**, and **0% Customer Fees**.
- Quick-filter pills linking directly to key loan categories.

### 3. Zero-Cost Trust Guarantee & Transparent Revenue Model
- Step-by-step breakdown illustrating how Siyaram operates without charging borrower fees.
- Clarifies institutional compensation and zero backend markups.

### 4. Interactive Balance Transfer Savings Calculator
- Real-time client-side EMI & interest amortization calculation.
- Sliders for **Loan Amount**, **Current Interest Rate (ROI)**, **New Interest Rate**, and **Tenure (Years)**.
- Live calculation of **Monthly EMI Savings** and **Lifetime Interest Savings**, with instant pre-fill into the consultation form.

### 5. Verified Case Study Section
- Concrete financial demonstration showing how reducing a mortgage rate from 9.00% to 7.00% on a ₹50,00,000 principal saves approximately **₹15,00,000** in interest over 20 years.

### 6. Comprehensive Multi-Loan Universe
- **Instant Cash Loans:** Rapid liquidity with swift documentation.
- **Business Expansion:** Tailored working capital & machinery loans for MSMEs.
- **Vehicle Financing:** Flexible terms for personal and commercial fleets.
- **Fresh Property Purchase:** Competitive home purchase and construction loans.

### 7. Institutional Banking Network Showcase
- Top 10 Indian Public Sector Undertaking (PSU) banks: SBI, Bank of Baroda, PNB, Canara Bank, Union Bank of India, and more.
- Leading Private Banks & NBFCs: HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Bajaj Housing Finance, Tata Capital, Piramal, and L&T Finance.

### 8. Interactive Consultation & Lead Form
- Comprehensive field validation for full name, 10-digit mobile number, email, loan category, and required amount.
- Generates a unique reference tracking code (`SYR-XXXXXX`).
- Direct **Instant WhatsApp Dispatch** with pre-formatted loan details.
- Direct **Mailto Dispatch** with pre-populated inquiry subject and body.

### 9. Persistent Floating Contact Widget
- Quick-access floating trigger in the bottom-right corner for direct WhatsApp messaging and click-to-call dialing.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 18](https://react.dev/)** | Component-driven UI framework |
| **[Vite 6](https://vitejs.dev/)** | Fast development server and production bundler |
| **[Tailwind CSS 3](https://tailwindcss.com/)** | Utility-first styling with custom colors and glassmorphism |
| **[Lucide React](https://lucide.dev/)** | Clean, modern feather icon library |
| **[PostCSS / Autoprefixer](https://postcss.org/)** | CSS vendor prefixing and processing |

---

## 📂 Project Structure

```text
Siyaram Loans Static Website/
├── dist/                          # Production build output
├── public/                        # Static assets (favicons, public images)
├── src/
│   ├── assets/                    # Image assets and illustrations
│   ├── components/                # Modular React UI components
│   │   ├── About.jsx              # Founder bio, credentials, company vision
│   │   ├── BalanceTransfer.jsx    # Balance transfer benefits and CTA
│   │   ├── CaseStudy.jsx          # Detailed ROI savings comparison
│   │   ├── Contact.jsx            # Contact container & reach-out details
│   │   ├── ContactForm.jsx        # Validated form with WhatsApp & email actions
│   │   ├── FloatingContact.jsx    # Sticky floating WhatsApp & call trigger
│   │   ├── Footer.jsx             # Disclaimer, sitemap, copyright footer
│   │   ├── Hero.jsx               # Hero banner, stats counter, trust badges
│   │   ├── LoanSolutions.jsx      # Multi-loan products grid
│   │   ├── Navbar.jsx             # Responsive navigation with mobile menu
│   │   ├── Partners.jsx           # PSU & Private bank institutional badges
│   │   ├── Process.jsx            # 4-step simple application workflow
│   │   ├── RevenueModel.jsx       # 4-step institutional compensation model
│   │   ├── SavingsCalculator.jsx  # Interactive EMI & interest calculation
│   │   ├── TrustGuarantee.jsx     # Zero-cost advisory value pillars
│   │   └── WhyChooseUs.jsx        # 6 core differentiators
│   ├── data/
│   │   └── loanData.js            # Centralized business data, stats, partners & copy
│   ├── App.jsx                    # Application entry and layout assembler
│   ├── index.css                  # Global Tailwind directives & custom utilities
│   └── main.jsx                   # React DOM root initialization
├── index.html                     # HTML5 entry with SEO tags & Google Fonts
├── package.json                   # Project dependencies and npm scripts
├── postcss.config.js              # PostCSS plugins setup
├── tailwind.config.js             # Theme tokens: custom navy, royal, gold palettes
└── vite.config.js                 # Vite configuration
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

Check your installation:
```bash
node -v
npm -v
```

### Installation

1. Clone or open the repository folder:
   ```bash
   cd "Siyaram Loans Static Website"
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

Open your browser at the local URL displayed (default: `http://localhost:5173/`).

### Production Build

Create an optimized, minified bundle for production:
```bash
npm run build
```

Preview the production build locally before deployment:
```bash
npm run preview
```

---

## ⚙️ Configuration & Data Management

All core business variables, phone numbers, email addresses, partner lists, and loan categories are organized in [`src/data/loanData.js`](file:///src/data/loanData.js).

To update company contact info or phone numbers:
```javascript
// src/data/loanData.js
export const contactInfo = {
  companyName: "Siyaram Loans & Finance",
  tagline: "Empowering Your Dreams, Financing Your Future.",
  proprietor: "Ramesh Sawant",
  phone: "+91 95941 39192",
  phoneClean: "+919594139192",
  phone2: "+91 97020 51179",
  phone2Clean: "+919702051179",
  whatsapp: "+91 95941 39192",
  whatsappClean: "919594139192",
  email: "siyaramloans4u@gmail.com",
  experience: "Since 2012",
  disbursement: "₹10,00,000 Cr+",
  partnersCount: "270+",
  coverage: "Pan-India Cases",
  customerFees: "0%",
};
```

---

## 🎨 Design System & Theme

The project utilizes a custom color palette defined in [`tailwind.config.js`](file:///tailwind.config.js):

- **Navy Palette:**
  - `navy-950` (`#070C18`) — Primary deep background
  - `navy-900` (`#0B1329`) — Elevated surface cards
  - `navy-800` (`#142247`) — Card borders and dividers
- **Royal Blue Accent:**
  - `royal-600` (`#2563EB`) — Primary CTA and active state color
  - `royal-500` (`#3B82F6`) — Glow highlights and interactive accents
- **Gold Accent:**
  - `gold-400` (`#F59E0B`) — Trust badges, highlight tags, and key figures
- **Typography:**
  - Headings: [Outfit](https://fonts.google.com/specimen/Outfit)
  - Body: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 🌐 Deployment

Because this project is 100% static with no server-side execution, it can be deployed to any static hosting provider in seconds:

### Deploy to Vercel
```bash
npx vercel
```
*Build Command:* `npm run build`  
*Output Directory:* `dist`

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```
*Build Command:* `npm run build`  
*Publish Directory:* `dist`

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Build and push the `dist/` directory to the `gh-pages` branch.



*©  Loans & Finance. All rights reserved. Loan approvals and interest rates are subject to panel banking partner guidelines and applicant eligibility.*
# Siya-Ram-Loans-and-Finance
