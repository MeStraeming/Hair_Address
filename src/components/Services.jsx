import { Link } from 'react-router-dom';
import services from '../data/services.json';
import ServiceCard from './ServiceCard';

export default function Services({ preview = false }) {
  const visibleServices = preview ? services.slice(0, 6) : services;

  return (
    <section className="section-shell py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="section-label">Curated Services</span>
          <h2 className="mt-5 font-display text-4xl text-brand-primary sm:text-5xl">
            Luxury hair, skin, and grooming services crafted for every detail
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            From precision cuts to indulgent keratin rituals, every appointment is designed to feel
            elevated, comfortable, and visibly transformative.
          </p>
        </div>
        {preview && (
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary transition hover:bg-brand-primary hover:text-white"
          >
            View All Services
          </Link>
        )}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleServices.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
