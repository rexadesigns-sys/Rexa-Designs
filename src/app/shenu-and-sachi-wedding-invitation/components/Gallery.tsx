"use client";

interface GalleryProps {
  onImageClick: (url: string) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {

  const images = [
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      alt: "Pre-Shoot Gallery 1",
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
      alt: "Pre-Shoot Gallery 2",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      alt: "Pre-Shoot Gallery 3",
    },
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
      alt: "Pre-Shoot Gallery 4",
    },
    {
      src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1200&auto=format&fit=crop",
      alt: "Pre-Shoot Gallery 5",
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
            Moments
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4A2A20] mt-4 mb-6">
            Our Proposal
          </h2>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>

        {/* Masonry Columns Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg shadow-md border border-gray-100"
              onClick={() => onImageClick(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
