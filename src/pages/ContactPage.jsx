import { useEffect } from 'react';
import MapSection from '../components/MapSection';
import CTASection from '../components/CTASection';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Hair Address Unisex Salon';
  }, []);

  return (
    <>
      <section className="section-shell pt-16">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-100 via-white to-rose-50 px-8 py-16 shadow-luxe sm:px-12">
          <span className="section-label">Contact & Location</span>
          <h1 className="mt-5 font-display text-5xl text-brand-primary sm:text-6xl">
            Make it easy to visit, call, and trust the brand instantly
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Clear contact details, map visibility, and elegant presentation give the site a more
            complete local-business feel.
          </p>
        </div>
      </section>
      <MapSection />
      <CTASection />
    </>
  );
}
