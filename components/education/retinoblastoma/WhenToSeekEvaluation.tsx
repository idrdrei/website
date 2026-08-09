"use client";

import FadeIn from "@/components/FadeIn";
import { AlertCircle, Clock, ShieldCheck } from "lucide-react";

export default function WhenToSeekEvaluation() {
  return (
    <section
      id="when-to-seek-evaluation"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto max-w-5xl px-8 lg:px-16">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              When to Seek Evaluation
            </p>

            <h2 className="mt-6 text-4xl font-light tracking-[-0.04em] text-[#111] sm:text-5xl">
              Don't wait if something
              <br />
              doesn't seem right.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              Most children with a white pupil or crossed eyes do{" "}
              <strong>not</strong> have retinoblastoma. However, these signs
              should always be evaluated promptly by an ophthalmologist. Early
              diagnosis gives your child the best chance of successful
              treatment and may help preserve both the eye and vision.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="rounded-[32px] border border-neutral-200 bg-[#F8FAFC] p-8">
              <AlertCircle
                className="text-[#1F4E8C]"
                size={34}
              />

              <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                Arrange an Eye Examination
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Schedule an appointment as soon as possible if you notice a
                white pupil, crossed eyes, or other persistent changes in your
                child's eyes.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-[32px] border border-neutral-200 bg-[#F8FAFC] p-8">
              <Clock
                className="text-[#1F4E8C]"
                size={34}
              />

              <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                Early Evaluation Matters
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Even a delay of a few weeks can be important. Early diagnosis
                allows more treatment options and improves the chances of
                saving vision.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-[32px] border border-neutral-200 bg-[#F8FAFC] p-8">
              <ShieldCheck
                className="text-[#1F4E8C]"
                size={34}
              />

              <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                Most Children Do Well
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Modern treatments have dramatically improved outcomes. Most
                children diagnosed today can be successfully treated,
                especially when the disease is detected early.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 rounded-[32px] border border-[#1F4E8C]/15 bg-[#1F4E8C] px-8 py-10 text-center text-white">
            <h3 className="text-2xl font-semibold">
              A white pupil in a child should never be ignored.
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/85">
              While there are several possible causes, it is important to have
              your child examined promptly so that serious conditions such as
              retinoblastoma can be diagnosed or ruled out as early as
              possible.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}