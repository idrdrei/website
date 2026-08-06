"use client";

import Link from "next/link";

import FadeIn from "@/components/FadeIn";
import {
  Eye,
  Glasses,
  ScanEye,
  Baby,
  Monitor,
  ShieldCheck,
} from "lucide-react";

const topics = [
  {
    title: "Understanding Choroidal Melanoma",
    description:
      "A patient-friendly guide explaining what choroidal melanoma is, its symptoms, diagnosis, and treatment options.",
    hover:
      "Learn about the most common eye cancer that begins inside the eye in adults through simple explanations, clinical photographs, and answers to common questions.",
    icon: ShieldCheck,
    href: "/education/choroidal-melanoma",
    badge: "New Guide",
  },
  {
    title: "Cataracts",
    description:
      "Learn about symptoms, surgery, premium intraocular lenses, recovery, and frequently asked questions.",
    hover:
      "A cataract is the clouding of the eye's natural lens that gradually causes blurred vision, glare, and difficulty with everyday activities. Modern cataract surgery restores clear vision by replacing the cloudy lens with a clear artificial lens.",
    icon: Glasses,
  },
  {
    title: "Vision Correction",
    description:
      "Explore LASIK, SMILE Pro, PRK, candidacy, recovery, and life after laser vision correction.",
    hover:
      "Laser vision correction reshapes the cornea to reduce or eliminate dependence on glasses and contact lenses. Not everyone is a candidate, making a comprehensive evaluation essential.",
    icon: ScanEye,
  },
  {
    title: "Eye Tumors",
    description:
      "Patient-friendly guides on conjunctival tumors, retinoblastoma, choroidal melanoma, and ocular oncology.",
    hover:
      "Eye tumors may involve the eyelids, conjunctiva, retina, orbit, or structures inside the eye. Early diagnosis often improves treatment options while helping preserve both vision and eye health.",
    icon: ShieldCheck,
  },
  {
    title: "Retina & Macula",
    description:
      "Understand diabetic eye disease, retinal tears, macular degeneration, floaters, and flashes.",
    hover:
      "The retina converts light into signals that allow us to see. Conditions affecting the retina, like diabetic retinopathy, can lead to permanent vision loss if not diagnosed and treated promptly.",
    icon: Eye,
  },
  {
    title: "Children's Eye Health",
    description:
      "Vision development, childhood eye conditions, retinoblastoma, and pediatric eye examinations.",
    hover:
      "Children's eyes develop rapidly during the early years. Routine examinations can identify problems early, supporting healthy visual development and learning.",
    icon: Baby,
  },
  {
    title: "Everyday Eye Care",
    description:
      "Dry eye, glaucoma screening, computer vision syndrome, routine eye care, and protecting your sight.",
    hover:
      "Simple habits such as regular eye examinations, UV protection, and early treatment of common eye conditions play an important role in preserving lifelong vision.",
    icon: Monitor,
  },
];

export default function FeaturedTopics() {
  return (
    <section
      id="topics"
      className="scroll-mt-28 bg-white py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Featured Topics
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-neutral-900 md:text-5xl lg:text-6xl">
              Explore Eye
              <span className="block font-medium">
                Health Resources
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Browse evidence-based articles written to help you better
              understand eye conditions, treatment options, surgery,
              and long-term vision care.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            const Card = (
              <div className="group h-full rounded-[32px] border border-neutral-200 bg-white p-6 transition-all duration-500 md:p-8 md:hover:-translate-y-1 md:hover:border-[#1F4E8C]/20 md:hover:shadow-xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F4E8C]/8 transition-all duration-500 md:group-hover:-translate-y-1 md:group-hover:bg-[#1F4E8C]/12">
                  <Icon
                    size={24}
                    strokeWidth={1.75}
                    className="text-[#1F4E8C]"
                  />
                </div>

                {topic.badge && (
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
                    {topic.badge}
                  </p>
                )}

                <h3 className="mt-4 text-2xl font-medium tracking-tight text-neutral-900 transition-colors duration-300 md:group-hover:text-[#1F4E8C]">
                  {topic.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600 transition-all duration-500 md:mt-5 md:leading-8 md:group-hover:-translate-y-1">
                  {topic.description}
                </p>

                <div className="mt-6 h-px w-12 bg-neutral-200 transition-all duration-500 md:group-hover:w-20 md:group-hover:bg-[#1F4E8C]/30" />

                <div className="overflow-hidden">
                  <p
                    className="
                      mt-5 max-h-40 pt-1 text-sm leading-7 text-[#1F4E8C] opacity-100
                      md:mt-0 md:max-h-0 md:pt-0 md:opacity-0
                      md:transition-all md:duration-500 md:ease-out
                      md:group-hover:mt-6 md:group-hover:max-h-40
                      md:group-hover:pt-1 md:group-hover:opacity-100
                    "
                  >
                    {topic.hover}
                  </p>
                </div>

              </div>
            );

            return (
              <FadeIn key={topic.title} delay={index * 0.05}>
                {topic.href ? (
                  <Link href={topic.href}>
                    {Card}
                  </Link>
                ) : (
                  Card
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}