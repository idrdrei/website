"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

const services = [
  "Choroidal melanoma",
  "Retinoblastoma",
  "Conjunctival tumors",
  "Orbital tumors",
  "Eyelid tumors",
  "Second opinions and multidisciplinary care",
];

export default function OcularOncology() {
  return (
    <section className="bg-[#0F172A] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-16">
        {/* Content */}
        <FadeIn>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#7FB3FF]">
              Ocular Oncology
            </p>

            <h2 className="mt-6 text-3xl font-light leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Expertise for the
              <br />
              rarest eye tumors.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Ocular tumors require specialized evaluation, advanced imaging,
              and individualized treatment. From early diagnosis to long-term
              follow-up, every patient receives evidence-based care with access
              to modern treatment options.
            </p>

            <ul className="mt-10 space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-[#7FB3FF]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/services/ocular-oncology"
              className="group mt-10 inline-flex items-center gap-2 text-[#7FB3FF] transition-all duration-300 hover:gap-3"
            >
              Explore Ocular Oncology

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeIn>

        {/* Image */}
        <FadeIn delay={0.15}>
          <div className="group overflow-hidden rounded-[36px]">
            <Image
              src="/services/service-oncology.png"
              alt="Ocular oncology consultation"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}