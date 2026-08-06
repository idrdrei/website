"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Understanding Choroidal Nevus",
    description:
      "Learn how a choroidal nevus differs from choroidal melanoma and why regular monitoring is important.",
    href: "#",
    available: false,
  },
  {
    title: "Understanding Retinoblastoma",
    description:
      "A patient-friendly guide to the most common eye cancer in children.",
    href: "#",
    available: false,
  },
  {
    title: "Eye Tumors: An Overview",
    description:
      "An introduction to the different types of tumors that can affect the eye and surrounding tissues.",
    href: "#",
    available: false,
  },
];

export default function RelatedArticles() {
  return (
    <section className="bg-[#FAFAF7] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <FadeIn>
          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1F4E8C]">
              Continue Learning
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-[#111] lg:text-5xl">
              You may also find
              <span className="block font-medium">
                these guides helpful
              </span>
            </h2>

          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {articles.map((article, index) => (
            <FadeIn
              key={article.title}
              delay={index * 0.08}
            >
              <div className="group flex h-full flex-col rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#1F4E8C]/20 hover:shadow-xl">

                <h3 className="text-2xl font-medium tracking-tight text-[#111] transition-colors duration-300 group-hover:text-[#1F4E8C]">
                  {article.title}
                </h3>

                <p className="mt-5 flex-grow leading-8 text-neutral-600">
                  {article.description}
                </p>

                {article.available ? (
                  <Link
                    href={article.href}
                    className="mt-8 inline-flex items-center gap-2 font-medium text-[#1F4E8C] transition group-hover:gap-3"
                  >
                    Read Guide

                    <ArrowRight
                      size={18}
                      strokeWidth={2}
                    />
                  </Link>
                ) : (
                  <p className="mt-8 text-sm font-medium text-neutral-400">
                    Coming Soon
                  </p>
                )}

              </div>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
}