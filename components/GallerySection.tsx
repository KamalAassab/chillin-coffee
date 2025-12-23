"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Generate array of all BG images (BG1.webp through BG12.webp)
const images = Array.from({ length: 12 }, (_, i) => `/bg${i + 1}.webp`);

// Blur placeholder data URL
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

// Helper component for the scrolling column of images
const GalleryColumn = ({
    images,
    className,
    duration = 10
}: {
    images: string[],
    className?: string,
    duration?: number
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const columnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { rootMargin: "200px" }
        );

        if (columnRef.current) {
            observer.observe(columnRef.current);
        }

        return () => {
            if (columnRef.current) {
                observer.unobserve(columnRef.current);
            }
        };
    }, []);

    return (
        <div ref={columnRef} className={className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-4 pb-4"
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {images.map((image, i) => (
                            <div key={`${index}-${i}`} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group w-full">
                                {isVisible ? (
                                    <Image
                                        src={image}
                                        alt={`Chillin Coffee Casablanca Gallery - ${image.split('/').pop()?.split('.')[0]}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        priority={i < 2}
                                        loading={i < 2 ? undefined : "lazy"}
                                        quality={60}
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default function GallerySection() {

    // Distribute all 74 images evenly across 4 columns
    const imagesPerColumn = Math.ceil(images.length / 4);
    const firstColumn = images.slice(0, imagesPerColumn);
    const secondColumn = images.slice(imagesPerColumn, imagesPerColumn * 2);
    const thirdColumn = images.slice(imagesPerColumn * 2, imagesPerColumn * 3);
    const fourthColumn = images.slice(imagesPerColumn * 3);

    return (
        <section id="gallery" className="min-h-screen flex items-center py-12 md:py-24 px-0.5 sm:px-2 md:px-6 bg-slate-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {/* Lighter gradient wash to tints but not hide the pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />

                {/* Subtle radial vignette to focus center, but less aggressive */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />
            </div>
            <div className="container mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 md:mb-8 relative z-10"
                >
                    <h2 className="w-full block mx-auto text-6xl md:text-8xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 text-center px-4">
                        Our Moments
                    </h2>
                </motion.div>

                <div className="flex justify-center gap-2 md:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[800px] overflow-hidden">
                    <GalleryColumn images={[...firstColumn, ...thirdColumn]} duration={60} className="w-1/2 md:w-1/3 lg:w-1/4" />
                    <GalleryColumn images={[...secondColumn, ...fourthColumn]} duration={80} className="w-1/2 md:w-1/3 lg:w-1/4" />
                    <GalleryColumn images={[...thirdColumn, ...firstColumn]} duration={70} className="hidden md:block md:w-1/3 lg:w-1/4" />
                    <GalleryColumn images={[...fourthColumn, ...secondColumn]} duration={90} className="hidden lg:block lg:w-1/4" />
                </div>
            </div>
        </section>
    );
}
