"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume to a pleasant level
    audio.volume = 0.5;

    // Autoplay attempt as soon as component mounts
    const playAttempt = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked by browser. User interaction needed to start music.", err);
        });
    };

    playAttempt();

    // Still listen to user interactions just in case autoplay fails
    const handleInteraction = () => {
      if (audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            cleanListeners();
          })
          .catch((err) => console.log(err));
      }
    };

    const cleanListeners = () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      cleanListeners();
    };
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/shenu-and-sachi-wedding-invitation/a-thousand-years-violin.mp3" loop preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-4 bg-white/85 backdrop-blur-md rounded-full shadow-xl hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 border border-gold/30 group"
        aria-label="Toggle Music"
      >
        <div className="relative flex items-center justify-center w-6 h-6">
          {isPlaying ? (
            <>
              <Pause className="w-6 h-6 text-gold relative z-10 animate-fade-in" />
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
            </>
          ) : (
            <Music className="w-6 h-6 text-gold relative z-10" />
          )}
        </div>
      </button>
    </>
  );
}
