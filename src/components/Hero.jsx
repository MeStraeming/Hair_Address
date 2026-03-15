import { motion } from 'framer-motion';
import { ArrowRight, Clock3, MapPin, PhoneCall, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import salonConfig from '../data/salonConfig.json';

const stats = [
  { label: 'Premium Services', value: '11+' },
  { label: 'Styled Looks', value: '2K+' },
  { label: 'Client Rating', value: '4.9/5' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury salon styling station"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/88 to-brand-primary/70" />

      <div className="section-shell relative grid min-h-[88vh] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-2xl"
        >
          <span className="section-label border-rose-300/20 bg-white/10 text-rose-200">
            Signature Salon Experience
          </span>
          <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Premium Hair & Beauty Experience in <span className="text-gradient">Koramangala</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl">{salonConfig.heroSubheadline}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-rose-500"
            >
              Book Appointment
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${salonConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/90 transition hover:border-white/40 hover:bg-white/5"
            >
              <PhoneCall size={16} />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/75">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-rose-300" />
              {salonConfig.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} className="text-amber-300" />
              Open Daily
            </span>
            <span className="inline-flex items-center gap-2">
              <Star size={16} className="text-amber-300" />
              Trusted by local clients
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-panel rounded-[2rem] p-5 text-brand-primary shadow-luxe"
        >
          <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-50 to-white p-5">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80"
              alt="Client receiving premium salon treatment"
              className="h-[420px] w-full rounded-[1.25rem] object-cover"
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                  <p className="font-display text-3xl text-brand-primary">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
