import { BRAND_INFO } from '../data/mabelleData';
import { EditorialImage } from './EditorialImage';
import { MabelleLogo } from './MabelleLogo';

export function BrandStory() {
  return (
    <section id="story" aria-labelledby="story-heading" className="bg-[#FAF5F0] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Story Prose */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">Our Story</p>
            <h2
              id="story-heading"
              className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-[#3A211C] sm:text-5xl"
            >
              A Warm Kolkata Patisserie Guided by Craft &amp; Quiet Elegance
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-[#553A35]">
              <p>
                Founded by chef <span className="font-medium text-[#3A211C]">{BRAND_INFO.founder}</span>,{' '}
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

            <div className="mt-8 flex items-center gap-4 border-t border-[#3A211C]/12 pt-6">
              <MabelleLogo variant="emblem" />
              <div>
                <p className="font-serif text-2xl font-medium text-[#3A211C]">
                  {BRAND_INFO.founder}
                </p>
                <p className="text-xs text-[#69504B]">
                  Founder &amp; Chef · {BRAND_INFO.name}, Salt Lake, Kolkata
                </p>
              </div>
            </div>
          </div>

          {/* Right Atelier Photography Composition */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <EditorialImage
                  src="/src/assets/images/story_patisserie_atelier_1795759171386.jpg"
                  alt="Sunlit patisserie workbench with tempered dark chocolate, vanilla pods, brass whisk, and blush piping cream"
                  fallbackTitle="Mabelle Kitchen Atelier"
                  containerClassName="aspect-[4/3] w-full rounded-3xl"
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

              <div className="col-span-12 flex flex-col justify-between rounded-2xl bg-[#F9E9EC]/80 p-6 sm:col-span-5">
                <p className="text-xs font-medium text-[#8E5B52]">Signature Touch</p>
                <div>
                  <p className="font-serif text-2xl font-medium leading-snug text-[#3A211C]">
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
