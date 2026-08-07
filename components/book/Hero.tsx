"use client";

import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="bg-white pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-8 text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
            Book an Appointment
          </p>

          <h1 className="mt-6 text-5xl font-light tracking-tight text-neutral-900 md:text-7xl">
            Schedule Your
            <span className="block font-semibold">
              Consultation
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
            Whether you're seeking laser vision correction, cataract surgery,
            ocular oncology consultation, or a comprehensive eye examination,
            we're here to help.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}