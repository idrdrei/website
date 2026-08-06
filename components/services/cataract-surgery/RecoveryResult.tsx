"use client";

import FadeIn from "@/components/FadeIn";
import {
  Clock3,
  Eye,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

const recovery = [
  {
    icon: Clock3,
    title: "Same-Day Procedure",
    description:
      "Cataract surgery is typically performed as an outpatient procedure, allowing most patients to return home the same day.",
  },
  {
    icon: Eye,
    title: "Rapid Visual Recovery",
    description:
      "Many patients notice clearer vision within the first few days, with continued improvement as the eye heals.",
  },
  {
    icon: CalendarCheck,
    title: "Follow-Up Visits",
    description:
      "Scheduled postoperative appointments allow us to monitor healing and ensure the best possible visual outcome.",
  },
  {
    icon: ShieldCheck,
    title: "Excellent Success Rate",
    description:
      "Modern cataract surgery is among the safest and most successful procedures performed today when appropriately indicated.",
  },
];

export default function Recovery() {
  return (
    <section
    id="recovery"
     className="bg-neutral-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
              Recovery & Results
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              What to Expect
              <span className="block font-semibold">
                After Surgery
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Recovery after cataract surgery is usually smooth. While healing
              varies from person to person, most patients experience gradual
              improvement in vision over the days and weeks following surgery.
            </p>
          </div>
        </FadeIn>

        {/* Recovery Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {recovery.map((item) => {
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

        {/* Divider */}

        <div className="mx-auto mt-24 max-w-5xl">
          <div className="h-px w-full bg-neutral-200" />
        </div>

        {/* CTA Intro */}

        <FadeIn>
          <div className="mx-auto mt-20 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
              Take the Next Step
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Ready to See
              <span className="block font-semibold">
                More Clearly?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              If cataracts are affecting your daily activities, we are here to
              help. Schedule a consultation to discuss your symptoms, evaluate
              your vision, and explore the treatment options best suited to your
              lifestyle.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}