import {
  Feather,
  Flower2,
  Gem,
  Heart,
  Leaf,
  Palette,
  Scissors,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Scissors,
  Sparkles,
  Palette,
  Flower2,
  WandSparkles,
  Gem,
  Heart,
  ShieldCheck,
  Leaf,
  Feather,
  Hand: Sparkles,
  HeartHandshake: Heart,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group glass-panel rounded-[1.75rem] p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-luxe"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 transition group-hover:bg-rose-600 group-hover:text-white">
        <Icon size={24} />
      </div>
      <div className="mt-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl text-brand-primary">{service.name}</h3>
          <span className="rounded-full bg-brand-primary px-3 py-1 text-sm font-semibold text-white">
            {service.price}
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      </div>
    </motion.article>
  );
}
