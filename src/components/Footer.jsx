import { Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import salonConfig from '../data/salonConfig.json';

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] py-14 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h3 className="font-display text-3xl">{salonConfig.name}</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            Premium salon demo crafted to feel like a modern beauty brand with stronger trust,
            better presentation, and clearer calls to action.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-200">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-200">Contact</p>
          <div className="mt-5 space-y-4 text-sm text-white/75">
            <div className="flex gap-3">
              <MapPin size={16} className="mt-1 text-rose-300" />
              <span>{salonConfig.location}</span>
            </div>
            <div className="flex gap-3">
              <Phone size={16} className="mt-1 text-rose-300" />
              <a href={`tel:${salonConfig.phone}`}>{salonConfig.phoneDisplay}</a>
            </div>
            <div className="flex gap-3">
              <Instagram size={16} className="mt-1 text-rose-300" />
              <span>Instagram-ready premium brand presence</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.25em] text-white/40">
        Hair Address Unisex Salon • Koramangala, Bengaluru
      </div>
    </footer>
  );
}
