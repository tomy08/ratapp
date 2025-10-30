# RatApp — Landing (Next.js)

Landing de presentación para RatApp, construida con Next.js (App Router), Tailwind y componentes reutilizables.

## Rápido inicio

Instalar dependencias y ejecutar en desarrollo:

```bash
npm install
npm run dev
```

Build y producción:

```bash
npm run build
npm start
```

## Estructura relevante

- Entrada de la UI y composición de secciones:
  - [app/page.tsx](app/page.tsx) — exporta la página principal (`HomePage`).
  - [app/layout.tsx](app/layout.tsx) — layout global y fuente (`RootLayout`).
  - [app/globals.css](app/globals.css) — estilos globales y variables CSS.
- Componentes principales (exportan secciones usadas en la home):
  - [`HeroSection`](components/hero-section.tsx) — [components/hero-section.tsx](components/hero-section.tsx)
  - [`BenefitsSection`](components/benefits-section.tsx) — [components/benefits-section.tsx](components/benefits-section.tsx)
  - [`FeaturesSection`](components/features-section.tsx) — [components/features-section.tsx](components/features-section.tsx)
  - [`TestimonialsSection`](components/testimonials-section.tsx) — [components/testimonials-section.tsx](components/testimonials-section.tsx)
  - [`FAQSection`](components/faq-section.tsx) — [components/faq-section.tsx](components/faq-section.tsx)
  - [`NewsSection`](components/news-section.tsx) — [components/news-section.tsx](components/news-section.tsx)
  - [`AboutSection`](components/about-section.tsx) — [components/about-section.tsx](components/about-section.tsx)
  - [`ContactSection`](components/contact-section.tsx) — [components/contact-section.tsx](components/contact-section.tsx)
  - UI atoms: [`Button`](components/ui/button.tsx), [`Input`](components/ui/input.tsx), [`Textarea`](components/ui/textarea.tsx), [`Card`](components/ui/card.tsx), [`Accordion`](components/ui/accordion.tsx), [`Badge`](components/ui/badge.tsx) — ver carpeta [components/ui](components/ui).
- Utilidades:
  - [`cn`](lib/utils.ts) — [lib/utils.ts](lib/utils.ts) (combinador de clases).
- Configuración:
  - [package.json](package.json) — scripts y dependencias.
  - [tsconfig.json](tsconfig.json)
  - [tailwind.config.ts](tailwind.config.ts)
  - [postcss.config.mjs](postcss.config.mjs)
  - [next.config.mjs](next.config.mjs)
  - [vercel.json](vercel.json) — ajustes de despliegue en Vercel.

## Notas de desarrollo

- El proyecto usa Next 15 (App Router) y Tailwind. Edita secciones en [app/page.tsx](app/page.tsx).
- Componentes UI están organizados en [components/ui](components/ui). Reusa variantes (`cva`) y `cn` desde [`lib/utils.ts`](lib/utils.ts).
- Formularios del sitio (Contact) envían a Formspree desde [components/contact-section.tsx](components/contact-section.tsx).
- Notificaciones usan `sonner` y el cliente está en [components/toaster-client.tsx](components/toaster-client.tsx).
