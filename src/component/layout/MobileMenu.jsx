import { NavLink } from 'react-router-dom';
import { navItems } from './navItems';

export default function MobileMenu({ setIsMobileMenuOpen }) {
  const linkClass = ({ isActive }) => (
    `text-left ${isActive ? 'text-orange-500 font-bold' : ''}`
  );
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="lg:hidden bg-white border-t border-gray-100 fixed top-[72px] left-0 w-full shadow-xl z-[60]">
      <div className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium text-gray-700">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={closeMenu} className={linkClass}>
            {item.label}
          </NavLink>
        ))}

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className="bg-orange-500 text-white px-4 py-3 rounded text-center font-bold"
        >
          Request a Quote
        </NavLink>
      </div>
    </div>
  );
}
