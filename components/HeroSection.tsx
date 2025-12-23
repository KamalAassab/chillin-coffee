"use client";

import Image from "next/image";
import { CalendarDays, Coffee } from "lucide-react";


export default function HeroSection() {



  return (
    <section className="relative h-screen sm:min-h-screen flex items-end justify-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/bg8.webp"
          alt="Chillin Coffee Casablanca - Premium Gaming and Art Coffee Atmosphere"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>


      <div className="container relative z-10 w-full flex flex-col justify-end px-3 sm:px-6 md:px-8 lg:px-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20 pointer-events-none"> {/* Added pointer-events-none to container, will re-enable on interactive children */}

        <div className="max-w-7xl pointer-events-auto w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-3 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Main Heading */}
            <h1
              className="font-bold tracking-tighter text-white animate-fade-in [animation-delay:100ms] leading-[0.9] flex-1 min-w-0 w-full text-center md:text-left overflow-visible"
            >
              <span className="block text-6xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-[11rem] 2xl:text-[13rem] whitespace-nowrap max-w-full font-display font-bold">Chillin Coffee</span>
              <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-3 md:mt-4 font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 whitespace-nowrap">The First Art Coffee In Morocco</span>
            </h1>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 opacity-0 animate-fade-in [animation-delay:300ms] flex-shrink-0 lg:mb-2 w-full sm:w-auto"
            >
              <a
                href="#book"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group relative px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 rounded-xl bg-brand-blue text-white font-semibold text-xs sm:text-base md:text-base transition-all duration-300 hover:bg-brand-blue/90 hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/50 active:scale-100 backdrop-blur-sm border border-brand-blue/20 flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                <span className="whitespace-nowrap">Book a Table</span>
              </a>

              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group relative px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 rounded-xl bg-brand-red text-white font-semibold text-xs sm:text-base md:text-base transition-all duration-300 hover:bg-brand-red/90 hover:scale-105 hover:shadow-lg hover:shadow-brand-red/50 active:scale-100 backdrop-blur-sm border border-brand-red/20 flex items-center justify-center gap-2"
              >
                <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                <span className="whitespace-nowrap">See Our Menu</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

