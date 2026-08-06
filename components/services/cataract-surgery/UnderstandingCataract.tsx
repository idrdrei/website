"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Clock3,
  HeartPulse,
  ShieldAlert,
  Baby,
} from "lucide-react";

const cataracts = [
  {
    icon: Clock3,
    title: "Age-Related",
    description:
      "The most common type, developing gradually as the eye's natural lens ages.",
  },
  {
    icon: HeartPulse,
    title: "Diabetic",
    description:
      "People with diabetes may develop cataracts earlier or experience faster progression.",
  },
  {
    icon: ShieldAlert,
    title: "Traumatic",
    description:
      "Cataracts can develop after an eye injury, immediately or even years later.",
  },
  {
    icon: Baby,
    title: "Congenital",
    description:
      "Some children are born with cataracts or develop them during early childhood.",
  },
];

export default function UnderstandingCataracts() {
  return (
    <section 
    id="understanding"
    className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
                Understanding Cataracts
              </p>

              <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
                What Is a
                <span className="block font-semibold">
                  Cataract?
                </span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-neutral-600">
                A cataract is the gradual clouding of the eye&apos;s natural
                lens, causing vision to become blurred, dim, or less vibrant.
                Although most cataracts develop with aging, they can also occur
                because of diabetes, trauma, medications, or be present from
                birth.
              </p>

              <div className="mt-10 space-y-6">
                {cataracts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1F4E8C]/10">
                        <Icon
                          className="h-6 w-6 text-[#1F4E8C]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 leading-7 text-neutral-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn>
            <div className="group overflow-hidden rounded-[32px] shadow-sm transition-all duration-500 hover:shadow-2xl">
              <Image
                src="/services/cataract-surgery/cataract-cross-section.png"
                alt="Cross-sectional illustration of an eye demonstrating a cataractous lens"
                width={900}
                height={900}
                priority
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}