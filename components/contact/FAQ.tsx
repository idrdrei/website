"use client";

import FadeIn from "@/components/FadeIn";
import { ChevronDown, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are highly recommended to minimize waiting time and ensure adequate time for your consultation. Walk-ins may be accommodated depending on clinic availability.",
  },
  {
    question: "Can I seek a second opinion?",
    answer:
      "Yes. Patients seeking a second opinion for cataracts, retinal conditions, ocular tumors, or other eye diseases are welcome. Please bring any previous records or imaging studies if available.",
  },
  {
    question: "Can I send my medical records before my visit?",
    answer:
      "Yes. If you have previous eye examination results, imaging, or referral letters, you may send them ahead of your appointment. This helps us review your case and prepare for your consultation.",
    showEmail: true,
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Payment options may vary by hospital or clinic location. If you have questions regarding payment methods or HMO coverage, please contact the clinic before your appointment.",
    showWhatsapp: true,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-28 bg-[#FAFAF7] py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Before Your
              <span className="block font-semibold">
                Consultation
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              Here are answers to some of the most common questions about
              scheduling an appointment and preparing for your visit.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 0.05}>
              <div className="rounded-[24px] border border-neutral-200 bg-white">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-neutral-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8">
                      <p className="leading-8 text-neutral-600">
                        {faq.answer}
                      </p>

                      {faq.showEmail && (
                        <a
                          href="mailto:martineyemd@gmail.com?subject=Medical%20Records%20for%20Upcoming%20Consultation"
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1F4E8C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#183D6F]"
                        >
                          <Mail size={18} />
                          Send Records by Email
                        </a>
                      )}

                      {faq.showWhatsapp && (
                        <a
                          href="https://wa.me/639761782924?text=Hello%20Dr.%20Martin,%20I'd%20like%20to%20ask%20about%20payment%20methods%20and%20HMO%20coverage."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#1EBE5D]"
                        >
                          <FaWhatsapp size={18} />
                          Contact the Clinic on WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}