"use client";

import {
  GraduationCap,
  BriefcaseMedical,
  BookOpen,
  Users,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

const highlights = [
  {
    icon: GraduationCap,
    title: "International Fellowship",
    heading: "Wills Eye Hospital",
    subtitle:
      "Completed fellowship training in Ocular Oncology at Wills Eye Hospital in Philadelphia, one of the world's leading eye hospitals.",
  },
  {
    icon: BriefcaseMedical,
    title: "Clinical Leadership",
    heading: "Section Chief",
    subtitle:
      "Leads the Ocular Oncology Service at St. Luke's Eye Institute, providing specialized care for patients with complex ocular conditions.",
  },
  {
    icon: BookOpen,
    title: "Education",
    heading: "Clinical Educator",
    subtitle:
      "Resident Training Officer, Clinical Assistant Professor, and contributor to ophthalmic textbooks and medical education.",
  },
  {
    icon: Users,
    title: "Professional Service",
    heading: "Founding Member",
    subtitle:
      "Founding Member of the Philippine Society of Ocular Oncology and active participant in advancing ophthalmic practice.",
  },
];

export default function AtAGlance() {
  return (
    <section className="bg-[#FAFAF7] py-32 md:py-40">
      <div className="mx-auto max-w-8xl px-8 lg:px-16">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-[#1F4E8C]">
              At a Glance
            </p>

            <h2 className="mt-6 text-5xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              Experience built through
              <br />
              training, leadership,
              <br />
              and education.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-black/65">
              International fellowship training, clinical leadership,
              academic involvement, and a continued commitment to advancing
              ophthalmology through patient care and education.
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.15}>
                <div className="group h-full rounded-3xl border border-black/10 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#1F4E8C]/30 hover:shadow-xl">

                  <div className="mb-8 inline-flex rounded-2xl bg-[#1F4E8C]/10 p-4 text-[#1F4E8C] transition-all duration-300 group-hover:bg-[#1F4E8C] group-hover:text-white">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>

                  <p className="text-sm uppercase tracking-[0.35em] text-[#1F4E8C]">
                    {item.title}
                  </p>

                  <h3 className="mt-4 text-3xl font-light tracking-[-0.03em]">
                    {item.heading}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-black/65">
                    {item.subtitle}
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