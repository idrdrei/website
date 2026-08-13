"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Can glaucoma cause blindness?",
    answer:
      "Yes, glaucoma is the leading cause of permanent blindness. It can cause permanent vision loss if it is not detected or treated. The good news is that early detection and proper treatment can help slow or prevent further damage.",
  },
  {
    question: "Can I have glaucoma even if my eye pressure is normal?",
    answer:
      "Yes. Some people develop glaucoma even when their eye pressure is within the normal range. This is why your doctor also looks at your optic nerve, visual field, and other test results.",
  },
  {
    question: "Will I know if I have glaucoma?",
    answer:
      "Not always. Early glaucoma often has no symptoms. You may see normally and feel completely fine even while damage is occurring. Regular eye examinations are important for detecting glaucoma early.",
  },
  {
    question: "Can glaucoma be cured?",
    answer:
      "There is currently no way to reverse damage that has already occurred. However, treatment can slow or prevent further damage and help protect the vision you still have.",
  },
  {
    question: "Will I need to use eye drops for the rest of my life?",
    answer:
      "Not necessarily. Some people need long-term eye drops, while others may be treated with laser or surgery. Your treatment depends on the type and severity of your glaucoma and how your eyes respond to treatment.",
  },
  {
    question: "Is glaucoma hereditary?",
    answer:
      "Glaucoma can run in families. Having a close relative with glaucoma can increase your risk, so regular eye examinations are especially important if glaucoma runs in your family.",
  },
  {
    question: "How often should I have my eyes checked?",
    answer:
      "The right schedule depends on your age, family history, eye pressure, and other risk factors. If you already have glaucoma, your doctor will recommend how often you should return based on your condition.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 lg:py-28">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Glaucoma questions, answered.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Simple answers to some of the questions patients commonly ask
            about glaucoma.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-slate-950">
                    {faq.question}
                  </span>

                  <Plus
                    className={`h-5 w-5 shrink-0 text-[#1F4E8C] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}