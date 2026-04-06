# Watch Party Games Website

Marketing site for [Watch Party Games](https://watchparty.app) — interactive entertainment software for NHL watch parties.

## Stack

- **Framework**: [Astro 6](https://astro.build) with [Tailwind CSS 4](https://tailwindcss.com)
- **Hosting**: GitHub Pages with GitHub Actions deploy
- **Contact form**: DigitalOcean serverless function + Mailgun
- **Domain**: watchparty.app

## Development

```bash
npm install    # Install dependencies
npm run dev    # Start dev server at localhost:4321
npm run build  # Production build to ./dist/
npm run preview # Preview production build
```

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions (`.github/workflows/deploy.yml`).

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Nav.astro         # Shared nav with mobile hamburger menu
│   ├── Footer.astro      # Shared footer
│   ├── GameCard.astro    # Game card for landing page grid
│   ├── ModuleCard.astro  # Event tool card for landing page
│   ├── FeatureItem.astro # Feature list item
│   └── StepCard.astro    # How-it-works step
├── data/             # Shared data files
│   ├── games.ts          # 14 games with full marketing content
│   ├── modules.ts        # 4 event tools
│   └── faq.ts            # FAQ questions and answers
├── layouts/
│   └── Layout.astro      # Base HTML layout with SEO meta
├── pages/
│   ├── index.astro       # Landing page
│   ├── faq.astro         # FAQ page
│   ├── thanks.astro      # Contact form confirmation
│   ├── games/[slug].astro    # Dynamic game detail pages
│   └── modules/[slug].astro  # Dynamic module detail pages
└── styles/
    └── global.css        # Tailwind config, theme tokens, Inter font
```
