import { ArrowDownRight } from 'lucide-react';
import { PASTA_BAR_HIGHLIGHTS } from '../data/mabelleData';
import { EditorialImage } from './EditorialImage';

export function PastaDessertBar() {
  return (
    <section
      aria-labelledby="pasta-bar-heading"
      className="border-y border-[#3A211C]/10 bg-[#FFFDFB] py-14 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Photography Stack — 2-up supporting shots on mobile for editorial pacing */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-12 sm:gap-6 lg:col-span-6">
            <div className="col-span-2 sm:col-span-12">
              <EditorialImage
                src="/src/assets/images/editorial_pasta_bar_1795759169074.jpg"
                alt="Handcrafted blush tomato mascarpone rigatoni served at Mabelle Pasta Bar in Kolkata"
                fallbackTitle="Mabelle Pasta Bar"
                containerClassName="aspect-[4/3] w-full rounded-2xl sm:rounded-3xl"
              />
            </div>
            <div className="col-span-1 sm:col-span-6">
              <EditorialImage
                src="/src/assets/images/product_tiramisu_1795759162963.jpg"
                alt="Layered eggless mascarpone tiramisu slice dusted with cocoa"
                fallbackTitle="Classic Tiramisu"
                containerClassName="aspect-[4/3] w-full rounded-xl sm:rounded-2xl"
              />
            </div>
            <div className="col-span-1 sm:col-span-6">
              <EditorialImage
                src="/src/assets/images/product_chocolate_tart_1795759162770.jpg"
                alt="Dark chocolate salted caramel tart and fudgy brownies"
                fallbackTitle="Chocolate Desserts"
                containerClassName="aspect-[4/3] w-full rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>

          {/* Editorial Copy & Rhythm */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-[11px] font-medium tracking-[0.14em] text-[#8E5B52] sm:text-xs">
              The Pasta &amp; Dessert Bar
            </p>
            <h2
              id="pasta-bar-heading"
              className="mt-2.5 font-serif text-[clamp(1.95rem,7.2vw,2.65rem)] font-medium leading-[1.08] text-[#3A211C] sm:mt-3 sm:text-5xl"
            >
              Where Warm Plates of Pasta Meet Chilled Patisserie
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-[#553A35] sm:mt-5 sm:text-[15px] sm:leading-[1.78]">
              Mabelle brings together two comforting rituals under one Salt Lake roof: freshly
              prepared gourmet pasta plates and delicate, 100% eggless patisserie desserts. Come
              for a leisurely evening bowl of creamy blush rigatoni, and stay for espresso-soaked
              tiramisu or warm fudgy brownies.
            </p>

            <div className="mt-7 divide-y divide-[#3A211C]/12 border-y border-[#3A211C]/12 sm:mt-9">
              {PASTA_BAR_HIGHLIGHTS.map((highlight) => (
                <div key={highlight.title} className="py-4 sm:py-5">
                  <h3 className="font-serif text-[1.4rem] font-medium text-[#3A211C] sm:text-2xl">
                    {highlight.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#69504B]">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#menu"
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-7 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029] sm:w-auto"
              >
                <span>Explore the Menu</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center text-sm font-medium text-[#3A211C] underline-offset-4 transition-colors hover:text-[#8E5B52] hover:underline sm:justify-start"
              >
                Visit our Salt Lake Bar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
