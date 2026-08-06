"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { Clock } from "lucide-react";

const schedule = [
  {
    logo: "/logos/stlukes.jpeg",
    clinic: "St. Luke's Medical Center",
    location: "Quezon City",
    days: "Monday & Wednesday",
    hours: "8:30 AM – 11:00 AM",
  },
  {
    logo: "/logos/fatima.jpeg",
    clinic: "Fatima University Medical Center",
    location: "Antipolo",
    days: "Monday",
    hours: "1:00 PM – 3:00 PM",
  },
  {
    logo: "/logos/makati-life1.jpeg",
    clinic: "Makati Life Medical Center",
    location: "Makati",
    days: "Friday",
    hours: "9:00 AM – 1:00 PM",
  },
];

export default function ClinicHours() {
  return (
    <section
      id="hours"
      className="scroll-mt-28 bg-white py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Consultation Schedule
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Find a Time
              <span className="block font-semibold">
                That Works for You
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Regular clinic hours are available at three locations.
              Appointments are recommended to ensure availability.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-20 overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm">

            {schedule.map((item, index) => (
              <div
                key={item.clinic}
                className={`flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between ${
                  index !== schedule.length - 1
                    ? "border-b border-neutral-200"
                    : ""
                }`}
              >
                {/* Clinic */}
                <div className="flex items-center gap-5">
                  <Image
                    src={item.logo}
                    alt={item.clinic}
                    width={56}
                    height={56}
                    className="object-contain"
                  />

                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {item.clinic}
                    </h3>

                    <p className="mt-1 text-neutral-500">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-3 text-neutral-700 md:items-center">
                  <Clock
                    size={20}
                    className="mt-0.5 text-[#1F4E8C] md:mt-0"
                  />

                  <div className="text-left md:text-right">
                    <p className="font-medium">
                      {item.days}
                    </p>

                    <p className="text-neutral-500">
                      {item.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </FadeIn>
      </div>
    </section>
  );
}