"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const treatments = [
  {
    title: "Laser Therapy",
    image: "/education/retinoblastoma/laser.png",
    description:
      "Laser therapy is often used for small tumors. A highly focused laser destroys cancer cells while preserving as much healthy retina as possible.",
  },
  {
    title: "Cryotherapy",
    image: "/education/retinoblastoma/cryotherapy.png",
    description:
      "Cryotherapy treats selected tumors by carefully freezing the abnormal tissue. It is commonly used for smaller tumors near the outer retina.",
  },
  {
    title: "Intra-Arterial Chemotherapy (IAC)",
    image: "/education/retinoblastoma/iac.png",
    description:
      "Chemotherapy is delivered directly into the artery supplying the eye. This allows high concentrations of medicine to reach the tumor while limiting exposure to the rest of the body.",
  },
  {
    title: "Intravitreal Chemotherapy",
    image: "/education/retinoblastoma/intravitreal1.png",
    description:
      "For tumors that have released cancer cells into the gel inside the eye (vitreous seeds), chemotherapy can be injected directly into the eye under carefully controlled conditions.",
  },
  {
    title: "Systemic Chemotherapy",
    image: "/education/retinoblastoma/systemic-chemo1.png",
    description:
      "Chemotherapy given through a vein may still be recommended in selected situations, particularly for children with tumors in both eyes or when additional treatment is needed.",
  },
  {
    title: "Radiation Therapy",
    image: "/education/retinoblastoma/radiation.jpg",
    description:
      "Radiation therapy is used less often today because of advances in chemotherapy, but it may still be appropriate in selected cases.",
  },
  {
    title: "Enucleation",
    image: "/education/retinoblastoma/enucleation.png",
    description:
      "If the tumor is too advanced to safely preserve the eye, removing the eye may offer the best chance of curing the cancer and protecting your child's life.",
  },
];

export default function Treatment() {
  const [openCard, setOpenCard] = useState<number | null>(0);

  return (
    <section
      id="treatment"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Treatment
            </p>

            <h2 className="mt-6 text-4xl font-light tracking-[-0.04em] text-[#111] sm:text-5xl">
              Every child deserves
              <br />
              the best chance.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Treatment is tailored to each child based on the size and
              location of the tumor, whether one or both eyes are affected,
              and the goal of preserving life, the eye, and vision whenever
              possible.
            </p>
          </div>
        </FadeIn>
{/* Philippine Milestone */}
<FadeIn delay={0.35}>
  <div className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#1F4E8C] to-[#295A9D] p-10 text-white shadow-xl">

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/75">
      A Philippine Milestone
    </p>

    <h3 className="mt-4 text-3xl font-light leading-tight">
      First Intra-Arterial Chemotherapy
      <br />
      for Retinoblastoma
      <br />
      in the Philippines
    </h3>

    <p className="mt-6 max-w-4xl text-lg leading-8 text-white/90">
  Our multidisciplinary team at{" "}
  <strong>St. Luke&apos;s Medical Center</strong>{" "}
  performed the{" "}
  <strong>
    first intra-arterial chemotherapy (IAC) for retinoblastoma in the
    Philippines
  </strong>
  . This landmark procedure introduced an advanced, eye-preserving
  treatment option for selected children with retinoblastoma and helped
  pave the way for modern retinoblastoma care in the country.
</p>

    <div className="mt-8 flex flex-wrap gap-3">
      <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
        🇵🇭 First IAC in the Philippines
      </span>

      <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
        Eye-Preserving Treatment
      </span>

      <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
        St. Luke&apos;s Medical Center
      </span>
       <a
        href="https://www.stlukes.com.ph/news-and-events/news-and-press-release/making-history-st-lukes-conducts-first-ever-successful-intra-arterial-chemotherapy-to-eye-cancer-patient"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1F4E8C] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Read the Published Report →
      </a>
    </div>

  </div>
</FadeIn>
        {/* Treatment Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment, index) => (
            <FadeIn key={treatment.title} delay={index * 0.05}>
              <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <Image
  src={treatment.image}
  alt={treatment.title}
  width={700}
  height={700}
  className={`aspect-square w-full object-cover ${
    treatment.title === "Radiation Therapy"
      ? "object-[center_85%]"
      : "object-center"
  }`}
/>

                <button
                  onClick={() =>
                    setOpenCard(openCard === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {treatment.title}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      openCard === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openCard === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-neutral-600">
                      {treatment.description}
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Treatment Goals */}
        <FadeIn delay={0.4}>
          <div className="mt-20 rounded-[36px] bg-[#F8FAFC] p-10">
            <h3 className="text-3xl font-light text-neutral-900">
              Treatment Goals
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-[#1F4E8C]">
                  Save Life
                </h4>

                <p className="mt-4 leading-8 text-neutral-600">
                  The first priority is always to completely eliminate the
                  cancer and protect your child's life.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-[#1F4E8C]">
                  Save the Eye
                </h4>

                <p className="mt-4 leading-8 text-neutral-600">
                  Whenever it is safe, modern treatments aim to preserve the
                  eye while successfully controlling the tumor.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-[#1F4E8C]">
                  Preserve Vision
                </h4>

                <p className="mt-4 leading-8 text-neutral-600">
                  The final goal is to preserve as much useful vision as
                  possible for your child's future.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}