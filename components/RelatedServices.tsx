"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

type Service = {
  title: string;
  description: string;
  href: string;
};

type RelatedServicesProps = {
  services: Service[];
};

export default function RelatedServices({
  services,
}: RelatedServicesProps) {
  return (
    <section className="bg-[#FAFAF7] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Related Services
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              You May Also
              <span className="block font-semibold">
                Be Interested In
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Explore other services designed to help protect, restore, and
              preserve your vision.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#1F4E8C]/20 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F4E8C]">
                  {service.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-neutral-600">
                  {service.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#1F4E8C]">
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}