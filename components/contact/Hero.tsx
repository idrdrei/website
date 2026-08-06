"use client";

import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-light tracking-tight text-neutral-900 md:text-6xl">
            Get in Touch.
            <span className="block font-semibold">
              We're Here to Help.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Whether you're scheduling a consultation, seeking a second opinion,
            or simply have questions about your eye health, our team is ready to
            assist you. Choose the contact method that's most convenient for you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}