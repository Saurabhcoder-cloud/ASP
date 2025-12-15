# ASP Global Solutions (PHP edition)

This repository now ships a lightweight PHP version of the ASP Global Solutions marketing site. The PHP pages live in `php/` and can be served on any PHP-capable host without the Next.js runtime.

## Running locally (PHP)

```bash
php -S localhost:3000 -t php
```

Then open http://localhost:3000 to browse the site.

## Structure

- `php/index.php` – Homepage with hero messaging and featured capabilities.
- `php/about.php` – Overview of the team and delivery principles.
- `php/services.php` – Services and engagement models.
- `php/ai-solutions.php` – AI automation offerings and flow.
- `php/pricing.php` – Packages with included services.
- `php/contact.php` – Simple contact form with server-side thank-you notice.
- `php/includes/` – Shared layout header/footer.
- `php/styles.css` – Minimal styling to mirror the dark brand aesthetic.

The existing Next.js project files remain available if you still want to run the React version; use `npm run dev` or `npm run build && npm start` from the project root for that stack.
