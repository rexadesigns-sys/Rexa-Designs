"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './navItems';

export default function MobileMenu({ setIsMobileMenuOpen }) {
  const pathname = usePathname();
  
  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return `text-left ${isActive ? 'text-orange-500 font-bold' : ''}`;
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="lg:hidden bg-white border-t border-gray-100 fixed top-[72px] left-0 w-full shadow-xl z-[60]">
      <div className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium text-gray-700">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} onClick={closeMenu} className={getLinkClass(item.path)}>
            {item.label}
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={closeMenu}
          className="bg-orange-500 text-white px-4 py-3 rounded text-center font-bold"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
