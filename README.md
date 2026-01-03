# H Labs Web3 Incubator Landing Page

A high-performance, aesthetically premium landing page for H Labs, a Web3 full-service incubator. This project utilizes React, Tailwind CSS, and Framer Motion to deliver a "Hardcore Tech" + "High-end Commercial" visual experience.

## Tech Stack

*   **Framework**: React 19 (ESM)
*   **Styling**: Tailwind CSS
*   **Animation**: Framer Motion
*   **Icons**: Lucide React
*   **Charts**: Recharts

## Project Structure

This project follows a flat directory structure typical for simple React applications without a bundler-specific `src` subfolder requirement in this environment.

```
/
├── index.html              # Entry HTML file, handles font loading and global styles
├── index.tsx               # Entry React file, mounts the App
├── App.tsx                 # Main application component, orchestrates layout and sections
├── types.ts                # TypeScript interfaces and type definitions
├── constants.ts            # Content data (Translations) and Icon mappings
├── components/
│   ├── Layout.tsx          # Navbar, Footer, and main Layout wrapper
│   ├── Hero.tsx            # Hero section with stats ticker
│   ├── Features.tsx        # About, Incubation, Tech Stack, Competencies
│   ├── Ecosystem.tsx       # Media (KOL/Brand) and Capital (Fund/Nexus) sections
│   └── SocialProof.tsx     # Case Studies, Partners Marquee, Testimonials
└── metadata.json           # Project metadata
```

## Component Architecture

### 1. `Layout.tsx`
*   **Navbar**: Implements a sticky, glassmorphic header.
    *   *Note*: Uses programmatic scrolling (`window.scrollTo`) instead of `href="#id"` to ensure smooth navigation and avoid hash-based routing issues in some environments.
*   **Footer**: Standard footer with social links.

### 2. `Hero.tsx`
*   **Hero**: Contains the main value proposition, animated background particles, and CTA buttons.
*   **StatsTicker**: A scrolling bar showing high-level metrics (TVL, Users, etc.).

### 3. `Features.tsx`
*   **AboutSection**: The "3 H's" (Hub, Hybrid, High-end) Bento grid.
*   **IncubationSection**:
    *   Visualizes the 4-step incubation process.
    *   **CodeBlock**: A decorative component simulating a Solidity smart contract to emphasize technical capability.
*   **CompetenciesSection**: Grid of core strengths.

### 4. `Ecosystem.tsx`
*   **MediaEcosystem**: Container for the media components.
    *   **KOLSection**: Displays metrics for the influencer academy with animated counters.
    *   **BrandOpsSection**: Displays metrics for brand management.
*   **CapitalSection**:
    *   **Fund**: Visualizes asset allocation using Recharts.
    *   **Nexus**: 3D Tilt Cards for membership tiers. The Black Card features a special double-spin animation on hover.

### 5. `SocialProof.tsx`
*   **CaseStudiesSection**: Highlights specific project success stories.
*   **PartnersMarquee**: An infinite scrolling marquee of partner logos (simulated with text).
*   **TestimonialsSection**: Client reviews.

## Data Management

All text content is centrally managed in `constants.ts` to support the bilingual feature (English/Chinese).
*   **`CONTENT` object**: Keys `cn` and `en` hold the full translation tree.
*   **`Translations` interface** (in `types.ts`): Enforces the structure of the content object.

## Development Notes

*   **Animations**: Most animations use `framer-motion`'s `whileInView` or `whileHover` props for interactivity.
*   **Responsiveness**: The site is designed Mobile-First using Tailwind classes (e.g., `grid-cols-1 md:grid-cols-2`).
*   **Theme**: The primary colors are defined in `index.html`'s tailwind config script:
    *   `brand-dark`: #050505 (Background)
    *   `brand-cyan`: #00f0ff (Accents, Tech)
    *   `brand-gold`: #ffd700 (Premium, Wealth)

## Customization

To update content, modify `constants.ts`. The UI will automatically reflect changes in text, metrics, or list items.
To add new icons, import them from `lucide-react` in the respective component file or `constants.ts`.
