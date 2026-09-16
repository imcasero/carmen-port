# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev            # Start dev server on port 8080
bun run build          # Production build
bun run build:dev      # Development build
bun run lint           # ESLint
bun run format         # Biome format (writes)
bun run format:check   # Biome check
bun run test           # Run tests once (Vitest)
bun run test:watch     # Run tests in watch mode
bun run preview        # Preview production build
bunx vitest run src/path/to/file.test.ts   # Run a single test file
bunx vitest run -t "test name"             # Run tests matching a name
```

Tooling split: **ESLint** lints, **Biome** only formats (its linter is disabled; 2-space indent, double quotes, semicolons, trailing commas, 100-col lines). A `simple-git-hooks` pre-commit runs `lint-staged` → `eslint --fix` on staged `*.ts(x)`.

## Architecture

This is a **React + TypeScript + Vite** SPA — a portfolio website for a graphic designer (Carmen Caballero Medina) with a magazine/passport/travel aesthetic. Deployed on Vercel as a static build (`vercel.json` rewrites all paths to `index.html`).

### Structure

- `src/pages/Index.tsx` is the main page; sections render in order: Navigation → HeroTray → WorkSection → OthersSection → ContactSection, followed by a footer defined inline in `Index.tsx`.
- `src/components/` — Section-level feature components (one per page section). `CustomCursor` is mounted globally in `App.tsx` (cursor assets in `public/cursors/`).
- `src/components/ui/` — shadcn/ui components (Radix UI + Tailwind). Don't modify these directly; they follow the shadcn pattern. Exception: `OptimizedImage.tsx` is project-owned (see Images).
- `src/hooks/` — `use-mobile.tsx` (viewport detection), `use-toast.ts` (toast state), `use-preload-assets.ts` (idle-time asset preloading).
- `src/lib/` — `utils.ts` exports `cn()` (clsx + tailwind-merge); `image.ts` holds responsive-image types.
- `src/index.css` — Global styles including custom CSS classes for the analog-themed design elements (`.postcard`, `.polaroid`, `.stamp`, `.magazine-cut`, `.tray-surface`, `.passport-cover`, etc.).

### i18n

All user-facing copy lives in `src/i18n.ts` (i18next + browser language detector, imported once in `main.tsx`). Languages are `es` and `en` (fallback `en`), defined as inline resource objects in that file. Components read text via `useTranslation()` / `t("section.key")` — when adding or changing copy, update **both** `es` and `en` trees rather than hardcoding strings. Project/work item metadata (labels, descriptions, dates) is also keyed there.

### Styling

- Tailwind CSS with custom CSS variables (HSL-based) for theming.
- Custom fonts: **Playfair Display** (display/headings), **Space Mono** (mono), **Outfit** (body).
- Custom Tailwind colors for design elements: `tray`, `passport`, `boarding-pass`, `stamps`.
- Dark mode via class toggle (`next-themes`).
- Fluid typography uses `clamp()` values.

### Routing

Single-page app with two routes (`/` and `*` for 404). In-page navigation smooth-scrolls to section element ids; `Navigation` also tracks the active section on scroll.

### Animations

Framer Motion throughout — entrance animations with `whileInView`, 3D flip cards and a boarding-pass detail modal in OthersSection, floating hover effects. Scroll-triggered with viewport detection.

### Images

`vite-imagetools` handles optimization. Import any project image with the `?opt`
query and it becomes a responsive `{ sources, img }` object (AVIF + WebP, widths
320/640/960/1280, WebP fallback) — pass it straight to `<OptimizedImage>` with a
`sizes` matching its CSS-rendered width. Source files (under `src/assets/`, projects
grouped by type in `src/assets/projects/`) can stay full/print-res; they're capped at
build time. Plain string `src` still works for un-optimized cases. Config lives in
`vite.config.ts` (`imagetools` plugin), types in `src/vite-env.d.ts` / `src/lib/image.ts`.
Backgrounds used in CSS `url()` strings (e.g. `background.jpg`) stay un-queried.

### Responsive Layout

Desktop layouts use scattered/rotated positioning (CSS transforms). Mobile layouts stack vertically. WorkSection is the primary example of this divergence.

### Key Conventions

- Path alias `@/` maps to `src/`.
- TypeScript is configured with `strict: false` and `noImplicitAny: false`.
- Tests match `src/**/*.{test,spec}.{ts,tsx}` (jsdom, Vitest globals, setup in `src/test/setup.ts`).
- React Query is set up in `App.tsx` but mostly unused — the site is static content.
- Commit messages follow Conventional Commits with scopes (e.g. `feat(others): …`, `perf(images): …`).
