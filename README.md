# ASP Global Solutions

This is a Next.js App Router project configured for deployment on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` – App Router entry point with `layout.tsx`, `page.tsx`, route segments, and global styles in `app/globals.css`.
- `src/components/` – Shared UI components imported with the `@/` alias.
- `public/` – Static assets served at the site root.
- `next.config.js` – Next.js configuration.

Deploy directly to Vercel; the `next build` script is available for automatic detection.
