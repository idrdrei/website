"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2 } from "lucide-react";

const candidates = [
  "18 years old or above",
  "Stable eyeglass prescription",
  "Healthy corneas and eyes",
  "No uncontrolled eye disease",
  "Realistic expectations",
  "Interested in reducing dependence on glasses or contact lenses",
];

export default function Candidate() {
  return (
    <section 
    id="candidate"
    className="bg-neutral-50 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-[1.05fr_0.95fr]">

        {/* Image */}

        <FadeIn>
          <div className="group overflow-hidden rounded-[36px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/services/laser-vision-correction/candidate.png"
              alt="Comprehensive laser vision correction evaluation"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </FadeIn>

        {/* Content */}

        <FadeIn delay={0.15}>
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1F4E8C]">
              Candidate Assessment
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Am I a Good Candidate
              <span className="block font-semibold">
                for Laser Vision Correction?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Not everyone is an ideal candidate for laser vision correction,
              and that's okay. During your consultation, we'll perform a
              comprehensive eye examination to determine whether LASIK,
              SMILE, PRK, or ICL is the safest and most effective option
              for your eyes.
            </p>

            <div className="mt-10 space-y-5">

              {candidates.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-[#1F4E8C]"
                  />

                  <p className="text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-10 rounded-3xl border border-[#1F4E8C]/10 bg-white p-6">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1F4E8C]">
                Remember
              </p>

              <p className="mt-3 leading-7 text-neutral-600">
                The best procedure is not the same for everyone. Your
                recommendation will always be personalized based on your
                prescription, corneal measurements, eye health, lifestyle,
                and visual goals.
              </p>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}