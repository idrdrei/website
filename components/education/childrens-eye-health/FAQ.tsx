"use client";

import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    question: "Does screen time damage children's eyes?",
    answer:
      "Using phones, tablets, computers, or gaming devices does not automatically damage a child's eyes. However, prolonged close-up screen use can contribute to eye fatigue, dryness, headaches, and difficulty shifting focus. Children should take regular breaks and balance screen-based activities with outdoor time and other activities.",
  },
  {
    question: "How much screen time should my child have?",
    answer:
      "There is no single screen-time limit that is appropriate for every child. Age, developmental needs, schoolwork, sleep, physical activity, and the type of screen use all matter. The goal should be a healthy balance that includes adequate sleep, physical activity, outdoor time, and regular breaks from close-up activities.",
  },
  {
    question: "What is the 20-20-20 rule?",
    answer:
      "The 20-20-20 rule is a simple way to reduce eye fatigue during prolonged near work. Every 20 minutes, encourage your child to look at something about 20 feet away for at least 20 seconds.",
  },
  {
    question: "Can screen time cause myopia?",
    answer:
      "Myopia is multifactorial. Genetics, environmental factors, outdoor exposure, and near-work habits can all play a role. Screen use itself should not be considered the sole cause of myopia, but prolonged close-up activities and reduced time outdoors may contribute to myopia risk.",
  },
  {
    question: "Does outdoor time help prevent myopia?",
    answer:
      "Regular outdoor time is associated with a lower risk of developing myopia in children. Encouraging outdoor play is a healthy habit for many reasons and can also help balance the amount of time children spend doing close-up activities.",
  },
  {
    question: "How do I know if my child needs glasses?",
    answer:
      "Children may need glasses if they have difficulty seeing distant objects, squint frequently, sit very close to the television, hold books or screens unusually close, or have difficulty seeing the board at school. Some children may have significant vision problems without obvious symptoms, which is why appropriate eye examinations are important.",
  },
  {
    question: "When should my child have an eye examination?",
    answer:
      "The appropriate timing depends on your child's age, symptoms, family history, and previous eye findings. Children should be evaluated when there are concerns about vision, eye alignment, or eye appearance. Regular examinations are particularly important for children with known refractive errors or a history of eye problems.",
  },
  {
    question: "Is a school vision screening the same as an eye examination?",
    answer:
      "No. A school vision screening is designed to identify children who may have difficulty seeing and who may need further evaluation. A comprehensive eye examination is more detailed and can assess vision, refraction, eye alignment, eye health, and other aspects of visual development.",
  },
  {
    question: "What are signs that my child may have an eye problem?",
    answer:
      "Warning signs include frequent squinting, covering one eye, sitting very close to screens or the television, difficulty seeing the board, headaches after reading, an eye that turns in or out, or a noticeable change in vision or eye appearance. A white or unusual reflection in the pupil, particularly in photographs, should be evaluated promptly.",
  },
  {
    question: "My child has a white reflection in one pupil in photographs. Should I be concerned?",
    answer:
      "A white pupil reflection can have several causes, including some that require prompt evaluation. If you repeatedly notice a white or abnormal reflection in one eye, particularly when the other eye has a normal red reflection, your child should have an eye examination promptly.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Children&apos;s eye health,
              <br />
              answered.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Answers to some of the questions parents commonly ask about
              screens, myopia, eye examinations, and healthy vision habits.
            </p>
          </div>
        </FadeIn>

        {/* FAQ */}
        <div className="mt-14 divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 0.03}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
                  <h3 className="text-base font-medium leading-7 text-gray-900 sm:text-lg">
                    {faq.question}
                  </h3>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-transform duration-200 group-open:rotate-45">
                    <span className="text-xl font-light leading-none">
                      +
                    </span>
                  </span>
                </summary>

                <div className="pb-7 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}