/**
 * Game Images Mapping
 * Maps game names to their image URLs or paths
 * Images should be stored in public/games/ folder
 * 
 * Note: Next.js Image component handles cache busting automatically
 * through its optimization layer. No query parameters needed.
 */

export const gameImages: Record<string, string> = {
  // Video Games - Action/Adventure
  "god-of-war": "/games/god-of-war.webp",
  "ratchet-clank": "/games/ratchet-clank.webp",
  "gta-v": "/games/gta-v.webp",
  "mario": "/games/mario.webp",

  // Video Games - Sports
  "fc24": "/games/fc24.webp",
  "fc25": "/games/fc25.webp",
  "nba-2k24": "/games/nba-2k24.webp",
  "ufc5": "/games/ufc5.webp",

  // Video Games - Fighting
  "tekken-7": "/games/tekken-7.webp",

  // Video Games - Shooter
  "call-of-duty": "/games/call-of-duty.webp",
  "fortnite": "/games/fortnite.webp",

  // Video Games - Racing
  "rocket-league": "/games/rocket-league.webp",
  "grid-legends": "/games/grid-legends.webp",

  // Board Games
  "monopoly": "/games/monopoly.webp",
  "scrabble": "/games/scrabble.webp",
  "puissance-4": "/games/puissance-4.webp",
  "parchisi": "/games/parchisi.webp",
  "chess": "/games/chess.webp",
  "54-pes-blocks": "/games/54-pes-blocs.webp",
  "xo": "/games/xoxo.webp",

  // Card Games
  "rummy": "/games/reummy.webp",
  "uno": "/games/uno.webp",

  // Tabletop Games
  "8ball-pool": "/games/8ballpool.jfif",
  "snooker": "/games/snooker.jfif",
};

/**
 * Get image URL for a game
 * Returns the image path or a fallback
 */
export function getGameImage(gameName: string): string {
  return gameImages[gameName] || "/games/default-game.webp";
}

/**
 * Check if game has an image
 */
export function hasGameImage(gameName: string): boolean {
  return gameName in gameImages;
}

