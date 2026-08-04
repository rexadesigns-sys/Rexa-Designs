"use client";

import ScrollReveal from "./ScrollReveal";

export default function Timeline() {

  const events = [
    {
      time: "9:00 AM",
      title: "Guest Arrival",
      desc: "Welcome drinks & light bites in the garden courtyard",
    },
    {
      time: "9:30 AM",
      title: "Ceremony",
      desc: "Exchange of Rings beneath the grand floral arch",
    },
    {
      time: "11:00 AM",
      title: "Cocktail Hour",
      desc: "Celebrate with craft cocktails & hors d'oeuvres",
    },
    {
      time: "12:30 PM",
      title: "Lunch",
      desc: "Delicious Sri Lankan cuisine served in the garden",
    },
    {
      time: "2:30 PM",
      title: "Dance Floor Opens",
      desc: "The couple's first dance followed by cake cutting",
    },
    {
      time: "3:30 PM",
      title: "Couple Leaves",
      desc: "Ceremony concludes with the couple's departure",
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-[#FAF9F6] border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-[0.25em] uppercase text-xs md:text-sm">
              The Celebration
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4A2A20] mt-3 mb-4">
              Order of Events
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6"></div>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="max-w-xl mx-auto mt-16">
          {events.map((evt, idx) => (
            <ScrollReveal key={idx} delayMs={idx * 50}>
              <div
                className="grid grid-cols-[80px_30px_1fr] md:grid-cols-[100px_40px_1fr] gap-x-2 md:gap-x-4 items-start relative min-h-[100px]"
              >
                <div className="font-sans text-xs md:text-sm text-gold font-medium text-right pr-2 mt-1 uppercase tracking-wider">
                  {evt.time}
                </div>
                <div className="flex flex-col items-center justify-start h-full relative">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-[3px] border-[#FAF9F6] z-10 mt-1.5 shadow-[0_0_0_2px_rgba(212,175,55,0.1)]"></div>
                  {idx < events.length - 1 && (
                    <div className="w-[1px] bg-[#D4AF37]/30 absolute top-5 bottom-[-40px] left-1/2 transform -translate-x-1/2"></div>
                  )}
                </div>
                <div className="pb-10 pl-2">
                  <h3 className="font-serif text-lg md:text-xl text-gray-800 font-medium leading-none mb-2">
                    {evt.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

