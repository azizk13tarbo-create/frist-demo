const MABELLE_LOGO_SRC = '/assets/aistudio/frist_demo_logo_e117f54c.jpg';

interface MabelleLogoProps {
  variant?: 'default' | 'light' | 'emblem';
  className?: string;
}

function CircularLogoMark({ sizeClass }: { sizeClass: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#F1BCC2] ring-1 ring-[#3A211C]/8 ${sizeClass}`}
      aria-hidden="true"
    >
      <img
        src={MABELLE_LOGO_SRC}
        alt=""
        decoding="async"
        className="h-full w-full object-cover [transform:scale(1.36)_translate(-5.18%,-5.45%)] select-none"
      />
    </span>
  );
}

export function MabelleLogo({ variant = 'default', className = '' }: MabelleLogoProps) {
  if (variant === 'emblem') {
    return <CircularLogoMark sizeClass={`h-12 w-12 shadow-xs ${className}`} />;
  }

  const textColor = variant === 'light' ? 'text-[#FAF5F0]' : 'text-[#3A211C]';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <CircularLogoMark sizeClass="h-9 w-9" />
      <span
        className={`font-serif text-[1.7rem] font-medium tracking-[0.03em] leading-none ${textColor}`}
      >
        Mabelle
      </span>
    </span>
  );
}
