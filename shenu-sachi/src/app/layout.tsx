import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Sachira & Shenali | Wedding Celebration",
  description: "Join us in celebrating the wedding celebration of Sachira and Shenali on October 15, 2026.",
  icons: {
    icon: "/shenu-and-sachi-wedding-invitation/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="text-gray-800 selection:bg-gold/30 selection:text-emerald-dark">
        {children}
      </body>
    </html>
  );
}
