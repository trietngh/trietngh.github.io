# Project Overview
This repository contains a static portfolio website built using **Astro**, **Tailwind CSS**, and **TypeScript**. 

# Core Agent Directives
- **Performance First:** Prioritize generating static HTML. Only use client-side JavaScript when absolutely necessary for interactivity.
- **Component Preference:** Default to using `.astro` components. If need for an external UI framework, prefer using Vue.js and only use it for highly interactive islands using `client:load`, `client:idle`, or `client:visible`.
- **TypeScript:** Use TypeScript for all logic within Astro component frontmatter (`---`) and any utility scripts. Maintain strict type safety.
- **Semantic HTML:** Always use semantic HTML5 tags (e.g., `<article>`, `<section>`, `<nav>`, `<main>`) for accessibility and SEO.

# Website Styleguide
*Note to Agents: Always refer to this styleguide when generating or modifying UI components to maintain visual coherence across the website.*

## 1. Typography
- **Primary Font:** Sans-serif (e.g., Inter or system-ui). Use Tailwind's `font-sans`.
- **Headings:** Use bold weights (`font-bold` or `font-extrabold`).
  - `H1`: `text-4xl md:text-5xl`
  - `H2`: `text-3xl md:text-4xl`
  - `H3`: `text-2xl md:text-3xl`
- **Body Text:** Use `text-base` for standard text and `text-lg` for lead paragraphs. Apply `text-gray-700` (light mode) and `text-gray-300` (dark mode) to reduce eye strain compared to pure black/white.

## 2. Color Palette
- **Background:** `bg-slate-50` (Light) / `bg-slate-900` (Dark)
- **Primary Accent:** `text-indigo-600` (Light) / `text-indigo-400` (Dark) - *Use for primary buttons, active links, and highlights.*
- **Secondary Accent:** `text-teal-600` (Light) / `text-teal-400` (Dark) - *Use for secondary badges or subtle hover states.*
- **Text (Neutral):** `text-slate-900` (Light) / `text-slate-100` (Dark)
- **Borders/Dividers:** `border-slate-200` (Light) / `border-slate-700` (Dark)

## 3. Spacing & Layout
- **Container:** Use a max-width container for the main content area (e.g., `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`).
- **Section Spacing:** Consistent vertical rhythm between major page sections (e.g., `py-16` or `py-24`).
- **Component Spacing:** Use Tailwind's `gap` utility (e.g., `gap-4` or `gap-8`) in Flexbox and Grid layouts rather than margins when possible.

## 4. Components & UI Elements
- **Buttons:** 
  - Primary: `bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors`
  - Secondary/Outline: `border border-slate-300 text-slate-700 px-4 py-2 rounded-md hover:bg-slate-50 transition-colors`
- **Cards:** `bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6`
- **Links:** Standard text links should be subtly underlined or change color on hover (`hover:text-indigo-500 transition-colors`).

# File Structure Conventions
- `src/components/`: Reusable UI elements (Buttons, Cards, Navigation).
- `src/layouts/`: Page wrappers that contain the `<head>`, standard headers, and footers.
- `src/pages/`: Astro routing pages. Each `.astro` or `.md` file here becomes a route.
- `src/content/`: For Markdown/MDX content collections (like blog posts or project case studies).
- `public/`: Static assets like images, fonts, or `favicon.ico` that do not need processing.