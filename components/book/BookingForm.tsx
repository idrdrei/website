"use client";

import FadeIn from "@/components/FadeIn";
import { FaFacebookMessenger, FaWhatsapp, FaViber } from "react-icons/fa";

export default function BookingForm() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-8">

        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Appointment Request
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Complete the
              <span className="block font-semibold">
                Booking Form
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Complete the form below to request an appointment.
              Our clinic will review your submission and contact you
              within one business day to confirm your schedule.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-16 rounded-[32px] border border-[#1F4E8C]/10 bg-[#F8FAFC] p-8 md:p-10">
            <h3 className="text-2xl font-semibold text-neutral-900">
              What Happens Next?
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex gap-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4E8C] text-white font-semibold">
                  1
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900">
                    Submit your appointment request
                  </h4>

                  <p className="mt-2 text-neutral-600">
                    Complete the form with your preferred clinic,
                    appointment date, and reason for consultation.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4E8C] text-white font-semibold">
                  2
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900">
                    We'll review your request
                  </h4>

                  <p className="mt-2 text-neutral-600">
                    Our clinic will review availability and your
                    preferred schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4E8C] text-white font-semibold">
                  3
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900">
                    Appointment confirmation
                  </h4>

                  <p className="mt-2 text-neutral-600">
                    We'll contact you by phone or email to confirm
                    your appointment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="overflow-hidden rounded-[36px] border border-neutral-200 shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc4krUfJOVWVHEWUxeuOcmMwmWlr57G3bKgCh9IHPu4DmN4ZQ/viewform?embedded=true"
              width="100%"
              height="1250"
              className="border-0"
              loading="lazy"
              title="Appointment Request Form"
            >
              Loading…
            </iframe>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#1F4E8C]">
              Need Immediate Assistance?
            </p>

            <p className="mt-4 text-neutral-600">
              If you prefer, you can also contact us through your
              preferred messaging platform.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <a
                href="https://m.me/idrdrei"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#1F4E8C] px-8 py-4 text-white transition hover:opacity-90"
              >
                <FaFacebookMessenger />
                Messenger
              </a>

              <a
                href="https://wa.me/639761782924?text=Hello%20Dr.%20Martin,%20I'd%20like%20to%20request%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-neutral-300 px-8 py-4 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="viber://chat?number=%2B639058616824"
                className="inline-flex items-center gap-3 rounded-full border border-neutral-300 px-8 py-4 hover:bg-[#7360F2] hover:text-white hover:border-[#7360F2] transition"
              >
                <FaViber />
                Viber
              </a>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}