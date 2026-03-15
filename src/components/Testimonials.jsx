import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import testimonials from '../data/testimonials.json';

export default function Testimonials() {
  return (
    <section className="section-shell py-20">
      <div className="max-w-2xl">
        <span className="section-label">Client Love</span>
        <h2 className="mt-5 font-display text-4xl text-brand-primary sm:text-5xl">
          Reviews that make the salon feel trusted before the first visit
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-panel rounded-[1.75rem] p-8 shadow-lg"
          >
            <Quote className="text-rose-500" size={30} />
            <div className="mt-5 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={`${item.name}-${starIndex}`} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 text-base leading-8 text-slate-700">{item.review}</p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <h3 className="font-semibold text-brand-primary">{item.name}</h3>
              <p className="text-sm text-slate-500">{item.service}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
