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
    title: "Understanding Retinoblastoma",
    description:
      "A parent-friendly guide explaining retinoblastoma, warning signs, diagnosis, modern treatments, genetics, and long-term follow-up.",
    hover:
      "Learn how early diagnosis can save a child's life, preserve the eye, and maximize vision. Includes illustrations, treatment explanations, and answers to common questions for parents.",
    icon: Baby,
    href: "/education/retinoblastoma",
    badge: "New Guide",
  },
  {
    title: "Vision Correction",
    description:
      "Explore LASIK, SMILE Pro, PRK, candidacy, recovery, and life after laser vision correction.",
    hover:
      "Laser vision correction reshapes the cornea to reduce or eliminate dependence on glasses and contact lenses. Not everyone is a candidate, making a comprehensive evaluation essential.",
    icon: ScanEye,
    href: "/services/laser-vision-correction",
  },
  {
    title: "Children's Eye Health",
    description:
      "Vision development, childhood eye conditions, myopia, screen time, and healthy habits for growing eyes.",
    hover:
      "Learn how screen habits, outdoor time, myopia, and regular eye examinations can affect your child's vision and visual development.",
    icon: Baby,
    href: "/education/childrens-eye-health",
    badge: "New Guide",
  },
  {
    title: "Cataracts",
    description:
      "Learn about symptoms, surgery, premium intraocular lenses, recovery, and frequently asked questions.",
    hover:
      "A cataract is the clouding of the eye's natural lens that gradually causes blurred vision, glare, and difficulty with everyday activities. Modern cataract surgery restores clear vision by replacing the cloudy lens with a clear artificial lens.",
    icon: Glasses,
    href: "/services/cataract-surgery",
  },
  {
    title: "Everyday Eye Care",
    description:
      "Dry eye, glaucoma screening, computer vision syndrome, routine eye care, and protecting your sight.",
    hover:
      "Simple habits such as regular eye examinations, UV protection, and early treatment of common eye conditions play an important role in preserving lifelong vision.",
    icon: Monitor,
    href: "/services/comprehensive-eye-care",
  },
  {
    title: "Eye Tumors",
    description:
      "Learn about conjunctival tumors, orbital tumors, eyelid tumors, ocular metastasis, and other ocular oncology conditions.",
    hover:
      "Explore patient-friendly information about tumors affecting the eyelids, conjunctiva, orbit, and other structures around the eye, with a focus on early diagnosis and specialized care.",
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
];

export default function FeaturedTopics() {
  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
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

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            const Card = (
              <div className="group h-full rounded-[32px] border border-neutral-200 bg-white p-6 transition-all duration-500 md:p-8 md:hover:-translate-y-1 md:hover:border-[#1F4E8C]/20 md:hover:shadow-xl">

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F4E8C]/8 transition-all duration-500 md:group-hover:-translate-y-1 md:group-hover:bg-[#1F4E8C]/12">
                  <Icon
                    size={24}
                    strokeWidth={1.75}
                    className="text-[#1F4E8C]"
                  />
                </div>

                {/* Badge */}
                {topic.badge && (
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#1F4E8C]">
                    {topic.badge}
                  </p>
                )}

                {/* Title */}
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-neutral-900 transition-colors duration-300 md:group-hover:text-[#1F4E8C]">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-neutral-600 transition-all duration-500 md:mt-5 md:leading-8 md:group-hover:-translate-y-1">
                  {topic.description}
                </p>

                {/* Divider */}
                <div className="mt-6 h-px w-12 bg-neutral-200 transition-all duration-500 md:group-hover:w-20 md:group-hover:bg-[#1F4E8C]/30" />

                {/* Hover content */}
                <div className="overflow-hidden">
                  <p className="mt-4 max-h-0 translate-y-2 text-sm leading-6 text-neutral-500 opacity-0 transition-all duration-500 md:group-hover:max-h-40 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {topic.hover}
                  </p>
                </div>

                {/* Read more */}
                {topic.href && (
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#1F4E8C]">
                    <span>Explore guide</span>

                    <span className="transition-transform duration-300 md:group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                )}

              </div>
            );

            return (
              <FadeIn key={topic.title} delay={index * 0.05}>
                {topic.href ? (
                  <Link
                    href={topic.href}
                    className="block h-full"
                  >
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