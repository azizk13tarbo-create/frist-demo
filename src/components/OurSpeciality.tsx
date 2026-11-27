import { SPECIALITY_PILLARS } from '../data/mabelleData';

export function OurSpeciality() {
  return (
    <section
      aria-labelledby="speciality-heading"
      className="border-y border-[#3A211C]/10 bg-[#FFFDFB] py-14 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium tracking-[0.14em] text-[#8E5B52] sm:text-xs">
            Our Speciality
          </p>
          <h2
            id="speciality-heading"
            className="mt-2.5 font-serif text-[clamp(1.95rem,7.2vw,2.65rem)] font-medium leading-[1.08] text-[#3A211C] sm:mt-3 sm:text-5xl"
          >
            Thoughtful Craft in Every Layer
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 divide-y divide-[#3A211C]/10 border-t border-[#3A211C]/12 sm:mt-12 sm:grid-cols-2 sm:gap-8 sm:divide-y-0 sm:pt-10 lg:grid-cols-4">
          {SPECIALITY_PILLARS.map((pillar) => (
            <div key={pillar.number} className="flex flex-col py-6 first:pt-7 last:pb-0 sm:py-0 sm:first:pt-0">
              <span className="font-serif text-sm italic text-[#B59264] tabular-nums">
                {pillar.number}.
              </span>
              <h3 className="mt-2 font-serif text-[1.5rem] font-medium text-[#3A211C] sm:mt-3 sm:text-[1.65rem]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-[#69504B] sm:mt-3">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
