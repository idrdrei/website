"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { CalendarDays, Clock } from "lucide-react";

const schedule = [
  {
    clinic: "St. Luke's Medical Center",
    location: "Quezon City",
    logo: "/logos/stlukes.jpeg",
    day: "Monday & Wednesday",
    time: "8:30 AM – 11:00 AM",
  },
  {
    clinic: "Fatima University Medical Center",
    location: "Antipolo",
    logo: "/logos/fatima.jpeg",
    day: "Monday",
    time: "1:00 PM – 3:00 PM",
  },
  {
    clinic: "Makati Life Medical Center",
    location: "Makati",
    logo: "/logos/makati-life1.jpeg",
    day: "Friday",
    time: "9:00 AM – 2:00 PM",
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-28 bg-white py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Clinic Schedule
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Plan Your
              <span className="block font-semibold">
                Next Visit
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
              Regular consultation hours are listed below. Appointment
              availability may vary on holidays or during special schedules.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm">
          {schedule.map((item, index) => (
            <FadeIn key={item.clinic} delay={index * 0.05}>
              <div
                className={`grid gap-8 px-8 py-8 md:grid-cols-[2.3fr_1fr_1fr] md:items-center ${
                  index !== schedule.length - 1
                    ? "border-b border-neutral-200"
                    : ""
                }`}
              >
                {/* Clinic */}

                <div className="flex items-center gap-4">
                  <Image
                    src={item.logo}
                    alt={`${item.clinic} logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />

                  <div>
                    <p className="text-xl font-semibold text-neutral-900">
                      {item.clinic}
                    </p>

                    <p className="text-neutral-500">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Day */}

                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={20}
                    className="text-[#1F4E8C]"
                  />

                  <p className="text-neutral-600">
                    {item.day}
                  </p>
                </div>

                {/* Time */}

                <div className="flex items-center gap-3">
                  <Clock
                    size={20}
                    className="text-[#1F4E8C]"
                  />

                  <p className="font-medium text-neutral-900">
                    {item.time}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-sm text-neutral-500">
            Clinic hours may change during holidays or special circumstances.
            Please contact the clinic to confirm availability before your visit.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}