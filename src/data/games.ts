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
      "Fans buy a lucky puck and are randomly assigned a player from your roster. If their player scores the first goal, they win. Every draw spins through the roster with a dramatic big-screen player reveal that keeps the entire room on the edge of their seats.",
    howItWorks:
      "Load your team's skaters directly from the NHL API, or add and edit players by hand. Draw players one at a time with a spinning carousel and player-card reveal on the big screen; each player can only be drawn once, and you can undo an accidental draw from the control window. When the first goal goes in, pick the scorer and enter the lucky fan's name to put the winner up on the display.",
    highlights: [
      "Live NHL roster integration for all 32 teams",
      "Spinning carousel with big-screen player reveal",
      "First-goal winner screen with the fan's name",
      "Manual roster editing for custom player lists",
      "Undo for accidental draws",
      "Stream Deck control",
    ],
    playerCount: "One fan per rostered skater",
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
      "Fans join by scanning a QR code on the big screen. Questions appear simultaneously on the big screen and on each player's phone. Correct answers earn up to 1,000 points depending on speed, and the leaderboard updates after every question. Write your own questions or let AI generate them themed to your team, and switch on auto-advance to let the game run itself.",
    highlights: [
      "Fans join from their phones with a QR code",
      "Speed-based scoring like Kahoot",
      "Real-time leaderboard after every question",
      "AI-generated questions themed to your team",
      "Auto-advance mode for hands-off hosting",
      "Printable host sheet with the answer key",
    ],
    playerCount: "Unlimited",
    duration: "Varies by question count",
    category: "trivia",
  },
  {
    slug: "face-mash",
    name: "Face Mash",
    icon: "\u{1F469}‍\u{1F9B0}",
    tagline: "Guess the mashed-up player headshots",
    description:
      "Two NHL player headshots are blended into one face (one player's eyes, nose, and mouth on the other's head), and teams compete to guess which players were combined. It's hilarious, surprisingly tricky, and always gets the crowd talking.",
    howItWorks:
      "Before the event, the app pre-generates mashups on your laptop using facial-landmark detection. Pick each pair of players yourself or generate them all at random. During the game, the host chooses which team guesses each round; if they miss, the other team gets a steal opportunity. Play 3, 5, or 7 rounds.",
    highlights: [
      "Face blending with dlib/OpenCV, run locally",
      "Pre-generated mashups for instant gameplay",
      "Hand-picked or random player pairings",
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
      "Two teams face off on survey-style questions, and the host gives control to the team that wins the faceoff. That team tries to reveal all the answers before getting three strikes. If they strike out, the opposing team gets one chance to steal. Each round goes to one team, and the first team to win a majority of rounds takes the game, with a guided admin workflow keeping the show moving.",
    highlights: [
      "Authentic faceoff and strike mechanics",
      "Steal opportunities for dramatic moments",
      "Professional strike overlays and animations",
      "Guided admin workflow with visual feedback",
      "Custom questions, answers, and team names",
      "Printable host sheet",
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
      "Six categories are arranged in a pyramid: one on top (100 pts), two in the middle (50 pts each), and three on the bottom (25 pts each). One partner gives clues while the other guesses, and the team banks the points by getting every item before time runs out. Teams alternate turns automatically under a configurable time limit. Write your own categories, or let AI generate them themed to your team.",
    highlights: [
      "6-category pyramid with tiered point values",
      "AI-powered category generation",
      "Configurable time limit (10-300 seconds)",
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
    icon: "❓",
    tagline: "Classic trivia board with buzzers and big stakes",
    description:
      "A trivia board with categories and escalating point values where contestants buzz in and must answer in question form. Wrong answers cost you points, and ties go to a sudden-death tiebreaker. Ideal for intermission entertainment.",
    howItWorks:
      "The board has 4 categories with 3 questions each, worth 100, 275, and 525 points. Contestants buzz in on your venue's buzzers, and the host marks who rang in first. Correct answers in question form earn points and the right to pick the next square; wrong answers lose points, and the host can pass the question to the next contestant. Write the board yourself or let AI generate it, then print a host sheet with all the answers.",
    highlights: [
      "4x3 board with escalating point values",
      "Works with any buzzer: the host marks who rang in",
      "Answer-in-question format",
      "AI-generated categories and questions",
      "Printable host sheet with answers",
      "Sudden-death tiebreaker",
    ],
    playerCount: "2+ contestants",
    duration: "8-10 minutes",
    category: "trivia",
  },
  {
    slug: "bingo",
    name: "Bingo",
    icon: "\u{1F4CB}",
    tagline: "Runs in the background while the action happens",
    description:
      "Event-based bingo that tracks real moments from the game: a player scores, a fight breaks out, the crowd does the wave. Play on printed PDF cards or on fans' phones, and the game runs in the background while you run other activities.",
    howItWorks:
      "Create 25+ events across categories like Player, Gameplay, Game, and TV/Party moments, write your own, let AI generate them, or import them from a past party. The app generates randomized 5x5 bingo cards as PDFs (up to 600 at a time) with your team logo in the free center square. Print and distribute before the event, or go online and let fans play digital cards on their phones. As events happen during the game, mark them off from the control window, and the big screen updates in real time.",
    highlights: [
      "Printable PDF cards (up to 600) or phone-based online play",
      "Runs in the background alongside other games",
      "Event categories: Player, Gameplay, Game, TV/Party",
      "AI-generated events, or import them from a past party",
      "Master sheets for staff (3 copies)",
      "Team logo in the center square",
    ],
    playerCount: "Unlimited",
    duration: "Full event",
    category: "utility",
  },
  {
    slug: "pick-em",
    name: "Pick 'Em",
    icon: "\u{1F52E}",
    tagline: "Pre-game predictions on paper or phones",
    description:
      "Fans make yes/no predictions about the game before puck drop, plus a tiebreaker. Play on auto-generated PDF sheets or on fans' phones, track results live during the game, and announce the winner at the end of the night.",
    howItWorks:
      "Create 5+ yes/no prediction questions (write them or let AI generate them) and a tiebreaker that can be a number or a time. Print prediction sheets as PDFs (up to 500) with master answer sheets for staff, or run it online and let fans submit picks from their phones. As the game plays out, mark results in the control window. Online entries are scored automatically: most correct picks wins, with ties going to the tiebreaker guess closest without going over. For paper sheets, staff grade against the master sheet and enter the winner.",
    highlights: [
      "PDF prediction sheets (up to 500)",
      "Online mode: fans submit picks from their phones",
      "Automatic scoring and winner selection for online entries",
      "Master answer sheets for staff grading",
      "AI-generated prediction questions",
      "Configurable end point: after the 1st, after the 2nd, regulation, or final",
    ],
    playerCount: "Unlimited",
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
      "Each contestant gets 30 seconds (configurable) to stack pucks. The host starts the countdown and records the score when time runs out. A dynamic leaderboard ranks all contestants with gold, silver, and bronze podium highlighting, and once the last contestant has stacked, the winner gets a confetti celebration on the big screen.",
    highlights: [
      "30-second countdown timer (configurable)",
      "Dynamic leaderboard with podium colors",
      "Automatic winner celebration",
      "Optimized for big-screen viewing",
      "Stream Deck control",
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
      "Winning time recorded for every round",
    ],
    playerCount: "2+ teams",
    duration: "5-15 minutes",
    category: "physical",
  },
  {
    slug: "couples-connection",
    name: "Couples Connection",
    icon: "❤️",
    tagline: "How well do you really know your partner?",
    description:
      "Couples answer questions about each other to find out who knows their partner best. One partner leaves the room while the other answers, then they come back and see if their answers match. Always produces laughs and surprises.",
    howItWorks:
      "Register couples by name (e.g., 'Bob & Mary'). In each round, one partner steps away while the other answers a question. When the partner returns, they give their own answer, and the host marks each couple right or wrong on the big screen. Set point values per question or apply a tie-resistant scale, and if couples are still tied at the end, a closest-number tiebreaker settles it.",
    highlights: [
      "Partner separation gameplay mechanic",
      "Configurable point values per question",
      "AI-generated questions themed to your team",
      "Closest-number tiebreaker round",
      "Printable host sheet",
      "Real-time score tracking",
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
      "A digital raffle system that reveals winning ticket numbers one at a time on the big screen. Track whether each winner claims their prize or is a no-show, with undo support, for clean giveaways.",
    howItWorks:
      "Enter the drawn ticket numbers; they stay hidden from the crowd until you reveal them. During the raffle, reveal each number with an animation on the big screen, then mark the winner as claimed or missed (no-show). A 10-second undo window lets you fix a mis-click. Duplicate numbers are rejected, and the entry field stays focused for rapid typing.",
    highlights: [
      "Reveal animations on the big screen",
      "Claim/miss tracking for every ticket",
      "10-second undo for claim and miss",
      "Duplicate ticket prevention",
      "Rapid entry with auto-focus",
      "Stream Deck control",
    ],
    playerCount: "Unlimited (ticket holders)",
    duration: "Variable",
    category: "utility",
  },
  {
    slug: "cup-stacking",
    name: "Cup Stacking",
    icon: "\u{1F964}",
    tagline: "Beat the time or you're out",
    description:
      "Contestants race to move the green cup from the top of the stack to the bottom and back. It's a beat-the-time challenge: the big screen shows the time to beat, and anyone who can't top it is eliminated.",
    howItWorks:
      "Contestants compete one at a time. The admin starts a count-up timer when the contestant begins and stops it when they finish. A new best time takes the lead and eliminates the earlier finishers, and a live attempt that runs past the time to beat is eliminated automatically with an on-screen overlay. Large text is optimized for viewing from a distance.",
    highlights: [
      "Count-up timer to the tenth of a second",
      "'Time to beat' banner on the big screen",
      "Automatic elimination when the clock passes the best time",
      "Live leaderboard with the leader in gold",
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
      "Contestants hold buckets out in front of them. Every 30 seconds (configurable), a beer is added to each bucket with a dramatic 'ADD A BEER!' overlay on the big screen. Contestants who drop out are eliminated with their time recorded. The last person standing wins. A dual timer system shows both elapsed time and countdown to the next beer.",
    highlights: [
      "Configurable beer interval and max beers",
      "Dramatic full-screen 'ADD A BEER!' overlays",
      "Dual timer system (elapsed + countdown)",
      "Elimination tracking with timestamps",
      "Stream Deck elimination buttons",
    ],
    playerCount: "2+ contestants",
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
