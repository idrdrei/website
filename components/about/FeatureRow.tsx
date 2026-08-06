"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface FeatureRowProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function FeatureRow({
  eyebrow = "Specialty",
  title,
  description,
  image,
  reverse = false,
}: FeatureRowProps) {
  return (
    <FadeIn>
      <div
        className={`grid items-center gap-16 lg:gap-24 ${
          reverse
            ? "lg:grid-cols-[1.15fr_1fr]"
            : "lg:grid-cols-[1fr_1.15fr]"
        }`}
      >
        {/* Text */}

        <div
          className={`max-w-md ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
            {eyebrow}
          </p>

          <h3 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] text-[#111] lg:text-5xl">
            {title}
          </h3>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            {description}
          </p>
        </div>

        {/* Image */}

        <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
          <div className="group overflow-hidden rounded-[40px]">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}