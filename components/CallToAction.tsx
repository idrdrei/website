"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { CalendarDays } from "lucide-react";
import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaViber,
} from "react-icons/fa";

interface CallToActionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}

export default function CallToAction({
  eyebrow = "Book a Consultation",
  title = (
    <>
      Your vision deserves
      <br />
      expert care.
    </>
  ),
  description =
    "Whether you're considering LASIK, cataract surgery, evaluation for an eye tumor, or a comprehensive eye examination, we're here to help you see your best.",
}: CallToActionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#1F4E8C] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-8 text-center lg:px-16">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/70">
            {eyebrow}
          </p>

          <h2 className="mt-6 text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
            {title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/75">
            {description}
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            {/* Primary CTA */}
            <Link
              href="/book"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-[#1F4E8C] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CalendarDays size={20} />
              <span>Request an Appointment</span>
            </Link>

            {/* Messenger */}
            <a
              href="https://m.me/idrdrei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0084FF] hover:bg-[#0084FF]"
            >
              <FaFacebookMessenger size={20} />
              <span>Messenger</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/639761782924?text=Hello%20Dr.%20Martin,%20I'd%20like%20to%20request%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366]"
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp</span>
            </a>

            {/* Viber */}
            <div className="group relative inline-block">
  <a
    href="viber://chat?number=%2B639058616824"
    className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#7360F2] hover:bg-[#7360F2]"
  >
    <FaViber size={20} />
    <span>Viber</span>
  </a>

  <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
    Contact my secretary, L.S.
  </div>
</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}