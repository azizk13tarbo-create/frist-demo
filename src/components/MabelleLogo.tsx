interface MabelleLogoProps {
  variant?: 'default' | 'light' | 'emblem';
  className?: string;
}

export function MabelleLogo({ variant = 'default', className = '' }: MabelleLogoProps) {
  if (variant === 'emblem') {
    return (
      <span
        className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F2BEC5] text-[#3A211C] shadow-xs ${className}`}
        aria-hidden="true"
      >
        <span className="font-serif text-xl font-medium tracking-tight leading-none">M</span>
      </span>
    );
  }

  const textColor = variant === 'light' ? 'text-[#FAF5F0]' : 'text-[#3A211C]';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <span
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F2BEC5] text-[#3A211C] shrink-0"
        aria-hidden="true"
      >
        <span className="font-serif text-lg font-medium leading-none tracking-tight">M</span>
      </span>
      <span
        className={`font-serif text-[1.7rem] font-medium tracking-[0.03em] leading-none ${textColor}`}
      >
        Mabelle
      </span>
    </span>
  );
}
