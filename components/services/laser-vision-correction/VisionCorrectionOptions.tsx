"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Eye,
  Sparkles,
  ShieldCheck,
  CircleDot,
} from "lucide-react";

const options = [
  {
    title: "LASIK",
    subtitle: "Most common laser procedure",
    description:
      "Ideal for many patients seeking fast visual recovery with minimal discomfort.",
    highlights: ["Fast recovery", "Minimal discomfort"],
    icon: Eye,
    image: "/services/laser-vision-correction/lasik-line-art.png",
  },
  {
    title: "SMILE",
    subtitle: "Minimally invasive",
    description:
      "A small-incision laser procedure that preserves more of the corneal surface.",
    highlights: ["Small incision", "Reduced dry eye risk"],
    icon: Sparkles,
    image: "/services/laser-vision-correction/smile-line-art.png",
  },
  {
    title: "PRK",
    subtitle: "Excellent for selected corneas",
    description:
      "A flap-free laser procedure often recommended for thinner corneas or certain lifestyles.",
    highlights: ["No corneal flap", "Great for selected patients"],
    icon: ShieldCheck,
    image: "/services/laser-vision-correction/prk-line-art.png",
  },
  {
    title: "ICL",
    subtitle: "Implantable Collamer Lens",
    description:
      "An implantable lens option for patients with higher prescriptions or those unsuitable for laser correction.",
    highlights: ["Higher prescriptions", "Removable lens"],
    icon: CircleDot,
    image: "/services/laser-vision-correction/ICL-line-artV1.png",
  },
];

export default function VisionCorrectionOptions() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
              Your Options
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Find the Right
              <span className="block font-semibold">
                Vision Correction Option
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Every eye is unique. During your consultation, we'll recommend
              the procedure that best matches your prescription, corneal
              anatomy, lifestyle, and visual goals.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {options.map((option, index) => {
            const Icon = option.icon;

            return (
              <FadeIn key={option.title} delay={index * 0.1}>
                <div className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                  
                  <div className="mb-8 flex justify-center">
                    <Image
                      src={option.image}
                      alt={`${option.title} illustration`}
                      width={220}
                      height={220}
                      className="h-48 w-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mb-5 flex items-center gap-3">
                    <Icon
                      size={22}
                      className="text-[#1F4E8C]"
                      strokeWidth={1.8}
                    />

                    <p className="text-sm font-semibold uppercase tracking-widest text-[#1F4E8C]">
                      {option.subtitle}
                    </p>
                  </div>

                  <h3 className="text-3xl font-semibold text-neutral-900">
                    {option.title}
                  </h3>

                  <p className="mt-5 leading-7 text-neutral-600">
                    {option.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {option.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <div className="h-2 w-2 rounded-full bg-[#1F4E8C]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}