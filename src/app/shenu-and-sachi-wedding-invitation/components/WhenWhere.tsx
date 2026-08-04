import { Calendar, Clock, MapPin } from "lucide-react";

export default function WhenWhere() {
  return (
    <section id="details" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#b89047] font-medium tracking-[0.25em] uppercase text-xs md:text-sm">
            The Details
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#4A2A20] mt-3 mb-4">
            When &amp; Where
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Date Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] p-10 md:p-12 flex flex-col items-center justify-between text-center min-h-[320px]">
            <div className="w-full flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="font-sans text-xs tracking-wider uppercase text-gray-500 mb-4 font-semibold">
                Date
              </span>
              <p className="text-gray-600 font-light text-base">Friday</p>
              <p className="font-serif italic text-4xl text-[#D4AF37] my-2">
                September 04
              </p>
              <p className="text-gray-600 font-light text-base">2026</p>
            </div>
          </div>

          {/* Time Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] p-10 md:p-12 flex flex-col items-center justify-between text-center min-h-[320px]">
            <div className="w-full flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="font-sans text-xs tracking-wider uppercase text-gray-500 mb-4 font-semibold">
                Time
              </span>
              <p className="font-serif italic text-4xl text-[#D4AF37] my-2 leading-snug">
                9:00 am -<br />4:30 pm
              </p>
              <p className="text-gray-500 text-sm mt-4 font-light">
                Poruwa Ceremony at 9:15 AM
              </p>
            </div>
          </div>

          {/* Venue Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] p-10 md:p-12 flex flex-col items-center justify-between text-center min-h-[320px]">
            <div className="w-full flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="font-sans text-xs tracking-wider uppercase text-gray-500 mb-4 font-semibold">
                Venue
              </span>
              <p className="font-serif text-2xl text-gray-800 mb-1 leading-tight font-medium">
                Lavenro Garden Hotel
              </p>
              <p className="text-gray-600 font-light text-base mb-8">
                Kosgama
              </p>
              <a
                href="https://maps.google.com/?q=Hotel+Refresh+Blue+Hikkaduwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-gold-light transition-colors text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-1.5 mt-auto"
              >
                View on Map ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
