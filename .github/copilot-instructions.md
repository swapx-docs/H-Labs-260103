# H Labs Web3 Incubator - AI Coding Agent Instructions

## Project Overview
A high-performance React landing page for H Labs Web3 incubator, featuring bilingual support (CN/EN), advanced animations, and a unique Terminal OS experience. Built with React 19, Vite, Tailwind CSS, Framer Motion, and Recharts.

## Architecture & File Organization

### Flat Structure Pattern
This project uses a **flat directory layout** without a `src/` folder:
- Root: `App.tsx`, `index.tsx`, `types.ts`, `constants.ts`
- Components: `components/*.tsx` (Layout, Hero, Features, Ecosystem, SocialProof, TerminalOS)
- Entry: `index.html` (handles Tailwind config, fonts, global styles)

### Key Files
- **[constants.ts](constants.ts)**: Central content management - ALL text, metrics, partners data
- **[types.ts](types.ts)**: TypeScript interfaces for content structure
- **[App.tsx](App.tsx)**: Main orchestrator - manages view state (`landing` | `terminal`) and language switching
- **[index.html](index.html)**: Critical - contains Tailwind theme config (brand colors, animations)

## Critical Development Patterns

### 1. Bilingual Content Management
ALL user-facing text lives in `constants.ts` under the `CONTENT` object:
```typescript
export const CONTENT: Record<'cn' | 'en', Translations> = {
  cn: { nav: [...], hero: {...}, ... },
  en: { nav: [...], hero: {...}, ... }
}
```
**Never hardcode text in components** - always reference `t.section.key` from props.

### 2. Navigation & Scrolling
[Layout.tsx](components/Layout.tsx) uses **programmatic scrolling** instead of anchor links:
```typescript
const handleNavClick = (e, href) => {
  e.preventDefault();
  const element = document.getElementById(href.replace('#', ''));
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
}
```
This avoids hash-based routing issues. When adding sections, ensure they have matching `id` attributes.

### 3. Animation Patterns (Framer Motion)
- **View-triggered**: Use `whileInView` with `viewport={{ once: true }}`
- **Stagger children**: Apply delays via `transition={{ delay: index * 0.1 }}`
- **Hover effects**: 3D transforms on cards (see [Ecosystem.tsx](components/Ecosystem.tsx#L59-L73))
- Black Card special: 720° rotation on hover (`rotateY: 720`) with instant reset on leave

### 4. Component Architecture
- **Sections** export multiple components: e.g., `Features.tsx` exports `AboutSection`, `IncubationSection`, `CompetenciesSection`
- **Data-driven rendering**: Map over arrays from `constants.ts` (e.g., `t.metrics.map()`)
- **Icon mapping**: Icons imported in components, NOT stored in constants (Lucide React limitation)

### 5. Styling Conventions
- **Theme colors** (defined in [index.html](index.html#L16-L23)):
  - `brand-dark`: #050505 (backgrounds)
  - `brand-cyan`: #00f0ff (tech accents, CTAs)
  - `brand-gold`: #ffd700 (premium elements)
  - `brand-neon`: #99E5F8 (Terminal OS theme)
- **Glassmorphism**: Use `glass-panel` class (defined in [index.html](index.html#L52))
- **Mobile-first**: Grid classes like `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

### 6. Terminal OS View
- Separate full-screen experience ([TerminalOS.tsx](components/TerminalOS.tsx))
- Activated via `onOpenTerminal` callback from Layout
- Features: Dashboard, Academy, Bounty, Delivery, Media, Assets pages
- Uses custom scrollbar styling (`.custom-scrollbar` in [index.html](index.html#L62-L70))

## Development Workflow

### Build & Run
```bash
npm run dev     # Starts Vite dev server on port 3000
npm run build   # Production build
npm run preview # Preview production build
```

### Adding Content
1. Update `constants.ts` with new data (both `cn` and `en` keys)
2. Update `types.ts` interface if adding new structure
3. Components auto-reflect changes via `t` prop

### Adding New Sections
1. Create component in `components/`
2. Export from component file
3. Import and place in [App.tsx](App.tsx) layout
4. Add navigation link to `constants.ts` → `CONTENT.cn.nav` and `CONTENT.en.nav`
5. Ensure section has `id` matching nav `href` (e.g., `id="media"` for `href="#media"`)

### Environment Variables
Gemini API key configured in [vite.config.ts](vite.config.ts#L10-L13) for potential AI integrations:
```typescript
define: {
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

## Common Pitfalls

1. **DO NOT** put text directly in JSX - always use `t.section.key`
2. **DO NOT** use `href="#id"` for navigation - use `handleNavClick` pattern
3. **DO NOT** import icons into `constants.ts` - define icon mappings in components
4. **DO NOT** forget to update BOTH `cn` and `en` content objects
5. **DO NOT** modify [index.html](index.html) Tailwind config without testing all components

## TypeScript Configuration
- Path alias: `@/*` maps to project root ([tsconfig.json](tsconfig.json#L18-L20))
- JSX: `react-jsx` (no need for `import React` in new files)
- Module: `ESNext` with bundler resolution

## Dependencies Worth Knowing
- **framer-motion**: All animations (motion, AnimatePresence, useInView)
- **lucide-react**: Icon library (tree-shakeable, import only what you need)
- **recharts**: Charts in Terminal OS and Capital sections (PieChart, BarChart, AreaChart)

## Quick Reference: Data Flow
```
constants.ts (CONTENT) 
  → App.tsx (selects t = CONTENT[lang])
    → Component ({ t }: { t: Translations })
      → JSX renders t.section.property
```

When debugging display issues, trace the data path through this chain.
