import { ArrowDownRight, ArrowUpRight, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/mabelleData';
import { buildWhatsAppUrl } from '../utils/mabelleLogic';

const GENERAL_WHATSAPP_MESSAGE =
  'Hello Mabelle Team, I would like to enquire about your desserts, custom cakes, or visiting your Salt Lake, Sector 2 bakery.';

export function LocationContact() {
  const whatsappUrl = buildWhatsAppUrl(GENERAL_WHATSAPP_MESSAGE, BRAND_INFO.whatsappNumber);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-[#FAF5F0] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-[#3A211C]/10 bg-[#FFFDFB] sm:rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Visit Details */}
            <div className="p-6 sm:p-12 lg:col-span-7 lg:p-14">
              <p className="text-[11px] font-medium tracking-[0.14em] text-[#8E5B52] sm:text-xs">
                Visit &amp; Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-2.5 font-serif text-[clamp(1.95rem,7.2vw,2.65rem)] font-medium leading-[1.08] text-[#3A211C] sm:mt-3 sm:text-5xl"
              >
                Find Mabelle in Salt Lake, Kolkata
              </h2>
              <p className="mt-3.5 max-w-lg text-[14.5px] leading-relaxed text-[#69504B] sm:mt-4 sm:text-[15px]">
                Drop by our Salt Lake patisserie for freshly baked 100% eggless desserts and
                gourmet pasta, or connect with us directly on WhatsApp for custom celebration cakes
                and curated gifting.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-6 border-t border-[#3A211C]/12 pt-6 sm:mt-9 sm:grid-cols-2 sm:gap-7 sm:pt-8">
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
                    className="mt-2 inline-flex min-h-[44px] items-center gap-1.5 text-xs font-medium text-[#3A211C] underline-offset-4 hover:text-[#8E5B52] hover:underline sm:min-h-0 sm:mt-3"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>

                <div>
                  <p className="text-xs font-medium text-[#8E5B52]">Connect With Us</p>
                  <ul className="mt-1 space-y-1 text-sm text-[#3A211C] sm:mt-2 sm:space-y-2.5">
                    <li>
                      <a
                        href={BRAND_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-[#8E5B52] sm:min-h-0"
                      >
                        <Instagram className="h-4 w-4 text-[#8E5B52] shrink-0" aria-hidden="true" />
                        <span>{BRAND_INFO.instagramHandle}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-[#8E5B52] sm:min-h-0"
                      >
                        <MessageCircle
                          className="h-4 w-4 text-[#8E5B52] shrink-0"
                          aria-hidden="true"
                        />
                        <span>WhatsApp Concierge</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Blush Editorial Action Panel */}
            <div className="flex flex-col justify-between bg-[#F9E9EC]/80 p-6 sm:p-12 lg:col-span-5 lg:p-14">
              <div>
                <p className="text-[11px] font-medium tracking-[0.14em] text-[#8E5B52] sm:text-xs">
                  Direct Enquiries
                </p>
                <h3 className="mt-2.5 font-serif text-[1.75rem] font-medium leading-tight text-[#3A211C] sm:mt-3 sm:text-3xl">
                  Speak With Our Patisserie Team Directly
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#553A35]">
                  Reach out via WhatsApp for daily bakes, custom celebration cakes, gift hampers,
                  and table enquiries at our Salt Lake bar.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-6 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href="#cake-enquiry-form"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#3A211C]/25 bg-[#FFFDFB] px-6 py-3 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#FAF5F0]"
                >
                  <span>Custom Cake Form</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
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
