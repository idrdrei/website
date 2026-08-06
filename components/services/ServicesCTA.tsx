"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="bg-[#111827] py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-16">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#7FB3FF]">
            Ready to Take the Next Step?
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] text-white sm:text-6xl">
            Your vision deserves
            <br />
            exceptional care.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're due for a routine eye examination, considering
            vision correction, or seeking highly specialized care for a complex
            eye condition, we're here to help you see your best.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-[#111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              Meet Dr. Martin
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}