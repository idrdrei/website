"use client";

import FadeIn from "@/components/FadeIn";
import { Star } from "lucide-react";

const testimonials = [
  {
    service: "LASIK / Laser Vision Correction",
    review:
      "The LASIK procedure was seamless and completely painless. I no longer need glasses or contact lenses to see the world clearly. I'm eternally grateful to Dr. Martin and his team. 10/10 would definitely recommend.",
  },
  {
    service: "Comprehensive Eye Care",
    review:
      "Dr. Martin is awesome. He's professional, respectful, incredibly accommodating, and has a calm, reassuring presence that immediately puts you at ease. If you need an ophthalmologist, he's your guy.",
  },
  {
    service: "Corneal Infection",
    review:
      "After months of struggling with an eye infection, Dr. Andrei finally helped me recover. Napakabait at very accommodating pa. Maraming salamat po talaga!",
  },
  {
    service: "Comprehensive Eye Care",
    review:
      "Dr. Andrei was very responsive and gave detailed instructions for caring for my mother's infected eye. His sincere concern for his patients gave us great confidence throughout her treatment.",
  },
  {
    service: "Sports Eye Injury",
    review:
      "After a sports accident injured my eye, Dr. Martin patiently guided me through recovery. He explained everything clearly and got me back in time for my competition, where my team won the championship!",
  },
  {
    service: "Patient Experience",
    review:
      "Professional, compassionate, and highly skilled. Every consultation was thorough, reassuring, and focused on achieving the best possible outcome.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
            Patient Testimonials
          </p>

          <h2 className="mt-6 text-4xl font-light tracking-[-0.04em] text-[#111] sm:text-5xl">
            Trusted through every
            <br />
            step of the journey.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Every consultation, surgery, and follow-up is centered on
            personalized, compassionate eye care. Here's what some of our
            patients have shared about their experience.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex h-full flex-col rounded-[36px] border border-black/10 bg-[#FAFAF7] p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:p-12">
                <div className="mb-8 flex gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="flex-1 text-lg leading-8 text-neutral-700">
                  “{item.review}”
                </p>

                <p className="mt-10 text-sm font-medium uppercase tracking-[0.25em] text-[#1F4E8C]">
                  {item.service}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}