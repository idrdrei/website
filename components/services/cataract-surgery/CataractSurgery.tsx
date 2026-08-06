"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Microscope,
  ScanEye,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ScanEye,
    title: "Comprehensive Evaluation",
    description:
      "Every patient undergoes a detailed eye examination and precise measurements to determine the most appropriate surgical plan.",
  },
  {
    icon: Microscope,
    title: "Modern Phacoemulsification",
    description:
      "A tiny incision allows the cloudy lens to be gently removed using ultrasound technology before a clear intraocular lens is implanted.",
  },
  {
    icon: Sparkles,
    title: "Personalized Lens Options",
    description:
      "We discuss intraocular lens choices based on your lifestyle, visual needs, and long-term goals.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Follow-up Care",
    description:
      "Regular postoperative visits help ensure proper healing and the best possible visual outcome.",
  },
];

export default function CataractSurgery() {
  return (
    <section
    id="surgery"
     className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
              Cataract Surgery
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Safe. Precise.
              <span className="block font-semibold">
                Personalized.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Modern cataract surgery is one of the safest and most successful
              procedures performed today. The cloudy natural lens is removed
              through a tiny incision and replaced with a clear artificial
              intraocular lens (IOL), helping restore clearer vision and improve
              quality of life.
            </p>
          </div>
        </FadeIn>

        {/* Illustration */}

        <FadeIn>
          <div className="group mt-16 overflow-hidden rounded-[32px] shadow-sm transition-all duration-500 hover:shadow-2xl">
            <Image
              src="/services/cataract-surgery/iol.png"
              alt="Illustration of modern cataract surgery using phacoemulsification"
              width={1800}
              height={1000}
              priority
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </FadeIn>

        {/* Features */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title}>
                <div className="group h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4E8C]/10 transition-colors duration-300 group-hover:bg-[#1F4E8C]/15">
                    <Icon
                      className="h-7 w-7 text-[#1F4E8C]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {feature.description}
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