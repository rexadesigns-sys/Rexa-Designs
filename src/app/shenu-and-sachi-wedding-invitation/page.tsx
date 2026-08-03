"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import WhenWhere from "./components/WhenWhere";
import Journey from "./components/Journey";
import Timeline from "./components/Timeline";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import MusicPlayer from "./components/MusicPlayer";
import LandingOverlay from "./components/LandingOverlay";

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);

  useEffect(() => {
    // Prevent browser from retaining scroll position on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Force scroll to top immediately
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setShouldPlayMusic(true);
  };

  const handleImageClick = (url: string) => {
    setLightboxImage(url);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-gray-800 relative">
      {/* Landing Overlay Screen */}
      <LandingOverlay onOpen={handleOpenInvitation} />

      {/* Background Music Player */}
      <MusicPlayer shouldPlay={shouldPlayMusic} />

      {/* Main Sections */}
      <Hero />
      <WhenWhere />
      <Journey onImageClick={handleImageClick} />
      <Timeline />
      <RSVP />
      <Gallery onImageClick={handleImageClick} />
      <Footer />

      {/* Shared Lightbox Overlay */}
      <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}
