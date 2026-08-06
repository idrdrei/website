"use client";

import FadeIn from "@/components/FadeIn";
import {
  Clock3,
  Eye,
  BriefcaseMedical,
  CalendarCheck2,
} from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision Improves Quickly",
    description:
      "Many patients notice significantly clearer vision within the first 24 hours, although recovery varies depending on the procedure performed.",
  },
  {
    icon: Clock3,
    title: "Minimal Downtime",
    description:
      "Most patients return to normal daily activities within a few days. Your surgeon will advise when it's safe to resume work, exercise, and driving.",
  },
  {
    icon: BriefcaseMedical,
    title: "Comfortable Recovery",
    description:
      "Temporary dryness, glare, or mild discomfort are common during healing and usually improve over time with prescribed medications and lubricants.",
  },
  {
    icon: CalendarCheck2,
    title: "Follow-Up Care",
    description:
      "Scheduled follow-up visits allow us to monitor healing, answer your questions, and ensure you're achieving the best possible visual outcome.",
  },
];

export default function Recovery() {
  return (
    <section 
    id="recovery"className="bg-neutral-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1F4E8C]">
              Recovery & Results
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              A Smooth Recovery,
              <span className="block font-semibold">
                Guided Every Step of the Way
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Modern laser vision correction is designed for rapid recovery and
              long-term visual freedom. We'll guide you through every stage of
              healing with detailed instructions and personalized follow-up care.
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <FadeIn key={card.title} delay={index * 0.08}>
                <div className="group h-full rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4E8C]/10">
                    <Icon
                      size={28}
                      className="text-[#1F4E8C]"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-neutral-900">
                    {card.title}
                  </h3>

                  <p className="mt-5 leading-7 text-neutral-600">
                    {card.description}
                  </p>

                </div>
              </FadeIn>
            );
          })}

        </div>

        <FadeIn delay={0.3}>
          <div className="mx-auto mt-24 max-w-4xl rounded-[36px] bg-[#1F4E8C] px-10 py-12 text-center text-white">

            <h3 className="text-3xl font-light">
              Your Vision Doesn't End
              <span className="block font-semibold">
                After Surgery
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Long-term eye health remains important. Regular eye examinations
              help ensure your eyes stay healthy and your vision remains at its
              best for years to come.
            </p>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}