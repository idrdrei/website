import {
  Clock3,
  TriangleAlert,
  Activity,
} from "lucide-react";

const types = [
  {
    number: "01",
    icon: Clock3,
    title: "Open-Angle Glaucoma",
    tagline: "The silent one",
    description:
      "This is the most common type of glaucoma. It usually develops slowly, and you may not notice anything is wrong with your vision at first.",
    points: [
      "Usually painless",
      "Often develops gradually",
      "Vision loss can begin in the side vision",
    ],
  },
  {
    number: "02",
    icon: TriangleAlert,
    title: "Angle-Closure Glaucoma",
    tagline: "The one that can happen suddenly",
    description:
      "The drainage area of the eye becomes blocked, causing eye pressure to rise quickly. When this happens suddenly, it is an emergency.",
    points: [
      "May cause severe eye pain",
      "Red eye and blurred vision",
      "Halos around lights, headache, nausea, or vomiting",
    ],
  },
  {
    number: "03",
    icon: Activity,
    title: "Normal-Tension Glaucoma",
    tagline: "Glaucoma without high pressure",
    description:
      "The optic nerve can become damaged even when the eye pressure is within the normal range.",
    points: [
      "Eye pressure may look normal",
      "Often develops slowly",
      "Regular optic nerve checks are important",
    ],
  },
];

export default function TypesOfGlaucoma() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
            Types of Glaucoma
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Not all glaucoma is the same.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Glaucoma can develop in different ways. Here are three important
            types to know.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {types.map((type) => {
            const Icon = type.icon;

            return (
              <article
                key={type.title}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F4E8C]/20 hover:bg-white hover:shadow-xl sm:p-8"
              >

                {/* Number + Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-[0.2em] text-[#1F4E8C]">
                    {type.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F4E8C]/8">
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                      className="text-[#1F4E8C]"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                  {type.title}
                </h3>

                {/* Tagline */}
                <p className="mt-2 text-sm font-semibold text-[#1F4E8C]">
                  {type.tagline}
                </p>

                {/* Description */}
                <p className="mt-5 leading-7 text-slate-600">
                  {type.description}
                </p>

                {/* Key points */}
                <div className="mt-7 space-y-3 border-t border-slate-200 pt-6">
                  {type.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F4E8C]" />

                      <p className="text-sm leading-6 text-slate-600">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom message */}
        <div className="mt-10 rounded-3xl bg-slate-50 p-7 text-center sm:p-8">
          <p className="text-base leading-7 text-slate-600">
            <strong className="text-slate-950">
              Eye pressure is only part of the picture.
            </strong>{" "}
            Your optic nerve, visual field, and other test results all help
            your eye doctor determine whether glaucoma is present.
          </p>
        </div>

      </div>
    </section>
  );
}