import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/mabelleData';
import { MabelleLogo } from './MabelleLogo';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Custom Cakes', href: '#custom-cakes' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'border-b border-[#3A211C]/10 bg-[#FAF5F0]/95 backdrop-blur-md'
          : 'bg-[#FAF5F0]/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-5 sm:px-8 lg:h-20 lg:px-10">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          aria-label="Mabelle Home"
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:rounded-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <MabelleLogo />
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-[#5A3F3A] transition-colors duration-200 hover:text-[#3A211C] whitespace-nowrap shrink-0"
            >
              {link.label}
              <span
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#3A211C] transition-transform duration-200 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BRAND_INFO.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-[#3A211C] px-5 py-2.5 text-sm font-medium text-[#FAF5F0] transition-all duration-200 hover:bg-[#523029] active:scale-[0.98] whitespace-nowrap shrink-0 md:inline-flex"
          >
            <span>Order Now</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#3A211C]/15 text-[#3A211C] transition-colors hover:bg-[#F9E9EC] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="border-t border-[#3A211C]/10 bg-[#FAF5F0] px-6 pb-7 pt-5 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-[#3A211C]/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3.5 font-serif text-2xl font-medium text-[#3A211C] transition-colors hover:text-[#8E5B52]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href={BRAND_INFO.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-6 py-3.5 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029]"
            >
              <span>Order Now</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
