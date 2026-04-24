import { createWhatsAppLink } from '../../data/whatsapp';

const whatsappMessage = 'Hello Rexa Designs, I would like to discuss a project.';

export default function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink(whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-1 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8 md:h-9 md:w-9"
        fill="currentColor"
      >
        <path d="M16.01 3.2c-7.02 0-12.73 5.7-12.73 12.72 0 2.24.59 4.42 1.71 6.35L3.2 28.8l6.68-1.75a12.7 12.7 0 0 0 6.13 1.56h.01c7.02 0 12.73-5.7 12.73-12.72S23.04 3.2 16.01 3.2Zm0 23.26h-.01c-1.91 0-3.79-.51-5.43-1.48l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.52 10.52 0 0 1-1.61-5.6c0-5.84 4.75-10.59 10.6-10.59 2.83 0 5.49 1.1 7.49 3.1a10.53 10.53 0 0 1 3.1 7.48c0 5.84-4.75 10.59-10.6 10.59Zm5.81-7.93c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.81 1.03-.99 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
