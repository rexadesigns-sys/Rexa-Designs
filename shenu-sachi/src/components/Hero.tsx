"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date("2026-10-15T09:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[85vh] md:h-screen min-h-[550px] md:min-h-[650px] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('/shenu-and-sachi-wedding-invitation/hero_bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-champagne px-4 flex flex-col items-center max-w-4xl">
        <p className="tracking-[0.3em] uppercase text-xs md:text-sm mb-4 font-light text-gold-light opacity-0 animate-fade-in-1">
          We are getting married
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4 md:mb-6 text-champagne leading-tight opacity-0 animate-scale-up-title">
          Sachira <span className="font-light italic text-gold">&amp;</span> Shenali
        </h1>

        <p className="text-base md:text-xl font-light tracking-[0.2em] mb-8 md:mb-12 text-champagne/90 opacity-0 animate-fade-in-2">
          15 . 10 . 2026
        </p>

        {/* Countdown */}
        <div
          className="flex space-x-6 md:space-x-16 text-center mb-8 md:mb-12 opacity-0 animate-fade-in-3"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="flex flex-col items-center min-w-[60px] md:min-w-[70px]">
            <span className="text-2xl md:text-5xl font-serif text-gold-light mb-1 md:mb-2">
              {isMounted ? timeLeft.days : "00"}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-champagne/75 font-medium">
              Days
            </span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] md:min-w-[70px]">
            <span className="text-2xl md:text-5xl font-serif text-gold-light mb-1 md:mb-2">
              {isMounted ? timeLeft.hours : "00"}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-champagne/75 font-medium">
              Hours
            </span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] md:min-w-[70px]">
            <span className="text-2xl md:text-5xl font-serif text-gold-light mb-1 md:mb-2">
              {isMounted ? timeLeft.minutes : "00"}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-champagne/75 font-medium">
              Mins
            </span>
          </div>
          <div className="flex flex-col items-center min-w-[60px] md:min-w-[70px]">
            <span className="text-2xl md:text-5xl font-serif text-gold-light mb-1 md:mb-2">
              {isMounted ? timeLeft.seconds : "00"}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-champagne/75 font-medium">
              Secs
            </span>
          </div>
        </div>

        {/* RSVP Button */}
        <div className="opacity-0 animate-fade-in-3" style={{ animationFillMode: "forwards" }}>
          <a
            href="#rsvp"
            className="inline-block border border-gold text-gold font-medium tracking-[0.25em] text-xs md:text-sm px-8 py-3 hover:bg-emerald hover:text-white hover:border-emerald active:bg-emerald-light active:border-emerald-light transition-all duration-300 uppercase rounded cursor-pointer shadow-md hover:shadow-lg"
          >
            RSVP
          </a>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <a
        href="#details"
        className="absolute bottom-6 md:bottom-8 z-10 cursor-pointer animate-[bounce_2s_infinite]"
        aria-label="Scroll to Details"
      >
        <ChevronDown className="w-8 h-8 text-gold-light/80 hover:text-gold transition-colors" />
      </a>
    </section>
  );
}
