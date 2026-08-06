"use client";

import FadeIn from "@/components/FadeIn";

const items = [
  {
    title: "Wills Eye Hospital",
    subtitle: "Fellowship Trained",
  },
  {
    title: "Subspecialty Expertise",
    subtitle: "Eye Tumors • Cataract • LASIK",
  },
  {
    title: "3 Metro Manila Clinics",
    subtitle: "Quezon City • Makati • Antipolo",
  },
];

export default function Highlights() {
  return (
    <section className="border-y border-black/10 bg-white py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-black/10 px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-16">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08}>
            <div className="group flex h-full flex-col items-center justify-center py-16 text-center transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-[28px] font-light leading-tight tracking-[-0.03em] text-[#111] transition-colors duration-300 group-hover:text-[#1F4E8C]">
                {item.title}
              </h3>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.30em] text-[#1F4E8C]">
                {item.subtitle}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}