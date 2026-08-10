"use client";

import FadeIn from "@/components/FadeIn";

export default function ScreenTime() {
  return (
    <section id="screen-time" className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Text */}
          <FadeIn>
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
                Screens &amp; Your Child&apos;s Eyes
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Can screens
                <br />
                damage their eyes?
              </h2>

              <p className="mt-7 text-lg leading-8 text-gray-600">
                Screens are now part of everyday childhood. The good news is
                that simply looking at a phone, tablet, or computer does not
                mean your child&apos;s eyes are being permanently damaged.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                However, spending long periods focusing on nearby screens can
                lead to eye fatigue and discomfort. More importantly, children
                may spend less time outdoors and more time doing prolonged
                close-up activities—habits that may contribute to the
                development and progression of myopia.
              </p>
            </div>
          </FadeIn>

          {/* Visual */}
          <FadeIn delay={0.15}>
            <div className="relative">

              <div className="rounded-[2rem] bg-gray-50 p-8 sm:p-10 lg:p-12">

                <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                  Common effects of prolonged screen use
                </p>

                <div className="mt-8 space-y-5">

                  {[
                    "Eye fatigue",
                    "Dry or irritated eyes",
                    "Headaches",
                    "Blurred vision",
                    "Difficulty shifting focus",
                    "Reduced blinking",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-b border-gray-200 pb-5 last:border-0 last:pb-0"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F4E8C]/10 text-sm font-medium text-[#1F4E8C]">
                        {index + 1}
                      </span>

                      <p className="text-base font-medium text-gray-800">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              {/* Bottom note */}
              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-sm leading-6 text-gray-600">
                  <span className="font-semibold text-gray-900">
                    The bigger picture:
                  </span>{" "}
                  It&apos;s not just the screen. Near work, breaks, outdoor
                  time, viewing distance, and overall visual habits all matter.
                </p>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}