import { useEffect, useState } from 'react';
import { ArrowUpRight, Instagram, X } from 'lucide-react';
import { BRAND_INFO, INSTAGRAM_MOMENTS, type InstagramMoment } from '../data/mabelleData';
import { EditorialImage } from './EditorialImage';

export function InstagramGallery() {
  const [selectedMoment, setSelectedMoment] = useState<InstagramMoment | null>(null);

  useEffect(() => {
    if (!selectedMoment) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMoment(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMoment]);

  return (
    <section
      aria-labelledby="instagram-heading"
      className="border-t border-[#3A211C]/10 bg-[#FFFDFB] py-14 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          <div>
            <p className="text-[11px] font-medium tracking-[0.14em] text-[#8E5B52] sm:text-xs">
              From Our Kitchen Journal
            </p>
            <h2
              id="instagram-heading"
              className="mt-2.5 font-serif text-[clamp(1.95rem,7.2vw,2.65rem)] font-medium leading-[1.08] text-[#3A211C] sm:mt-3 sm:text-5xl"
            >
              Follow{' '}
              <span className="italic font-normal text-[#7B4B44]">
                {BRAND_INFO.instagramHandle}
              </span>
            </h2>
          </div>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#3A211C]/20 bg-[#FAF5F0] px-5 py-2.5 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#F9E9EC] whitespace-nowrap shrink-0 sm:w-auto"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            <span>Visit Instagram</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* 6-Tile Visual Gallery */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 md:grid-cols-3">
          {INSTAGRAM_MOMENTS.map((moment) => (
            <button
              key={moment.id}
              type="button"
              onClick={() => setSelectedMoment(moment)}
              aria-label={`View gallery photo: ${moment.categoryLabel}`}
              className="group relative aspect-square overflow-hidden rounded-xl bg-[#F3EAE2] text-left focus-visible:rounded-xl sm:rounded-2xl sm:focus-visible:rounded-2xl"
            >
              <EditorialImage
                src={moment.image}
                alt={moment.imageAlt}
                fallbackTitle={moment.categoryLabel}
                containerClassName="h-full w-full"
                className="transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              />
              {/* Subtle mobile label scrim + rich desktop hover caption */}
              <div
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#3A211C]/72 via-transparent to-transparent p-3 opacity-100 transition-opacity duration-200 md:from-[#3A211C]/80 md:via-[#3A211C]/25 md:p-5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
                aria-hidden="true"
              >
                <span className="text-[11px] font-medium text-[#FAF5F0] md:text-[#F2BEC5]">
                  {moment.categoryLabel}
                </span>
                <p className="mt-1 hidden line-clamp-2 text-xs leading-relaxed text-[#FAF5F0] md:block sm:text-sm">
                  {moment.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Gallery Lightbox */}
      {selectedMoment && (
        <div
          className="animate-fade-in fixed inset-0 z-50 flex items-end justify-center bg-[#3A211C]/65 p-0 backdrop-blur-xs sm:items-center sm:p-6"
          onClick={() => setSelectedMoment(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedMoment.categoryLabel}
            onClick={(event) => event.stopPropagation()}
            className="animate-modal-in relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-[#FFFDFB] shadow-2xl sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={() => setSelectedMoment(null)}
              aria-label="Close gallery preview"
              className="absolute right-3.5 top-3.5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF5F0]/95 text-[#3A211C] shadow-xs transition-colors hover:bg-[#F2BEC5] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="aspect-[4/3] w-full bg-[#F3EAE2]">
              <EditorialImage
                src={selectedMoment.image}
                alt={selectedMoment.imageAlt}
                fallbackTitle={selectedMoment.categoryLabel}
                containerClassName="h-full w-full"
              />
            </div>

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="text-xs font-medium text-[#8E5B52]">
                  {BRAND_INFO.instagramHandle} · {selectedMoment.categoryLabel}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#3A211C]">
                  {selectedMoment.caption}
                </p>
              </div>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-full bg-[#3A211C] px-5 py-2.5 text-xs font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029] whitespace-nowrap shrink-0 sm:w-auto"
              >
                <span>Open Instagram</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
