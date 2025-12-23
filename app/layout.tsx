import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { Providers } from "./providers";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


import SmoothScrolling from "@/components/SmoothScrolling";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090B",
};

export const metadata: Metadata = {
  title: {
    default: "Chillin Coffee | Premium Art Coffee & Entertainment Hub in Casablanca",
    template: "%s | Chillin Coffee Maarif",
  },
  description: "Experience the ultimate chill at Chillin Coffee, Casablanca's premier art coffee destination. Discover artisan coffee, professional Billiard & Snooker, PS5 lounge, 50+ Board Games, Karaoke, and Live Shows in Maarif. Open daily 10h-00h.",
  keywords: [
    "Chillin Coffee",
    "Best Coffee Maarif Casablanca",
    "Gaming Cafe Casablanca",
    "Billiard Casablanca",
    "Snooker Club Maarif",
    "Art Coffee Morocco",
    "PlayStation 5 Lounge Maarif",
    "Board Game Cafe Casablanca",
    "Live Music Cafe Morocco",
    "Karaoke Night Casablanca",
    "Coworking Space Maarif",
    "Entertainment Hub Casablanca",
    "29 Rue Al Woroud",
    "Moroccan Coffee Culture",
    "Chillin Vibe Cafe",
    "Nightlife Maarif",
    "Student Study Spot Casablanca"
  ],
  authors: [{ name: "Chillin Coffee", url: "https://chillin-coffee.vercel.app" }],
  creator: "Chillin Coffee",
  publisher: "Chillin Coffee",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://chillin-coffee.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fr-FR": "/",
      "ar-MA": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chillin-coffee.vercel.app",
    siteName: "Chillin Coffee Casablanca",
    title: "Chillin Coffee | Art, Gaming & Billiard in Maarif",
    description: "Your creative escape in Casablanca. Artisan drinks, professional gaming, and the best chill vibes in Morocco. Join us for coffee, gaming, and live entertainment.",
    images: [
      {
        url: "/chillin-logo.webp",
        width: 1200,
        height: 630,
        alt: "Chillin Coffee - The First Art Coffee In Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chillin Coffee Casablanca | The Ultimate Chill Spot",
    description: "Art, Coffee, Gaming, and Billiard. Experience the first art coffee in Morocco. Open 10:00 - 00:00.",
    images: ["/chillin-logo.webp"],
    creator: "@chillincoffee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Entertainment & Food",
  classification: "Entertainment Hub & Specialty Coffee Shop",
  icons: {
    icon: "/svg/favicon.svg",
    apple: "/svg/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Chillin Coffee",
  "image": "https://chillin-coffee.vercel.app/chillin-logo.webp",
  "logo": "https://chillin-coffee.vercel.app/chillin-logo.webp",
  "@id": "https://chillin-coffee.vercel.app",
  "url": "https://chillin-coffee.vercel.app",
  "telephone": "+212520051957",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "29 Rue Al Woroud",
    "addressLocality": "Casablanca",
    "postalCode": "20250",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.5822,
    "longitude": -7.6324
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/chillin___coffee",
    "https://web.facebook.com/p/Chillin-coffee-100064039410654",
    "https://www.tiktok.com/@chillin.coffee"
  ],
  "servesCuisine": "International, Coffee, Snacks",
  "amenityFeature": [
    "Wi-Fi",
    "Outdoor Seating",
    "Gaming Console",
    "Billiard Table",
    "Live Music"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.cdnfonts.com/css/blackout-oldskull" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.cdnfonts.com/css/blackout-oldskull');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="selection:bg-brand-blue selection:text-white relative overflow-x-hidden"
        style={{ fontFamily: "'Blackout Oldskull', fantasy" }}
      >
        <Providers>
          <SmoothScrolling>
            <Header />
            {children}
            <Footer />
          </SmoothScrolling>
        </Providers>
      </body>
    </html>
  );
}
