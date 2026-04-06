# Watch Party Games Website

Marketing/landing page for the Watch Party Games product at **watchparty.app**.

## Project Setup

- **Framework**: Astro 6 with Tailwind CSS 4
- **Type**: Static marketing site (no backend, no JS shipped by default)
- **Domain**: watchparty.app
- **Status**: Not yet publicly available — site is a "coming soon" / demo request page targeting NHL arena entertainment teams

## What's Done

- Astro project scaffolded from minimal template
- Tailwind 4 integrated via `@tailwindcss/vite`
- Layout component with SEO meta tags (`src/layouts/Layout.astro`)
- Full landing page (`src/pages/index.astro`) with sections:
  - Fixed nav with anchor links
  - Hero with "Coming Soon" badge, tagline, and dual CTA
  - Dual-screen mockup (control window + display window wireframes)
  - Game showcase grid (12 of 14+ games with icons and descriptions)
  - How It Works (3-step flow)
  - Features grid (6 key features)
  - Social proof block
  - Contact CTA (mailto: hello@watchparty.app)
  - Footer
- Reusable components: `GameCard`, `FeatureItem`, `StepCard`
- Global styles with dark theme, brand red (#c8102e), Inter font
- Custom favicon (red rounded square with "WP")

## What's Left

- [ ] `git init` and initial commit
- [ ] Preview the site and iterate on visual design
- [ ] Wire up contact form (Formspree, Netlify Forms, or similar) to replace mailto
- [ ] Add real screenshots/mockups of the product once available
- [ ] Consider adding a mobile hamburger menu (nav links hidden on small screens currently)
- [ ] Hosting setup (Netlify, Vercel, or Cloudflare Pages)

## About the Product

Watch Party Games is an Electron desktop app for NHL watch party entertainment. Key facts for writing copy:

- 14+ interactive games (Lucky Puck, Crowd Trivia, Face Mash, Family Faceoff, Pyramid, Jeopardy, Bingo, Pick 'Em, Puck Stacking, Flip Cup Relay, Couples Connection, Raffle, Cup Stacking, Test of Strength)
- Dual-window architecture: control window (staff laptop) + display window (TV/projector)
- NHL API integration for all 32 teams (rosters, headshots, team colors)
- Elgato Stream Deck support
- Auto-generates printable materials (bingo cards, prediction sheets)
- Party isolation (each event has its own config/state)
- Battle-tested at Carolina Hurricanes watch parties (~200-300 fans, ~12 events/season)
- Built for Mac, Windows, and Linux

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run preview # Preview production build
```
