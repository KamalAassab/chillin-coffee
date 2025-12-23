"use client";

import Image from "next/image";
import { CalendarDays, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-zinc-950">

            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                >
                    <Image
                        src="/bg8.webp"
                        alt="Chillin Coffee Atmosphere"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={80}
                        sizes="100vw"
                    />
                </motion.div>

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col h-full justify-end md:justify-center items-center pb-32 md:pb-0">

                    <div className="max-w-6xl w-full flex flex-col items-center">
                        {/* Animated Title Group */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-2 md:space-y-4 text-center"
                        >
                            {/* Main Brand Title */}
                            <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-none text-white tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] whitespace-nowrap">
                                Chillin Coffee
                            </h1>

                            {/* Slogan */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="font-body font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide mt-4 md:mt-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mx-auto"
                            >
                                The First Art Coffee In Morocco
                            </motion.p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-8 md:mt-12 flex flex-row gap-3 sm:gap-6 w-auto justify-center"
                        >
                            <a
                                href="#book"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="group relative px-3 py-3 sm:px-8 sm:py-4 rounded-2xl bg-brand-blue/90 hover:bg-brand-blue text-white font-body font-semibold text-xs sm:text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(27,79,216,0.4)] backdrop-blur-md flex items-center justify-center gap-2 sm:gap-3 overflow-hidden border border-brand-blue/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                <span className="whitespace-nowrap">Book a Table</span>
                            </a>

                            <a
                                href="#menu"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="group relative px-3 py-3 sm:px-8 sm:py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-body font-semibold text-xs sm:text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-md flex items-center justify-center gap-2 sm:gap-3 border border-white/10"
                            >
                                <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red group-hover:text-white transition-colors flex-shrink-0" />
                                <span className="whitespace-nowrap">Explore Menu</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-body">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0 overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-white"
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
