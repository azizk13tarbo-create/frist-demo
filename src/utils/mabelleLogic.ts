import type { MenuCategory, MenuItem } from '../data/mabelleData';

export interface CakeEnquiryInput {
  customerName: string;
  phone: string;
  eventDate: string;
  occasion: string;
  flavour: string;
  cakeSize: string;
  inspirationStyle: string;
  designNotes: string;
}

export interface CakeEnquiryValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof CakeEnquiryInput, string>>;
}

export function filterMenuItems(items: MenuItem[], category: MenuCategory): MenuItem[] {
  if (category === 'All') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export function getCategoryCounts(
  items: MenuItem[],
  categories: readonly MenuCategory[],
): Record<MenuCategory, number> {
  const counts = {} as Record<MenuCategory, number>;
  for (const cat of categories) {
    counts[cat] = cat === 'All' ? items.length : items.filter((item) => item.category === cat).length;
  }
  return counts;
}

export function validateCakeEnquiry(input: CakeEnquiryInput): CakeEnquiryValidationResult {
  const errors: Partial<Record<keyof CakeEnquiryInput, string>> = {};

  const trimmedName = input.customerName.trim();
  if (trimmedName.length < 2) {
    errors.customerName = 'Please enter your name.';
  }

  const digitsOnly = input.phone.replace(/[^\d]/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    errors.phone = 'Please enter a valid 10-digit mobile or WhatsApp number.';
  }

  if (!input.eventDate.trim()) {
    errors.eventDate = 'Please choose your celebration date.';
  }

  if (!input.flavour.trim()) {
    errors.flavour = 'Please select a preferred flavour.';
  }

  if (!input.cakeSize.trim()) {
    errors.cakeSize = 'Please select an approximate cake size.';
  }

  if (input.designNotes.trim().length < 8) {
    errors.designNotes = 'Please share a few details about colours, inscription, or design ideas.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildCakeEnquiryMessage(input: CakeEnquiryInput): string {
  const lines = [
    'Hello Mabelle Team,',
    'I would like to enquire about a 100% eggless custom celebration cake:',
    '',
    `Name: ${input.customerName.trim()}`,
    `Phone: ${input.phone.trim()}`,
    `Celebration Date: ${input.eventDate.trim()}`,
    input.occasion.trim() ? `Occasion: ${input.occasion.trim()}` : null,
    `Preferred Flavour: ${input.flavour.trim()}`,
    `Size / Servings: ${input.cakeSize.trim()}`,
    input.inspirationStyle.trim() ? `Design Reference: ${input.inspirationStyle.trim()}` : null,
    `Design Notes: ${input.designNotes.trim()}`,
  ].filter((line): line is string => line !== null);

  return lines.join('\n');
}

export function buildProductEnquiryMessage(item: Pick<MenuItem, 'name' | 'category' | 'portion'>): string {
  return [
    'Hello Mabelle Team,',
    `I would love to enquire about ordering "${item.name}" (${item.portion} · ${item.category}).`,
    'Could you please share current availability and pickup/delivery details for Salt Lake, Kolkata?',
  ].join('\n');
}

export function buildWhatsAppUrl(message: string, phoneNumber?: string): string {
  const encoded = encodeURIComponent(message);
  const cleanedPhone = phoneNumber ? phoneNumber.replace(/[^\d]/g, '') : '';
  if (cleanedPhone.length >= 10) {
    return `https://wa.me/${cleanedPhone}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}
