export default function Footer() {
  const contacts = [
    {
      name: "Chinthana Rukshan",
      phone: "+94776139828",
      displayPhone: "+94 77 613 9828",
    },
    {
      name: "Gawrawa Vimukthi",
      phone: "+94765266624",
      displayPhone: "+94 76 526 6624",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1DKFBwBpUB/",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      viewBox: "0 0 24 24",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shenunsachi/",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
      viewBox: "0 0 24 24",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@shenuandsachi",
      path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.78-.22-.22-.41-.47-.58-.73v7.02c0 3.82-2.31 7.21-5.91 8.24-3.6 1.03-7.53-.4-9.52-3.48-1.99-3.08-1.63-7.24.87-9.92 2.5-2.68 6.67-3.12 9.68-1.07.06.04.12.09.18.13v4.27c-1.57-1.12-3.77-.96-5.14.37-1.37 1.33-1.6 3.49-.55 5.08.79 1.2 2.22 1.86 3.66 1.68 1.44-.18 2.62-1.29 2.91-2.7.07-.35.09-.71.09-1.07V.02z",
      viewBox: "0 0 24 24",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@ShenuandSachi",
      path: "M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
      viewBox: "0 0 24 24",
    },
  ];

  return (
    <footer className="bg-[#1A1A1A] py-16 text-center text-champagne/80 relative overflow-hidden border-t border-gold/10">
      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="mb-10 text-center w-full max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-serif text-champagne mb-8">
            For any questions, be in touch!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            {contacts.map((c, idx) => (
              <div key={idx} className="p-4 rounded border border-white/5 bg-white/[0.02]">
                <h4 className="font-serif text-lg text-champagne mb-2">{c.name}</h4>
                <p className="font-light text-sm">
                  Mobile:{" "}
                  <a
                    href={`tel:${c.phone}`}
                    className="text-gold hover:text-gold-light transition-colors duration-300 underline decoration-gold/30 underline-offset-4 font-sans font-medium"
                  >
                    {c.displayPhone}
                  </a>
                </p>
              </div>
            ))}
          </div>

          {/* Follow Us Section */}
          <div className="mt-12 flex flex-col items-center">
            <h4 className="font-serif text-xl text-champagne mb-4 tracking-wider">Follow Us</h4>
            <div className="flex space-x-6 text-champagne/60">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  className="hover:text-gold transition-colors duration-300 flex items-center justify-center"
                  aria-label={s.name}
                >
                  <svg className="w-6 h-6 fill-current" viewBox={s.viewBox} xmlns="http://www.w3.org/2000/svg">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-24 h-px bg-gold/30 my-8"></div>

        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-madina text-transparent bg-clip-text bg-gradient-to-r from-[#F7E7CE] via-[#D4AF37] to-[#F7E7CE] mb-4 py-2 px-4 leading-[1.15] overflow-visible drop-shadow-[0_2px_20px_rgba(212,175,55,0.4)]">
          Sachira <span className="font-light italic text-gold-light">&amp;</span> Shenali
        </h2>

        <p className="text-xs uppercase tracking-widest text-emerald-light mb-8 font-semibold">
          October 15, 2026
        </p>

        <p className="text-[10px] text-gray-500 tracking-wider font-light">
          Made with love in Sri Lanka
        </p>
      </div>
    </footer>
  );
}
