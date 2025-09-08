# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

### Development Server
```bash
npm run dev        # Start development server with hot-reload
npm run preview    # Preview production build locally
```

### Build & Type Checking
```bash
npm run build      # Type-check and build for production
npm run build-only # Build without type checking
npm run type-check # Run Vue TypeScript compiler for type checking
```

### Code Quality
```bash
npm run lint             # Run both oxlint and eslint with fixes
npm run lint:eslint      # Run ESLint with automatic fixes
npm run lint:oxlint      # Run oxlint with automatic fixes
npm run format           # Format code with Prettier
```

### Setup
```bash
npm install        # Install dependencies
```

## Project Architecture

This is a Vue.js 3 learning project using the Composition API with TypeScript, showcasing different component patterns and modern tooling.

### Technology Stack
- **Framework**: Vue 3 with Composition API
- **Build Tool**: Vite 7.0
- **Styling**: Tailwind CSS 4.x with Vite plugin
- **Language**: TypeScript with strict type checking
- **Linting**: ESLint + oxlint dual-linting setup
- **Formatting**: Prettier with custom configuration

### Component Patterns Demonstrated

The project showcases three different Vue component patterns:

1. **Composition API with `<script setup>`** (`src/components/MyCounter.vue`)
   - Modern, concise syntax using `defineProps<T>()`
   - Direct use of TypeScript interfaces for props

2. **Traditional Composition API** (`src/components/MyCounterScript.vue`)
   - Uses `defineComponent()` with `setup()` function
   - Explicit return of reactive properties

3. **External Script Pattern** (`src/components/my-counter-script/MyCounterScript2.vue`)
   - Template in `.vue` file with `src` attribute pointing to separate `.ts` file
   - Useful for complex component logic separation

### Key Configuration Files

- **`vite.config.ts`**: Vite configuration with Vue DevTools, Tailwind CSS integration, and path aliases (`@` points to `src/`)
- **`eslint.config.ts`**: Modern flat config format with Vue + TypeScript rules and oxlint integration
- **`.prettierrc.json`**: Code formatting rules (no semicolons, single quotes, 100 char width)
- **`package.json`**: Uses `npm-run-all2` for parallel script execution in build process

### Development Patterns

- **Props Definition**: Demonstrates both runtime (`{ type: Number, required: true }`) and compile-time (`defineProps<Props>()`) prop validation
- **Reactivity**: Uses `ref()` for mutable state and `computed()` for derived state
- **TypeScript Integration**: Full TypeScript support with Vue SFC type checking via `vue-tsc`
- **Styling**: Scoped styles with Tailwind utilities, demonstrating component-level CSS isolation

### Build Process

The build process runs type checking and bundling in parallel:
1. `vue-tsc --build` for TypeScript/Vue SFC type checking
2. `vite build` for bundling and optimization
3. Both processes must complete successfully for a successful build

### Code Quality Tools

- **Dual Linting**: Uses both ESLint (comprehensive rules) and oxlint (fast, correctness-focused) for thorough code quality checking
- **Automatic Fixes**: Both linters configured with `--fix` flag for automatic error correction
- **Prettier Integration**: ESLint configured to skip formatting rules that conflict with Prettier
