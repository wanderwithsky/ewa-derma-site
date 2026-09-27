# Ewa Derma Clinic — Web Design System & Production Platform

> **"Where Science Meets Artistry"**  
> Official web platform for Ewa Derma Clinic — Lucknow’s premier dermatology, hair transplant, aesthetic medicine, vitiligo, and clinical laser clinic.

---

## 🎨 Brand Identity & Design Tokens

### 1. Logo-Derived Color Tokens (Source of Truth)
Extracted directly from the official 3D dimensional Ewa Derma logo badge:

| Token Name | Hex Value | Role & Usage Guidance |
| :--- | :--- | :--- |
| `--ewa-teal` | `#146A80` | **Primary Brand Color**: Header, navigation, trust markers, section anchoring. |
| `--ewa-teal-deep` | `#0D4A5A` | **Deep Teal**: Footer background, dark card depth, high-contrast borders. |
| `--ewa-teal-bg` | `#1B4B5C` | **Gradient Base**: Logo backdrop atmosphere and hero dark mode base. |
| `--ewa-teal-bg-2` | `#2B6E86` | **Gradient Lighter Stop**: Dimensional lighting, bevels, and subtle highlights. |
| `--ewa-magenta` | `#E31C79` | **Primary Conversion CTA**: Reserved strictly for high-intent actions (*Book Now*, *Call*, *WhatsApp*). |
| `--ewa-magenta-deep` | `#B4145F` | **Magenta Active/Hover**: Pressed states, active shadows, high-energy accents. |
| `--ewa-green` | `#4FAE7C` | **Secondary Accent (Hair)**: Echoes male silhouette; color-codes hair restoration & PRP. |
| `--ewa-cyan` | `#2E93A8` | **Tertiary Accent (Skin)**: Echoes female silhouette; color-codes clinical dermatology & lasers. |
| `--ewa-white` | `#FFFFFF` | **Pure White**: High-clarity text on dark surfaces and clean card foregrounds. |
| `--ewa-ink` | `#0E2A32` | **Deep Ink Text**: High-contrast body text on light backgrounds (WCAG AAA compliant). |
| `--ewa-mist` | `#F2F7F8` | **Mist Background**: Soft spa-like canvas wash preventing pure-white glare. |
| `--ewa-line` | `rgba(14,42,50,0.12)` | **Hairline Borders**: Crisp optical separation for cards and divider lines. |

---

## ✍️ Typography Strategy & Justification

### Display / Headline Typeface: **`Sora`** (Google Fonts)
- **Medical Precision Axis**: Geometric foundation, structured optical proportions, and crisp letterforms convey clinical accuracy, FDA-approved safety, and modern laser technology.
- **Aesthetic Warmth Axis**: Gently curved terminals and open counters prevent a sterile hospital feel, delivering approachable spa luxury and echoing the circular dimensional Ewa Derma logo ring.

### Body & UI Typeface: **`Manrope`** (Google Fonts)
- **Legibility on Small Viewports**: Ultra-clean geometric sans optimized for mobile reading on Indian 360px+ screens, treatment protocols, and multi-step booking forms.
- **Modular Type Scale**: 1.25 ratio scale with distinct optical weights (`400` body, `500` caption, `600` subheadings, `700/800` display).

---

## 🧱 Reusable Component Primitives

All components are located under `components/ui/` and `components/layout/`:

1. **`Button`** (`components/ui/Button.tsx`):
   - Supports `primary` (Magenta CTA), `secondary` (Teal), `outline`, `ghost`, `whatsapp`, and `call` variants.
   - Built with **subtle magnetic hover** (`framer-motion` spring tracking cursor offset), satisfying active press states, and shimmer lighting.
2. **`Badge`** (`components/ui/Badge.tsx`):
   - Color-coded badges for Hair (`--ewa-green`), Skin (`--ewa-cyan`), Trust (`--ewa-teal`), and High-Priority (`--ewa-magenta`).
   - Includes optional self-drawing SVG stroke ring animation for medical trust markers (e.g. *FDA Approved*).
3. **`Tabs`** (`components/ui/Tabs.tsx`):
   - Category filtering switcher with a smooth sliding active pill indicator using Framer Motion `layoutId`.
4. **`CircularEmblem`** (`components/ui/CircularEmblem.tsx`):
   - 3D dimensional circular motif with rotating SVG text orbit and high-resolution official logo badge asset.
5. **`Card`** (`components/ui/Card.tsx`):
   - Glassmorphic panels (`glass-card`, `glass-panel-dark`) with subtle bevels, gentle hover lift, and top color-accent borders.
6. **`Input`, `Select`, `Textarea`** (`components/ui/`):
   - Accessible form controls with animated focus glow rings, floating labels, inline error feedback, and DPDP Act compliance notes.
7. **`Section`** (`components/ui/Section.tsx`):
   - Semantic wrapper supporting `mist`, `white`, and `dark-teal` with soft ambient light mesh backdrops.
8. **`Header` & `Footer`** (`components/layout/`):
   - Sticky header with official logo, navigation, and quick-call CTA.
   - Rich footer featuring Lucknow NAP (The Millennium Place, Golf City, near Lulu Mall), timings (Mon-Sun 10 AM - 7 PM), and DPDP links.

---

## ♿ Accessibility & Performance Standards

- **WCAG 2.1 AA Baseline**: Every color combination is verified for minimum 4.5:1 contrast for body copy and 3.0:1 for large display headlines.
- **Visible Focus Outlines**: Custom `focus-visible:ring-2` with `--ewa-teal` or `--ewa-magenta` rings on every interactive element.
- **`prefers-reduced-motion`**: Built into every Framer Motion component via `useReducedMotion()`.
- **High-Converting Mobile Triggers**: Persistent WhatsApp and Click-to-Call floating action buttons (`FloatingActions.tsx`).

---

## 🚀 Running the Project

1. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` or `http://localhost:3000/style-guide`

2. **Build for Production**:
   ```bash
   npm run build
   ```

3. **Start Production Server**:
   ```bash
   npm run start
   ```
