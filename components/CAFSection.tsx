"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Heart, Users } from "lucide-react";

export default function CAFSection() {
    return (
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-12 md:py-16 px-4 md:px-6 bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />

                {/* Radial vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Mobile: Title First */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:hidden mb-8 text-center"
                >
                    <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-green-500 to-red-600">
                        Dima Maghrib!
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">

                    {/* Desktop: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:block text-left"
                    >
                        {/* Title */}
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-green-500 to-red-600 mb-4 md:mb-6">
                            Dima Maghrib!
                        </h2>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-spice mb-6 leading-relaxed">
                            We Watch,<br />
                            We Cheer,<br />
                            We Win Together !
                        </p>

                        {/* Features */}
                        <div className="flex flex-col gap-3 mb-8">
                            <div className="flex items-center gap-3 justify-start">
                                <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30">
                                    <Trophy className="w-5 h-5 text-red-500" />
                                </div>
                                <span className="text-white/90 font-medium">Live CAF Matches</span>
                            </div>
                            <div className="flex items-center gap-3 justify-start">
                                <div className="p-2 rounded-full bg-green-600/20 border border-green-500/30">
                                    <Users className="w-5 h-5 text-green-500" />
                                </div>
                                <span className="text-white/90 font-medium">Passionate Fan Community</span>
                            </div>
                            <div className="flex items-center gap-3 justify-start">
                                <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30">
                                    <Heart className="w-5 h-5 text-red-500" />
                                </div>
                                <span className="text-white/90 font-medium">Moroccan Pride & Energy</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="#book"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-green-600 text-white font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95"
                        >
                            <Trophy className="w-5 h-5" />
                            Book Your Spot
                        </a>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Desktop Image */}
                        <div className="hidden md:block relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="/caf-desktop.webp"
                                alt="Moroccan National Team Fan Zone - Live Football Screening at Chillin Coffee Casablanca"
                                fill
                                className="object-cover"
                                quality={80}
                            />
                            {/* Overlay glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                        </div>

                        {/* Mobile Image */}
                        <div className="block md:hidden relative w-full h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-auto max-w-sm">
                            <Image
                                src="/caf-mobile.webp"
                                alt="Watch Live CAF Matches in Casablanca - Support Dima Maghrib at Chillin Coffee"
                                fill
                                className="object-cover"
                                quality={80}
                            />
                            {/* Overlay glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                        </div>
                    </motion.div>

                </div>

                {/* Mobile: Content After Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:hidden mt-8 text-center"
                >
                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-white/90 font-spice mb-6 leading-relaxed">
                        We Watch,<br />
                        We Cheer,<br />
                        We Win Together !
                    </p>

                    {/* Features */}
                    <div className="flex flex-col gap-3 mb-8 mx-auto w-fit">
                        <div className="flex items-center gap-3 justify-start">
                            <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30">
                                <Trophy className="w-5 h-5 text-red-500" />
                            </div>
                            <span className="text-white/90 font-medium">Live CAF Matches</span>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <div className="p-2 rounded-full bg-green-600/20 border border-green-500/30">
                                <Users className="w-5 h-5 text-green-500" />
                            </div>
                            <span className="text-white/90 font-medium">Passionate Fan Community</span>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <div className="p-2 rounded-full bg-red-600/20 border border-red-500/30">
                                <Heart className="w-5 h-5 text-red-500" />
                            </div>
                            <span className="text-white/90 font-medium">Moroccan Pride & Energy</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href="#book"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-green-600 text-white font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95"
                    >
                        <Trophy className="w-5 h-5" />
                        Book Your Spot
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
