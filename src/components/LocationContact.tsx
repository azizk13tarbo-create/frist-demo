import { ArrowUpRight, Instagram, MapPin, MessageCircle, ShoppingBag } from 'lucide-react';
import { BRAND_INFO } from '../data/mabelleData';
import { buildWhatsAppUrl } from '../utils/mabelleLogic';

const GENERAL_WHATSAPP_MESSAGE =
  'Hello Mabelle Team, I would like to enquire about placing an order or visiting your Salt Lake, Sector 2 bakery.';

export function LocationContact() {
  const whatsappUrl = buildWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE, BRAND_INFO.whatsappNumber);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[#FAF5F0] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-[#3A211C]/10 bg-[#FFFDFB]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Visit Details */}
            <div className="p-8 sm:p-12 lg:col-span-7 lg:p-14">
              <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
                Visit &amp; Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-[#3A211C] sm:text-5xl"
              >
                Find Mabelle in Salt Lake, Kolkata
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#69504B]">
                Drop by for freshly baked 100% eggless desserts and gourmet pasta, order online for
                convenience, or message us on WhatsApp for custom cake enquiries and gifting.
              </p>

              <div className="mt-9 grid grid-cols-1 gap-7 border-t border-[#3A211C]/12 pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium text-[#8E5B52]">Address</p>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-[#3A211C]">
                    {BRAND_INFO.addressLine1}
                    <br />
                    {BRAND_INFO.addressLine2}
                  </address>
                  <a
                    href={BRAND_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#3A211C] underline-offset-4 hover:text-[#8E5B52] hover:underline"
                  >
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>

                <div>
                  <p className="text-xs font-medium text-[#8E5B52]">Connect &amp; Order</p>
                  <ul className="mt-2 space-y-2.5 text-sm text-[#3A211C]">
                    <li>
                      <a
                        href={BRAND_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-[#8E5B52]"
                      >
                        <Instagram className="h-4 w-4 text-[#8E5B52]" aria-hidden="true" />
                        <span>{BRAND_INFO.instagramHandle}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={BRAND_INFO.orderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-[#8E5B52]"
                      >
                        <ShoppingBag className="h-4 w-4 text-[#8E5B52]" aria-hidden="true" />
                        <span>airmenus.in/mabelle/order</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Blush Editorial Action Panel */}
            <div className="flex flex-col justify-between bg-[#F9E9EC]/80 p-8 sm:p-12 lg:col-span-5 lg:p-14">
              <div>
                <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
                  Direct Ordering &amp; Enquiries
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#3A211C]">
                  Order Today&apos;s Bakes or Speak With Us Directly
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#553A35]">
                  Place an immediate order through our AirMenus storefront, or reach out via
                  WhatsApp for custom celebration cakes, hampers, and availability.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3.5">
                <a
                  href={BRAND_INFO.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-6 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029]"
                >
                  <span>Order Online Now</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#3A211C]/25 bg-[#FFFDFB] px-6 py-3 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#FAF5F0]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 text-sm font-medium text-[#553A35] transition-colors hover:text-[#3A211C]"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span>Follow {BRAND_INFO.instagramHandle} on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
