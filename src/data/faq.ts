export interface FaqItem {
  question: string;
  answer: string;
  category: "product" | "events" | "getting-started";
}

export const categoryLabels: Record<string, string> = {
  product: "About the Product",
  events: "Running Events",
  "getting-started": "Getting Started",
};

export const faq: FaqItem[] = [
  // Product
  {
    question: "What teams and leagues does Watch Party Games support?",
    answer:
      "Watch Party Games has full NHL integration for all 32 teams — live rosters, player headshots, and team colors pull directly from the NHL API. While the app is built around the NHL, many of the games (Family Faceoff, Pyramid, Bingo, Flip Cup Relay, and others) work great for any sport or event since they don't rely on hockey-specific data.",
    category: "product",
  },
  {
    question: "What hardware do I need to run it?",
    answer:
      "A laptop (Mac or Windows) and a second display — a TV, projector, or any screen you can plug in via HDMI. The app runs as a desktop application and auto-detects the second screen. For the best experience, we also recommend an Elgato Stream Deck for hands-free game control, though it's not required.",
    category: "product",
  },
  {
    question: "How does the dual-screen setup work?",
    answer:
      "The app opens two windows: a control window on your laptop where you manage everything, and a display window that goes fullscreen on the TV or projector. Fans only see the display window — clean visuals, big text, and animations designed for viewing from a distance. You run the show from your laptop without the audience ever seeing your controls.",
    category: "product",
  },
  {
    question: "Can I customize games with our team's branding?",
    answer:
      "Yes. When you set up a party, you select your NHL team and the app automatically themes everything with your team's official colors — backgrounds, accents, overlays, and more. There are light and dark display modes, and your team logo appears on printable materials like bingo cards and prediction sheets.",
    category: "product",
  },
  {
    question: "Does it require internet access during events?",
    answer:
      "Most games work fully offline once set up. You'll need internet to pull roster data from the NHL API during initial setup and for the Game Flow module (which streams live stats), but once your party is configured and rosters are loaded, the games themselves run without a connection.",
    category: "product",
  },
  // Events
  {
    question: "How long does setup take for a new event?",
    answer:
      "About five minutes. Create a new party, select your team (the roster imports automatically), pick which games you want to run, and you're ready to go. If you're reusing a previous party's configuration, it's even faster — just create a new party and the app isolates each event's state automatically.",
    category: "events",
  },
  {
    question: "Can I run multiple games in one event?",
    answer:
      "Absolutely — that's how it's designed to be used. Switch between games from the control window throughout the event. Bingo is specifically built to run in the background while you play other games in the foreground. A typical watch party might run 6-8 different games across a few hours.",
    category: "events",
  },
  {
    question: "How many fans can participate at once?",
    answer:
      "There's no cap on audience size. Games like Bingo and Pick 'Em scale to however many cards or sheets you print (up to 500 per PDF generation). Crowd Trivia supports unlimited players through mobile phone participation. Physical games like Puck Stacking and Flip Cup Relay feature a handful of contestants while the whole crowd watches on the big screen.",
    category: "events",
  },
  {
    question: "What printable materials does it generate?",
    answer:
      "Bingo generates randomized 8.5 x 11 papers with your team logo and master tracking sheets for staff. Pick 'Em generates prediction sheets with your questions and tiebreaker, plus master answer sheets. Both support generating up to 500 copies at a time as print-ready PDFs.",
    category: "events",
  },
  {
    question: "What does a typical event look like?",
    answer:
      "At Carolina Hurricanes watch parties (where the app was built and tested), a typical event runs a contestant game each intermission, raffles at the intermission, and an ongoing First Goal Lucky Puck contest for watch parties with 200-300 fans. The Starting Lineup module kicks things off, and Game Flow keeps live stats on screen during play.",
    category: "events",
  },
  // Getting started
  {
    question: "How do I get access?",
    answer:
      "Watch Party Games is currently in early access. Reach out to us at hello@watchparty.app to schedule a demo or get set up with the app for your venue. We'll walk you through installation, configuration, and your first event.",
    category: "getting-started",
  },
  {
    question: "Is there a demo available?",
    answer:
      "Yes — we offer live demos where we walk you through the full app, show you the dual-screen setup, and run through several games so you can see exactly how it works for your venue. Contact us at hello@watchparty.app to schedule one.",
    category: "getting-started",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide hands-on onboarding to get you set up, including installation, team configuration, and a walkthrough of every game. Ongoing support is available via email, and we're actively developing new games and features based on feedback from live events.",
    category: "getting-started",
  },
];
