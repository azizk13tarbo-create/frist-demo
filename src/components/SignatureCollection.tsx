import { useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
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
    <section id="menu" className="bg-[#FAF5F0] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
              The Signature Collection
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.1] text-[#3A211C] sm:text-5xl">
              Crafted for Every Sweet &amp; Savoury Craving
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-relaxed text-[#69504B]">
            Explore our curated selection of 100% eggless cakes, mascarpone tiramisu, chocolate
            creations, delicate pastries, and freshly plated gourmet pasta.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-10 flex items-center gap-2 overflow-x-auto border-b border-[#3A211C]/10 pb-4"
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
                className={`inline-flex min-h-[40px] items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#3A211C] text-[#FAF5F0]'
                    : 'bg-transparent text-[#5A3F3A] hover:bg-[#F9E9EC] hover:text-[#3A211C]'
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
          className="mt-10 grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
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

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-[#8E5B52]">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.dietaryNote}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-[1.65rem] font-medium leading-snug text-[#3A211C] transition-colors group-hover:text-[#7B4B44]">
                    {item.name}
                  </h3>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#69504B]">
                    {item.shortDescription}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#3A211C]/10 pt-4 text-xs text-[#69504B]">
                    <span>{item.portion}</span>
                    <span className="font-medium text-[#3A211C] transition-transform duration-200 group-hover:translate-x-0.5">
                      View Details
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* Ordering Menu Direct Strip */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#F9E9EC]/75 p-7 sm:flex-row sm:items-center sm:px-9">
          <div>
            <p className="font-serif text-2xl font-medium text-[#3A211C] sm:text-[1.75rem]">
              Ready to browse today&apos;s live menu &amp; order online?
            </p>
            <p className="mt-1 text-sm text-[#69504B]">
              View real-time availability, seasonal bakes, and ordering options directly on our
              official AirMenus portal.
            </p>
          </div>
          <a
            href={BRAND_INFO.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#3A211C] px-6 py-2.5 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029] whitespace-nowrap shrink-0"
          >
            <span>Open Order Menu</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Accessible Product Detail Modal */}
      {activeProduct && (
        <div
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-[#3A211C]/50 p-4 backdrop-blur-xs sm:p-6"
          onClick={() => setActiveProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="animate-modal-in relative grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-3xl bg-[#FFFDFB] shadow-2xl md:grid-cols-2"
          >
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                aria-label="Close product details"
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF5F0]/90 text-[#3A211C] transition-colors hover:bg-[#F2BEC5]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="aspect-[4/3] w-full md:aspect-auto md:h-full">
                <EditorialImage
                  src={activeProduct.image}
                  alt={activeProduct.imageAlt}
                  fallbackTitle={activeProduct.name}
                  containerClassName="h-full w-full"
                />
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-8">
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
                      {activeProduct.availabilityNote}. Live pricing is displayed on our official
                      ordering portal.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href={BRAND_INFO.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-5 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029]"
                  >
                    <span>Order on AirMenus</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href={buildWhatsAppUrl(
                      buildProductEnquiryMessage(activeProduct),
                      BRAND_INFO.whatsappNumber,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#3A211C]/20 bg-[#FAF5F0] px-5 py-3 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#F9E9EC]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
      )}
    </section>
  );
}
