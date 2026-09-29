# SalahIT Tech — website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Built as a proper project
so pages, sections and services can keep being added over time, rather than a
single static HTML file.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, <Header>, <Footer>
    page.tsx           Home page
    services/page.tsx  Services page
    about/page.tsx      About page
    contact/
      page.tsx          Contact page
      ContactForm.tsx   Contact form UI (client component)
    globals.css         Tailwind + base styles
  components/           Reusable UI: Header, Footer, Button, ServiceCard, SectionHeading
  content/
    site.ts             All site copy + structured content in one place
public/
  logo.jpg              SalahIT Tech logo
```

## What to do next

1. **Fill in real copy.** Everything in `src/content/site.ts` marked `TODO` is
   placeholder text — headline, differentiators, service descriptions, about
   story, contact details. Editing that one file updates every page that uses
   it.
2. **Wire up the contact form.** `src/app/contact/ContactForm.tsx` currently
   just shows a placeholder "message received" state on submit. To make it
   real, either:
   - add an API route at `src/app/api/contact/route.ts` that sends an email
     (e.g. via Resend, SendGrid, or Nodemailer) and call it with `fetch` from
     the form, or
   - point the form at a form backend service (Formspree, Getform, etc).
3. **Add pages as you grow.** Each folder under `src/app/` is a route — e.g.
   adding `src/app/careers/page.tsx` creates `/careers` automatically. Add the
   new link to the `nav` array in `src/content/site.ts` and it will show up in
   the header and footer.
4. **Swap or refine the palette/fonts** in `tailwind.config.ts` and
   `src/app/layout.tsx` if you want to adjust the look — the current palette
   (navy / steel blue / teal / gold) was pulled from the logo.
5. **Deploy** — this is a standard Next.js app, so it deploys as-is to Vercel,
   Netlify, or any Node hosting. `npm run build && npm run start` runs it in
   production mode locally.

## Notes

- No `node_modules` are included — run `npm install` first.
- TypeScript + Tailwind are already configured; no extra setup needed.
