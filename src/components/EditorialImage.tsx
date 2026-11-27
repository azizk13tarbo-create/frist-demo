import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  fallbackTitle = 'Mabelle Patisserie',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F9E9EC] via-[#FAF5F0] to-[#EFE3D6] p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F2BEC5] font-serif text-lg text-[#3A211C]">
            M
          </span>
          <span className="font-serif text-lg text-[#3A211C]">{fallbackTitle}</span>
        </div>
      </div>
    );
  }

  const positionClass = containerClassName.includes('absolute') ? '' : 'relative';

  return (
    <div className={`${positionClass} overflow-hidden bg-[#F3EAE2] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-95'
        } ${className}`}
      />
    </div>
  );
}
