import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-shell py-20">
      <div className="rounded-[2.25rem] bg-brand-primary px-8 py-12 text-white shadow-luxe sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label border-white/10 bg-white/5 text-rose-200">Ready To Book</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">
            Turn first-time visitors into loyal beauty clients with a site that feels premium
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            This demo is designed to help the salon owner picture real bookings, stronger branding,
            and a better first impression online.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-rose-500"
            >
              Book Appointment
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-brand-primary"
            >
              Visit Contact Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
