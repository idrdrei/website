"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { Eye, HeartHandshake, Clock } from "lucide-react";

export default function Vision() {
  return (
    <section
      id="vision"
      className="scroll-mt-28 bg-[#FAFAF7] py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-16">

        {/* Left */}
        <FadeIn>
          <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm">
            <Image
              src="/education/retinoblastoma/vision.png"
              alt="Child receiving a follow-up eye examination after treatment"
              width={900}
              height={900}
              className="w-full object-cover"
            />
          </div>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.15}>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Vision
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] text-[#111] sm:text-5xl">
              Can my child
              <br />
              still see?
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              This is one of the first questions every parent asks. The answer
              depends on several factors, including the size and location of the
              tumor, whether one or both eyes are affected, and how early the
              cancer is diagnosed.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Thanks to advances in treatment, many children are able to keep
              useful vision in one or both eyes. Even when vision cannot be
              fully preserved, children often adapt remarkably well and continue
              to lead active, healthy lives.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <Eye className="mt-1 text-[#1F4E8C]" size={24} />

                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Early treatment improves outcomes
                  </h3>

                  <p className="mt-2 text-neutral-600">
                    Diagnosing retinoblastoma early provides the best chance of
                    preserving useful vision.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <HeartHandshake
                  className="mt-1 text-[#1F4E8C]"
                  size={24}
                />

                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Every child is unique
                  </h3>

                  <p className="mt-2 text-neutral-600">
                    Your child's ophthalmologist will explain the expected
                    visual outcome based on the individual characteristics of
                    the tumor.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <Clock className="mt-1 text-[#1F4E8C]" size={24} />

                <div>
                  <h3 className="font-semibold text-neutral-900">
                    Lifelong follow-up is important
                  </h3>

                  <p className="mt-2 text-neutral-600">
                    Regular eye examinations help monitor vision, detect any
                    recurrence, and support healthy visual development as your
                    child grows.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}