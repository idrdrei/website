"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

const clinics = [
  {
    name: "St. Luke's Medical Center – Quezon City",
    schedule: "Mondays & Wednesdays • 8:30–11:00 AM",
    image: "/clinics/stlukes-qc.png",
  },
  {
    name: "Makati Life Medical Center",
    schedule: "Fridays • 9:00 AM–1:00 PM",
    image: "/clinics/makati-life.png",
  },
  {
    name: "Fatima University Medical Center – Antipolo",
    schedule: "Mondays • 1:00–3:00 PM",
    image: "/clinics/fatima-antipolo.png",
  },
];

export default function Clinics() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              <span className="font-semibold">Available Locations</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {clinics.map((clinic, index) => (
            <FadeIn key={clinic.name} delay={index * 0.1}>
              <div className="group relative h-[420px] overflow-hidden rounded-[32px] shadow-[0_24px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

                {/* Background Image */}
                <Image
                  src={clinic.image}
                  alt={clinic.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">

<div className="rounded-2xl border border-white/10 bg-black/40 p-6 transition-colors duration-300 group-hover:bg-black/50">
                    <MapPin
                      size={28}
                      className="mb-5 text-white transition-transform duration-500 group-hover:scale-110"
                    />

                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {clinic.name}
                    </h3>

                    <div className="mt-5 flex items-center gap-3 text-white/90">
                      <Clock
                        size={18}
                        className="transition-transform duration-500 group-hover:rotate-6"
                      />

                      <span>{clinic.schedule}</span>
                    </div>

                  </div>

                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}