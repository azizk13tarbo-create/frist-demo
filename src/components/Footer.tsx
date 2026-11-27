import { Instagram, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/mabelleData';
import { buildWhatsAppUrl } from '../utils/mabelleLogic';
import { MabelleLogo } from './MabelleLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(
    'Hello Mabelle Team, I would like to enquire about your desserts and custom cakes.',
    BRAND_INFO.whatsappNumber,
  );

  return (
    <footer className="bg-[#2B1713] text-[#FAF5F0]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-9 border-b border-[#FAF5F0]/12 pb-10 sm:gap-10 sm:pb-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#home" aria-label="Mabelle Home" className="inline-flex min-h-[44px] items-center">
              <MabelleLogo variant="light" />
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#E3D5CC] sm:mt-4">
              A 100% eggless bakery, dessert, and pasta bar by {BRAND_INFO.founder} in Salt Lake,
              Kolkata — crafting handcrafted cakes, tiramisu, chocolate desserts, and warm plates
              of gourmet pasta.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.14em] text-[#F2BEC5]">Explore</p>
            <ul className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-[#E3D5CC] sm:mt-4 sm:block sm:space-y-2.5">
              <li>
                <a
                  href="#home"
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-[#FAF5F0] sm:min-h-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-[#FAF5F0] sm:min-h-0"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="#custom-cakes"
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-[#FAF5F0] sm:min-h-0"
                >
                  Custom Cakes
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-[#FAF5F0] sm:min-h-0"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-[#FAF5F0] sm:min-h-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Social Column */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.14em] text-[#F2BEC5]">
              Visit &amp; Connect
            </p>
            <address className="mt-3.5 not-italic text-sm leading-relaxed text-[#E3D5CC] sm:mt-4">
              {BRAND_INFO.addressLine1}
              <br />
              {BRAND_INFO.addressLine2}
            </address>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:mt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-[#F2BEC5] transition-colors hover:text-[#FAF5F0] sm:min-h-0"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </a>
              <span className="text-[#FAF5F0]/25" aria-hidden="true">
                ·
              </span>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-[#E3D5CC] transition-colors hover:text-[#FAF5F0] sm:min-h-0"
              >
                <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{BRAND_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2.5 pt-6 text-xs text-[#C7B3A8] sm:flex-row sm:items-center sm:gap-3 sm:pt-7">
          <p>
            © {currentYear} {BRAND_INFO.name}. {BRAND_INFO.tagline} · {BRAND_INFO.speciality}.
          </p>
          <p>Salt Lake, Sector 2, Kolkata</p>
        </div>
      </div>
    </footer>
  );
}
