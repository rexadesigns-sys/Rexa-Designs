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
        <div className="max-w-3xl mx-auto px-4 text-black-600 font-regular light text-base md:text-lg leading-relaxed space-y-6 text-center">
          <p>
            Their story started in a simple way. Shenu needed help with a university project, and a friend connected her with Sachira.
            What began as an ordinary conversation slowly grew into something special over time. The real turning point came on the day
            of one of Shenu's university exams. Sachira showed up to surprise her. After a warm, heartfelt conversation that day,
            Sachira finally told Shenu how he felt he told her he loved her. Shenu's answer came on another day, when she went to a park
            with a close friend and the friend's boyfriend. In that simple, joyful moment, Shenu told Sachira that she felt the same way.
            That day, in that garden, was where their beautiful journey truly began.

          </p>
          <p>
            From then on, they grew closer with every new memory. Time passed, and one important day arrived the day their families met
            each other for the first time. Sachira and his family visited Shenu's home, and both families gave their blessing to the
            relationship. That day, their love was made official in the eyes of their families.

          </p>
          <p>
            After that, they began preparing for their wedding. But before that, Sachira wanted to create one more special memory for
            Shenu a proposal. Instead of simply asking, "Will you marry me?", Sachira planned a beautiful moment to ask that question
            the right way. Now, filled with love and hope for the future, Sachira and Shenu are ready to begin the next chapter of their
            lives as husband and wife.

          </p>
          <p className="font-serif italic text-[#4A2A20] text-lg md:text-xl pt-4">
            We would love for you to join us and celebrate this beautiful journey with us.
          </p>
        </div>
      </div>
    </section>
  );
}
