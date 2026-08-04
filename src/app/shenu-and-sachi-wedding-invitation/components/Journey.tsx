"use client";

import Image from "next/image";

interface JourneyProps {
  onImageClick: (url: string) => void;
}

export default function Journey({ onImageClick }: JourneyProps) {

  const images = [
    {
      src: "/shenu-and-sachi-wedding-invitation/How%20it%20began%20photo%201.avif",
      alt: "Journey Moment 1",
    },
    {
      src: "/shenu-and-sachi-wedding-invitation/How%20it%20began%20photo%202.avif",
      alt: "Journey Moment 2",
    },
    {
      src: "/shenu-and-sachi-wedding-invitation/How%20it%20began%20photo%203.avif",
      alt: "Journey Moment 3",
    },
  ];

  return (
    <section id="journey" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A2A20] mt-3 mb-6">
            How It All Began
          </h2>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-xl shadow-md group border border-gray-100"
              onClick={() => onImageClick(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Love Story Text */}
        <div className="max-w-3xl mx-auto px-4 text-gray-600 font-light text-base md:text-lg leading-relaxed space-y-6 text-center">
          <p>
            It all began on a fateful day in a tuition class. That&apos;s where Sachi and Shenu first crossed paths. What
            began as a casual meeting soon bloomed into something much more. On a sunny October 21st, 2016, Sachi
            gathered the courage to ask Shenu out, and that simple question marked the beginning of a beautiful journey
            together.
          </p>
          <p>
            As the years passed, their love only grew stronger. Seven years later, on October 21, 2023, Sachi and his
            family made a special visit to Shenu’s home. It was the day that sealed their commitment, with both
            families blessing our love. But Sachi had one more beautiful moment planned. He wanted to make it official in
            the most romantic way.
          </p>
          <p>
            Exactly one year later, on October 21, 2024, Sachi proposed to Shenu, asking the question that would lead
            to a happily ever after: &ldquo;Will you marry me?&rdquo; With love in their hearts and excitement for the future, they
            are now looking forward to tying the knot and beginning the next chapter of their forever.
          </p>
          <p className="font-serif italic text-emerald-dark text-lg md:text-xl pt-4">
            Join us as we celebrate our love story and embark on this beautiful journey together.
          </p>
        </div>
      </div>
    </section>
  );
}
