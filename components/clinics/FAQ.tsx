"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Appointments are highly recommended to help minimize waiting time and ensure adequate time for your consultation. Walk-in patients may be accommodated depending on clinic availability.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Please bring any previous eye records, prescriptions, imaging studies, laboratory results, referral letters, and a list of your current medications if applicable.",
  },
  {
    question: "Will my eyes be dilated during the examination?",
    answer:
      "Depending on your condition, pupil dilation may be recommended to allow a more complete examination of the retina and optic nerve. Dilation can cause temporary blurred near vision and light sensitivity for several hours.",
  },
  {
    question: "How long does a consultation usually take?",
    answer:
      "Consultation times vary depending on the complexity of your condition and any additional diagnostic tests that may be required. Visits involving imaging or pupil dilation generally take longer than routine examinations.",
  },
  {
    question: "Can I have diagnostic tests done on the same day?",
    answer:
      "Sometimes. While some diagnostic tests can be performed during your consultation, availability depends on the clinic location and testing schedule. If same-day testing is not possible, the necessary examinations will be scheduled at the earliest available appointment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-28 bg-white py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Before
              <span className="block font-semibold">
                Your Appointment
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Helpful information to make your clinic visit as smooth and
              comfortable as possible.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 divide-y divide-neutral-200 rounded-[32px] border border-neutral-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-neutral-50"
                >
                  <span className="text-lg font-medium text-neutral-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-8 pb-8 leading-8 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}