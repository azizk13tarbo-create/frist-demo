import { BRAND_INFO } from '../data/mabelleData';
import { EditorialImage } from './EditorialImage';
import { MabelleLogo } from './MabelleLogo';

export function BrandStory() {
  return (
    <section id="story" aria-labelledby="story-heading" className="bg-[#FAF5F0] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Story Prose */}
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium tracking-[0.14em] text-[#8E5B52] sm:text-xs">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="mt-2.5 font-serif text-[clamp(1.95rem,7.2vw,2.65rem)] font-medium leading-[1.08] text-[#3A211C] sm:mt-3 sm:text-5xl"
            >
              A Warm Kolkata Patisserie Guided by Craft &amp; Quiet Elegance
            </h2>

            <div className="mt-5 space-y-4 text-[14.5px] leading-[1.76] text-[#553A35] sm:mt-6 sm:space-y-5 sm:text-[15px] sm:leading-[1.8]">
              <p>
                Founded by chef{' '}
                <span className="font-medium text-[#3A211C]">{BRAND_INFO.founder}</span>,{' '}
                <span className="font-medium text-[#3A211C]">{BRAND_INFO.name}</span> was created in
                Salt Lake, Kolkata as a refined bakery, dessert, and pasta bar devoted to thoughtful
                flavours and unhurried detail.
              </p>
              <p>
                With a focus on 100% eggless baking, every recipe is balanced so that tenderness,
                richness, and visual beauty feel effortless — from everyday brownies, chocolate
                tarts, and petite bento cakes to bespoke celebration centrepieces and curated gift
                hampers.
              </p>
              <p>
                Whether you are celebrating a milestone with a custom cake, sharing a box of
                desserts with family, or stopping by Sector 2 for pasta and tiramisu, Mabelle is
                built around a simple belief: every bite should feel like a little taste of
                something beautiful.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3.5 border-t border-[#3A211C]/12 pt-5 sm:mt-8 sm:gap-4 sm:pt-6">
              <MabelleLogo variant="emblem" />
              <div>
                <p className="font-serif text-[1.45rem] font-medium leading-tight text-[#3A211C] sm:text-2xl">
                  {BRAND_INFO.founder}
                </p>
                <p className="mt-0.5 text-xs text-[#69504B]">
                  Founder &amp; Chef · {BRAND_INFO.name}, Salt Lake, Kolkata
                </p>
              </div>
            </div>
          </div>

          {/* Right Atelier Photography Composition */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-3.5 sm:gap-5">
              <div className="col-span-12">
                <EditorialImage
                  src="/src/assets/images/story_patisserie_atelier_1795759171386.jpg"
                  alt="Sunlit patisserie workbench with tempered dark chocolate, vanilla pods, brass whisk, and blush piping cream"
                  fallbackTitle="Mabelle Kitchen Atelier"
                  containerClassName="aspect-[4/3] w-full rounded-2xl sm:rounded-3xl"
                />
              </div>

              <div className="col-span-12 sm:col-span-7">
                <EditorialImage
                  src="/assets/aistudio/IMG_20261127_112527_4c7a7301.jpg"
                  alt="Authentic Mabelle signature gift hamper box with blush pink Mabelle cards, gold ribbon, truffles, and artisanal bakes"
                  fallbackTitle="Mabelle Signature Hampers"
                  containerClassName="aspect-[4/3] w-full rounded-2xl"
                />
              </div>

              <div className="col-span-12 flex flex-col justify-between gap-4 rounded-2xl bg-[#F9E9EC]/80 p-5 sm:col-span-5 sm:p-6">
                <p className="text-xs font-medium text-[#8E5B52]">Signature Touch</p>
                <div>
                  <p className="font-serif text-[1.45rem] font-medium leading-snug text-[#3A211C] sm:text-2xl">
                    Curated Gifting &amp; Hampers
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#553A35]">
                    Festive assortments and ribbon-tied dessert boxes finished with our signature
                    blush Mabelle seal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
