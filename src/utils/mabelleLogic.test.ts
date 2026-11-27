import test from 'node:test';
import assert from 'node:assert/strict';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/mabelleData';
import {
  buildCakeEnquiryMessage,
  buildProductEnquiryMessage,
  buildWhatsAppUrl,
  filterMenuItems,
  getCategoryCounts,
  validateCakeEnquiry,
} from './mabelleLogic';

test('filterMenuItems returns all items for All and filters specific categories accurately', () => {
  const all = filterMenuItems(MENU_ITEMS, 'All');
  assert.equal(all.length, MENU_ITEMS.length);

  const tiramisu = filterMenuItems(MENU_ITEMS, 'Tiramisu');
  assert.ok(tiramisu.length > 0);
  assert.ok(tiramisu.every((item) => item.category === 'Tiramisu'));

  const pasta = filterMenuItems(MENU_ITEMS, 'Gourmet Pasta');
  assert.ok(pasta.length > 0);
  assert.ok(pasta.every((item) => item.category === 'Gourmet Pasta'));
});

test('getCategoryCounts tallies each category and sums to All', () => {
  const counts = getCategoryCounts(MENU_ITEMS, MENU_CATEGORIES);
  assert.equal(counts.All, MENU_ITEMS.length);

  const specificSum = MENU_CATEGORIES.filter((cat) => cat !== 'All').reduce(
    (sum, cat) => sum + counts[cat],
    0,
  );
  assert.equal(specificSum, counts.All);
});

test('validateCakeEnquiry rejects missing or invalid required fields', () => {
  const result = validateCakeEnquiry({
    customerName: 'A',
    phone: '1234',
    eventDate: '',
    occasion: '',
    flavour: '',
    cakeSize: '',
    inspirationStyle: '',
    designNotes: 'Hi',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.customerName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.eventDate);
  assert.ok(result.errors.flavour);
  assert.ok(result.errors.cakeSize);
  assert.ok(result.errors.designNotes);
});

test('validateCakeEnquiry accepts a complete valid custom cake enquiry', () => {
  const result = validateCakeEnquiry({
    customerName: 'Ananya Sen',
    phone: '+91 98300 12345',
    eventDate: '2026-12-18',
    occasion: 'Birthday',
    flavour: 'Signature Chocolate Truffle',
    cakeSize: 'One Kilo (1 kg · Serves 8–12)',
    inspirationStyle: 'Signature Blush Lambeth',
    designNotes: 'Soft blush frosting with delicate pearl piping and Happy Birthday message.',
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('buildCakeEnquiryMessage and buildWhatsAppUrl format and encode enquiries cleanly', () => {
  const message = buildCakeEnquiryMessage({
    customerName: 'Rohan Chatterjee',
    phone: '9830011223',
    eventDate: '2026-12-20',
    occasion: 'Anniversary',
    flavour: 'Classic Espresso Tiramisu',
    cakeSize: 'Half Kilo (500 g · Serves 4–6)',
    inspirationStyle: 'Pressed Botanical Ivory Tier',
    designNotes: 'Warm ivory tones with pressed flowers and minimal gold accents.',
  });

  assert.match(message, /Rohan Chatterjee/);
  assert.match(message, /Classic Espresso Tiramisu/);
  assert.match(message, /Pressed Botanical Ivory Tier/);

  const genericUrl = buildWhatsAppUrl(message);
  assert.ok(genericUrl.startsWith('https://api.whatsapp.com/send?text='));
  assert.ok(genericUrl.includes(encodeURIComponent('Rohan Chatterjee')));

  const directUrl = buildWhatsAppUrl(message, '+91 98300 11223');
  assert.ok(directUrl.startsWith('https://wa.me/919830011223?text='));
});

test('buildProductEnquiryMessage includes product name, portion, and category', () => {
  const message = buildProductEnquiryMessage({
    name: 'Salted Caramel Chocolate Tart',
    category: 'Chocolate Desserts',
    portion: 'Individual & 500 g Tart',
  });
  assert.match(message, /Salted Caramel Chocolate Tart/);
  assert.match(message, /Chocolate Desserts/);
});
