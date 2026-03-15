import { MessageCircle } from 'lucide-react';
import salonConfig from '../data/salonConfig.json';

export default function WhatsAppButton() {
  const phoneNumber = salonConfig.phone.replace(/\D/g, '');
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(salonConfig.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-105 hover:bg-emerald-400"
    >
      <MessageCircle size={20} />
      WhatsApp
    </a>
  );
}
