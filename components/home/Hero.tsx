import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="about"
      className="scroll-mt-24 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-center gap-12 px-8 py-8 lg:flex-row lg:gap-20 lg:px-16 lg:py-12"
    >
      {/* Left */}
      <div className="flex-1 text-center lg:text-left">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-[#1F4E8C]">
          Ocular Oncology • Cataract • Laser Vision
        </p>

        <h1 className="text-4xl font-light leading-[0.9] tracking-[-0.06em] text-[#111] sm:text-6xl md:text-7xl lg:text-8xl">
          Specialized
          <br />
          Eye Care.
        </h1>

        <div className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
          <p>
            Expert care for everything from routine eye examinations to highly
            specialized eye conditions, delivered through evidence-based
            treatment and personalized care.
          </p>
        </div>

        {/* Credentials */}
        <div className="mt-10 border-l-2 border-[#1F4E8C] pl-5">
          <h2 className="text-xl font-medium text-[#111]">
            Dr. Andrei Martin
          </h2>

          <div className="mt-3 space-y-1">
            <p className="text-neutral-700">
              Board-Certified Ophthalmologist
            </p>

            <p className="text-neutral-700">
              Ocular Oncologist
            </p>

            <p className="text-neutral-700">
              Refractive Surgeon
            </p>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            St. Luke&apos;s Eye Institute •{" "}
            <a
              href="https://www.willseye.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#1F4E8C]"
            >
              Wills Eye Hospital
            </a>
            , USA
          </p>
        </div>

        {/* Actions */}
        <div className="mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
  onClick={() => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="rounded-full bg-[#1F4E8C] px-8 py-4 text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#163E70] hover:shadow-lg"
>
  Request Appointment
</button>

            <Link
              href="/education"
              className="group rounded-full border border-[#1F4E8C]/20 bg-[#1F4E8C]/5 px-8 py-4 text-center font-medium text-[#1F4E8C] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F4E8C] hover:bg-[#1F4E8C] hover:text-white hover:shadow-lg"
            >
              Patient Education
            </Link>
          </div>

          <p className="mt-5 text-sm text-neutral-500 lg:max-w-md">
            Appointments available at St. Luke&apos;s Quezon City, Makati Life
            Medical Center, and Fatima University Medical Center – Antipolo.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 items-center justify-center lg:justify-end">
        <div className="overflow-hidden rounded-[36px] ring-1 ring-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
          <Image
            src="/images/hero/andrei-hero.jpg"
            alt="Dr. Andrei Martin"
            width={700}
            height={900}
            priority
            className="w-[280px] sm:w-[340px] md:w-[400px] lg:h-[74vh] lg:w-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}