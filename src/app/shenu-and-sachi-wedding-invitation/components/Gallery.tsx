"use client";

interface GalleryProps {
  onImageClick: (url: string) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {

  const images = [
    {
      src: "/shenu-and-sachi-wedding-invitation/proposal%20photo%201.avif",
      alt: "Pre-Shoot Gallery 1",
    },
    {
      src: "/shenu-and-sachi-wedding-invitation/proposal%20photo%205.avif",
      alt: "Pre-Shoot Gallery 2",
    },
    {
      src: "/shenu-and-sachi-wedding-invitation/proposal%20photo%203.avif",
      alt: "Pre-Shoot Gallery 3",
    },
    {
      src: "/shenu-and-sachi-wedding-invitation/proposal%20photo%204.avif",
      alt: "Pre-Shoot Gallery 4",
    },
    {
      src: "/shenu-and-sachi-wedding-invitation/proposal%20photo%202.avif",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
