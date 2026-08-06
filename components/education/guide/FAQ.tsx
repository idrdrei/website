"use client";

import FadeIn from "@/components/FadeIn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Is choroidal melanoma the same as skin melanoma?",
    answer:
      "No. Although both begin in pigment-producing cells called melanocytes, choroidal melanoma develops inside the eye and behaves differently from melanoma of the skin.",
  },
  {
    question: "Will I lose my eye?",
    answer:
      "Not always. Many patients can now be treated with radiation while keeping the eye. The best treatment depends on the size and location of the tumor, as well as the vision in the affected eye.",
  },
  {
    question: "Can choroidal melanoma spread to other parts of the body?",
    answer:
      "Yes. Choroidal melanoma can spread, most commonly to the liver. This does not happen in every patient, but regular follow-up and systemic monitoring are an important part of long-term care.",
  },
  {
    question: "Will treatment affect my vision?",
    answer:
      "It can. The effect on vision depends on the size and location of the tumor and the type of treatment. Your doctor will discuss the expected visual outcome based on your individual situation.",
  },
 
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-36 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1F4E8C]">
              Common Questions
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-[#111] lg:text-5xl">
              Questions patients
              <span className="block font-medium">
                often ask
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 space-y-5">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <FadeIn
                key={item.question}
                delay={index * 0.05}
              >
                <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">

                  <button
                    onClick={() =>
                      setOpen(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between p-7 text-left transition hover:bg-neutral-50"
                  >
                    <h3 className="text-lg font-medium text-[#111]">
                      {item.question}
                    </h3>

                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-7 pb-7 leading-8 text-neutral-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}