export const whatsappNumber = '94757622259';

export const createWhatsAppLink = (message) => (
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
);
