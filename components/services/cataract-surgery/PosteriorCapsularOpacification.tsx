"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

const cards = [
  {
    title: "The Cataract Has Not Returned",
    description:
      "During cataract surgery, the cloudy natural lens is permanently removed. It cannot grow back. Instead, the thin membrane that supports your artificial lens has become cloudy.",
  },
  {
    title: "Quick Outpatient Laser",
    description:
      "A YAG laser capsulotomy is performed in the clinic and usually takes only a few minutes. No incision, stitches, or operating room are required.",
  },
  {
    title: "Clearer Vision Again",
    description:
      "Most patients notice clearer vision within a day or two after treatment and can return to their normal activities shortly afterward.",
  },
];

export default function PosteriorCapsularOpacification() {
  return (
    <section
      id="yag-laser"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              After Cataract Surgery
            </p>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Vision Getting
              <span className="block font-semibold">
                Cloudy Again?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Some patients notice that their vision becomes blurry months
              or even years after successful cataract surgery.
              <strong> This does not mean the cataract has returned.</strong>
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          <FadeIn>
            <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-neutral-50 shadow-sm">
              <Image
                src="/services/cataract-surgery/yag-capsulotomy.png"
                alt="Illustration of posterior capsular opacification and YAG laser capsulotomy"
                width={1000}
                height={1000}
                className="w-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <h3 className="text-3xl font-light text-neutral-900">
                Posterior Capsular
                <span className="block font-semibold">
                  Opacification (PCO)
                </span>
              </h3>

              <p className="mt-8 text-lg leading-8 text-neutral-600">
                During cataract surgery, your cloudy natural lens is removed
                and replaced with a clear artificial lens called an{" "}
                <strong>intraocular lens (IOL)</strong>.
              </p>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                The artificial lens sits inside a thin transparent membrane
                called the <strong>posterior capsule</strong>. Over time,
                this capsule may become cloudy, causing blurry vision that
                can feel similar to the symptoms of a cataract.
              </p>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Fortunately, this common condition is usually treated with a
                quick, painless outpatient laser procedure called a{" "}
                <strong>YAG laser capsulotomy.</strong> Most patients notice
                clearer vision within one or two days.
              </p>
            </div>
          </FadeIn>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <FadeIn key={card.title}>
              <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {card.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-600">
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-20 rounded-[36px] border border-[#1F4E8C]/10 bg-[#F8FAFC] p-10">
            <h3 className="text-2xl font-semibold text-[#1F4E8C]">
              Good to Know
            </h3>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Posterior capsular opacification (PCO) is one of the most
              common long-term changes after cataract surgery. Although not
              everyone develops it, it is a routine part of cataract care
              and can usually be treated safely and effectively with a YAG
              laser capsulotomy performed in the clinic.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}