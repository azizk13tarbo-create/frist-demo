import { ArrowDownRight } from 'lucide-react';
import { BRAND_INFO, HERO_MEDIA } from '../data/mabelleData';
import { EditorialImage } from './EditorialImage';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF5F0] pt-16 sm:pt-20 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-3 sm:px-8 sm:pb-14 sm:pt-6 lg:px-10 lg:pb-20 lg:pt-8">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#3A211C]/8 bg-[#FFFDFB] shadow-[0_24px_70px_-32px_rgba(58,33,28,0.2)] sm:rounded-3xl lg:border-0 lg:bg-[#F4E9DF]">
          {/* Mobile & Tablet Focused Patisserie Showcase Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:hidden">
            <EditorialImage
              src={HERO_MEDIA.image}
              alt={HERO_MEDIA.alt}
              priority
              fallbackTitle="Mabelle Patisserie"
              containerClassName="h-full w-full"
              className="scale-[1.18] object-cover object-[86%_72%] sm:scale-105 sm:object-[76%_62%]"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FFFDFB] to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Desktop Full-Bleed Sunlit Composition (Preserved) */}
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
            <div className="relative z-10 flex flex-col justify-center px-5 pb-7 pt-3 sm:p-11 lg:min-h-[640px] lg:max-w-[52%] lg:p-16">
              <div className="animate-fade-up">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium tracking-[0.13em] text-[#8E5B52] sm:gap-x-2.5 sm:text-[13px] sm:text-[#69504B]">
                  <span>Salt Lake, Kolkata</span>
                  <span aria-hidden="true">·</span>
                  <span>100% Eggless</span>
                  <span className="hidden sm:inline" aria-hidden="true">
                    ·
                  </span>
                  <span className="hidden sm:inline">Dessert &amp; Pasta Bar</span>
                </p>

                <h1 className="mt-3 font-serif text-[clamp(2.1rem,8.4vw,2.85rem)] font-medium leading-[1.06] tracking-[-0.015em] text-[#3A211C] sm:mt-5 sm:text-[3.5rem] sm:leading-[1.04] lg:text-[4.3rem]">
                  A Little Taste of Something{' '}
                  <span className="italic font-normal text-[#7B4B44]">Beautiful.</span>
                </h1>

                <p className="mt-3.5 max-w-md text-[14.5px] leading-[1.68] text-[#553A35] sm:mt-5 sm:text-base sm:leading-[1.7]">
                  Discover the art of exquisite desserts, handcrafted cakes and delightful flavours.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-2.5 min-[370px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                  <a
                    href="#menu"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-1.5 rounded-full bg-[#3A211C] px-5 py-3 text-sm font-medium text-[#FAF5F0] transition-all duration-200 hover:bg-[#523029] active:scale-[0.98] whitespace-nowrap sm:w-auto sm:gap-2 sm:px-7"
                  >
                    <span>Explore Menu</span>
                    <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>

                  <a
                    href="#custom-cakes"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-1.5 rounded-full border border-[#3A211C]/22 bg-[#FAF5F0]/80 px-5 py-3 text-sm font-medium text-[#3A211C] backdrop-blur-xs transition-all duration-200 hover:border-[#3A211C] hover:bg-[#F9E9EC] active:scale-[0.98] whitespace-nowrap sm:w-auto sm:gap-2 sm:bg-[#FFFDFB]/90 sm:px-7"
                  >
                    <span>Custom Cakes</span>
                    <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Editorial Footnote Strip Below Hero */}
        <div className="mt-5 flex flex-col items-start justify-between gap-2.5 border-b border-[#3A211C]/10 pb-5 text-xs text-[#69504B] sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pb-6 sm:text-[13px]">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 sm:gap-x-3">
            <span className="font-medium text-[#3A211C]">{BRAND_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span>By {BRAND_INFO.founder}</span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="hidden sm:inline">{BRAND_INFO.addressLine1}</span>
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
