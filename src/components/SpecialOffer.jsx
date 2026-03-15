import { Gift, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecialOffer() {
  return (
    <section className="section-shell py-8">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-rose-600 via-rose-500 to-amber-400 p-8 text-white shadow-luxe sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
              <Gift size={14} />
              Special Offer
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              Get 20% off on premium hair spa and styling combos this month
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
              A polished promotional section that helps the demo site feel sales-ready and conversion
              focused for the salon owner.
            </p>
          </div>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-rose-600 transition hover:bg-brand-primary hover:text-white"
          >
            <Sparkles size={16} />
            Claim Offer
          </Link>
        </div>
      </div>
    </section>
  );
}
