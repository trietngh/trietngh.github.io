# Project Overview
This repository contains a static portfolio website built using **Astro**, **Tailwind CSS**, and **TypeScript**. 

# Core Agent Directives
- **Performance First:** Prioritize generating static HTML. Only use client-side JavaScript when absolutely necessary for interactivity.
- **Component Preference:** Default to using `.astro` components.
- **TypeScript:** Use TypeScript for all logic within Astro component frontmatter (`---`) and any utility scripts. Maintain strict type safety.
- **Semantic HTML:** Always use semantic HTML5 tags (e.g., `<article>`, `<section>`, `<nav>`, `<main>`) for accessibility and SEO.
- ** Testing:** Run `npm run dev` to start the development server. Then the website will be available at `http://localhost:4321`.

# Design Tokens & Colors
**IMPORTANT:** All core colors and component-specific colors are centralized in `src/styles/theme-tokens.css`. 
- **DO NOT** use hardcoded Tailwind color classes (e.g., `text-slate-700`) for standard UI elements.
- **DO** use the semantic Tailwind classes mapped in `src/styles/global.css`:
    - **Surfaces:** `bg-surface-main`, `bg-surface-card`, `border-surface-border`
    - **Content:** `text-content-main`, `text-content-muted`, `text-content-accent`
    - **Actions:** `bg-action-primary`, `text-action-primary-content`, `border-action-secondary-border`, `text-action-secondary-content`

## Special Element: Alerts
*Note: These colors are NOT in the central theme-tokens file and should be used as one-offs for alert components.*
- **Alert Success:** `bg-emerald-900/30 text-emerald-400 border-emerald-800`
- **Alert Error:** `bg-red-900/30 text-red-400 border-red-800`  

# Website Styleguide
*Note to Agents: Always refer to this styleguide and the centralized tokens when generating or modifying UI components.*

## 1. Typography
- **Primary Font:** `Aperture`. Use Tailwind's `font-sans`. Used for body text, buttons, and menus.
- **Headings Font:** `Oxanium`. Use Tailwind's `font-display`. Used for all H1, H2, and H3 tags.
- **Headings:** Use bold weights (`font-bold` or `font-extrabold`).
  - `H1`: `text-4xl md:text-5xl font-display`
  - `H2`: `text-3xl md:text-4xl font-display`
  - `H3`: `text-2xl md:text-3xl font-display`
- **Body Text:** Use `text-base` for standard text and `text-lg` for lead paragraphs. Apply `text-content-muted` to reduce eye strain.

## 2. Spacing & Layout
- **Container:** Use a max-width container for the main content area (e.g., `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`).
- **Section Spacing:** Consistent vertical rhythm between major page sections (e.g., `py-16` or `py-24`).
- **Component Spacing:** Use Tailwind's `gap` utility (e.g., `gap-4` or `gap-8`) in Flexbox and Grid layouts rather than margins when possible.

## 3. Components & UI Elements
- **Buttons:** 
  - Primary: `bg-action-primary text-action-primary-content px-4 py-2 rounded-md hover:bg-action-primary-hover transition-colors`
  - Secondary/Outline: `border border-action-secondary-border text-action-secondary-content px-4 py-2 rounded-md hover:bg-action-secondary-hover transition-colors`
- **Cards:** `bg-surface-card rounded-lg shadow-sm border border-surface-border p-6`
- **Links:** Standard text links should be subtly underlined or change color on hover (`hover:text-content-accent transition-colors`).

# File Structure Conventions
- `src/components/`: Reusable UI elements (Buttons, Cards, Navigation).
- `src/layouts/`: Page wrappers that contain the `<head>`, standard headers, and footers.
- `src/pages/`: Astro routing pages. Each `.astro` or `.md` file here becomes a route.
- `src/content/`: For Markdown/MDX content collections (like blog posts or project case studies).
- `public/`: Static assets like images, fonts, or `favicon.ico` that do not need processing.
