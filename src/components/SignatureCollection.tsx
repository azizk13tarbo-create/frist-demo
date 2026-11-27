import { useEffect, useState } from 'react';
import { ArrowDownRight, MessageCircle, X } from 'lucide-react';
import {
  BRAND_INFO,
  MENU_CATEGORIES,
  MENU_ITEMS,
  type MenuCategory,
  type MenuItem,
} from '../data/mabelleData';
import {
  buildProductEnquiryMessage,
  buildWhatsAppUrl,
  filterMenuItems,
  getCategoryCounts,
} from '../utils/mabelleLogic';
import { EditorialImage } from './EditorialImage';

export function SignatureCollection() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [activeProduct, setActiveProduct] = useState<MenuItem | null>(null);

  const filteredItems = filterMenuItems(MENU_ITEMS, selectedCategory);
  const categoryCounts = getCategoryCounts(MENU_ITEMS, MENU_CATEGORIES);

  useEffect(() => {
    if (!activeProduct) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProduct]);

  return (
    <section id="menu" className="bg-[#FAF5F0] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium tracking-[0.14em] text-[#8E5B52] sm:text-xs">
              The Signature Collection
            </p>
            <h2 className="mt-2.5 font-serif text-[clamp(1.95rem,7.2vw,2.65rem)] font-medium leading-[1.08] text-[#3A211C] sm:mt-3 sm:text-5xl">
              Crafted for Every Sweet &amp; Savoury Craving
            </h2>
          </div>

          <p className="max-w-md text-[14.5px] leading-relaxed text-[#69504B] sm:text-[15px]">
            Explore our curated selection of 100% eggless cakes, mascarpone tiramisu, chocolate
            creations, delicate pastries, and freshly plated gourmet pasta.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="no-scrollbar -mx-4 mt-7 flex items-center gap-2 overflow-x-auto border-b border-[#3A211C]/10 px-4 pb-3.5 sm:mx-0 sm:mt-10 sm:px-0 sm:pb-4"
        >
          {MENU_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex min-h-[42px] items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 whitespace-nowrap shrink-0 sm:gap-2 sm:px-4 sm:text-sm ${
                  isSelected
                    ? 'bg-[#3A211C] text-[#FAF5F0]'
                    : 'bg-[#FFFDFB]/80 text-[#5A3F3A] hover:bg-[#F9E9EC] hover:text-[#3A211C] sm:bg-transparent'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-xs tabular-nums ${
                    isSelected ? 'text-[#F2BEC5]' : 'text-[#8E6D66]'
                  }`}
                >
                  {categoryCounts[category]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div
          data-testid="menu-grid"
          className="mt-7 grid grid-cols-1 gap-x-7 gap-y-6 sm:mt-10 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3"
        >
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="animate-fade-in group flex flex-col overflow-hidden rounded-2xl border border-[#3A211C]/10 bg-[#FFFDFB] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-26px_rgba(58,33,28,0.28)]"
            >
              <button
                type="button"
                onClick={() => setActiveProduct(item)}
                aria-label={`View details for ${item.name}`}
                className="flex flex-1 flex-col text-left focus-visible:rounded-2xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <EditorialImage
                    src={item.image}
                    alt={item.imageAlt}
                    fallbackTitle={item.name}
                    containerClassName="h-full w-full"
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#8E5B52]">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.dietaryNote}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-[1.48rem] font-medium leading-snug text-[#3A211C] transition-colors group-hover:text-[#7B4B44] sm:text-[1.65rem]">
                    {item.name}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#69504B] sm:mt-2.5">
                    {item.shortDescription}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#3A211C]/10 pt-3.5 text-xs text-[#69504B] sm:mt-5 sm:pt-4">
                    <span className="truncate">{item.portion}</span>
                    <span className="font-medium text-[#3A211C] transition-transform duration-200 group-hover:translate-x-0.5 whitespace-nowrap shrink-0">
                      View Details
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* Showcase Enquiry Strip */}
        <div className="mt-11 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#F9E9EC]/75 p-6 sm:mt-14 sm:flex-row sm:items-center sm:px-9 sm:py-7">
          <div>
            <p className="font-serif text-[1.55rem] font-medium leading-snug text-[#3A211C] sm:text-[1.75rem]">
              Looking for seasonal bakes, hampers, or custom cakes?
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#69504B]">
              Speak directly with our Salt Lake patisserie team on WhatsApp or share your bespoke
              celebration cake brief.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 min-[400px]:flex-row sm:w-auto sm:flex-wrap sm:items-center sm:gap-3 shrink-0">
            <a
              href={buildWhatsAppUrl(
                'Hello Mabelle Team, I would like to enquire about your current dessert showcase and availability at Salt Lake, Sector 2.',
                BRAND_INFO.whatsappNumber,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-5 py-2.5 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029] whitespace-nowrap sm:w-auto sm:px-6"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>WhatsApp Enquiry</span>
            </a>
            <a
              href="#cake-enquiry-form"
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-1.5 rounded-full border border-[#3A211C]/20 bg-[#FFFDFB] px-5 py-2.5 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#FAF5F0] whitespace-nowrap sm:w-auto"
            >
              <span>Custom Cakes</span>
              <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Accessible Product Detail Modal (Bottom-sheet feel on mobile, centered card on desktop) */}
      {activeProduct && (
        <div
          className="animate-fade-in fixed inset-0 z-50 flex items-end justify-center bg-[#3A211C]/55 p-0 backdrop-blur-xs sm:items-center sm:p-6"
          onClick={() => setActiveProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="animate-modal-in relative grid max-h-[92dvh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-t-3xl bg-[#FFFDFB] shadow-2xl sm:rounded-3xl md:grid-cols-2"
          >
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              aria-label="Close product details"
              className="absolute right-3.5 top-3.5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF5F0]/95 text-[#3A211C] shadow-xs transition-colors hover:bg-[#F2BEC5] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="aspect-[16/11] w-full sm:aspect-[4/3] md:aspect-auto md:h-full">
              <EditorialImage
                src={activeProduct.image}
                alt={activeProduct.imageAlt}
                fallbackTitle={activeProduct.name}
                containerClassName="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-xs font-medium text-[#8E5B52]">
                    {activeProduct.category} · {activeProduct.dietaryNote}
                  </p>
                  <h3
                    id="product-modal-title"
                    className="mt-2 font-serif text-3xl font-medium leading-tight text-[#3A211C]"
                  >
                    {activeProduct.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#69504B]">{activeProduct.portion}</p>

                  <p className="mt-5 text-sm leading-relaxed text-[#553A35]">
                    {activeProduct.fullDescription}
                  </p>

                  <div className="mt-6 border-t border-[#3A211C]/10 pt-5">
                    <p className="text-xs font-medium text-[#8E5B52]">Tasting Profile</p>
                    <p className="mt-2 text-sm text-[#3A211C]">
                      {activeProduct.tastingNotes.join(' · ')}
                    </p>
                    <p className="mt-3 text-xs text-[#69504B]">
                      {activeProduct.availabilityNote}.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href={buildWhatsAppUrl(
                      buildProductEnquiryMessage(activeProduct),
                      BRAND_INFO.whatsappNumber,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-5 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <a
                    href="#cake-enquiry-form"
                    onClick={() => setActiveProduct(null)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#3A211C]/20 bg-[#FAF5F0] px-5 py-3 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#F9E9EC]"
                  >
                    <span>Custom Cake Enquiry</span>
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
      )}
    </section>
  );
}
