import { useEffect } from 'react';
import Gallery from '../components/Gallery';
import CTASection from '../components/CTASection';

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Salon Gallery | Hair Address Unisex Salon';
  }, []);

  return (
    <>
      <section className="section-shell pt-16">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-primary via-slate-900 to-rose-800 px-8 py-16 text-white shadow-luxe sm:px-12">
          <span className="section-label border-white/10 bg-white/5 text-rose-200">Visual Showcase</span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl">Transformations, interiors, and premium beauty moments</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            A gallery page that helps the owner imagine real portfolio storytelling and stronger social proof.
          </p>
        </div>
      </section>
      <Gallery />
      <CTASection />
    </>
  );
}
