"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What does a retina specialist do?",
    answer:
      "A retina specialist diagnoses and treats conditions that affect the retina and the macula, including diabetic retinopathy, macular degeneration, retinal tears, and retinal detachment.",
  },
  {
    question: "Can retinal problems cause permanent vision loss?",
    answer:
      "Some retinal conditions can cause permanent vision loss, especially when they are not treated. However, many retinal diseases can be managed or treated, particularly when they are detected early.",
  },
  {
    question: "Can I have a retinal problem without symptoms?",
    answer:
      "Yes. Some retinal conditions, including early diabetic retinopathy, may not cause noticeable symptoms. Regular eye examinations are important, especially if you have diabetes or other risk factors.",
  },
  {
    question: "When should I see an eye doctor urgently?",
    answer:
      "Seek urgent eye care if you suddenly develop flashes of light, many new floaters, a curtain or shadow over your vision, or sudden loss of vision. These can be warning signs of a retinal tear or detachment.",
  },
  {
    question: "How are retinal problems diagnosed?",
    answer:
      "Your eye doctor will examine the retina, often after dilating your pupils. Additional tests such as an OCT scan, retinal photography, or ultrasound may be recommended depending on what is found.",
  },
  {
    question: "Can retinal diseases be treated?",
    answer:
      "Yes. Treatment depends on the condition. Options may include medicines injected into the eye, laser treatment, or surgery. Your treatment will depend on the specific problem and how advanced it is.",
  },
  {
    question: "How can I protect my retinal health?",
    answer:
      "Regular eye examinations, good blood sugar and blood pressure control, not smoking, and maintaining a healthy lifestyle can help protect your eyes and reduce the risk of vision loss.",
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
            Retina Questions, answered.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Simple answers to some of the questions patients commonly ask
            about retinal health.
          </p>
        </div>

        {/* FAQ List */}
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