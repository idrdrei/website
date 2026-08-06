"use client";

import FadeIn from "@/components/FadeIn";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    value: "Wills Eye",
    label: "Fellowship Trained",
    href: "https://www.willseye.org/",
  },
  {
    value: "4",
    label: "Areas of Expertise",
  },
  {
    value: "3",
    label: "Clinic Locations",
  },
  {
    value: "Patient",
    label: "Centered Care",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        {/* Left */}
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Why Choose Dr. Martin
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] text-[#111] sm:text-5xl">
              Specialized expertise.
              <br />
              Personalized care.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Fellowship-trained at Wills Eye Hospital, Dr. Martin provides
              advanced care in ocular oncology, cataract surgery, laser vision
              correction, and comprehensive ophthalmology. Every treatment plan
              is guided by evidence, experience, and your individual visual
              goals.
            </p>
          </div>
        </FadeIn>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.1}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-[36px] border border-gray-200 bg-[#FAFAF7] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-4xl font-light tracking-[-0.03em] text-[#111]">
                      {item.value}
                    </p>

                    <ArrowUpRight
                      size={20}
                      className="text-[#1F4E8C] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </div>

                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                    {item.label}
                  </p>
                </a>
              ) : (
                <div className="rounded-[36px] border border-gray-200 bg-[#FAFAF7] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <p className="text-4xl font-light tracking-[-0.03em] text-[#111]">
                    {item.value}
                  </p>

                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                    {item.label}
                  </p>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}