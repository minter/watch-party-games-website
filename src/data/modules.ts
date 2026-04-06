export interface Module {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  howItWorks: string;
  highlights: string[];
}

export const modules: Module[] = [
  {
    slug: "starting-lineup",
    name: "Starting Lineup",
    icon: "\u{1F465}",
    tagline: "Dramatic spotlight reveals for your starting six",
    description:
      "Introduce your starting lineup with theatrical spotlight reveals and a hockey formation display. Each player gets a full-screen spotlight with their headshot and name, then shrinks and flies into position on a 3F-2D-1G formation. It builds anticipation and helps fans connect faces to jersey numbers.",
    howItWorks:
      "Pull your current roster from the NHL API, then select three forwards, two defensemen, and a goalie from dropdown menus. Hit 'Show on Display' to put the formation on the big screen, then reveal players one at a time in any order you choose. Each reveal holds the spotlight for two seconds before the player card animates into their position on the formation. Undo a reveal if you need to, or clear and start over.",
    highlights: [
      "Live NHL roster integration with player headshots",
      "Dramatic 2.8-second spotlight-to-formation animation",
      "Reveal players in any order — not locked to a sequence",
      "Hockey formation layout (3F-2D-1G)",
      "Full Stream Deck support with per-player buttons",
      "Undo and clear controls for quick corrections",
    ],
  },
  {
    slug: "game-flow",
    name: "Game Flow",
    icon: "\u{1F4CA}",
    tagline: "Live NHL stats that tell the story behind the game",
    description:
      "A rotating dashboard of storytelling cards that surface the stats TV doesn't show — hit leaders, faceoff zone control, plus/minus heroes, ice time workhorses, and top performers. Cards auto-rotate on a configurable interval and refresh with live data every 12 seconds.",
    howItWorks:
      "Enter the NHL Game ID for tonight's matchup and select which stat cards you want in the rotation. The module fetches live data from the NHL API (boxscore, play-by-play, skater stats) and renders it as big-screen-ready dashboard cards. Cards auto-rotate every 20-60 seconds, or you can skip forward manually. Each card refreshes its data on every rotation so the stats stay current throughout the game.",
    highlights: [
      "Five storytelling card types: Hit Leaders, Plus/Minus, Faceoff Map, Ice Time, Top Performers",
      "Auto-rotation with configurable interval (20-60 seconds)",
      "Live data refresh every 12 seconds from NHL API",
      "Manual skip-forward for on-the-fly control",
      "Designed for stats the TV broadcast doesn't surface",
      "Stream Deck integration for quick card control",
    ],
  },
  {
    slug: "announcement",
    name: "Announcement",
    icon: "\u{1F4E2}",
    tagline: "Send messages, images, and QR codes to the big screen",
    description:
      "Push important information to the display instantly — free-form text, uploaded images, or auto-generated QR codes. Quick templates cover common situations like parking notices, weather updates, intermission info, and closing thank-yous so you can get a message up in seconds.",
    howItWorks:
      "Type a headline and message (up to 500 characters), optionally attach an image or generate a QR code from any URL, then hit 'Send to Display.' The message appears full-screen on the big screen instantly. Use quick templates to pre-fill common messages, or build your own. Hide the announcement with one click when you're done.",
    highlights: [
      "Free-form text with editable headline (up to 500 characters)",
      "Image upload support (PNG, JPEG, GIF, WebP up to 5MB)",
      "QR code generation from any URL",
      "Quick templates: parking, weather, intermission, thank you",
      "Live preview in the control window before sending",
      "One-click send and dismiss",
    ],
  },
  {
    slug: "team-win",
    name: "Team Win",
    icon: "\u{1F3C6}",
    tagline: "Victory celebration on the big screen",
    description:
      "When the home team wins, put up a spectacular celebration on the big screen. A looping animation features bold 'WIN!' text in team colors, the team logo with a glowing pulse, and floating celebration effects. It's the perfect photo-op moment for fans.",
    howItWorks:
      "One button to show the win animation, one button to hide it. The display takes over the full screen with your team's colors, logo, and name in a looping celebration with pulsing gradients, glowing text, particle effects, and bouncing emojis. It respects accessibility settings and runs on GPU-accelerated animations for smooth performance on any display.",
    highlights: [
      "Full-screen celebration with team logo and colors",
      "Looping animations: gradients, glow, particles, emojis",
      "One-button activation and dismissal",
      "Dynamic team branding from your configuration",
      "GPU-accelerated for smooth performance",
      "Accessibility-aware (respects reduced-motion preferences)",
    ],
  },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModuleSlugs(): string[] {
  return modules.map((m) => m.slug);
}
