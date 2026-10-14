# Ravindranaath C — Professional Executive Portfolio

A single-page, responsive executive website crafted for **Ravindranaath C**, Senior Insurance, Loss Prevention, and Industrial Security Specialist, and CEO & MD of SLR-Industrial Security & Facility Services.

Built with **React 19**, **Vite**, and **Tailwind CSS**, adhering to the **WealthBridge** executive consulting design aesthetic (Deep Navy `#0F1F3D`, Muted Gold `#C9A24B`, and Cream `#FAF9F5`).

---

## 📁 Project Architecture & Content Management

All text, statistics, dates, contact information, and client confirmation flags are centralized in **one single file**:

📍 **`src/data/content.js`**

To update any copy, numbers, or details, you only need to edit that file:
- **Years of Experience**: `CLIENT_CONFIG.yearsOfExperience` (currently set to `"37"`)
- **Primary Email**: `CLIENT_CONFIG.primaryEmail` (set to `"ravi.slrgroup@gmail.com"`)
- **Phone**: `CLIENT_CONFIG.phone` (`"+91 99623 21356"`)
- **Office Address**: `CLIENT_CONFIG.officeAddress` (placeholder: `"[Office Address to be confirmed by client]"`)
- **Services & Full Scopes**: `SERVICES_SECTION.services`
- **Career Timeline**: `CAREER_JOURNEY_SECTION.timeline`
- **Achievements & Endorsements**: `ACHIEVEMENTS_SECTION`, `TESTIMONIALS_SECTION`

---

## 🖼️ Photo Placeholders & How to Replace With Real Photos

Per instructions, no third-party stock photos of other people are used. All image slots use designated, branded executive placeholders:

1. `[PHOTO: Ravindranaath C – professional portrait]` — Hero Section
2. `[PHOTO: Ravindranaath C – working / meeting photo]` — About Section
3. `[PHOTO: client consultation / review]` — Why Choose Me (Row 1)
4. `[PHOTO: team / meeting]` — Why Choose Me (Row 2)

### Replacing Placeholders with Actual Images:
When high-resolution photographs are provided by the client:
1. Place the image files in the `public/` folder (e.g., `public/images/portrait.jpg`).
2. Pass the `src` attribute to the respective `PhotoPlaceholder` component or configure it in `src/data/content.js`.
The placeholder component will automatically switch from the placeholder styling to the real image with rounded corners and gold border framing.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended; v24 tested)
- npm (v9 or higher)

### Installation & Development
```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the local Vite development server
npm run dev
```
Open your browser at the local URL provided (usually `http://localhost:5173`).

### Production Build
```bash
# Compile optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📱 Responsive Breakpoints Verified

The layout has been designed and checked for smooth visual hierarchy across all standard screen widths:
- **Mobile (`375px`)**: Compact sticky header with hamburger drawer, single-column service cards, full-width touch buttons, and readable typography.
- **Tablet (`768px`)**: Two-column service and testimonial grids, centered timeline layout, and responsive hero arrangement.
- **Desktop (`1280px`+)**: Four-column services grid with featured Navy card highlight, split-column narrative layouts, and two-column contact section.

---

## 📋 Client Profile Confirmations (Flagged Items)

The following items from the scanned PDF were flagged for client verification:
1. **Years of Experience**: PDF mentions 37 years on cover, 36 years in one section, and "over 30 years" elsewhere. Configured as `37` in `src/data/content.js`.
2. **2004–2012 Company Name**: The entity name is unreadable in the PDF scan; marked with a verification note in the timeline.
3. **All India Radio Years**: Listed as "1074–1978" in the PDF (apparent scan typo for 1974–1978); noted in the timeline.
4. **Primary Email**: PDF prints three emails (`ravi.slrgroup@gmail.com`, `smileravee@gmail.com`, and `raveeinsurance@lntecc.com`); `ravi.slrgroup@gmail.com` is configured as primary.
5. **Office Address**: Retained as a clear placeholder until confirmed.
