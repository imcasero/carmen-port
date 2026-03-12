# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev          # Start dev server on port 8080
bun run build        # Production build
bun run build:dev    # Development build
bun run lint         # ESLint
bun run test         # Run tests once (Vitest)
bun run test:watch   # Run tests in watch mode
bun run preview      # Preview production build
```

## Architecture

This is a **React + TypeScript + Vite** SPA — a portfolio website for a graphic designer with a magazine/passport/travel aesthetic.

### Structure

- `src/pages/` — Page components. `Index.tsx` is the main page; sections render in order: Navigation → HeroTray → WorkSection → OthersSection → ContactSection → Footer.
- `src/components/` — Section-level feature components (one per page section).
- `src/components/ui/` — shadcn/ui components (Radix UI + Tailwind). Don't modify these directly; they follow the shadcn pattern.
- `src/hooks/` — `use-mobile.tsx` for viewport detection, `use-toast.ts` for toast state.
- `src/lib/utils.ts` — Only exports `cn()` (clsx + tailwind-merge).
- `src/index.css` — Global styles including custom CSS classes for the analog-themed design elements (`.postcard`, `.polaroid`, `.stamp`, `.magazine-cut`, `.tray-surface`, `.passport-cover`, etc.).

### Styling

- Tailwind CSS with custom CSS variables (HSL-based) for theming.
- Custom fonts: **Playfair Display** (display/headings), **Space Mono** (mono), **Outfit** (body).
- Custom Tailwind colors for design elements: `tray`, `passport`, `boarding-pass`, `stamps`.
- Dark mode via class toggle (`next-themes`).
- Fluid typography uses `clamp()` values.

### Routing

Single-page app with two routes (`/` and `*` for 404). Navigation within the page uses hash-based smooth scrolling.

### Animations

Framer Motion throughout — entrance animations with `whileInView`, 3D flip cards in OthersSection, floating hover effects. Scroll-triggered with viewport detection.

### Responsive Layout

Desktop layouts use scattered/rotated positioning (CSS transforms). Mobile layouts stack vertically. WorkSection is the primary example of this divergence.

### Key Conventions

- Path alias `@/` maps to `src/`.
- TypeScript is configured with `strict: false` and `noImplicitAny: false`.
- Tests live in `src/test/` and alongside components as `*.test.{ts,tsx}`. Test environment is jsdom.
- React Query is set up in `App.tsx` but mostly unused — the site is static content.
- Content is in Spanish (portfolio for a Spanish-speaking designer named Carmen).
