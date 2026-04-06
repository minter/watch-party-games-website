# Watch Party Games Website

Marketing/landing page for the Watch Party Games product at **watchparty.app**.

## Project Setup

- **Framework**: Astro 6 with Tailwind CSS 4
- **Type**: Static marketing site (no backend, minimal JS for mobile menu)
- **Hosting**: GitHub Pages, auto-deployed from `main` via GitHub Actions
- **Domain**: watchparty.app (DNS via Squarespace Domains, HTTPS enforced)
- **Contact form**: Posts to DigitalOcean serverless function, sends via Mailgun to wade@wademinter.com
- **Status**: Coming soon / demo request page targeting NHL arena entertainment teams

## Architecture

- Game and module data lives in `src/data/games.ts` and `src/data/modules.ts` — shared between the landing page grid and individual detail pages
- Detail pages use Astro dynamic routes (`[slug].astro`) with `getStaticPaths`
- Nav and Footer are shared components used across all pages
- The mobile hamburger menu uses a small inline script (`is:inline`) for toggle behavior
- FAQ uses native `<details>` elements — no JS needed
- Theme tokens (colors, fonts) defined in `src/styles/global.css` via Tailwind `@theme`

## Content Sources

- Game descriptions and features were pulled from the actual app modules at `../../watch-party-games/renderer/games/`
- Module descriptions were pulled from `../../watch-party-games/renderer/modules/`
- FAQ answers are grounded in real product capabilities from the app codebase

## What's Left

- [ ] Improve social proof section (specific stats, testimonials)
- [ ] Add real screenshots/mockups of the product
- [ ] Refine copy across all pages
- [ ] Consider adding OG image for social sharing

## About the Product

Watch Party Games is an Electron desktop app for NHL watch party entertainment. Key facts for writing copy:

- 14 interactive games (Lucky Puck, Crowd Trivia, Face Mash, Family Faceoff, Pyramid, Question Quest, Bingo, Pick 'Em, Puck Stacking, Flip Cup Relay, Couples Connection, Raffle, Cup Stacking, Test of Strength)
- 4 event tools (Starting Lineup, Game Flow, Announcement, Team Win)
- Dual-window architecture: control window (staff laptop) + display window (TV/projector)
- NHL API integration for all 32 teams (rosters, headshots, team colors)
- Elgato Stream Deck support
- Auto-generates printable materials (bingo cards, prediction sheets)
- Party isolation (each event has its own config/state)
- Battle-tested at Carolina Hurricanes watch parties (~200-300 fans, ~12 events/season)
- Built for Mac and Windows

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run preview # Preview production build
```

## Related Repos

- **App**: `../../watch-party-games` — the Electron app itself
- **DO Functions**: `../../wademinter-com/functions/packages/site/watchparty-contact/` — contact form serverless function
