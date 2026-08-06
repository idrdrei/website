"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const faqs = [
    {
  question: "Are gadgets and screen time harmful to my child's eyes?",
  answer:
    "Using digital devices does not permanently damage the eyes, but prolonged screen time can contribute to digital eye strain, dry eyes, and may be associated with the progression of myopia (nearsightedness) in some children. Encourage regular breaks using the 20-20-20 rule, maintain an appropriate viewing distance, and balance screen time with outdoor activities. Regular comprehensive eye examinations are important to monitor your child's vision and eye health.",
},
  {
    question: "How often should I have an eye examination?",
    answer:
      "Most adults should have a comprehensive eye examination every year. Patients with diabetes, glaucoma, high eye grade, or other eye conditions may require more frequent follow-up.",
  },
  {
    question: "When should my child have their first eye examination?",
    answer:
      "Children should have their eyes evaluated during infancy and before starting school. Regular examinations help detect vision problems that can affect learning and development.",
  },
  {
    question: "Can serious eye diseases develop without symptoms?",
    answer:
      "Yes. Conditions such as glaucoma, diabetic retinopathy, and some retinal diseases may progress silently before affecting vision. Regular eye examinations are essential for early detection.",
  },
  {
    question: "When should I see an ophthalmologist instead of buying new glasses?",
    answer:
      "If you notice sudden vision changes, persistent eye pain, flashes, floaters, double vision, or redness that doesn't improve, you should seek an ophthalmologist promptly rather than simply updating your prescription.",
  },
  {
    question: "Can vision loss always be prevented?",
    answer:
      "Not all vision loss is preventable, but early diagnosis and timely treatment can preserve vision in many eye conditions. Routine examinations remain one of the most effective ways to protect your eyesight.",
  },
  {
  question: "Is there such a thing as eye cancer?",
  answer:
    "Yes. Although eye cancers are uncommon, they can affect both children and adults. These include tumors of the eyelid, conjunctiva, retina, and structures inside the eye. Early diagnosis is important, as many eye tumors can be treated successfully while preserving vision and, in some cases, the eye itself. If you notice a new eye growth, persistent redness, changes in vision, or a white reflex in a child's pupil, seek prompt evaluation by an ophthalmologist.",
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
              Answers to
              <span className="block font-semibold">
                Common Questions
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              General information about eye health, routine examinations,
              and when it's time to seek professional care.
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