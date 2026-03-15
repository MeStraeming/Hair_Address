import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import salonConfig from '../data/salonConfig.json';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Booking', to: '/booking' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-brand-primary/90 text-white backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-300/30 bg-white/10 text-lg font-semibold">
            HA
          </div>
          <div>
            <p className="font-display text-xl leading-none tracking-wide">{salonConfig.name}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-rose-200">Luxury Hair & Beauty</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-rose-300' : 'text-white/80 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${salonConfig.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-rose-300 hover:text-white"
          >
            <Phone size={16} />
            {salonConfig.phoneDisplay}
          </a>
          <Link
            to="/booking"
            className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-500"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-full border border-white/20 p-2 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-brand-primary lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-rose-300' : 'text-white/85'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${salonConfig.phone}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/85"
            >
              <Phone size={16} />
              {salonConfig.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
