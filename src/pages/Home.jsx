import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SpecialOffer from '../components/SpecialOffer';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import MapSection from '../components/MapSection';

export default function Home() {
  useEffect(() => {
    document.title = 'Hair Address Unisex Salon | Best Salon in Koramangala';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Professional hair salon in Koramangala offering haircuts, hair spa, beauty services and skin treatments.',
      );
    }
  }, []);

  return (
    <>
      <Hero />
      <Services preview />
      <SpecialOffer />
      <Gallery preview />
      <Testimonials />
      <CTASection />
      <MapSection />
    </>
  );
}
