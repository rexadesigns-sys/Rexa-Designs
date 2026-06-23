"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navItems } from './navItems';

export default function Navbar({
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return `hover:text-orange-600 transition-colors ${isActive ? 'text-orange-500 font-bold' : ''}`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Rexadesigns.lk home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/images/Rexa Designs Logo.svg"
            alt="Rexadesigns.lk"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex space-x-8 items-center font-medium text-sm text-gray-700">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={getLinkClass(item.path)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-orange-500 text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
          >
            Request a Quote
          </Link>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
