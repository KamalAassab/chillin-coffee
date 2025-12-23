/**
 * Comprehensive Games Catalog for Chillin Coffee
 */

export interface Game {
  name: string;
  displayName: string;
  category: string;
  subcategory: string;
  type: "video" | "board" | "card" | "console" | "tabletop";
  platform?: string[];
  genre?: string;
  players?: string;
  description?: string;
  tags: string[];
}

export const gamesCatalog: Game[] = [
  // ========== VIDEO GAMES / CONSOLE (PS5) ==========
  // Action/Adventure Games
  {
    name: "god-of-war",
    displayName: "God of War",
    category: "Video Games",
    subcategory: "Action/Adventure",
    type: "console",
    platform: ["PS5"],
    genre: "Action/Adventure",
    players: "1",
    description: "Epic action-adventure game with Norse mythology.",
    tags: ["action", "adventure", "story", "ps5"]
  },
  {
    name: "ratchet-clank",
    displayName: "Ratchet & Clank",
    category: "Video Games",
    subcategory: "Action/Adventure",
    type: "console",
    platform: ["PS5"],
    genre: "Action/Adventure",
    players: "1",
    description: "Dimension-hopping adventure with stunning graphics.",
    tags: ["action", "adventure", "platformer", "ps5"]
  },
  {
    name: "gta-v",
    displayName: "GTA V",
    category: "Video Games",
    subcategory: "Action/Adventure",
    type: "console",
    platform: ["PS5"],
    genre: "Action/Adventure",
    players: "1-30",
    description: "Open-world action game set in Los Santos.",
    tags: ["action", "open-world", "multiplayer", "ps5"]
  },
  {
    name: "mario",
    displayName: "Mario",
    category: "Video Games",
    subcategory: "Action/Adventure",
    type: "console",
    platform: ["PS5"],
    genre: "Platformer",
    players: "1-4",
    description: "Classic platforming adventure.",
    tags: ["platformer", "family", "fun", "ps5"]
  },

  // Sports Games
  {
    name: "fc24",
    displayName: "FC 24",
    category: "Video Games",
    subcategory: "Sports",
    type: "console",
    platform: ["PS5"],
    genre: "Sports",
    players: "1-4",
    description: "The world's most popular football game.",
    tags: ["sports", "football", "multiplayer", "ps5"]
  },
  {
    name: "fc25",
    displayName: "FC 25",
    category: "Video Games",
    subcategory: "Sports",
    type: "console",
    platform: ["PS5"],
    genre: "Sports",
    players: "1-4",
    description: "Latest edition of the football franchise.",
    tags: ["sports", "football", "multiplayer", "ps5"]
  },
  {
    name: "nba-2k24",
    displayName: "NBA 2K24",
    category: "Video Games",
    subcategory: "Sports",
    type: "console",
    platform: ["PS5"],
    genre: "Sports",
    players: "1-4",
    description: "Premium basketball simulation game.",
    tags: ["sports", "basketball", "multiplayer", "ps5"]
  },
  {
    name: "ufc5",
    displayName: "UFC 5",
    category: "Video Games",
    subcategory: "Sports",
    type: "console",
    platform: ["PS5"],
    genre: "Sports/Fighting",
    players: "1-2",
    description: "Ultimate MMA fighting experience.",
    tags: ["sports", "fighting", "mma", "ps5"]
  },

  // Fighting Games
  {
    name: "tekken-7",
    displayName: "Tekken 7",
    category: "Video Games",
    subcategory: "Fighting",
    type: "console",
    platform: ["PS5"],
    genre: "Fighting",
    players: "1-2",
    description: "Legendary fighting game with epic battles.",
    tags: ["fighting", "competitive", "multiplayer", "ps5"]
  },

  // Shooter Games
  {
    name: "call-of-duty",
    displayName: "Call of Duty",
    category: "Video Games",
    subcategory: "Shooter",
    type: "console",
    platform: ["PS5"],
    genre: "First-Person Shooter",
    players: "1-100",
    description: "Intense first-person shooter action.",
    tags: ["shooter", "fps", "multiplayer", "ps5"]
  },
  {
    name: "fortnite",
    displayName: "Fortnite",
    category: "Video Games",
    subcategory: "Shooter",
    type: "console",
    platform: ["PS5"],
    genre: "Battle Royale",
    players: "1-100",
    description: "Popular battle royale with building mechanics.",
    tags: ["shooter", "battle-royale", "multiplayer", "ps5"]
  },

  // Racing Games
  {
    name: "rocket-league",
    displayName: "Rocket League",
    category: "Video Games",
    subcategory: "Racing",
    type: "console",
    platform: ["PS5"],
    genre: "Sports/Racing",
    players: "1-8",
    description: "Soccer meets racing in this unique game.",
    tags: ["racing", "sports", "multiplayer", "ps5"]
  },
  {
    name: "grid-legends",
    displayName: "GRID Legends",
    category: "Video Games",
    subcategory: "Racing",
    type: "console",
    platform: ["PS5"],
    genre: "Racing",
    players: "1-4",
    description: "Thrilling motorsport racing experience.",
    tags: ["racing", "cars", "multiplayer", "ps5"]
  },

  // ========== BOARD & CARD GAMES ==========
  {
    name: "scrabble",
    displayName: "Scrabble",
    category: "Board Games",
    subcategory: "Classic",
    type: "board",
    genre: "Word Game",
    players: "2-4",
    description: "Classic word game where you score points by placing tiles on a board.",
    tags: ["classic", "word", "strategy"]
  },
  {
    name: "parchisi",
    displayName: "Parchisi",
    category: "Board Games",
    subcategory: "Classic",
    type: "board",
    genre: "Race Game",
    players: "2-4",
    description: "Classic cross and circle board game.",
    tags: ["classic", "race", "family"]
  },
  {
    name: "uno",
    displayName: "UNO",
    category: "Card Games",
    subcategory: "Family",
    type: "card",
    genre: "Matching",
    players: "2-10",
    description: "Fast-paced card game where you race to empty your hand.",
    tags: ["card", "family", "fun"]
  },
  {
    name: "rummy",
    displayName: "Rummy",
    category: "Card Games",
    subcategory: "Classic",
    type: "card",
    genre: "Set Collection",
    players: "2-6",
    description: "Classic card game involving matching cards of the same rank or sequence.",
    tags: ["card", "classic", "strategy"]
  },
  {
    name: "monopoly",
    displayName: "Monopoly",
    category: "Board Games",
    subcategory: "Classic",
    type: "board",
    genre: "Economic",
    players: "2-8",
    description: "The fast-dealing property trading game.",
    tags: ["board", "economic", "family"]
  },
  {
    name: "54-pes-blocks",
    displayName: "54 Pes Blocks",
    category: "Board Games",
    subcategory: "Dexterity",
    type: "board",
    genre: "Dexterity",
    players: "1-4",
    description: "Tower stacking game. Don't let it fall!",
    tags: ["dexterity", "stacking", "fun"]
  },
  {
    name: "chess",
    displayName: "Chess",
    category: "Board Games",
    subcategory: "Strategy",
    type: "board",
    genre: "Abstract Strategy",
    players: "2",
    description: "The classic game of strategy and tactics.",
    tags: ["strategy", "classic", "mind-sport"]
  },
  {
    name: "xo",
    displayName: "XO (Tic Tac Toe)",
    category: "Board Games",
    subcategory: "Quick",
    type: "board",
    genre: "Abstract Strategy",
    players: "2",
    description: "Classic paper-and-pencil game for two players.",
    tags: ["quick", "classic", "simple"]
  },
  {
    name: "puissance-4",
    displayName: "Puissance 4",
    category: "Board Games",
    subcategory: "Strategy",
    type: "board",
    genre: "Vertical Strategy",
    players: "2",
    description: "Connect four of your checkers in a row while preventing your opponent from doing the same.",
    tags: ["strategy", "quick", "family"]
  },
  {
    name: "8ball-pool",
    displayName: "8 Ball Pool",
    category: "Tabletop",
    subcategory: "Sports",
    type: "tabletop",
    genre: "Cue Sport",
    players: "2",
    description: "Classic billiard game where you pocket all your balls and then the 8 ball.",
    tags: ["sports", "precision", "billiard"]
  },
  {
    name: "snooker",
    displayName: "Snooker",
    category: "Tabletop",
    subcategory: "Sports",
    type: "tabletop",
    genre: "Cue Sport",
    players: "2",
    description: "Professional cue sport played on a large table with 21 colored balls.",
    tags: ["sports", "precision", "snooker"]
  }
];

// Helper functions for filtering and organizing games
export function getGamesByType(type: "video" | "board" | "card" | "console" | "tabletop"): Game[] {
  return gamesCatalog.filter(game => game.type === type);
}
