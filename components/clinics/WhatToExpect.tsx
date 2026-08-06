"use client";

import FadeIn from "@/components/FadeIn";
import {
  ClipboardCheck,
  FileText,
  Eye,
  Clock3,
} from "lucide-react";

const expectations = [
  {
    icon: ClipboardCheck,
    title: "Book Your Appointment",
    description:
      "Appointments are encouraged to help minimize waiting time and ensure adequate time for your consultation.",
  },
  {
    icon: FileText,
    title: "Bring Previous Records",
    description:
      "If available, bring your previous prescriptions, imaging studies, laboratory results, or referral notes for review.",
  },
  {
    icon: Eye,
    title: "Comprehensive Eye Examination",
    description:
      "Your visit may include vision testing, slit lamp examination, eye pressure measurement, dilation, or advanced imaging depending on your condition. Bringing a companion is highly reommended.",
  },
  {
    icon: Clock3,
    title: "Allow Enough Time",
    description:
      "Some consultations, particularly those requiring pupil dilation or specialized imaging, may take longer than a routine visit.",
  },
];

export default function WhatToExpect() {
  return (
    <section
      id="visit"
      className="scroll-mt-28 bg-[#FAFAF7] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Your Visit
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              What to
              <span className="block font-semibold">
                Expect at Your Appointment
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              We strive to make every consultation comfortable, informative,
              and personalized. Here's what you can expect before and during
              your visit.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {expectations.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <div className="group h-full rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#1F4E8C]/20 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4E8C]/10">
                    <Icon
                      size={28}
                      className="text-[#1F4E8C]"
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F4E8C]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-neutral-600">
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