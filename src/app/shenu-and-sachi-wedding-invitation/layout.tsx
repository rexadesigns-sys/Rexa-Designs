import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import "./wedding.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

const madina = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-madina",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sachira & Shenali | Wedding Celebration",
  description: "Join us in celebrating the wedding celebration of Sachira and Shenali on October 15, 2026.",
  icons: {
    icon: "/shenu-and-sachi-wedding-invitation/favicon.svg",
  },
};

export default function WeddingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${playfair.variable} ${montserrat.variable} ${madina.variable} wedding-theme scroll-smooth selection:bg-gold/30 selection:text-emerald-dark`}>
      {children}
    </div>
  );
}
