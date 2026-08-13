import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Text */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
              Eye Health
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Glaucoma
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Glaucoma can slowly damage the nerve that connects your eye
              to your brain. Learn what glaucoma is, how it can affect your
              vision, and how treatment can help protect your sight.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100">
            <Image
              src="/education/glaucoma/glaucoma-hero2.png"
              alt="Glaucoma and the optic nerve"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}