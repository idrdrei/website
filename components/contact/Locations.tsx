"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

const clinics = [
  {
    name: "St. Luke's Medical Center",
    location: "Quezon City",
    address: "Medical Arts Building 134",
    logo: "/logos/stlukes.jpeg",
    maps: "https://ul.waze.com/ul?place=ChIJP89cnje2lzMRUCMvDAKgG94&ll=14.62253280%2C121.02324520&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
  {
    name: "Makati Life Medical Center",
    location: "Makati",
    address: "Makati City",
    logo: "/logos/makati-life1.jpeg",
    maps: "https://ul.waze.com/ul?venue_id=79298706.793118128.25790656&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
  {
    name: "Fatima University Medical Center",
    location: "Antipolo",
    address: "Antipolo City",
    logo: "/logos/fatima.jpeg",
    maps: "https://ul.waze.com/ul?place=ChIJUyXX89y4lzMRJ_v0hnRvFdw&ll=14.61927950%2C121.15122600&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="scroll-mt-28 bg-[#FAFAF7] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1F4E8C]">
              Where to Find Me
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
              Three Convenient
              <span className="block font-semibold">
                Clinic Locations
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Choose the clinic that's most convenient for you. Our team will
              be happy to assist with appointments, directions, and scheduling.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {clinics.map((clinic, index) => (
            <FadeIn key={clinic.name} delay={index * 0.05}>
              <div className="group flex h-full flex-col rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#1F4E8C]/20 hover:shadow-xl">

                <div className="flex items-center gap-4">
                  <Image
                    src={clinic.logo}
                    alt={clinic.name}
                    width={52}
                    height={52}
                    className="h-13 w-13 object-contain"
                  />

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F4E8C]">
                      {clinic.name}
                    </h3>

                    <p className="mt-1 text-neutral-500">
                      {clinic.location}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 text-[#1F4E8C]"
                  />

                  <p className="leading-7 text-neutral-600">
                    {clinic.address}
                  </p>
                </div>

                <div className="flex-1" />

                <a
                  href={clinic.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 font-semibold text-[#1F4E8C] transition-colors hover:text-[#183F72]"
                >
                  Open in Waze

                  <ArrowUpRight size={18} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}