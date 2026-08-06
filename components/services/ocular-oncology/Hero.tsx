"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[#FAFAF7] py-20 lg:py-32"
    >
      {/* Background Accent */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#1F4E8C]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-[1fr_1.15fr] lg:px-16">
        {/* Left */}
        <FadeIn>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
            Specialized Eye Care
          </p>

          <h1 className="text-4xl font-light leading-[0.92] tracking-[-0.05em] text-[#111] sm:text-5xl lg:text-7xl">
            Comprehensive
            <br />
            care for
            <br />
            eye tumors.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            Eye tumors are uncommon and often require specialized evaluation.
            We diagnose and manage tumors affecting the retina, choroid,
            conjunctiva, eyelids, and orbit through individualized,
            evidence-based, multidisciplinary care.
          </p>

          {/* Clinical Milestones */}
          <div className="mt-8 max-w-xl rounded-[28px] border border-[#1F4E8C]/15 bg-[#1F4E8C]/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Clinical Milestones
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Retinoblastoma
                </p>

                <p className="mt-1 text-base leading-7 text-neutral-700">
                  First ophthalmologist in the Philippines to perform{" "}
                  <span className="font-semibold text-[#111]">
                    intra-arterial chemotherapy (IAC)
                  </span>{" "}
                  for retinoblastoma.
                </p>
              </div>

              <div className="h-px bg-[#1F4E8C]/10" />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Choroidal Melanoma
                </p>

                <p className="mt-1 text-base leading-7 text-neutral-700">
                  First ophthalmologist in the Philippines to perform{" "}
                  <span className="font-semibold text-[#111]">
                    globe-sparing treatment
                  </span>{" "}
                  for choroidal melanoma.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-[#1F4E8C] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#173d6e]"
            >
              Book a Consultation
            </Link>

            <a
              href="#conditions"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-[#111] transition-all duration-300 hover:border-[#1F4E8C] hover:text-[#1F4E8C]"
            >
              Explore Conditions
            </a>
          </div>
        </FadeIn>

        {/* Right */}
        <FadeIn className="relative">
          <div className="group relative h-[500px] overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.10)] ring-1 ring-black/5 lg:h-[680px]">
            <Image
              src="/services/ocular-oncology/hero.png"
              alt="Ocular oncology consultation"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}