"use client";

import FadeIn from "@/components/FadeIn";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CalendarDays,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">

        <FadeIn>
          <div className="overflow-hidden rounded-[40px] bg-[#1F4E8C] px-8 py-16 text-center text-white shadow-[0_30px_80px_rgba(31,78,140,0.25)] md:px-16">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Take the Next Step
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight md:text-6xl">
              Ready to Experience
              <span className="block font-semibold">
                Clearer Vision?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
              Whether you're considering LASIK, SMILE, PRK, or ICL,
              the first step is a comprehensive consultation. We'll
              evaluate your eyes, answer your questions, and recommend
              the treatment that's best suited to your vision and lifestyle.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[#1F4E8C] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CalendarDays size={20} />
                Book a Consultation
                <ArrowRight size={18} />
              </a>

              <a
                href="https://m.me/idrdrei"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                <MessageCircle size={20} />
                Message on Messenger
              </a>

            </div>

            {/* Contact Options */}

            <div className="mt-14 grid gap-5 md:grid-cols-3">

              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">

                <CalendarDays
                  size={30}
                  className="mx-auto"
                />

                <h3 className="mt-4 text-lg font-semibold">
                  Consultation
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Personalized assessment and treatment planning.
                </p>

              </div>

              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">

                <Phone
                  size={30}
                  className="mx-auto"
                />

                <h3 className="mt-4 text-lg font-semibold">
                  Contact
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Reach us through Messenger, Viber, WhatsApp, or by phone.
                </p>

              </div>

              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">

                <ArrowRight
                  size={30}
                  className="mx-auto"
                />

                <h3 className="mt-4 text-lg font-semibold">
                  Your Journey
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  From consultation to recovery, we'll guide you every step of the way.
                </p>

              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}