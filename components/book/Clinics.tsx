"use client";

import FadeIn from "@/components/FadeIn";
import { MapPin, Clock } from "lucide-react";

const clinics = [
  {
    name: "St. Luke's Medical Center – Quezon City",
    schedule: "Mondays & Wednesdays • 9:00–11:00 AM",
  },
  {
    name: "Makati Life Medical Center",
    schedule: "Fridays • 9:00 AM–2:00 PM",
  },
  {
    name: "Fatima University Medical Center – Antipolo",
    schedule: "Mondays • 1:00–3:00 PM",
  },
];

export default function Clinics() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-light text-neutral-900">
              Choose Your
              <span className="block font-semibold">
                Preferred Clinic
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {clinics.map((clinic, index) => (
            <FadeIn key={clinic.name} delay={index * 0.1}>
              <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
                <MapPin className="mb-6 text-[#1F4E8C]" />

                <h3 className="text-2xl font-semibold text-neutral-900">
                  {clinic.name}
                </h3>

                <div className="mt-6 flex items-center gap-3 text-neutral-600">
                  <Clock size={18} />
                  <span>{clinic.schedule}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}