import { useEffect, useState } from 'react';
import { ArrowDownRight, Menu, X } from 'lucide-react';
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

  const handleInternalNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetHash: string,
  ) => {
    event.preventDefault();
    setMobileMenuOpen(false);

    if (targetHash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '#home');
      return;
    }

    const targetId = targetHash.replace(/^#/, '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', targetHash);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
          isScrolled || mobileMenuOpen
            ? 'border-b border-[#3A211C]/10 bg-[#FAF5F0]/96 backdrop-blur-md'
            : 'bg-[#FAF5F0]/88 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8 md:gap-8 lg:h-20 lg:px-10">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            aria-label="Mabelle Home"
            className="inline-flex min-h-[44px] items-center whitespace-nowrap shrink-0 focus-visible:rounded-sm"
            onClick={(event) => handleInternalNavigate(event, '#home')}
          >
            <MabelleLogo />
          </a>

          {/* Zone 2: Primary Navigation Links */}
          <nav aria-label="Primary Navigation" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleInternalNavigate(event, link.href)}
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

          {/* Zone 3: Single Primary Internal Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#cake-enquiry-form"
              onClick={(event) => handleInternalNavigate(event, '#cake-enquiry-form')}
              className="hidden items-center gap-1.5 rounded-full bg-[#3A211C] px-5 py-2.5 text-sm font-medium text-[#FAF5F0] transition-all duration-200 hover:bg-[#523029] active:scale-[0.98] whitespace-nowrap shrink-0 md:inline-flex"
            >
              <span>Enquire Now</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 md:hidden ${
                mobileMenuOpen
                  ? 'border-[#3A211C]/25 bg-[#F9E9EC] text-[#3A211C]'
                  : 'border-[#3A211C]/14 bg-[#FFFDFB]/85 text-[#3A211C] hover:bg-[#F9E9EC]'
              }`}
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
            className="animate-drawer-in border-t border-[#3A211C]/10 bg-[#FAF5F0] px-5 pb-6 pt-3 shadow-[0_24px_48px_-24px_rgba(58,33,28,0.28)] md:hidden"
          >
            <ul className="flex flex-col divide-y divide-[#3A211C]/10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleInternalNavigate(event, link.href)}
                    className="flex min-h-[48px] items-center justify-between py-2.5 font-serif text-[1.45rem] font-medium text-[#3A211C] transition-colors hover:text-[#8E5B52]"
                  >
                    <span>{link.label}</span>
                    <ArrowDownRight className="h-4 w-4 text-[#B59264]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="#cake-enquiry-form"
                onClick={(event) => handleInternalNavigate(event, '#cake-enquiry-form')}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-6 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029] active:scale-[0.98]"
              >
                <span>Enquire Now</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-4 text-center text-xs text-[#69504B]">
                Salt Lake, Sector 2 · 100% Eggless Patisserie
              </p>
            </div>
          </nav>
        )}
      </header>

      {/* Tap-outside backdrop when mobile drawer is open */}
      {mobileMenuOpen && (
        <div
          className="animate-fade-in fixed inset-0 z-30 bg-[#3A211C]/25 backdrop-blur-[2px] md:hidden"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
