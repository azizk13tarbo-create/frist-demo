import { useEffect, useState } from 'react';
import { BrandStory } from './components/BrandStory';
import { CustomCakeSection } from './components/CustomCakeSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InstagramGallery } from './components/InstagramGallery';
import { LocationContact } from './components/LocationContact';
import { MabelleLogo } from './components/MabelleLogo';
import { Navbar } from './components/Navbar';
import { OurSpeciality } from './components/OurSpeciality';
import { PastaDessertBar } from './components/PastaDessertBar';
import { SignatureCollection } from './components/SignatureCollection';

function shouldSkipIntro(): boolean {
  if (typeof window === 'undefined') return true;
  const params = new URLSearchParams(window.location.search);
  if (params.get('autostart') === '1') return true;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return true;
  }
  return false;
}

export default function App() {
  const [introPhase, setIntroPhase] = useState<'visible' | 'fading' | 'hidden'>(() =>
    shouldSkipIntro() ? 'hidden' : 'visible',
  );

  useEffect(() => {
    if (introPhase === 'hidden') return;

    const fadeTimer = window.setTimeout(() => {
      setIntroPhase('fading');
    }, 420);

    const hideTimer = window.setTimeout(() => {
      setIntroPhase('hidden');
    }, 880);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [introPhase]);

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#3A211C]">
      {/* Refined non-blocking entrance veil */}
      {introPhase !== 'hidden' && (
        <div
          className={`pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF5F0] transition-opacity duration-500 ease-out ${
            introPhase === 'fading' ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        >
          <MabelleLogo />
          <p className="mt-3 text-xs tracking-[0.18em] text-[#8E5B52]">
            Salt Lake, Kolkata
          </p>
        </div>
      )}

      <Navbar />

      <main>
        <HeroSection />
        <SignatureCollection />
        <OurSpeciality />
        <CustomCakeSection />
        <PastaDessertBar />
        <BrandStory />
        <InstagramGallery />
        <LocationContact />
      </main>

      <Footer />
    </div>
  );
}
