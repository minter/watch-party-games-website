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
      "Pull your current roster from the NHL API, then select three forwards, two defensemen, and a goalie from dropdown menus. Hit 'Show on Display' to put the formation on the big screen, then reveal players one at a time: forwards, then defense, then the goalie, or in any order you like from the Stream Deck. Each reveal holds the spotlight for two seconds before the player card animates into their position on the formation. Undo a reveal if you need to, or clear and start over.",
    highlights: [
      "Live NHL roster integration with player headshots",
      "Dramatic 2.8-second spotlight-to-formation animation",
      "Reveal in lineup order, or any order from the Stream Deck",
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
      "A rotating dashboard of storytelling cards that surface the stats TV doesn't show: hit leaders, faceoff zone control, shot heat maps, momentum swings, high-danger chances, and more. Cards auto-rotate and refresh with live data every 12 seconds.",
    howItWorks:
      "Game Flow uses the NHL game linked to tonight's party, so there are no IDs to look up. Choose which stat cards you want in the rotation, and the module fetches live data from the NHL API (boxscore, play-by-play, skater stats) and renders it as big-screen-ready dashboard cards. Before puck drop it waits, then switches to live stats on its own once the game starts. Cards auto-rotate every 30-45 seconds, or you can skip forward manually.",
    highlights: [
      "Eleven card types: Hit Leaders, Plus/Minus, Faceoff Map, Shot Chart, Momentum Timeline, Ice Time, Top Performers, High-Danger Chances, Possession (Corsi/Fenwick), Giveaways/Takeaways, and an around-the-league scoreboard",
      "Automatic card rotation, or skip forward on the fly",
      "Live data refresh every 12 seconds from NHL API",
      "Goes live on its own at puck drop",
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
      "Push important information to the display instantly: free-form text, uploaded images, or auto-generated QR codes. Quick templates cover common situations like parking notices, weather updates, intermission info, and closing thank-yous so you can get a message up in seconds.",
    howItWorks:
      "Type a headline and a message of up to 500 characters, optionally attach an image or generate a QR code from any URL, then hit 'Send to Display.' The message appears full-screen on the big screen instantly. Use quick templates to pre-fill common messages, or build your own. Hide the announcement with one click when you're done.",
    highlights: [
      "Free-form headline and message (up to 500 characters)",
      "Image upload support (PNG, JPEG, GIF, WebP up to 5MB)",
      "QR code generation from any URL",
      "Quick templates: parking, weather, intermission, thank you",
      "Image and QR code preview before sending",
      "One-click send and dismiss",
    ],
  },
  {
    slug: "slideshow",
    name: "Slideshow",
    icon: "\u{1F5BC}️",
    tagline: "Your pre-game loop on the big screen",
    description:
      "Build a looping deck of promotional and event slides for arrival, pre-game, and breaks: sponsor messages, Wi-Fi and menu QR codes, event info, and your branded home screen. Each party keeps its own deck, so every event can have its own loop.",
    howItWorks:
      "Add text, image, image-and-text, QR code, and home screen slides, then set each slide's title, body, accent color, and duration. Reorder or duplicate slides, or import a whole deck from a past party. Hit 'Send Loop to Display' and the slides cycle on their own with a progress bar and slide counter, or turn off auto-advance and step through them manually. Changes save automatically as you type.",
    highlights: [
      "Five slide types: text, image, image + text, QR code, and home screen",
      "Per-slide durations from 3 to 120 seconds",
      "Accent colors including your team's primary color",
      "Import a deck from a past party",
      "Long text automatically shrinks to fit the screen",
      "Full Stream Deck control: start, previous, next, autoplay, stop",
    ],
  },
  {
    slug: "team-win",
    name: "Team Win",
    icon: "\u{1F3C6}",
    tagline: "Victory celebration on the big screen",
    description:
      "When the home team wins, put up a celebration that tells the story of the night. A looping three-part show reveals the final score with a big 'WIN!' flourish, highlights the top scorer, shots, and winning goalie, then honors the Three Stars of the Game, all in your team colors with confetti falling throughout.",
    howItWorks:
      "One button to show the celebration, one button to hide it. The app pulls the final score and game stats from the NHL API and cycles through the score, stat highlights, and Three Stars every seven seconds with wipe transitions. If game data isn't available, it falls back to a bold 'WIN!' screen with your team's logo and colors.",
    highlights: [
      "Final score reveal, including OT and shootout wins",
      "Stat highlights: top scorer, shots, winning goalie",
      "Three Stars of the Game with player headshots",
      "Team colors and logo, with confetti throughout",
      "One-button show and hide, including from the Stream Deck",
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
