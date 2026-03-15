import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    title: 'Hair Transformation',
    category: 'Color & Finish',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Premium Interior',
    category: 'Salon Ambience',
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Beauty Ritual',
    category: 'Skin Care',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Styling Session',
    category: 'Hair Styling',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Customer Results',
    category: 'Glow Up',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Luxury Touch',
    category: 'Care Experience',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Gallery({ preview = false }) {
  const visibleImages = preview ? galleryImages.slice(0, 4) : galleryImages;

  return (
    <section className="bg-brand-primary py-20 text-white">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-label border-white/10 bg-white/5 text-rose-200">Gallery</span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              A salon atmosphere that feels polished, warm, and unmistakably premium
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Every corner of the studio, every finish, and every transformation is built to leave a
              lasting impression.
            </p>
          </div>
          {preview && (
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-brand-primary"
            >
              Explore Gallery
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleImages.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-[1.75rem] ${
                index === 0 && !preview ? 'xl:col-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/15 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-rose-200">{item.category}</p>
                <h3 className="mt-2 font-display text-3xl">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
