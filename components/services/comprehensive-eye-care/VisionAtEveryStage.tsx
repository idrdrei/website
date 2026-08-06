"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  ShieldCheck,
  HeartPulse,
  Glasses,
  Eye,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Early Detection",
    description:
      "Many eye diseases develop without noticeable symptoms. Regular examinations help detect problems before vision is affected.",
  },
  {
    icon: HeartPulse,
    title: "Preventive Care",
    description:
      "Routine eye care allows us to monitor changes over time and recommend treatment before complications arise.",
  },
  {
    icon: Glasses,
    title: "Personalized Vision",
    description:
      "Whether you need glasses, contact lenses, or treatment, every recommendation is tailored to your lifestyle and goals.",
  },
  {
    icon: Eye,
    title: "Lifelong Eye Health",
    description:
      "From childhood through later adulthood, regular examinations help protect your vision at every stage of life.",
  },
];

export default function VisionAtEveryStage() {
  return (
    <section
    id="overview"
     className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
                Your Vision
              </p>

              <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
                Eye Care for
                <span className="block font-semibold">
                  Every Stage of Life
                </span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-neutral-600">
                Comprehensive eye examinations are about more than updating your
                glasses. They play an important role in detecting eye disease
                early, preserving vision, and helping you maintain healthy eyes
                throughout every stage of life.
              </p>

              <div className="mt-10 space-y-6">
                {highlights.map((item) => {
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
                src="/services/comprehensive-eye-care/eye-exam.png"
                alt="Comprehensive eye examination"
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