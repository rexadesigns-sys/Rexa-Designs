"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

export default function LayoutWrapper({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {isMobileMenuOpen && (
        <MobileMenu
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}

      {children}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
