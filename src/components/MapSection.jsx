import { Clock3, MapPin, Phone } from 'lucide-react';
import salonConfig from '../data/salonConfig.json';

export default function MapSection() {
  return (
    <section className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-8 shadow-luxe sm:p-10">
          <span className="section-label">Visit Us</span>
          <h2 className="mt-5 font-display text-4xl text-brand-primary sm:text-5xl">
            Easy to find, easy to call, and designed to feel worth the visit
          </h2>
          <div className="mt-8 space-y-6 text-slate-600">
            <div className="flex gap-4">
              <MapPin className="mt-1 text-rose-600" />
              <div>
                <h3 className="font-semibold text-brand-primary">Address</h3>
                <p>{salonConfig.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 text-rose-600" />
              <div>
                <h3 className="font-semibold text-brand-primary">Phone</h3>
                <a href={`tel:${salonConfig.phone}`} className="transition hover:text-rose-600">
                  {salonConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock3 className="mt-1 text-rose-600" />
              <div>
                <h3 className="font-semibold text-brand-primary">Working Hours</h3>
                {salonConfig.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-luxe">
          <iframe
            title="Hair Address Unisex Salon map"
            src={salonConfig.mapEmbedUrl}
            className="h-[520px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
