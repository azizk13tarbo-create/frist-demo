import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, HERO_MEDIA } from '../data/mabelleData';
import { EditorialImage } from './EditorialImage';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF5F0] pt-20 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-6 sm:px-8 lg:px-10 lg:pb-20 lg:pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#FFFDFB] shadow-[0_24px_70px_-32px_rgba(58,33,28,0.2)] lg:bg-[#F4E9DF]">
          {/* Mobile & Tablet Clean Unwashed Photo Header */}
          <div className="aspect-[16/11] w-full overflow-hidden lg:hidden">
            <EditorialImage
              src={HERO_MEDIA.image}
              alt={HERO_MEDIA.alt}
              priority
              fallbackTitle="Mabelle Patisserie"
              containerClassName="h-full w-full"
              className="object-cover object-[76%_center]"
            />
          </div>

          {/* Desktop Full-Bleed Sunlit Composition */}
          <div className="relative lg:min-h-[640px]">
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <EditorialImage
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.alt}
                priority
                fallbackTitle="Mabelle Patisserie"
                containerClassName="h-full w-full"
                className="object-cover object-center"
              />
              {/* Measured warm ivory veil on the left third for crisp AAA typography contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#FAF5F0]/95 via-[#FAF5F0]/72 via-42% to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Editorial Foreground Content */}
            <div className="relative z-10 flex flex-col justify-center p-7 sm:p-11 lg:min-h-[640px] lg:max-w-[52%] lg:p-16">
              <div className="animate-fade-up">
                <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-[0.14em] text-[#69504B] sm:text-[13px]">
                  <span>Salt Lake, Kolkata</span>
                  <span aria-hidden="true">·</span>
                  <span>100% Eggless Patisserie</span>
                  <span aria-hidden="true">·</span>
                  <span>Dessert &amp; Pasta Bar</span>
                </p>

                <h1 className="mt-5 font-serif text-[2.6rem] font-medium leading-[1.04] tracking-[-0.015em] text-[#3A211C] sm:text-[3.5rem] lg:text-[4.3rem]">
                  A Little Taste of Something{' '}
                  <span className="italic font-normal text-[#7B4B44]">Beautiful.</span>
                </h1>

                <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-[#553A35] sm:text-base">
                  Discover the art of exquisite desserts, handcrafted cakes and delightful flavours.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <a
                    href="#menu"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#3A211C] px-7 py-3 text-sm font-medium text-[#FAF5F0] transition-all duration-200 hover:bg-[#523029] active:scale-[0.98] whitespace-nowrap shrink-0"
                  >
                    <span>Explore Menu</span>
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href={BRAND_INFO.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-[#3A211C]/25 bg-[#FFFDFB]/90 px-7 py-3 text-sm font-medium text-[#3A211C] backdrop-blur-xs transition-all duration-200 hover:border-[#3A211C] hover:bg-[#F9E9EC] active:scale-[0.98] whitespace-nowrap shrink-0"
                  >
                    <span>Order Now</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Editorial Footnote Strip Below Hero */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#3A211C]/10 pb-6 text-[13px] text-[#69504B]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-medium text-[#3A211C]">{BRAND_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span>By {BRAND_INFO.founder}</span>
            <span aria-hidden="true">·</span>
            <span>{BRAND_INFO.addressLine1}</span>
          </div>
          <a
            href="#custom-cakes"
            className="inline-flex items-center gap-1.5 font-medium text-[#3A211C] transition-colors hover:text-[#8E5B52] whitespace-nowrap"
          >
            <span>Bespoke celebration cakes made to order</span>
            <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
