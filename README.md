# Accio

Minimalist, animation-focused multi-page personal portfolio and software showcase for Girish Balaso Lade.

Recreated from the modern Accio design architecture: clean typography, generous whitespace, floating pill navigation, fluid light/dark mode theming, dense masonry project showcases, and physics-based micro-interactions powered by Motion (`motion/react`).

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Design Architecture](#design-architecture)
- [Page Structure](#page-structure)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
  - [Static Hosting](#static-hosting)
- [Performance & Accessibility Standards](#performance--accessibility-standards)
- [Author](#author)
- [License](#license)

---

## Overview

Accio is a high-performance personal portfolio and engineering journal designed for Girish Lade (UI/UX Designer, Full-Stack Developer, Product Builder, and Founder of LadeStack).

The project combines minimalist editorial aesthetics with physics-based interactions. Rather than relying on generic single-page templates or marketing bloat, Accio focuses on typographic clarity, high contrast ratios, responsive masonry grids, and fluid page transitions.

### Core Principles

- Performance First: Lightweight bundles, optimized asset loading, and near-zero runtime overhead.
- Typographic Precision: High-contrast primary lines paired with muted secondary lines and custom inline iconography.
- Fluid Atmosphere: Seamless theme switching between near-black dark mode and clean off-white light mode with no flash.
- Purposeful Motion: Fluid page transitions, card hover physics, and stagger animations implemented with Motion (`motion/react`).
- Clean Independence: Production-ready code free of external site-builder badges, promotional markers, or template dependencies.

---

## Key Features

- Multi-Page Architecture: Discrete routes for Home, Projects, About, and Contact.
- Floating Pill Navigation: Centered floating pill with active route indicator and spring-animated tab highlights.
- Dual Theme Engine: Built-in support for Dark Mode (near-black background) and Light Mode (crisp off-white background).
- Dense Project Showcase: Multi-column masonry layout optimized for responsive mobile, tablet, and wide desktop displays.
- Interactive Micro-Interactions: Physics-based hover animations, expandable details, and route transitions.
- Functional Contact Hub: Accessible form with client-side validation, direct email actions, and social links.
- Zero Vendor Bloat: Completely stripped of third-party advertising, promotional badges, and dummy template content.

---

## Design Architecture

| Attribute | Dark Theme | Light Theme |
| :--- | :--- | :--- |
| Background | Deep Charcoal / Black (`#0a0a0a`) | Crisp Off-White (`#fcfcfc`) |
| Primary Text | Off-White (`#f5f5f5`) | Near-Black (`#111111`) |
| Secondary Text | Medium Gray (`#888888`) | Muted Gray (`#666666`) |
| Container Surfaces | Translucent Dark (`rgba(255, 255, 255, 0.04)`) | Translucent Light (`rgba(0, 0, 0, 0.03)`) |
| Hairline Borders | Subtle White Stroke (`1px solid rgba(255, 255, 255, 0.08)`) | Subtle Dark Stroke (`1px solid rgba(0, 0, 0, 0.08)`) |
| Accent Elements | Pure White / Silver Highlights | Deep Charcoal Accents |

---

## Page Structure

### 1. Home (`/`)
- Minimalist viewport composition with generous vertical negative space.
- Floating pill navigation centered near the top edge.
- Centered typography lockup with bold statement line and muted secondary subline.
- Integrated inline icon badges between key phrases.
- Seamless light and dark mode toggle.

### 2. Projects (`/projects`)
- Multi-column masonry grid showcasing featured applications and open-source tools.
- Real project spotlights including Selv, LadeStack, Darkfolio, Cleanroom, and developer utilities.
- Card hover states with subtle scaling and elevation feedback.
- Category filters (Engineering, UI/UX, Developer Tools, Open Source).

### 3. About (`/about`)
- Biography detailing background, design-to-code workflow, and software engineering experience.
- Interactive skills and technology matrix (Frontend, Backend, System Architecture, UI/UX Design).
- Timeline of milestones, professional roles, and project releases.

### 4. Contact (`/contact`)
- Communication hub with direct mailto action targeting `admin@ladestack.in`.
- Accessible contact form with validation for name, email, subject, and message.
- Social profile links: GitHub, LinkedIn, Instagram, and CodePen.

---

## Tech Stack

- Framework: React 19 / Vite
- Language: TypeScript (Strict mode enabled)
- Styling: Tailwind CSS v4
- Animation: Motion (`motion/react`)
- Icons: Lucide React / Custom Inline SVGs
- Routing: React Router / Native File Routing
- Linting & Formatting: ESLint + Prettier

---

## Repository Structure

```text
Accio/
├── .gitignore             # Git exclusion rules including node_modules
├── README.md              # Comprehensive project documentation
├── package.json           # Dependencies and build scripts
├── tsconfig.json          # Strict TypeScript configuration
├── vite.config.ts         # Vite bundler configuration
├── public/                # Static public assets, favicon, social preview
└── src/
    ├── assets/            # Local images, project previews, SVGs
    ├── components/        # Reusable UI primitives (Navbar, Footer, PillNav, Card)
    ├── data/              # Typed project metadata, biography, and timeline items
    ├── hooks/             # Custom React hooks (useTheme, useMediaQuery)
    ├── layouts/           # Root layout container with persistent nav
    ├── pages/             # Route pages (Home, Projects, About, Contact)
    ├── styles/            # Tailwind theme tokens and base styles
    └── types/             # Shared TypeScript interfaces
```

---

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0+, pnpm 8.0+, or yarn 1.22+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/girishlade111/Accio.git
   cd Accio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:5173` (or the URL printed by Vite) in your browser.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Available Scripts

- `npm run dev`: Starts local Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles TypeScript and generates production distribution bundle in `dist/`.
- `npm run preview`: Spins up a local static server to preview the built `dist/` directory.
- `npm run lint`: Runs ESLint across all source files for syntax and stylistic checks.

---

## Deployment

### Vercel

Deploy directly using the Vercel CLI:

```bash
npx vercel
```

Or connect the repository on GitHub to Vercel for automatic continuous deployments on every push to `main`.

### Netlify

Deploy with the Netlify CLI:

```bash
npx netlify deploy --prod
```

### Static Hosting

Because the output is a standard single-page or static site bundle, you can host the `dist/` folder on GitHub Pages, Cloudflare Pages, AWS S3 / CloudFront, or any web server:

```bash
npm run build
# Deploy dist/ contents
```

---

## Performance & Accessibility Standards

- WCAG 2.2 Compliance: Contrast ratios meet or exceed AA standards across both light and dark themes.
- Responsive Viewports: Tested for seamless layout adaptation across 320px mobile to 4K ultra-wide screens.
- Keyboard Navigation: All interactive pills, buttons, and links feature visible focus rings and support standard keyboard controls.
- Reduced Motion: Respects user OS preference for reduced motion through Motion's `useReducedMotion` hook.

---

## Author

**Girish Balaso Lade**
- Role: UI/UX Designer, Full-Stack Developer, Product Builder
- Founder: [LadeStack](https://ladestack.in/)
- Email: [admin@ladestack.in](mailto:admin@ladestack.in)
- GitHub: [@girishlade111](https://github.com/girishlade111)
- LinkedIn: [girish-lade](https://www.linkedin.com/in/girish-lade/)
- Instagram: [@girish_lade_](https://www.instagram.com/girish_lade_/)
- CodePen: [Girish-Lade-the-looper](https://codepen.io/Girish-Lade-the-looper)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
