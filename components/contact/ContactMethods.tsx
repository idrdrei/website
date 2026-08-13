"use client";

import FadeIn from "@/components/FadeIn";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaFacebookMessenger, FaViber, FaWhatsapp } from "react-icons/fa";

const methods = [
  {
    title: "Messenger",
    description:
      "The fastest way to reach our clinic for appointments and general inquiries.",
    icon: <FaFacebookMessenger size={34} />,
    href: "https://m.me/idrdrei",
    button: "Message Us",
    hoverClass: "group-hover:bg-[#0084FF]",
  },
  {
    title: "Viber",
    description:
      "Contact my secretary, LS, for appointment requests and follow-up questions.",
    icon: <FaViber size={34} />,
    href: "viber://chat?number=%2B639058616824",
    button: "Chat on Viber",
    hoverClass: "group-hover:bg-[#7360F2]",
  },
  {
    title: "WhatsApp",
    description:
      "Convenient messaging for local and international patients.",
    icon: <FaWhatsapp size={34} />,
    href: "https://wa.me/639761782924?text=Hello%20Dr.%20Martin,%20I'd%20like%20to%20book%20an%20appointment.",
    button: "Chat on WhatsApp",
    hoverClass: "group-hover:bg-[#25D366]",
  },
  {
    title: "Email",
    description:
      "For referrals, medical records, and non-urgent concerns.",
    icon: <Mail size={34} />,
    href: "mailto:martineyemd@gmail.com",
    button: "Send Email",
    hoverClass: "group-hover:bg-[#1F4E8C]",
  },
];

export default function ContactMethods() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[#FAFAF7] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Contact Options
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Choose the Best Way
              <span className="block font-semibold">
                to Reach Us
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Whether you're booking an appointment, requesting a second
              opinion, or asking a question, we're happy to help through the
              contact method that's most convenient for you.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {methods.map((method, index) => (
            <FadeIn key={method.title} delay={index * 0.05}>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Hover background */}
                <div
                  className={`absolute inset-0 opacity-0 transition-all duration-500 ${method.hoverClass} group-hover:opacity-100`}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                  <div className="text-[#1F4E8C] transition-colors duration-500 group-hover:text-white">
                    {method.icon}
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-neutral-900 transition-colors duration-500 group-hover:text-white">
                    {method.title}
                  </h3>

                  <p className="mt-5 flex-1 leading-8 text-neutral-600 transition-colors duration-500 group-hover:text-white/90">
                    {method.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#1F4E8C] transition-colors duration-500 group-hover:text-white">
                    {method.button}

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}