import { SPECIALITY_PILLARS } from '../data/mabelleData';

export function OurSpeciality() {
  return (
    <section
      aria-labelledby="speciality-heading"
      className="border-y border-[#3A211C]/10 bg-[#FFFDFB] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">Our Speciality</p>
          <h2
            id="speciality-heading"
            className="mt-3 font-serif text-4xl font-medium leading-[1.1] text-[#3A211C] sm:text-5xl"
          >
            Thoughtful Craft in Every Layer
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#3A211C]/12 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALITY_PILLARS.map((pillar) => (
            <div key={pillar.number} className="flex flex-col">
              <span className="font-serif text-sm italic text-[#B59264] tabular-nums">
                {pillar.number}.
              </span>
              <h3 className="mt-3 font-serif text-[1.65rem] font-medium text-[#3A211C]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-[#69504B]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
