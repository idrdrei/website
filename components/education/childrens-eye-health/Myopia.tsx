"use client";

import FadeIn from "@/components/FadeIn";

const cards = [
  {
    number: "01",
    title: "What is Myopia?",
    short:
      "Nearsightedness causes distant objects to appear blurry while nearby objects remain clearer.",
    detail:
      "Myopia commonly begins during childhood and may progress as the eyes continue to grow. Early detection allows vision to be monitored and management options to be considered.",
  },
  {
    number: "02",
    title: "What to Look For",
    short:
      "Squinting, sitting close to screens, or difficulty seeing the board can be early clues.",
    detail:
      "Other signs include holding books or screens unusually close, frequent headaches, eye fatigue, or difficulty recognizing objects from a distance.",
  },
  {
    number: "03",
    title: "Why It Matters",
    short:
      "Higher levels of myopia are associated with greater lifetime risks to eye health.",
    detail:
      "Identifying myopia early allows your child's vision to be monitored and appropriate myopia management strategies to be discussed when needed.",
  },
];

export default function Myopia() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Myopia
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              More children are
              <br />
              becoming nearsighted.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Myopia is increasingly common in children. Understanding the
              condition and recognizing it early can help protect your child's
              vision as their eyes continue to develop.
            </p>
          </div>
        </FadeIn>

        {/* Hover Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
          {cards.map((card, index) => (
            <FadeIn key={card.number} delay={index * 0.1}>
              <div className="group h-full cursor-default rounded-[2rem] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#1F4E8C]/30 hover:shadow-xl sm:p-9">

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1F4E8C]">
                    {card.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-[#1F4E8C] group-hover:bg-[#1F4E8C] group-hover:text-white">
                    +
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {card.short}
                </p>

                {/* Reveal */}
                <div className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  <div className="border-t border-gray-200 pt-5">
                    <p className="text-sm leading-6 text-gray-500">
                      {card.detail}
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