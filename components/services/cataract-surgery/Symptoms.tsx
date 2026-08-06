"use client";

import FadeIn from "@/components/FadeIn";
import {
  Cloud,
  MoonStar,
  SunMedium,
  Palette,
  Glasses,
  Eye,
} from "lucide-react";

const symptoms = [
  {
    icon: Cloud,
    title: "Blurred or Cloudy Vision",
    description:
      "Vision gradually becomes hazy, making reading, driving, and recognizing faces more difficult.",
  },
  {
    icon: MoonStar,
    title: "Difficulty Seeing at Night",
    description:
      "Reduced contrast and poor night vision can make evening driving and dimly lit environments challenging.",
  },
  {
    icon: SunMedium,
    title: "Glare & Halos Around Lights",
    description:
      "Bright sunlight or oncoming headlights may produce glare or halos that interfere with clear vision.",
  },
  {
    icon: Palette,
    title: "Colors Appear Faded",
    description:
      "The cloudy lens filters incoming light, causing colors to appear dull, yellowed, or less vibrant.",
  },
  {
    icon: Glasses,
    title: "Frequent Glasses Changes",
    description:
      "Your prescription may seem to change often, but new glasses provide only temporary improvement.",
  },
  {
    icon: Eye,
    title: "Double Vision in One Eye",
    description:
      "Some cataracts cause ghosting or double vision even when only one eye is open.",
  },
];

export default function Symptoms() {
  return (
    <section
    id="symptoms" className="bg-neutral-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
              Common Symptoms
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              When Is It Time for
              <span className="block font-semibold">
                a Cataract Evaluation?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Cataracts usually develop gradually, and many people do not notice
              the changes right away. If these symptoms begin affecting your
              daily activities, a comprehensive eye examination can help
              determine whether cataracts are the cause.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {symptoms.map((item) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title}>
                <div className="group h-full rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4E8C]/10 transition-colors duration-300 group-hover:bg-[#1F4E8C]/15">
                    <Icon
                      className="h-7 w-7 text-[#1F4E8C]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}