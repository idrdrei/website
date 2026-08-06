"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

const services = [
  "Comprehensive eye examinations",
  "Prescription for glasses and contact lenses",
  "Diabetic eye screening",
  "Glaucoma evaluation",
  "Dry eye assessment and treatment",
  "Retinal examination",
];

export default function ComprehensiveEyeCare() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        {/* Image */}
        <FadeIn>
          <div className="group overflow-hidden rounded-[36px]">
            <Image
              src="/services/compcare.png"
              alt="Comprehensive eye examination"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.15}>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
              Comprehensive Eye Care
            </p>

            <h2 className="mt-6 text-3xl font-light leading-tight tracking-[-0.04em] text-[#111] sm:text-5xl">
              Routine eye care,
              <br />
              reimagined.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              A comprehensive eye examination is more than checking whether you
              need glasses. It is an opportunity to detect disease early,
              monitor long-term eye health, and preserve your vision through
              personalized care.
            </p>

            <ul className="mt-10 space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="h-2 w-2 rounded-full bg-[#1F4E8C]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/services/comprehensive-eye-care"
              className="mt-10 inline-flex items-center gap-2 text-[#1F4E8C] transition-all duration-300 hover:gap-3"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}