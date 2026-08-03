"use client";

import { useEffect, useState, useRef } from "react";
import { Sparkles } from "lucide-react";

interface LandingOverlayProps {
  onOpen: () => void;
}

type TransitionPhase = "initial" | "cleared" | "black" | "completed";

export default function LandingOverlay({ onOpen }: LandingOverlayProps) {
  const [phase, setPhase] = useState<TransitionPhase>("initial");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle user clicking "Open Invitation"
  const handleOpenClick = () => {
    if (phase !== "initial") return;

    // 1. Trigger background music playback
    onOpen();

    // 2. Restart video from 0 and transition to 'cleared' phase (slowly remove blur)
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    setPhase("cleared");

    // 3. Allow visitor to watch full HD video play for 1 full run (7 seconds)
    setTimeout(() => {
      setPhase("black");
    }, 7000);
  };

  // 4. When phase becomes "black", wait 1s for smooth black fade transition then unmount
  useEffect(() => {
    if (phase === "black") {
      const timer = setTimeout(() => {
        setPhase("completed");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Check if video is already ready or cached on mount
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, []);

  if (phase === "completed") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out ${
        phase === "black" ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Black Fadeout Transition Layer (Activates during 'black' phase) */}
      <div
        className={`absolute inset-0 bg-black z-30 transition-opacity duration-1000 pointer-events-none ${
          phase === "black" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Solid Black Fallback Background before video loads */}
      <div className="absolute inset-0 bg-black z-0 pointer-events-none" />

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        onCanPlay={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/shenu-and-sachi-wedding-invitation/intro_video.mp4" type="video/mp4" />
      </video>

      {/* Dark Blur Overlay (Fades out slowly duration-1500 when user clicks open) */}
      <div
        className={`absolute inset-0 bg-black/60 z-10 transition-all duration-1500 ease-in-out pointer-events-none ${
          phase === "initial" ? "backdrop-blur-md opacity-100" : "backdrop-blur-none opacity-0"
        }`}
      />

      {/* Elegant Radial Light Highlight */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-black/90 z-10 transition-opacity duration-1500 pointer-events-none ${
          phase === "initial" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Center Content Box (Fades out slowly when user clicks open) */}
      <div
        className={`relative z-20 text-center px-2 py-6 max-w-7xl w-full mx-auto flex flex-col items-center justify-center transition-all duration-1500 ease-in-out ${
          phase === "initial"
            ? "opacity-100 translate-y-0 scale-100 animate-fade-in-1"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* Subtle Decorative Line / Icon */}
        <div className="flex items-center space-x-3 mb-2 text-gold-light/80">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/60" />
          <Sparkles className="w-5 h-5 text-gold animate-pulse" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Title Tagline */}
        <p className="tracking-[0.35em] uppercase text-xs md:text-sm text-gold-light/90 font-light mb-1">
          Wedding Invitation
        </p>

        {/* Couple Names */}
        <h1 className="text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[10rem] xl:text-[12.5rem] 2xl:text-[14rem] font-madina text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7CE] via-[#D4AF37] to-[#F7E7CE] mb-3 tracking-normal drop-shadow-[0_2px_20px_rgba(212,175,55,0.4)] whitespace-nowrap py-2 px-4 leading-[1.15] overflow-visible">
          Sachira <span className="font-light italic text-gold-light">&amp;</span> Shenali
        </h1>

        {/* Open Invitation CTA Button */}
        <button
          onClick={handleOpenClick}
          className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden rounded-full border border-gold/60 bg-black/40 backdrop-blur-md text-gold-light font-medium tracking-[0.25em] text-xs md:text-sm uppercase shadow-2xl hover:border-gold hover:text-white hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
          <span className="relative z-10 flex items-center gap-2">
            Open Invitation
          </span>
        </button>

        {/* Subtext */}
        <p className="mt-2 text-[11px] md:text-xs text-champagne/70 tracking-[0.2em] uppercase font-light">
          Click to Open Invitation
        </p>
      </div>
    </div>
  );
}
