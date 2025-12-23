"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gamepad2, LayoutGrid, Trophy, ImageIcon } from "lucide-react";
import { getGamesByType, Game, gamesCatalog } from "@/lib/games-catalog";
import { getGameImage, hasGameImage } from "@/lib/game-images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ServiceCard } from "@/components/ui/service-card";
import { useSmoothScroll } from "@/components/SmoothScrolling";

// Calculate counts
const consoleCount = getGamesByType("console").length;
const boardCount = gamesCatalog.filter(g => g.type === "board" || g.type === "card").length;
const tabletopCount = getGamesByType("tabletop").length;

const categoryConfig = {
  console: {
    title: "PlayStation 5",
    icon: Gamepad2,
    description: "Next-gen gaming with friends. FIFA, Tekken, and more.",
    color: "brand-blue",
    count: consoleCount,
    price: "See Menu",
  },
  board: {
    title: "Board & Card Games",
    icon: LayoutGrid,
    description: "Classic games to play with friends over coffee.",
    color: "brand-red",
    count: boardCount,
    price: "See Menu",
  },
  tabletop: {
    title: "Billiard & Snooker",
    icon: Trophy,
    description: "Perfect your shots and challenge your crew.",
    color: "brand-blue",
    count: tabletopCount,
    price: "See Menu",
  },
};

export default function GamesSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryConfig | null>(null);
  const [selectedGames, setSelectedGames] = useState<Game[]>([]);
  const [mounted, setMounted] = useState(false);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedCategory) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "unset";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "unset";
    };
  }, [selectedCategory, lenis]);

  const handleCategoryClick = (category: keyof typeof categoryConfig) => {
    let games: Game[] = [];

    if (category === "console") {
      games = getGamesByType("console");
    } else if (category === "tabletop") {
      games = getGamesByType("tabletop");
    } else {
      // Combine board and card for the middle category
      games = gamesCatalog.filter(g => g.type === "board" || g.type === "card");
    }

    setSelectedGames(games);
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setSelectedGames([]);
  };

  return (
    <section id="games" className="relative min-h-screen md:min-h-screen h-screen md:h-auto flex items-center py-4 md:py-6 px-4 md:px-6 overflow-hidden [clip-path:inset(0)] bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Lighter gradient wash to tints but not hide the pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />

        {/* Subtle radial vignette to focus center, but less aggressive */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />
      </div>

      {/* Fixed Background Image */}


      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-10 lg:mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 text-center">
            Games & Entertainment
          </h2>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-0">
          {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((category, index) => {
            const config = categoryConfig[category];
            const variant = category === "board" ? "red" : category === "tabletop" ? "gray" : "blue";

            // Use images for decorative elements
            const imageMap: Record<string, string> = {
              console: "/svg/console.svg",
              board: "/svg/board-card.svg?v=" + Date.now(),
              tabletop: "/svg/billiard.svg",
            };

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Count Badge */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-30 pointer-events-none">
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl border-4 border-white/10",
                    category === "board" ? "bg-[#FF5757]" : category === "tabletop" ? "bg-zinc-800" : "bg-[#1B4FD8]"
                  )}>
                    <span className="text-base md:text-lg font-body font-bold text-white drop-shadow-md">
                      +{config.count}
                    </span>
                  </div>
                </div>

                <ServiceCard
                  title={config.title}
                  variant={variant as "red" | "default" | "gray" | "blue"}
                  imgSrc={imageMap[category] || "/svg/card.svg"}
                  imgAlt={`${config.title} illustration`}
                  onClick={() => handleCategoryClick(category)}
                  className="min-h-[160px] md:min-h-[200px] lg:min-h-[280px]"
                >
                  <p className="hidden md:block text-sm leading-relaxed mb-4 mt-2 opacity-90">
                    {config.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-2 md:mb-4">
                    <span className="text-base md:text-lg font-body font-bold">{config.price}</span>
                  </div>
                </ServiceCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal/Popup */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedCategory && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[9998]"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4"
                onClick={closeModal}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-xl shadow-2xl relative overflow-hidden flex flex-col max-h-[80vh]"
                >

                  <div
                    className="overflow-y-auto p-4 md:p-6 custom-scrollbar"
                    data-lenis-prevent
                  >
                    <div className="absolute top-3 right-3 md:top-6 md:right-6 z-50">
                      <button
                        onClick={closeModal}
                        className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                      >
                        <div className="p-2 bg-white/5 border border-white/10 rounded-full group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 backdrop-blur-sm">
                          <X size={20} />
                        </div>
                      </button>
                    </div>

                    <div className="mb-4 md:mb-6 mt-1 md:mt-0">
                      <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-body font-black text-white uppercase tracking-tight drop-shadow-lg [-webkit-text-stroke:1px_white]"
                      >
                        {categoryConfig[selectedCategory].title}
                      </motion.h2>
                      <div className="h-1 w-16 bg-brand-blue mt-2 rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {selectedGames.map((game, index) => {
                        const gameImage = getGameImage(game.name);
                        const hasImage = hasGameImage(game.name);

                        // Use hardcoded price if available in config or generic logic?
                        // User provided specific prices for some games.
                        const specificPrices: Record<string, string> = {
                          "scrabble": "20DH",
                          "parchisi": "10DH",
                          "uno": "10DH",
                          "rummy": "10DH",
                          "monopoly": "20DH",
                          "54-pes-blocks": "10DH",
                          "chess": "15DH",
                        };

                        return (
                          <motion.div
                            key={game.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative flex flex-col bg-zinc-950/50 rounded-lg p-2 border border-white/5 transition-all duration-300"
                          >
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-zinc-900 mb-4">
                              {hasImage ? (
                                <Image
                                  src={gameImage}
                                  alt={game.displayName}
                                  fill
                                  className="object-cover"
                                  loading="lazy"
                                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-white/20">
                                  <ImageIcon size={32} />
                                </div>
                              )}
                            </div>

                            <div>
                              <h4 className="text-base font-bold text-white mb-1 leading-tight transition-colors">
                                {game.displayName}
                              </h4>
                              <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs text-zinc-500">
                                {game.genre && <span>{game.genre}</span>}
                                {game.players && (
                                  <span className="text-zinc-600">• {game.players}P</span>
                                )}
                              </div>
                              {specificPrices[game.name] && (
                                <div className="mt-2 text-brand-blue font-bold text-sm">
                                  {specificPrices[game.name]}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

