"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

export default function Lightbox({ imageUrl, onClose }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageUrl) {
      document.body.classList.add("lightbox-active");
      setActiveUrl(imageUrl);
      // Let mount complete before triggering transition classes
      const timer = setTimeout(() => setIsOpen(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
      const timer = setTimeout(() => {
        setActiveUrl(null);
        document.body.classList.remove("lightbox-active");
      }, 300); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [imageUrl]);

  if (!activeUrl) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 bg-black/95 p-4 md:p-8 flex items-center justify-center transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-8 h-8" />
      </button>
      <img
        src={activeUrl}
        alt="Enlarged gallery view"
        onClick={(e) => e.stopPropagation()}
        className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      />
    </div>
  );
}
