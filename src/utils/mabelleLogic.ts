import type { MenuCategory, MenuItem } from '../data/mabelleData';

export interface CakeEnquiryInput {
  customerName: string;
  phone: string;
  cakeType: string;
  preferredDate: string;
  message: string;
  inspirationStyle?: string;
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

  if (input.customerName.trim().length < 2) {
    errors.customerName = 'Please enter your name.';
  }

  const digitsOnly = input.phone.replace(/[^\d]/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    errors.phone = 'Please enter a valid 10-digit phone or WhatsApp number.';
  }

  if (!input.cakeType.trim()) {
    errors.cakeType = 'Please choose a cake type.';
  }

  if (!input.preferredDate.trim()) {
    errors.preferredDate = 'Please select your preferred celebration date.';
  }

  if (input.message.trim().length < 8) {
    errors.message = 'Please share a few details about flavour, servings, colours, or inscription.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildCakeEnquiryMessage(input: CakeEnquiryInput): string {
  const lines = [
    'Hello Mabelle Team,',
    'I would like to enquire about a 100% eggless custom cake:',
    '',
    `Customer Name: ${input.customerName.trim()}`,
    `Phone Number: ${input.phone.trim()}`,
    `Cake Type: ${input.cakeType.trim()}`,
    `Preferred Date: ${input.preferredDate.trim()}`,
    input.inspirationStyle?.trim() ? `Gallery Inspiration: ${input.inspirationStyle.trim()}` : null,
    `Message: ${input.message.trim()}`,
  ].filter((line): line is string => line !== null);

  return lines.join('\n');
}

export function buildProductEnquiryMessage(
  item: Pick<MenuItem, 'name' | 'category' | 'portion'>,
): string {
  return [
    'Hello Mabelle Team,',
    `I would love to enquire about "${item.name}" (${item.portion} · ${item.category}).`,
    'Could you please share availability and details for Salt Lake, Kolkata?',
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
