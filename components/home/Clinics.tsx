"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { MapPin, ArrowUpRight } from "lucide-react";

const clinics = [
  {
    image: "/clinics/stlukes-qc.png",
    name: "St. Luke's Medical Center",
    city: "Quezon City",
    location: "Medical Arts Building 134",
    day: "Monday & Wednesday",
    time: "8:00 AM – 11:00 AM",
    googleMaps:
      "https://maps.google.com/?q=St.+Luke's+Medical+Center+Quezon+City",
    waze: "https://ul.waze.com/ul?place=ChIJP89cnje2lzMRUCMvDAKgG94&ll=14.62253280%2C121.02324520&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
  {
    image: "/clinics/makati-life.png",
    name: "Makati Life Medical Center",
    city: "Makati",
    location: "Vision and Eye Health Center (2nd Floor)",
    day: "Friday",
    time: "9:00 AM – 1:00 PM",
    googleMaps:
      "https://maps.google.com/?q=Makati+Life+Medical+Center",
    waze: "https://ul.waze.com/ul?venue_id=79298706.793118128.25790656&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
  {
    image: "/clinics/fatima-antipolo.png",
    name: "Fatima University Medical Center",
    city: "Antipolo",
    location: "Eye Laser Center (3rd Floor)",
    day: "Monday",
    time: "1:00 PM – 3:00 PM",
    googleMaps:
      "https://maps.google.com/?q=Fatima+University+Medical+Center+Antipolo",
    waze: "https://ul.waze.com/ul?place=ChIJUyXX89y4lzMRJ_v0hnRvFdw&ll=14.61927950%2C121.15122600&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
  },
];

export default function Clinics() {
  return (
    <section
      id="clinics"
      className="scroll-mt-24 bg-[#FAFAF7] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
            Clinic Locations
          </p>

          <h2 className="mt-6 text-4xl font-light tracking-[-0.04em] text-[#111] sm:text-5xl">
            Accessible care,
            <br />
            wherever you are.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Conveniently located across Metro Manila, providing specialized eye
            care for consultations, surgery, and follow-up visits.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {clinics.map((clinic, index) => (
            <FadeIn key={clinic.name} delay={index * 0.15}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[36px] border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#1F4E8C]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={clinic.image}
                    alt={clinic.name}
                    width={800}
                    height={500}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#1F4E8C]"
                    />

                    <h3 className="text-3xl font-light tracking-[-0.03em] text-[#111]">
                      {clinic.city}
                    </h3>
                  </div>

                  <p className="mt-2 text-lg text-neutral-700">
                    {clinic.name}
                  </p>

                  <div className="mt-8 space-y-4 text-neutral-600">
                    <p>{clinic.location}</p>

                    <div>
                      <p className="font-medium text-[#111]">{clinic.day}</p>
                      <p>{clinic.time}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-12">
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                      View Directions
                    </p>

                    <div className="flex gap-6">
                      <a
                        href={clinic.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#1F4E8C] transition hover:opacity-70"
                      >
                        Google Maps
                        <ArrowUpRight size={15} />
                      </a>

                      <a
                        href={clinic.waze}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#1F4E8C] transition hover:opacity-70"
                      >
                        Waze
                        <ArrowUpRight size={15} />
                      </a>
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