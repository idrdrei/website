"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is retinoblastoma curable?",
    answer:
      "Yes. When diagnosed early, retinoblastoma is highly treatable. Modern treatments allow most children to be successfully treated, and many are able to keep useful vision in one or both eyes.",
  },
  {
    question: "Can my child keep their eye?",
    answer:
      "Many children can keep their eye with today's treatments. Whether this is possible depends on the size and location of the tumor and whether vision can be safely preserved. In advanced cases, removing the eye may be the safest option to cure the cancer.",
  },
  {
    question: "Can retinoblastoma spread to other parts of the body?",
    answer:
      "If left untreated, retinoblastoma can spread outside the eye and become life-threatening. This is why prompt diagnosis and treatment are so important. Early treatment greatly reduces this risk.",
  },
  {
    question: "Will my child need chemotherapy?",
    answer:
      "Some children do, while others may be treated with laser therapy, cryotherapy, or other techniques. Your child's treatment plan depends on the size, location, and extent of the tumor.",
  },
  {
    question: "Will my child lose their vision?",
    answer:
      "Vision depends on where the tumor is located and how early treatment begins. Many children retain useful vision, especially when the disease is diagnosed before the tumor affects the central retina.",
  },
  {
    question: "Can retinoblastoma come back after treatment?",
    answer:
      "Yes. Some children may develop new tumors or experience recurrence after treatment. Regular follow-up examinations are essential, especially during the first few years after diagnosis.",
  },
  {
    question: "Is retinoblastoma hereditary?",
    answer:
      "Some cases are hereditary because of a change in the RB1 gene, while others occur without a family history. Genetic testing can help determine whether other family members may also be at risk.",
  },
  {
    question: "Can my other children be affected?",
    answer:
      "If an inherited RB1 gene change is present, brothers, sisters, and future children may also be at risk. Your doctor may recommend genetic counseling and screening examinations for family members.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-28 bg-[#FAFAF7] py-24"
    >
      <div className="mx-auto max-w-4xl px-8 lg:px-16">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-6 text-4xl font-light tracking-[-0.04em] text-[#111] sm:text-5xl">
              Answers to common
              <br />
              questions from parents.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Every child's situation is unique, but these are some of the
              questions families ask most often after a diagnosis of
              retinoblastoma.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 0.05}>
              <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-sm">
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-neutral-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 leading-8 text-neutral-600">
                      {faq.answer}
                    </p>
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