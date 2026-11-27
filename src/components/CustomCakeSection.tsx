import { useRef, useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import {
  BRAND_INFO,
  CAKE_FLAVOUR_OPTIONS,
  CAKE_SIZE_OPTIONS,
  CUSTOM_CAKE_GALLERY,
  type CustomCakeShowcase,
} from '../data/mabelleData';
import {
  buildCakeEnquiryMessage,
  buildWhatsAppUrl,
  validateCakeEnquiry,
  type CakeEnquiryInput,
} from '../utils/mabelleLogic';
import { EditorialImage } from './EditorialImage';

const INITIAL_FORM_STATE: CakeEnquiryInput = {
  customerName: '',
  phone: '',
  eventDate: '',
  occasion: '',
  flavour: '',
  cakeSize: '',
  inspirationStyle: '',
  designNotes: '',
};

export function CustomCakeSection() {
  const [formData, setFormData] = useState<CakeEnquiryInput>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof CakeEnquiryInput, string>>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const formSectionRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 350);
  };

  const handleSelectInspiration = (cake: CustomCakeShowcase) => {
    setSubmittedMessage(null);
    setFormData((prev) => ({
      ...prev,
      inspirationStyle: cake.title,
      flavour: prev.flavour || CAKE_FLAVOUR_OPTIONS[0],
    }));
    scrollToForm();
  };

  const handleChange = (field: keyof CakeEnquiryInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateCakeEnquiry(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmittedMessage(null);
      return;
    }

    setErrors({});
    const formatted = buildCakeEnquiryMessage(formData);
    setSubmittedMessage(formatted);
    setCopied(false);
  };

  const handleCopyMessage = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setSubmittedMessage(null);
    setCopied(false);
  };

  return (
    <section id="custom-cakes" className="bg-[#FAF5F0] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
              The Custom Cake Atelier
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-[#3A211C] sm:text-5xl">
              Bespoke Cakes Shaped Around Your Celebration
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-md text-[15px] leading-relaxed text-[#69504B] lg:text-right">
              Every custom cake is handcrafted 100% eggless in our Salt Lake kitchen — tailored in
              flavour, palette, and texture for moments worth remembering.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#3A211C] px-7 py-3 text-sm font-medium text-[#FAF5F0] transition-all duration-200 hover:bg-[#523029] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>Create Your Dream Cake</span>
            </button>
          </div>
        </div>

        {/* 3-Column Editorial Portrait Gallery */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {CUSTOM_CAKE_GALLERY.map((cake) => (
            <article
              key={cake.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#3A211C]/10 bg-[#FFFDFB]"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <EditorialImage
                  src={cake.image}
                  alt={cake.imageAlt}
                  fallbackTitle={cake.title}
                  containerClassName="h-full w-full"
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-[#8E5B52]">{cake.styleTag}</p>
                <h3 className="mt-1.5 font-serif text-[1.6rem] font-medium leading-snug text-[#3A211C]">
                  {cake.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#69504B]">
                  {cake.description}
                </p>
                <p className="mt-4 text-xs text-[#8E6D66]">{cake.occasion}</p>

                <button
                  type="button"
                  onClick={() => handleSelectInspiration(cake)}
                  className="mt-5 inline-flex min-h-[42px] w-full items-center justify-center rounded-full border border-[#3A211C]/20 bg-[#FAF5F0] px-4 py-2 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#F9E9EC]"
                >
                  Use as Inspiration
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bespoke Custom Cake Enquiry Form */}
        <div
          ref={formSectionRef}
          id="cake-enquiry-form"
          className="mt-16 overflow-hidden rounded-3xl border border-[#3A211C]/10 bg-[#FFFDFB] shadow-[0_24px_60px_-34px_rgba(58,33,28,0.18)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Editorial Brief Column */}
            <div className="flex flex-col justify-between bg-[#F9E9EC]/65 p-8 sm:p-10 lg:col-span-5 lg:p-12">
              <div>
                <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
                  Bespoke Enquiry
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#3A211C] sm:text-4xl">
                  Create Your Dream Cake
                </h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#553A35]">
                  Share your celebration date, flavour preferences, and design inspiration below.
                  We will prepare a clear, structured WhatsApp enquiry so our team can confirm
                  design possibilities and timelines with you directly.
                </p>

                <div className="mt-8 space-y-4 border-t border-[#3A211C]/12 pt-6 text-sm text-[#553A35]">
                  <div>
                    <p className="font-medium text-[#3A211C]">100% Eggless Atelier</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#69504B]">
                      All tiered, vintage piped, and minimalist celebration cakes are crafted
                      entirely eggless.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-[#3A211C]">Salt Lake Pickup &amp; Coordination</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#69504B]">
                      Prepared fresh at {BRAND_INFO.addressLine1}, Kolkata. Share reference photos
                      directly on WhatsApp after sending your brief.
                    </p>
                  </div>
                </div>
              </div>

              {formData.inspirationStyle && (
                <div className="mt-8 rounded-2xl bg-[#FFFDFB]/85 p-4 text-xs text-[#553A35]">
                  <span className="font-medium text-[#3A211C]">Selected Inspiration:</span>{' '}
                  {formData.inspirationStyle}
                </div>
              )}
            </div>

            {/* Right Interactive Form Column */}
            <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
              {submittedMessage ? (
                <div
                  data-testid="cake-enquiry-summary"
                  className="flex h-full flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
                      Enquiry Ready to Send
                    </p>
                    <h4 className="mt-2 font-serif text-3xl font-medium text-[#3A211C]">
                      Your Custom Cake Brief is Prepared
                    </h4>
                    <p className="mt-2 text-sm text-[#69504B]">
                      Review your details below and continue to WhatsApp to send your enquiry
                      directly to the Mabelle kitchen team.
                    </p>

                    <pre className="mt-6 whitespace-pre-wrap rounded-2xl border border-[#3A211C]/10 bg-[#FAF5F0] p-5 font-sans text-sm leading-relaxed text-[#3A211C]">
                      {submittedMessage}
                    </pre>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href={buildWhatsAppUrl(submittedMessage, BRAND_INFO.whatsappNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#3A211C] px-6 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-[#3A211C]/20 bg-[#FAF5F0] px-5 py-3 text-sm font-medium text-[#3A211C] transition-colors hover:bg-[#F9E9EC]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4" aria-hidden="true" />
                          <span>Message Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          <span>Copy Enquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="ml-auto text-sm font-medium text-[#69504B] underline-offset-4 hover:text-[#3A211C] hover:underline"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cake-name"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        Your Name *
                      </label>
                      <input
                        ref={nameInputRef}
                        id="cake-name"
                        type="text"
                        value={formData.customerName}
                        onChange={(e) => handleChange('customerName', e.target.value)}
                        placeholder="e.g. Ananya Sen"
                        aria-invalid={Boolean(errors.customerName)}
                        aria-describedby={errors.customerName ? 'cake-name-error' : undefined}
                        className="mt-2 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-sm text-[#3A211C] placeholder:text-[#9C817A] focus:border-[#3A211C] focus:bg-[#FFFDFB]"
                      />
                      {errors.customerName && (
                        <p id="cake-name-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                          {errors.customerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cake-phone"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        id="cake-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="e.g. +91 98300 00000"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'cake-phone-error' : undefined}
                        className="mt-2 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-sm text-[#3A211C] placeholder:text-[#9C817A] focus:border-[#3A211C] focus:bg-[#FFFDFB]"
                      />
                      {errors.phone && (
                        <p id="cake-phone-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cake-date"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        Celebration Date *
                      </label>
                      <input
                        id="cake-date"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleChange('eventDate', e.target.value)}
                        aria-invalid={Boolean(errors.eventDate)}
                        aria-describedby={errors.eventDate ? 'cake-date-error' : undefined}
                        className="mt-2 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-sm text-[#3A211C] focus:border-[#3A211C] focus:bg-[#FFFDFB]"
                      />
                      {errors.eventDate && (
                        <p id="cake-date-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                          {errors.eventDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cake-occasion"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        Occasion (Optional)
                      </label>
                      <input
                        id="cake-occasion"
                        type="text"
                        value={formData.occasion}
                        onChange={(e) => handleChange('occasion', e.target.value)}
                        placeholder="Birthday, Anniversary, Bridal Shower..."
                        className="mt-2 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-sm text-[#3A211C] placeholder:text-[#9C817A] focus:border-[#3A211C] focus:bg-[#FFFDFB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cake-flavour"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        Preferred Flavour *
                      </label>
                      <select
                        id="cake-flavour"
                        value={formData.flavour}
                        onChange={(e) => handleChange('flavour', e.target.value)}
                        aria-invalid={Boolean(errors.flavour)}
                        aria-describedby={errors.flavour ? 'cake-flavour-error' : undefined}
                        className="mt-2 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-sm text-[#3A211C] focus:border-[#3A211C] focus:bg-[#FFFDFB]"
                      >
                        <option value="">Select a flavour</option>
                        {CAKE_FLAVOUR_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.flavour && (
                        <p id="cake-flavour-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                          {errors.flavour}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cake-size"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        Approximate Size *
                      </label>
                      <select
                        id="cake-size"
                        value={formData.cakeSize}
                        onChange={(e) => handleChange('cakeSize', e.target.value)}
                        aria-invalid={Boolean(errors.cakeSize)}
                        aria-describedby={errors.cakeSize ? 'cake-size-error' : undefined}
                        className="mt-2 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-sm text-[#3A211C] focus:border-[#3A211C] focus:bg-[#FFFDFB]"
                      >
                        <option value="">Select a size</option>
                        {CAKE_SIZE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.cakeSize && (
                        <p id="cake-size-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                          {errors.cakeSize}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cake-notes"
                      className="block text-xs font-medium text-[#3A211C]"
                    >
                      Design Notes, Colour Palette &amp; Inscription *
                    </label>
                    <textarea
                      id="cake-notes"
                      rows={3}
                      value={formData.designNotes}
                      onChange={(e) => handleChange('designNotes', e.target.value)}
                      placeholder="Describe your colour palette, piping style, message on the cake, or theme..."
                      aria-invalid={Boolean(errors.designNotes)}
                      aria-describedby={errors.designNotes ? 'cake-notes-error' : undefined}
                      className="mt-2 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-sm text-[#3A211C] placeholder:text-[#9C817A] focus:border-[#3A211C] focus:bg-[#FFFDFB]"
                    />
                    {errors.designNotes && (
                      <p id="cake-notes-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                        {errors.designNotes}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-[#69504B]">
                      All custom cakes are crafted 100% eggless.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#3A211C] px-7 py-3 text-sm font-medium text-[#FAF5F0] transition-all duration-200 hover:bg-[#523029] active:scale-[0.98]"
                    >
                      <span>Prepare WhatsApp Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
