import { ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, PASTA_BAR_HIGHLIGHTS } from '../data/mabelleData';
import { EditorialImage } from './EditorialImage';

export function PastaDessertBar() {
  return (
    <section
      aria-labelledby="pasta-bar-heading"
      className="border-y border-[#3A211C]/10 bg-[#FFFDFB] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Photography Stack */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 lg:col-span-6">
            <div className="sm:col-span-12">
              <EditorialImage
                src="/src/assets/images/editorial_pasta_bar_1795759169074.jpg"
                alt="Handcrafted blush tomato mascarpone rigatoni served at Mabelle Pasta Bar in Kolkata"
                fallbackTitle="Mabelle Pasta Bar"
                containerClassName="aspect-[4/3] w-full rounded-3xl"
              />
            </div>
            <div className="sm:col-span-6">
              <EditorialImage
                src="/src/assets/images/product_tiramisu_1795759162963.jpg"
                alt="Layered eggless mascarpone tiramisu slice dusted with cocoa"
                fallbackTitle="Classic Tiramisu"
                containerClassName="aspect-[4/3] w-full rounded-2xl"
              />
            </div>
            <div className="sm:col-span-6">
              <EditorialImage
                src="/src/assets/images/product_chocolate_tart_1795759162770.jpg"
                alt="Dark chocolate salted caramel tart and fudgy brownies"
                fallbackTitle="Chocolate Desserts"
                containerClassName="aspect-[4/3] w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Editorial Copy & Rhythm */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
              The Pasta &amp; Dessert Bar
            </p>
            <h2
              id="pasta-bar-heading"
              className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-[#3A211C] sm:text-5xl"
            >
              Where Warm Plates of Pasta Meet Chilled Patisserie
            </h2>
            <p className="mt-5 text-[15px] leading-[1.78] text-[#553A35]">
              Mabelle brings together two comforting rituals under one Salt Lake roof: freshly
              prepared gourmet pasta plates and delicate, 100% eggless patisserie desserts. Come
              for a leisurely evening bowl of creamy blush rigatoni, and stay for espresso-soaked
              tiramisu or warm fudgy brownies.
            </p>

            <div className="mt-9 divide-y divide-[#3A211C]/12 border-y border-[#3A211C]/12">
              {PASTA_BAR_HIGHLIGHTS.map((highlight) => (
                <div key={highlight.title} className="py-5">
                  <h3 className="font-serif text-2xl font-medium text-[#3A211C]">
                    {highlight.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#69504B]">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#3A211C] px-7 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029]"
              >
                <span>Order Pasta &amp; Desserts</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[46px] items-center text-sm font-medium text-[#3A211C] underline-offset-4 transition-colors hover:text-[#8E5B52] hover:underline"
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
