import './globals.css';
import LayoutWrapper from '../component/layout/LayoutWrapper';

export const metadata = {
  title: 'Rexa Designs | Premium Graphic Design Services in Sri Lanka',
  description: 'Rexa Designs offers top-tier graphic design services in Sri Lanka. We specialize in logo design, social media posts, banners, and business branding solutions to elevate your visual identity.',
  keywords: 'Graphic Design Sri Lanka, Logo Design, Social Media Posts, Banner Design, UI/UX, Rexa Designs, Branding Sri Lanka',
  authors: [{ name: 'Rexa Designs' }],
  icons: {
    icon: '/Rexa Icon.webp',
  },
  openGraph: {
    type: 'website',
    url: 'https://rexadesigns.lk/',
    title: 'Rexa Designs | Premium Graphic Design Services in Sri Lanka',
    description: 'Rexa Designs offers top-tier graphic design services in Sri Lanka. We specialize in logo design, social media posts, banners, and business branding solutions to elevate your visual identity.',
    images: [
      {
        url: 'https://rexadesigns.lk/Rexa%20Icon.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://rexadesigns.lk/',
    title: 'Rexa Designs | Premium Graphic Design Services in Sri Lanka',
    description: 'Rexa Designs offers top-tier graphic design services in Sri Lanka. We specialize in logo design, social media posts, banners, and business branding solutions to elevate your visual identity.',
    images: ['https://rexadesigns.lk/Rexa%20Icon.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
