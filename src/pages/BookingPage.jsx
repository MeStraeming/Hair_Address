import { useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import SpecialOffer from '../components/SpecialOffer';

export default function BookingPage() {
  useEffect(() => {
    document.title = 'Book Appointment | Hair Address Unisex Salon';
  }, []);

  return (
    <>
      <section className="section-shell pt-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-rose-50 via-white to-amber-50 px-8 py-16 shadow-luxe sm:px-12">
          <span className="section-label">Appointment Booking</span>
          <h1 className="mt-5 font-display text-5xl text-brand-primary sm:text-6xl">
            Make premium booking feel simple, clear, and trustworthy
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            This page is built to convert visitors into appointment requests with minimal friction and a
            polished salon-brand presentation.
          </p>
        </div>
      </section>
      <BookingForm />
      <SpecialOffer />
    </>
  );
}
