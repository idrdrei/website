import { Eye, EyeOff, TriangleAlert } from "lucide-react";

export default function Symptoms() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F4E8C]">
            Symptoms
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Glaucoma can be hard to notice.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            One of the most important things to know about glaucoma is that
            it often causes <strong>no symptoms in the early stages</strong>.
          </p>
        </div>

        {/* Main message */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* Early glaucoma */}
          <div className="rounded-[2rem] bg-white p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4E8C]/8">
              <EyeOff
                size={27}
                strokeWidth={1.7}
                className="text-[#1F4E8C]"
              />
            </div>

            <h3 className="mt-7 text-2xl font-semibold text-slate-950">
              Early glaucoma
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              You may see normally and feel completely fine. There may be
              no pain, redness, or obvious change in your vision.
            </p>

            <div className="mt-7 rounded-2xl bg-slate-50 p-5">
              <p className="font-medium leading-7 text-slate-800">
                This is why regular eye examinations are so important.
              </p>
            </div>
          </div>

          {/* Advanced glaucoma */}
          <div className="rounded-[2rem] bg-white p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F4E8C]/8">
              <Eye
                size={27}
                strokeWidth={1.7}
                className="text-[#1F4E8C]"
              />
            </div>

            <h3 className="mt-7 text-2xl font-semibold text-slate-950">
              As glaucoma progresses
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Vision loss usually begins at the edges of your vision and
              can gradually become more noticeable.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Difficulty noticing things in your side vision",
                "Bumping into objects more often",
                "Difficulty navigating in unfamiliar places",
                "In advanced cases, severe loss of vision",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F4E8C]" />
                  <span className="leading-7 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency warning */}
        <div className="mt-8 rounded-[2rem] bg-[#1F4E8C] p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <TriangleAlert
                size={25}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Sudden eye pain or vision changes?
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-white/80">
                Severe eye pain, a red eye, blurred vision, halos around
                lights, headache, nausea, or vomiting can be signs of
                acute angle-closure glaucoma.
              </p>

              <p className="mt-4 font-semibold text-white">
                This requires urgent attention. Seek ophthalmologic consultation.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}