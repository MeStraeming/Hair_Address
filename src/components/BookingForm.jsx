import { useState } from 'react';
import { motion } from 'framer-motion';
import services from '../data/services.json';

const initialState = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

export default function BookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialState);
  };

  return (
    <section className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-brand-primary p-8 text-white shadow-luxe sm:p-10">
          <span className="section-label border-white/10 bg-white/5 text-rose-200">Book Now</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">
            Reserve a polished salon experience in just a few clicks
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            Use the form to request your preferred service and time. Perfect for consultations,
            beauty treatments, and premium hair sessions.
          </p>
          <div className="mt-8 space-y-4 text-sm text-white/75">
            <p>Fast confirmations for haircut, facial, spa, and treatment appointments.</p>
            <p>Ideal for showcasing a professional, conversion-friendly booking journey.</p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass-panel rounded-[2rem] p-8 shadow-luxe sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-500"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-500"
                placeholder="+91"
              />
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-medium text-slate-700">Service</span>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-500"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Date</span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-500"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Time</span>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-500"
              />
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-medium text-slate-700">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-500"
                placeholder="Tell us your preferred style or treatment goals"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-rose-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-rose-500"
          >
            Confirm Booking Request
          </button>

          {submitted && (
            <p className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              Thank you. Your appointment request has been received. The salon can confirm your slot
              shortly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
