import { useEffect } from 'react';
import Services from '../components/Services';
import CTASection from '../components/CTASection';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Salon Services | Hair Address Unisex Salon';
  }, []);

  return (
    <>
      <section className="section-shell pt-16">
        <div className="rounded-[2rem] bg-brand-primary px-8 py-16 text-white shadow-luxe sm:px-12">
          <span className="section-label border-white/10 bg-white/5 text-rose-200">Services</span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl">A complete menu of salon and beauty care</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            Showcase every treatment clearly with pricing, motion, and a polished visual system that
            feels premium from the first scroll.
          </p>
        </div>
      </section>
      <Services />
      <CTASection />
    </>
  );
}
