import { ArrowUpRight, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/mabelleData';
import { MabelleLogo } from './MabelleLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B1713] text-[#FAF5F0]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-[#FAF5F0]/12 pb-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <MabelleLogo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#E3D5CC]">
              A 100% eggless bakery, dessert, and pasta bar by {BRAND_INFO.founder} in Salt Lake,
              Kolkata — crafting handcrafted cakes, tiramisu, chocolate desserts, and warm plates
              of gourmet pasta.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.14em] text-[#F2BEC5]">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#E3D5CC]">
              <li>
                <a href="#home" className="transition-colors hover:text-[#FAF5F0]">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="transition-colors hover:text-[#FAF5F0]">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#custom-cakes" className="transition-colors hover:text-[#FAF5F0]">
                  Custom Cakes
                </a>
              </li>
              <li>
                <a href="#story" className="transition-colors hover:text-[#FAF5F0]">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#FAF5F0]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Social Column */}
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-[0.14em] text-[#F2BEC5]">Visit &amp; Order</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-[#E3D5CC]">
              {BRAND_INFO.addressLine1}
              <br />
              {BRAND_INFO.addressLine2}
            </address>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
              <a
                href={BRAND_INFO.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#F2BEC5] transition-colors hover:text-[#FAF5F0]"
              >
                <span>Order Now</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="text-[#FAF5F0]/25" aria-hidden="true">
                ·
              </span>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#E3D5CC] transition-colors hover:text-[#FAF5F0]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>{BRAND_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-7 text-xs text-[#C7B3A8] sm:flex-row sm:items-center">
          <p>
            © {currentYear} {BRAND_INFO.name}. {BRAND_INFO.tagline} · {BRAND_INFO.speciality}.
          </p>
          <p>Salt Lake, Sector 2, Kolkata</p>
        </div>
      </div>
    </footer>
  );
}
