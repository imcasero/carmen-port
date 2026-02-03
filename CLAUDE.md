# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React portfolio application (carmen-port) being ported from an Astro-based implementation to React + TypeScript + Vite. The project uses modern React 19 with the React Compiler enabled for automatic optimizations.

## Build System

- **Package Manager**: pnpm (use `pnpm` for all commands, not npm or yarn)
- **Build Tool**: Vite (using rolldown-vite@7.2.5 fork via pnpm override)
- **React Compiler**: Enabled via babel-plugin-react-compiler in vite.config.ts

### Key Commands

```bash
pnpm dev         # Start development server with HMR
pnpm build       # Type check (tsc -b) then build for production
pnpm lint        # Check code with Biome (linting + formatting)
pnpm lint:fix    # Auto-fix issues with Biome
pnpm format      # Format code with Biome
pnpm preview     # Preview production build locally
```

## Architecture

### TypeScript Configuration

The project uses a split TypeScript configuration:
- `tsconfig.json` - Root config that references app and node configs
- `tsconfig.app.json` - Application code config (target: ES2022, strict mode enabled)
- `tsconfig.node.json` - Build tooling config (target: ES2023, for vite.config.ts)

Both configs have strict linting enabled:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- `noUncheckedSideEffectImports: true`

### Biome Configuration

Uses Biome (biome.json) for both linting and formatting:
- All-in-one toolchain replacing ESLint and Prettier
- Migrated ESLint rules (74 rules migrated, 84% coverage)
- React Hooks rules included (exhaustive-deps, rules-of-hooks)
- TypeScript-specific rules enabled
- Auto-organize imports on save
- VCS integration enabled (respects .gitignore)
- Formatter configured with tabs and double quotes

### Git Hooks

Pre-commit hooks are configured using simple-git-hooks + lint-staged:
- **simple-git-hooks**: Lightweight alternative to Husky for managing git hooks
- **lint-staged**: Runs Biome only on staged files (faster commits)
- Pre-commit hook runs `biome check --write` on staged files
- Commit will be blocked if linting/formatting errors cannot be auto-fixed
- To skip hooks temporarily: `SKIP_SIMPLE_GIT_HOOKS=1 git commit`
- Hooks are installed automatically via `prepare` script on `pnpm install`

### React Compiler

The React Compiler is enabled in vite.config.ts via Babel plugin. This provides automatic memoization and optimization but may impact dev/build performance. The compiler analyzes components and hooks to optimize re-renders without manual React.memo or useMemo.

## Project Structure

```
src/
├── main.tsx          # Application entry point (React root render)
├── App.tsx           # Root component
└── assets/           # Static assets
```

The codebase is currently minimal - this appears to be early in the migration from the previous Astro implementation (see git history for deleted Astro files).

## Migration Context

Based on git status, the project is transitioning from Astro to React:
- Deleted files include: Astro pages, components (Nav.astro, TitleName.astro), layouts, and astro.config.mjs
- New Vite/React structure established with index.html, App.tsx, main.tsx
- Previous routes: `/career`, `/contact`, `/projects` (now need React implementation)

## Important Notes

- Uses `rolldown-vite` fork instead of standard Vite (specified in package.json overrides)
- React 19 is used (latest version)
- No index.css is imported in main.tsx, only App.css is imported in App.tsx
- The root element in index.html must have id="root" for the React mount point
