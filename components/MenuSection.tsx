"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const menuImages = [
    "/menu-middle.webp",
    "/menu-left.webp",
    "/menu-right.webp"
];

export default function MenuSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % menuImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + menuImages.length) % menuImages.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe || isRightSwipe) {
            if (isLeftSwipe) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    return (
        <section id="menu" className="h-screen flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden px-0 md:px-4">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {/* Lighter gradient wash to tints but not hide the pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />

                {/* Subtle radial vignette to focus center, but less aggressive */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />
            </div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 mb-4 px-4 md:px-0"
            >
                <h2 className="w-fit block mx-auto text-6xl md:text-8xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-red-600">
                    Coffee & More
                </h2>
            </motion.div>

            {/* Desktop: Single Menu Image */}
            {!isMobile && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full max-w-5xl aspect-[16/9] md:aspect-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                    <Image
                        src="/menu-chillin.webp"
                        alt="Chillin Coffee Casablanca - Full Menu and Specialty Drinks"
                        width={1920}
                        height={1080}
                        className="object-contain w-full h-auto"
                        priority
                        quality={95}
                    />
                </motion.div>
            )}

            {/* Mobile: Image Slider */}
            {isMobile && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full max-w-lg"
                >
                    {/* Slider Container */}
                    <div
                        className="relative overflow-hidden shadow-2xl md:rounded-2xl md:border md:border-white/10"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Images */}
                        <div className="relative w-full h-[75vh]">
                            {menuImages.map((image, index) => (
                                <div
                                    key={image}
                                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Chillin Coffee Casablanca Menu - Page ${index + 1}`}
                                        fill
                                        className="object-contain"
                                        priority={index === 0}
                                        quality={95}
                                    />
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Swipe hint text */}
                    <p className="text-center text-white/60 text-sm mt-3">
                        Swipe to browse menu
                    </p>
                </motion.div>
            )}

        </section>
    );
}
