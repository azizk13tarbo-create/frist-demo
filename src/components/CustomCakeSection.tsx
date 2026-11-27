import { useRef, useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import {
  BRAND_INFO,
  CAKE_TYPE_OPTIONS,
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
  cakeType: '',
  preferredDate: '',
  message: '',
  inspirationStyle: '',
};

const DIRECT_WHATSAPP_CAKE_MESSAGE =
  'Hello Mabelle Team, I would like to enquire about a 100% eggless custom celebration cake.';

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
      cakeType: cake.suggestedCakeType,
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
    <section id="custom-cakes" className="bg-[#FAF5F0] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.14em] text-[#8E5B52] sm:text-xs">
              The Custom Cake Atelier
            </p>
            <h2 className="mt-2.5 font-serif text-[clamp(1.95rem,7.2vw,2.65rem)] font-medium leading-[1.08] text-[#3A211C] sm:mt-3 sm:text-5xl">
              Bespoke Cakes Shaped Around Your Celebration
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <p className="max-w-md text-[14.5px] leading-relaxed text-[#69504B] sm:text-[15px] lg:text-right">
              Every custom cake is handcrafted 100% eggless in our Salt Lake kitchen — tailored in
              flavour, palette, and texture for moments worth remembering.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-7 py-3 text-sm font-medium text-[#FAF5F0] transition-all duration-200 hover:bg-[#523029] active:scale-[0.98] whitespace-nowrap shrink-0 sm:w-auto"
            >
              <span>Create Your Dream Cake</span>
            </button>
          </div>
        </div>

        {/* 3-Column Editorial Portrait Gallery */}
        <div className="mt-9 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
          {CUSTOM_CAKE_GALLERY.map((cake) => (
            <article
              key={cake.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#3A211C]/10 bg-[#FFFDFB]"
            >
              <div className="aspect-[4/4.1] w-full overflow-hidden sm:aspect-[4/4] md:aspect-[3/4]">
                <EditorialImage
                  src={cake.image}
                  alt={cake.imageAlt}
                  fallbackTitle={cake.title}
                  containerClassName="h-full w-full"
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs text-[#8E5B52]">{cake.styleTag}</p>
                <h3 className="mt-1.5 font-serif text-[1.48rem] font-medium leading-snug text-[#3A211C] sm:text-[1.6rem]">
                  {cake.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#69504B] sm:mt-2.5">
                  {cake.description}
                </p>
                <p className="mt-3.5 text-xs text-[#8E6D66] sm:mt-4">{cake.occasion}</p>

                <button
                  type="button"
                  onClick={() => handleSelectInspiration(cake)}
                  className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-[#3A211C]/20 bg-[#FAF5F0] px-4 py-2.5 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#F9E9EC] sm:mt-5 sm:min-h-[42px] sm:py-2"
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
          className="mt-11 overflow-hidden rounded-2xl border border-[#3A211C]/10 bg-[#FFFDFB] shadow-[0_24px_60px_-34px_rgba(58,33,28,0.18)] sm:mt-16 sm:rounded-3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Editorial Brief Column */}
            <div className="flex flex-col justify-between bg-[#F9E9EC]/65 p-6 sm:p-10 lg:col-span-5 lg:p-12">
              <div>
                <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
                  Bespoke Enquiry
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#3A211C] sm:text-4xl">
                  Create Your Dream Cake
                </h3>
                <p className="mt-4 text-sm leading-[1.75] text-[#553A35]">
                  Share your preferred cake type, celebration date, and design notes below. We will
                  prepare a clear WhatsApp enquiry so our team can discuss flavours, palette, and
                  pickup details with you directly.
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

              <div className="mt-8 space-y-4">
                {formData.inspirationStyle && (
                  <div className="rounded-2xl bg-[#FFFDFB]/85 p-4 text-xs text-[#553A35]">
                    <span className="font-medium text-[#3A211C]">Selected Inspiration:</span>{' '}
                    {formData.inspirationStyle}
                  </div>
                )}

                <a
                  href={buildWhatsAppUrl(DIRECT_WHATSAPP_CAKE_MESSAGE, BRAND_INFO.whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#3A211C]/20 bg-[#FFFDFB] px-5 py-2.5 text-sm font-medium text-[#3A211C] transition-colors hover:border-[#3A211C] hover:bg-[#FAF5F0]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Form Column */}
            <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
              {submittedMessage ? (
                <div
                  data-testid="cake-enquiry-summary"
                  className="flex h-full flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-medium tracking-[0.14em] text-[#8E5B52]">
                      Enquiry Ready to Send
                    </p>
                    <h4 className="mt-2 font-serif text-[1.75rem] font-medium leading-tight text-[#3A211C] sm:text-3xl">
                      Your Custom Cake Brief is Prepared
                    </h4>
                    <p className="mt-2 text-sm text-[#69504B]">
                      Review your details below and continue to WhatsApp to send your enquiry
                      directly to the Mabelle kitchen team.
                    </p>

                    <pre className="mt-5 whitespace-pre-wrap break-words rounded-2xl border border-[#3A211C]/10 bg-[#FAF5F0] p-4 font-sans text-sm leading-relaxed text-[#3A211C] sm:mt-6 sm:p-5">
                      {submittedMessage}
                    </pre>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center">
                    <a
                      href={buildWhatsAppUrl(submittedMessage, BRAND_INFO.whatsappNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-6 py-3 text-sm font-medium text-[#FAF5F0] transition-colors hover:bg-[#523029] sm:w-auto"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border border-[#3A211C]/20 bg-[#FAF5F0] px-5 py-3 text-sm font-medium text-[#3A211C] transition-colors hover:bg-[#F9E9EC] sm:w-auto"
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
                      className="min-h-[44px] text-center text-sm font-medium text-[#69504B] underline-offset-4 hover:text-[#3A211C] hover:underline sm:ml-auto sm:text-left"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label
                        htmlFor="cake-name"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        Customer Name *
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
                        className="mt-1.5 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-base text-[#3A211C] placeholder:text-[#9C817A] focus:border-[#3A211C] focus:bg-[#FFFDFB] sm:mt-2 sm:text-sm"
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
                        Phone Number *
                      </label>
                      <input
                        id="cake-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="e.g. +91 98300 00000"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'cake-phone-error' : undefined}
                        className="mt-1.5 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-base text-[#3A211C] placeholder:text-[#9C817A] focus:border-[#3A211C] focus:bg-[#FFFDFB] sm:mt-2 sm:text-sm"
                      />
                      {errors.phone && (
                        <p id="cake-phone-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <div>
                      <label
                        htmlFor="cake-type"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        Cake Type *
                      </label>
                      <select
                        id="cake-type"
                        value={formData.cakeType}
                        onChange={(e) => handleChange('cakeType', e.target.value)}
                        aria-invalid={Boolean(errors.cakeType)}
                        aria-describedby={errors.cakeType ? 'cake-type-error' : undefined}
                        className="mt-1.5 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-base text-[#3A211C] focus:border-[#3A211C] focus:bg-[#FFFDFB] sm:mt-2 sm:text-sm"
                      >
                        <option value="">Select a cake type</option>
                        {CAKE_TYPE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.cakeType && (
                        <p id="cake-type-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                          {errors.cakeType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="cake-date"
                        className="block text-xs font-medium text-[#3A211C]"
                      >
                        Preferred Date *
                      </label>
                      <input
                        id="cake-date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleChange('preferredDate', e.target.value)}
                        aria-invalid={Boolean(errors.preferredDate)}
                        aria-describedby={errors.preferredDate ? 'cake-date-error' : undefined}
                        className="mt-1.5 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-base text-[#3A211C] focus:border-[#3A211C] focus:bg-[#FFFDFB] sm:mt-2 sm:text-sm"
                      />
                      {errors.preferredDate && (
                        <p id="cake-date-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cake-message"
                      className="block text-xs font-medium text-[#3A211C]"
                    >
                      Message *
                    </label>
                    <textarea
                      id="cake-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Share your occasion, approximate servings, colour palette, piping style, or cake inscription..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'cake-message-error' : undefined}
                      className="mt-1.5 w-full rounded-xl border border-[#3A211C]/18 bg-[#FAF5F0]/60 px-4 py-3 text-base text-[#3A211C] placeholder:text-[#9C817A] focus:border-[#3A211C] focus:bg-[#FFFDFB] sm:mt-2 sm:text-sm"
                    />
                    {errors.message && (
                      <p id="cake-message-error" className="mt-1.5 text-xs text-[#9B2C2C]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
                    <p className="text-xs text-[#69504B]">
                      All custom cakes are handcrafted 100% eggless.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#3A211C] px-7 py-3 text-sm font-medium text-[#FAF5F0] transition-all duration-200 hover:bg-[#523029] active:scale-[0.98] sm:min-h-[46px] sm:w-auto"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
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
