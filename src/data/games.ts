export interface Game {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  howItWorks: string;
  highlights: string[];
  playerCount: string;
  duration: string;
  category: "trivia" | "competition" | "physical" | "social" | "utility";
}

export const games: Game[] = [
  {
    slug: "lucky-puck",
    name: "Lucky Puck",
    icon: "\u{1F3D2}",
    tagline: "The ultimate fan giveaway moment",
    description:
      "Fans purchase lucky pucks and have a chance to win prizes when their player is randomly drawn. The draw features dramatic spinning animations and a big-screen player reveal that keeps the entire room on the edge of their seats.",
    howItWorks:
      "Load your team's roster directly from the NHL API (or upload a custom CSV), then draw players one at a time with a dramatic reveal animation on the big screen. Each draw is tracked with timestamps for a full audit trail. Filter out goalies, undo accidental draws, and manage the entire roster from the control window.",
    highlights: [
      "Live NHL roster integration for all 32 teams",
      "Dramatic spinning animation with player reveal",
      "Full audit trail tracking every draw",
      "CSV upload for custom player lists",
      "Goalie filtering and undo functionality",
    ],
    playerCount: "Unlimited (ticket holders)",
    duration: "Variable",
    category: "utility",
  },
  {
    slug: "crowd-trivia",
    name: "Crowd Trivia",
    icon: "\u{1F9E0}",
    tagline: "The whole venue plays along on their phones",
    description:
      "Kahoot-style live trivia where fans answer multiple-choice questions on their phones while the big screen shows the action. Fastest correct answers earn the most points, and a live leaderboard keeps the competition fierce.",
    howItWorks:
      "Fans connect on their phones through a simple link. Questions appear simultaneously on the big screen and on each player's device. Points are awarded based on speed and accuracy, with a live leaderboard updating after every question.",
    highlights: [
      "Mobile audience participation via phones",
      "Real-time leaderboard updates",
      "Speed-based scoring like Kahoot",
      "Big screen display synced with mobile answers",
      "Works with any size crowd",
    ],
    playerCount: "Unlimited",
    duration: "Varies by question count",
    category: "trivia",
  },
  {
    slug: "face-mash",
    name: "Face Mash",
    icon: "\u{1F469}\u200D\u{1F9B0}",
    tagline: "Guess the mashed-up player headshots",
    description:
      "Two NHL player headshots are merged together using AI-powered face swapping, and teams compete to guess which players were combined. It's hilarious, surprisingly tricky, and always gets the crowd talking.",
    howItWorks:
      "Before the event, the app pre-generates mashups by blending two player headshots using facial landmark detection. During the game, teams take turns guessing which two players were mashed together. If a team can't get it, the other team gets a steal opportunity. Play 3, 5, or 7 rounds.",
    highlights: [
      "AI-powered face merging with dlib/OpenCV",
      "Pre-generated mashups for instant gameplay",
      "Team competition with steal opportunities",
      "Configurable round count (3, 5, or 7)",
      "NHL roster integration for headshots",
    ],
    playerCount: "2 teams",
    duration: "10-20 minutes",
    category: "social",
  },
  {
    slug: "family-faceoff",
    name: "Family Faceoff",
    icon: "\u{1F91C}",
    tagline: "Survey says... it's a crowd favorite",
    description:
      "An authentic game-show experience with survey-style questions, a faceoff mechanic, strike system, and steal opportunities. Two teams go head-to-head in front of the crowd with professional animations and overlays on the big screen.",
    howItWorks:
      "Two teams face off on survey-style questions. The faceoff round determines which team plays first. That team tries to reveal all the answers before getting three strikes. If they strike out, the opposing team gets one chance to steal. Points accumulate across rounds with a guided admin workflow keeping the show moving.",
    highlights: [
      "Authentic faceoff and strike mechanics",
      "Steal opportunities for dramatic moments",
      "Professional strike overlays and animations",
      "Guided admin workflow with visual feedback",
      "Configurable rounds and team branding",
    ],
    playerCount: "2 teams",
    duration: "15-25 minutes",
    category: "competition",
  },
  {
    slug: "pyramid",
    name: "Pyramid",
    icon: "\u{1F53A}",
    tagline: "Fast-paced category guessing with AI-powered clues",
    description:
      "Partners take turns guessing items from categories arranged in a pyramid formation. Higher categories are worth more points, and the clock is always ticking. Categories can even be AI-generated with your team's theme baked in.",
    howItWorks:
      "Six categories are arranged in a pyramid: one on top (100 pts), two in the middle (50 pts each), and three on the bottom (25 pts each). One partner gives clues while the other guesses. Teams alternate turns with configurable time limits per category. AI can generate categories themed to your team.",
    highlights: [
      "6-category pyramid with tiered point values",
      "AI-powered category generation",
      "Configurable time limits (10-300 seconds)",
      "Team-themed categories",
      "Alternating team turns with live scoring",
    ],
    playerCount: "2 teams",
    duration: "15-20 minutes",
    category: "competition",
  },
  {
    slug: "question-quest",
    name: "Question Quest",
    icon: "\u2753",
    tagline: "Classic trivia board with buzzers and big stakes",
    description:
      "A trivia board with categories and escalating point values where contestants buzz in and must answer in question form. Wrong answers cost you points, and ties go to a sudden-death tiebreaker. Ideal for intermission entertainment.",
    howItWorks:
      "A 3x3 board presents 3 categories with 3 questions each at $100, $250, and $500. Contestants buzz in with physical buzzers, and the admin selects who buzzed first. Correct answers in question form earn points; wrong answers lose points. If no one gets it, the question rebounds to the next buzzer. Import and export boards for reuse across events.",
    highlights: [
      "3x3 board with escalating point values",
      "Physical buzzer integration",
      "Answer-in-question format",
      "Rebound system for missed questions",
      "Import/export boards for reuse",
    ],
    playerCount: "3+ contestants",
    duration: "8-10 minutes",
    category: "trivia",
  },
  {
    slug: "bingo",
    name: "Bingo",
    icon: "\u{1F4CB}",
    tagline: "Runs in the background while the action happens",
    description:
      "Event-based bingo that tracks real moments from the game — a player scores, a fight breaks out, the crowd does the wave. Cards are auto-generated as PDFs and the game runs in the background while you run other activities.",
    howItWorks:
      "Create 25+ events across categories like Player, Gameplay, Game, and TV/Party moments. The app generates randomized 5x5 bingo cards as PDFs (up to 500 at a time) with a FREE center space and your team logo. Print and distribute before the event. As events happen during the game, mark them off from the control window — the big screen updates in real time.",
    highlights: [
      "Auto-generated PDF cards (up to 500)",
      "Runs in the background alongside other games",
      "Event categories: Player, Gameplay, Game, TV/Party",
      "Master sheets for staff (3 copies)",
      "Team logo integration on cards",
    ],
    playerCount: "Unlimited (card holders)",
    duration: "Full event",
    category: "utility",
  },
  {
    slug: "pick-em",
    name: "Pick 'Em",
    icon: "\u{1F52E}",
    tagline: "Pre-game predictions with printable sheets",
    description:
      "Fans make yes/no predictions about the game before puck drop, plus a numeric tiebreaker. Prediction sheets are auto-generated as PDFs, and results are tracked live during the game. Announce the winner at the end of the night.",
    howItWorks:
      "Create 5+ yes/no prediction questions and a numeric tiebreaker. The app generates prediction sheets as PDFs (up to 500) with master answer sheets for staff. Fans fill in their predictions before the game. As the game plays out, mark results in the control window. At the end, the app calculates the winner based on correct predictions and tiebreaker proximity.",
    highlights: [
      "PDF prediction sheets (up to 500)",
      "Master answer sheets for staff grading",
      "Live result tracking during the game",
      "Automatic winner calculation with tiebreaker",
      "Configurable game end timing",
    ],
    playerCount: "Unlimited (sheet holders)",
    duration: "Full game",
    category: "utility",
  },
  {
    slug: "puck-stacking",
    name: "Puck Stacking",
    icon: "\u{1F3C6}",
    tagline: "30 seconds. Stack as many as you can.",
    description:
      "Contestants race against a 30-second clock to stack as many pucks as possible. Scores go up on a live leaderboard with podium colors, and the crowd watches every wobble on the big screen.",
    howItWorks:
      "Each contestant gets 30 seconds (configurable) to stack pucks. The admin starts and stops the timer, then records the score. A dynamic leaderboard ranks all contestants with gold, silver, and bronze podium highlighting. Run as many contestants as you want across multiple rounds.",
    highlights: [
      "30-second countdown timer (configurable)",
      "Dynamic leaderboard with podium colors",
      "Score-based competition",
      "Optimized for big-screen viewing",
      "Multiple rounds support",
    ],
    playerCount: "2+ contestants",
    duration: "~30 seconds per contestant",
    category: "physical",
  },
  {
    slug: "flip-cup-relay",
    name: "Flip Cup Relay",
    icon: "\u{1F943}",
    tagline: "Team relay racing with big-screen celebrations",
    description:
      "Teams race to flip cups in a best-of series. Each round is timed, and the first team to win the majority takes the trophy. Winner celebrations hit the big screen with confetti and team branding.",
    howItWorks:
      "Set up teams with custom names and configure the number of rounds (default: best of 3). Each round features a count-up timer. The admin records which team wins each round. The first team to win the majority of rounds is crowned champion with a confetti celebration on the big screen.",
    highlights: [
      "Best-of series format (configurable rounds)",
      "Count-up timer for each round",
      "Automatic win threshold calculation",
      "Confetti winner celebration",
      "Round history tracking",
    ],
    playerCount: "2+ teams",
    duration: "5-15 minutes",
    category: "physical",
  },
  {
    slug: "couples-connection",
    name: "Couples Connection",
    icon: "\u2764\uFE0F",
    tagline: "How well do you really know your partner?",
    description:
      "Couples answer questions about each other to find out who knows their partner best. One partner leaves the room while the other answers, then they come back and see if their answers match. Always produces laughs and surprises.",
    howItWorks:
      "Register couples by name (e.g., 'Bob & Mary'). In each round, one partner steps away while the other answers a question. When the partner returns, they give their own answer — matches earn points. Navigate through rounds with configurable point values, and the couple with the highest score wins.",
    highlights: [
      "Partner separation gameplay mechanic",
      "Configurable point values per question",
      "Real-time score tracking",
      "Multiple couples competition",
      "Crowd-pleasing reveal moments",
    ],
    playerCount: "2+ couples",
    duration: "15-25 minutes",
    category: "social",
  },
  {
    slug: "raffle",
    name: "Raffle",
    icon: "\u{1F3AB}",
    tagline: "Digital raffle with dramatic reveals",
    description:
      "A digital raffle system for drawing ticket numbers with reveal animations on the big screen. Track claimed and unclaimed prizes, with undo support and winner history — everything you need to run clean giveaways.",
    howItWorks:
      "Enter ticket numbers as they're drawn. Each number gets a reveal animation on the big screen. Mark winners as claimed or missed (no-shows). An undo window gives you 10 seconds to correct mistakes. The system prevents duplicate entries and auto-focuses for rapid ticket entry.",
    highlights: [
      "Reveal animations on the big screen",
      "Claim/miss tracking for winner management",
      "10-second undo window for corrections",
      "Duplicate ticket prevention",
      "Rapid entry with auto-focus",
    ],
    playerCount: "Unlimited (ticket holders)",
    duration: "Variable",
    category: "utility",
  },
  {
    slug: "cup-stacking",
    name: "Cup Stacking",
    icon: "\u{1F964}",
    tagline: "Race the clock, top the leaderboard",
    description:
      "Contestants race to move the green cup from the top of the stack to the bottom and back. Each attempt is timed to the second, and a dynamic leaderboard ranks everyone by fastest time.",
    howItWorks:
      "Contestants compete one at a time. The admin starts a count-up timer when the contestant begins, and stops it when they finish. Times are recorded and a leaderboard ranks all contestants by fastest time with gold, silver, and bronze podium highlighting. Large text is optimized for viewing from a distance.",
    highlights: [
      "Precision count-up timer",
      "Dynamic leaderboard ranked by fastest time",
      "Gold/silver/bronze podium highlighting",
      "Large text optimized for distant viewing",
      "Contestant management with reordering",
    ],
    playerCount: "2+ contestants (sequential)",
    duration: "Variable",
    category: "physical",
  },
  {
    slug: "test-of-strength",
    name: "Test of Strength",
    icon: "\u{1F4AA}",
    tagline: "Last one standing wins",
    description:
      "An endurance challenge where contestants hold buckets as beers are added at regular intervals. The big screen counts down to each addition with dramatic full-screen overlays. The last person still holding their bucket wins.",
    howItWorks:
      "3-6 contestants hold buckets out in front of them. Every 30 seconds (configurable), a beer is added to each bucket with a dramatic 'ADD A BEER!' overlay on the big screen. Contestants who drop out are eliminated with their time recorded. The last person standing wins. A dual timer system shows both elapsed time and countdown to the next beer.",
    highlights: [
      "Configurable beer interval and max beers",
      "Dramatic full-screen 'ADD A BEER!' overlays",
      "Dual timer system (elapsed + countdown)",
      "Elimination tracking with timestamps",
      "3-6 contestants per round",
    ],
    playerCount: "3-6 contestants",
    duration: "5-15 minutes",
    category: "physical",
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getGameSlugs(): string[] {
  return games.map((g) => g.slug);
}
