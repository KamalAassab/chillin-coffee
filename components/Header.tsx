"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const StaggeredMenu = dynamic(() => import("@/components/StaggeredMenu"));

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#about", label: "Our Space" },
    { href: "#menu", label: "Coffee & Menu" },
    { href: "#games", label: "Games & Fun" },
    { href: "#gallery", label: "Moments" },
    { href: "#location", label: "Find Us" },
    { href: "#book", label: "Reserve" },
  ];

  const desktopLeftLinks = [
    { href: "#about", label: "Our Space" },
    { href: "#menu", label: "Coffee & Menu" },
  ];

  const desktopRightLinks = [
    { href: "#gallery", label: "Moments" },
    { href: "#location", label: "Find Us" },
  ];

  useEffect(() => {
    // 1. Handle Header Background on Scroll (Throttled)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Add passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    // 2. Handle Active Section with IntersectionObserver
    const options = {
      root: null,
      rootMargin: "-10% 0px -45% 0px", // Offset to trigger roughly in middle-top of screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // We need to ensure we're setting the id with `#` prefix to match navLinks
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Observe all sections defined in navLinks
    const sections = navLinks.map(link => link.href.substring(1)); // remove #
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);



  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-white/10 rounded-bl-2xl rounded-br-2xl mx-auto h-20 lg:h-auto bg-black/40 backdrop-blur-md",
        scrolled ? "shadow-2xl max-w-full" : "max-w-[80%]"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between lg:justify-center h-full relative py-3 lg:py-0 lg:-my-1">
        {/* Mobile Logo (Left) */}
        <Link
          href="/"
          className="relative z-50 shrink-0 group flex items-center lg:hidden -ml-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative w-[110px] h-[75px] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/chillin-logo.webp"
              alt="Chillin Coffee Logo"
              fill
              className="object-contain"
              priority
              sizes="110px"
            />
          </div>
        </Link>

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden lg:flex items-center gap-12 xl:gap-24">
          {/* Left Links */}
          <div className="flex items-center gap-4 xl:gap-6">
            {desktopLeftLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-all duration-300 px-6 py-2.5 rounded-2xl border shadow-md hover:shadow-lg group",
                    scrolled
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-black",
                    isActive
                      ? "text-white border-brand-blue/50 shadow-[0_0_15px_rgba(27,79,216,0.3)]"
                      : scrolled
                        ? ""
                        : "text-zinc-400 border-white/5 hover:text-white hover:border-white/20"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Center Brand Block (Chillin - Logo - Coffee) */}
          <div className="flex items-center justify-center shrink-0">
            <span className="text-3xl xl:text-4xl font-medium tracking-widest text-white font-display neon-glow-blue">Chillin</span>

            <Link
              href="/"
              className="relative z-50 shrink-0 group flex items-center -mx-4"
            >
              <div className="relative w-[110px] h-[75px] xl:w-[140px] xl:h-[95px] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Image
                  src="/chillin-logo.webp"
                  alt="Chillin Coffee Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1280px) 110px, 140px"
                />
              </div>
            </Link>

            <span className="text-3xl xl:text-4xl font-medium tracking-widest text-white font-display neon-glow-red">Coffee</span>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-4 xl:gap-6">
            {desktopRightLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-all duration-300 px-6 py-2.5 rounded-2xl border shadow-md hover:shadow-lg group",
                    scrolled
                      ? "bg-brand-red text-white border-brand-red"
                      : "bg-black",
                    isActive
                      ? "text-white border-brand-red/50 shadow-[0_0_15px_rgba(255,87,87,0.3)]"
                      : scrolled
                        ? ""
                        : "text-zinc-400 border-white/5 hover:text-white hover:border-white/20"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Secure Your Spot Button - Desktop - Gradient Border to Fill Effect */}
          <Link
            href="#book"
            className="hidden group relative rounded-full p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(27,79,216,0.6)]"
          >
            {/* Gradient Background (Acts as border initially, them fills) */}
            <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-red to-brand-blue animate-gradient-xy transition-all duration-300" />

            {/* Inner Content Container */}
            <div className={cn(
              "relative flex items-center gap-2 px-6 py-2 rounded-full transition-colors duration-300 group-hover:bg-transparent",
              scrolled ? "bg-brand-red" : "bg-black"
            )}>
              <Calendar size={14} className="shrink-0 text-white" />
              <span className="text-white font-bold text-xs uppercase tracking-wider">Book Table</span>
            </div>
          </Link>

          {/* Mobile Menu Trigger (Right) - Absolute positioning on desktop to not affect center? No, on mobile it's flex justify-between. */}
          <div className="lg:hidden">
            <StaggeredMenu
              items={navLinks.map((link) => ({
                label: link.label,
                link: link.href,
                ariaLabel: link.label,
              }))}
              displaySocials={false}
              menuButtonColor="#fff"
              openMenuButtonColor="#fff"
              accentColor="#3B82F6"
              changeMenuColorOnOpen={true}
              closeOnClickAway={true}
              activeSection={activeSection}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
