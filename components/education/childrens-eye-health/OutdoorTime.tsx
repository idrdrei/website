"use client";

import FadeIn from "@/components/FadeIn";

const activities = [
  {
    number: "01",
    title: "Play",
    text: "Encourage active outdoor play rather than spending every free moment indoors with a screen.",
  },
  {
    number: "02",
    title: "Explore",
    text: "Walking, cycling, playgrounds, and simply exploring outside all provide opportunities to spend time outdoors.",
  },
  {
    number: "03",
    title: "Balance",
    text: "The goal isn't to eliminate screens. Balance screen-based activities with outdoor time and other activities.",
  },
];

export default function OutdoorTime() {
  return (
    <section className="bg-gray-50 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Time Outdoors
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Make outdoor time
              <br />
              part of the routine.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Regular outdoor time is associated with a lower risk of
              developing myopia in children. It also gives growing eyes a
              break from prolonged close-up activities.
            </p>
          </div>
        </FadeIn>

        {/* Image */}
        <FadeIn delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-[2rem] lg:mt-20">
            <img
              src="/education/childrens-eye-health/outdoor.png"
              alt="Children playing outdoors"
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[420px] lg:h-[500px]"
              loading="lazy"
            />
          </div>
        </FadeIn>

        {/* Hover Cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {activities.map((activity, index) => (
            <FadeIn key={activity.number} delay={0.15 + index * 0.1}>
              <div className="group h-full rounded-[2rem] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-9">

                <span className="text-sm font-medium text-[#1F4E8C]">
                  {activity.number}
                </span>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-900">
                  {activity.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {activity.text}
                </p>

                <div className="mt-7 h-px w-8 bg-gray-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#1F4E8C]" />

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}