export type MenuCategory =
  | 'All'
  | 'Signature Cakes'
  | 'Tiramisu'
  | 'Chocolate Desserts'
  | 'Pastries'
  | 'Gourmet Pasta';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  portion: string;
  shortDescription: string;
  fullDescription: string;
  tastingNotes: string[];
  image: string;
  imageAlt: string;
  dietaryNote: string;
  availabilityNote: string;
  isSignatureHighlight?: boolean;
}

export interface CustomCakeShowcase {
  id: string;
  title: string;
  styleTag: string;
  occasion: string;
  description: string;
  suggestedCakeType: string;
  image: string;
  imageAlt: string;
}

export interface SpecialityPillar {
  number: string;
  title: string;
  description: string;
}

export interface InstagramMoment {
  id: string;
  image: string;
  imageAlt: string;
  caption: string;
  categoryLabel: string;
}

export const BRAND_INFO = {
  name: 'Mabelle',
  tagline: 'Bakery, Dessert & Pasta Bar',
  founder: 'Muskaan Gupta',
  speciality: '100% Eggless',
  instagramHandle: '@mabelle__',
  instagramUrl: 'https://www.instagram.com/mabelle__/',
  addressLine1: 'CJ 194, Salt Lake, Sector 2',
  addressLine2: 'Kolkata, West Bengal, 700091',
  fullAddress: 'CJ 194, Salt Lake, Sector 2, Kolkata, West Bengal, 700091',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Mabelle+CJ+194+Salt+Lake+Sector+2+Kolkata+700091',
  // Set Mabelle's official WhatsApp number here (e.g. '9198XXXXXXXX') when ready to route directly to a phone line.
  // Leaving empty opens WhatsApp with the pre-filled enquiry message ready to send to Mabelle's contact.
  whatsappNumber: '',
} as const;

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_mabelle_patisserie_1795759161904.jpg',
  alt: 'Handcrafted Mabelle chocolate truffle cake, cocoa-dusted mascarpone tiramisu, and delicate blush macarons arranged on warm travertine pedestals in morning sunlight',
} as const;

export const MENU_CATEGORIES: MenuCategory[] = [
  'All',
  'Signature Cakes',
  'Tiramisu',
  'Chocolate Desserts',
  'Pastries',
  'Gourmet Pasta',
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'signature-truffle-cake',
    name: 'Signature Truffle Cake',
    category: 'Signature Cakes',
    portion: '500 g · Whole Cake',
    shortDescription:
      'Moist dark chocolate sponge layered with silky ganache and finished in a smooth velvety glaze.',
    fullDescription:
      'A classic Mabelle creation built on layers of deeply moist eggless chocolate sponge, filled generously with silky dark chocolate ganache and finished with hand-piped rosettes and a glossy velvet glaze.',
    tastingNotes: ['Velvety dark ganache', 'Moist cocoa crumb', 'Clean balanced finish'],
    image: '/src/assets/images/product_signature_cake_1795759162024.jpg',
    imageAlt:
      'Mabelle Signature Truffle Cake with piped dark chocolate ganache and caramelized praline accents',
    dietaryNote: '100% Eggless',
    availabilityNote: 'Handcrafted fresh in our Salt Lake patisserie · Enquire for custom sizes',
    isSignatureHighlight: true,
  },
  {
    id: 'chocolate-praline-cake',
    name: 'Chocolate Hazelnut Praline Cake',
    category: 'Signature Cakes',
    portion: '500 g · Whole Cake',
    shortDescription:
      'Rich chocolate sponge layered with smooth hazelnut praline cream and crunchy caramelized praline.',
    fullDescription:
      'Soft chocolate sponge paired with velvety hazelnut praline cream, finished in glossy dark chocolate ganache and topped with golden, hand-caramelized hazelnut praline bits for refined texture in every slice.',
    tastingNotes: ['Roasted hazelnut cream', 'Golden praline crunch', 'Deep cocoa sponge'],
    image: '/src/assets/images/custom_cake_couture_1795759171505.jpg',
    imageAlt:
      'Chocolate Hazelnut Praline celebration cake styled with sculpted chocolate and berries',
    dietaryNote: '100% Eggless',
    availabilityNote: 'Prepared in fresh batches · Available for celebrations & enquiries',
  },
  {
    id: 'classic-tiramisu-cake',
    name: 'Tiramisu Cake',
    category: 'Tiramisu',
    portion: '500 g · Classic Layer Cake',
    shortDescription:
      'Coffee-soaked sponge and luscious mascarpone cream, finished with a generous dusting of rich cocoa.',
    fullDescription:
      'A timeless Italian classic thoughtfully crafted 100% eggless. Feather-light espresso-soaked sponge alternates with clouds of whipped mascarpone cream, finished with an aromatic veil of fine Dutch-processed cocoa.',
    tastingNotes: ['Fresh brewed espresso', 'Whipped mascarpone', 'Velvety cocoa dust'],
    image: '/src/assets/images/product_tiramisu_1795759162963.jpg',
    imageAlt:
      'Slice of Mabelle layered mascarpone Tiramisu Cake dusted with rich cocoa on an ivory ceramic plate',
    dietaryNote: '100% Eggless',
    availabilityNote: 'Freshly chilled in our Salt Lake patisserie · Enquire via WhatsApp',
    isSignatureHighlight: true,
  },
  {
    id: 'tiramisu-truffle-balls',
    name: 'Tiramisu Bites & Mascarpone Dip',
    category: 'Tiramisu',
    portion: 'Sharing Box · Chilled',
    shortDescription:
      'Espresso-infused cocoa truffle bites served alongside a chilled bowl of whipped mascarpone cream.',
    fullDescription:
      'Playful yet deeply indulgent — hand-rolled coffee and cocoa tiramisu bites crafted for dipping into silky cocoa-dusted mascarpone cream. Designed for unhurried dessert moments and intimate gatherings.',
    tastingNotes: ['Aromatic espresso', 'Cocoa-rolled truffles', 'Silky cream dip'],
    image: '/src/assets/images/hero_mabelle_patisserie_1795759161904.jpg',
    imageAlt: 'Tiramisu and patisserie dessert spread on ivory stoneware',
    dietaryNote: '100% Eggless',
    availabilityNote: 'Prepared in fresh daily batches at our Salt Lake bar',
  },
  {
    id: 'salted-caramel-chocolate-tart',
    name: 'Salted Caramel Chocolate Tart',
    category: 'Chocolate Desserts',
    portion: 'Individual & 500 g Tart',
    shortDescription:
      'Buttery cocoa tart shell filled with silky dark chocolate ganache, smooth caramel, and flaky sea salt.',
    fullDescription:
      'Crisp, buttery chocolate pastry cradles a slow-simmered layer of gooey salted caramel beneath rich dark chocolate ganache, lifted with a delicate finish of flaky sea salt for harmony between sweet and savoury.',
    tastingNotes: ['Crisp cocoa pastry', 'Slow-cooked caramel', 'Flaky sea salt'],
    image: '/src/assets/images/product_chocolate_tart_1795759162770.jpg',
    imageAlt:
      'Mabelle Salted Caramel Chocolate Tart with spun caramel and fudgy chocolate brownies on travertine',
    dietaryNote: '100% Eggless',
    availabilityNote: 'Available individually or as a sharing tart · Enquire via WhatsApp',
    isSignatureHighlight: true,
  },
  {
    id: 'signature-fudge-brownies',
    name: 'Signature Brownies & Mud Cake Tub',
    category: 'Chocolate Desserts',
    portion: 'Pack of 2 · Box & 350 g Tub',
    shortDescription:
      'Crackly-top fudgy chocolate brownies and indulgent layered chocolate mud cake tubs made for sharing.',
    fullDescription:
      'Baked for pure chocolate devotion: crackled, delicate crusts giving way to dense, intensely fudgy centers. Pair with our signature spoonable Mud Cake Tubs for an unforgettable chocolate experience.',
    tastingNotes: ['Intense dark cocoa', 'Crackled top crust', 'Dense fudgy center'],
    image: '/assets/aistudio/IMG_20261127_112527_4c7a7301.jpg',
    imageAlt:
      'Mabelle signature luxury dessert assortment box with chocolate truffles, brownies, and confections',
    dietaryNote: '100% Eggless',
    availabilityNote: 'Crafted fresh for everyday indulgence and curated gift hampers',
  },
  {
    id: 'petite-bento-cakes',
    name: 'Petite Bento Cakes & Fruit Tarts',
    category: 'Pastries',
    portion: '200 g Bento & Individual Tarts',
    shortDescription:
      'Delicate mini celebration cakes in classic flavours alongside buttery vanilla tarts topped with fresh fruit.',
    fullDescription:
      'Portioned for personal celebrations and thoughtful gifting. Choose from Chocolate Nutella, Black Forest, or fresh seasonal fruit notes — each frosted with signature Mabelle delicacy and pastel charm.',
    tastingNotes: ['Soft vanilla & cocoa sponge', 'Whipped cream finish', 'Fresh seasonal fruit'],
    image: '/src/assets/images/product_pastries_bento_1795759165818.jpg',
    imageAlt:
      'Blush pink and cream petite bento cakes with fresh berries and vanilla fruit tarts on ivory linen',
    dietaryNote: '100% Eggless',
    availabilityNote: 'Freshly prepared · Custom inscriptions available on enquiry',
    isSignatureHighlight: true,
  },
  {
    id: 'velvet-chocolate-cheesecake',
    name: 'Velvet Chocolate Cheesecake',
    category: 'Pastries',
    portion: '200 g · Petite Cheesecake',
    shortDescription:
      'Creamy chocolate cheesecake set on a buttery biscuit base with deep, refined cocoa notes.',
    fullDescription:
      'A smooth, slow-set eggless cheesecake infused with fine dark chocolate over a crisp toasted biscuit base, balanced to deliver richness without heaviness.',
    tastingNotes: ['Velvety cream cheese', 'Deep cocoa richness', 'Buttery biscuit base'],
    image: '/src/assets/images/story_patisserie_atelier_1795759171386.jpg',
    imageAlt:
      'Artisanal patisserie preparation with tempered dark chocolate, vanilla pods, and fresh berries',
    dietaryNote: '100% Eggless',
    availabilityNote: 'Served chilled at our Salt Lake patisserie · Enquire via WhatsApp',
  },
  {
    id: 'blush-mascarpone-rigatoni',
    name: 'Blush Tomato & Mascarpone Rigatoni',
    category: 'Gourmet Pasta',
    portion: 'Freshly Plated · Pasta Bar',
    shortDescription:
      'Al dente rigatoni tossed in a velvety blush-pink slow-simmered tomato mascarpone sauce with fresh basil.',
    fullDescription:
      'Prepared fresh to order at the Mabelle Pasta Bar — ridged rigatoni enveloped in a silky roasted tomato and cream mascarpone sauce, finished with fragrant sweet basil, aged cheese shavings, and cold-pressed olive oil.',
    tastingNotes: ['Slow-simmered tomato', 'Creamy mascarpone', 'Fresh garden basil'],
    image: '/src/assets/images/editorial_pasta_bar_1795759169074.jpg',
    imageAlt:
      'Gourmet rigatoni pasta in creamy blush tomato mascarpone sauce garnished with basil and shaved cheese',
    dietaryNote: '100% Eggless & Vegetarian',
    availabilityNote: 'Freshly cooked to order at our Salt Lake Pasta Bar',
    isSignatureHighlight: true,
  },
];

export const SPECIALITY_PILLARS: SpecialityPillar[] = [
  {
    number: '01',
    title: '100% Eggless',
    description:
      'Every cake, tart, brownie, pastry, and plated dessert at Mabelle is crafted completely eggless — never compromising on delicate crumb, velvety mousse, or refined flavour.',
  },
  {
    number: '02',
    title: 'Freshly Crafted',
    description:
      'Prepared in thoughtful small batches in our Salt Lake kitchen so each sponge stays tender, each ganache remains glossy, and every bowl of pasta arrives vibrant and warm.',
  },
  {
    number: '03',
    title: 'Custom Creations',
    description:
      'From intimate birthdays to milestone celebrations, bespoke cakes are tailored in flavour, palette, and sculptural piping to reflect the mood of your gathering.',
  },
  {
    number: '04',
    title: 'Premium Ingredients',
    description:
      'Built around real cocoa, rich couverture chocolate, fresh seasonal fruit, velvety cream, and fragrant aromatics chosen for clean, balanced sweetness.',
  },
];

export const CUSTOM_CAKE_GALLERY: CustomCakeShowcase[] = [
  {
    id: 'botanical-tiered',
    title: 'Pressed Botanical Ivory Tier',
    styleTag: 'Floral & Organic',
    occasion: 'Engagements · Anniversaries · Garden Celebrations',
    description:
      'Two-tier textured warm ivory and blush buttercream accented with delicate edible pressed florals and whisper-thin champagne gold leaf.',
    suggestedCakeType: 'Floral Botanical Tiered Cake',
    image: '/src/assets/images/custom_cake_floral_1795759168523.jpg',
    imageAlt:
      'Two-tier custom ivory and blush buttercream celebration cake decorated with delicate pressed botanicals',
  },
  {
    id: 'vintage-blush-lambeth',
    title: 'Signature Blush Lambeth',
    styleTag: 'Vintage Couture Piping',
    occasion: 'Birthdays · Bridal Showers · Milestones',
    description:
      'Soft Mabelle blush frosting dressed in ornate vintage shell swags, sugar pearls, and fine champagne satin ribbons for timeless elegance.',
    suggestedCakeType: 'Vintage Blush Lambeth Cake',
    image: '/src/assets/images/custom_cake_vintage_1795759169616.jpg',
    imageAlt:
      'Minimalist blush pink vintage Lambeth piped celebration cake with champagne satin bows on porcelain stand',
  },
  {
    id: 'dark-chocolate-couture',
    title: 'Sculptural Dark Ganache & Fig',
    styleTag: 'Modern Architectural',
    occasion: 'Evening Soirées · Dinner Parties · Milestone Birthdays',
    description:
      'Matte dark chocolate ganache crowned with hand-tempered chocolate sails, fresh seasonal berries, figs, and subtle gold leaf detailing.',
    suggestedCakeType: 'Signature Chocolate Truffle & Praline Cake',
    image: '/src/assets/images/custom_cake_couture_1795759171505.jpg',
    imageAlt:
      'Sculptural dark chocolate ganache bespoke cake topped with chocolate sails, fresh figs, berries, and gold flecks',
  },
];

export const PASTA_BAR_HIGHLIGHTS = [
  {
    title: 'Savoury Before Sweet',
    detail:
      'Start with a comforting bowl of freshly tossed gourmet pasta — rich sauces, aromatic herbs, and balanced warmth.',
  },
  {
    title: 'Dessert Pairings',
    detail:
      'Follow your pasta with a chilled slice of espresso-soaked Tiramisu, a Salted Caramel Tart, or a warm fudgy brownie.',
  },
  {
    title: 'Unhurried Salt Lake Escape',
    detail:
      'Designed as an intimate neighbourhood ritual in Salt Lake, Sector 2 — perfect for leisurely evenings and sweet conversations.',
  },
] as const;

export const INSTAGRAM_MOMENTS: InstagramMoment[] = [
  {
    id: 'ig-hamper',
    image: '/assets/aistudio/IMG_20261127_112527_4c7a7301.jpg',
    imageAlt:
      'Mabelle signature pink-labelled curated gift hamper box with truffles and artisanal bakes',
    caption:
      'Curated Mabelle gift hampers — tied in satin ribbon and filled with 100% eggless bakes.',
    categoryLabel: 'Festive Gifting',
  },
  {
    id: 'ig-vintage-cake',
    image: '/src/assets/images/custom_cake_vintage_1795759169616.jpg',
    imageAlt: 'Blush pink vintage piped celebration cake with delicate bows',
    caption: 'Blush buttercream, satin ribbons, and delicate vintage piping made to order.',
    categoryLabel: 'Custom Cakes',
  },
  {
    id: 'ig-tiramisu',
    image: '/src/assets/images/product_tiramisu_1795759162963.jpg',
    imageAlt: 'Espresso-soaked eggless mascarpone tiramisu slice dusted with cocoa',
    caption:
      'Layers of espresso-kissed sponge and whipped mascarpone — 100% eggless Tiramisu.',
    categoryLabel: 'Tiramisu',
  },
  {
    id: 'ig-pasta',
    image: '/src/assets/images/editorial_pasta_bar_1795759169074.jpg',
    imageAlt: 'Creamy blush tomato mascarpone rigatoni pasta at Mabelle Pasta Bar',
    caption:
      'Fresh from the Pasta Bar: velvety blush tomato mascarpone rigatoni with garden basil.',
    categoryLabel: 'Pasta Bar',
  },
  {
    id: 'ig-tart',
    image: '/src/assets/images/product_chocolate_tart_1795759162770.jpg',
    imageAlt: 'Salted caramel chocolate ganache tart with dark chocolate brownies',
    caption: 'Dark chocolate ganache, slow-cooked salted caramel, and crisp cocoa pastry.',
    categoryLabel: 'Chocolate Bar',
  },
  {
    id: 'ig-bento',
    image: '/src/assets/images/product_pastries_bento_1795759165818.jpg',
    imageAlt: 'Blush and ivory petite bento cakes with fresh fruit tarts',
    caption:
      'Petite 200 g bento cakes and seasonal berry tarts — crafted for sweet everyday rituals.',
    categoryLabel: 'Pastries & Bentos',
  },
];

export const CAKE_TYPE_OPTIONS = [
  'Signature Chocolate Truffle & Praline Cake',
  'Classic Espresso Tiramisu Cake',
  'Floral Botanical Tiered Cake',
  'Vintage Blush Lambeth Cake',
  'Petite Bento Cake (200 g)',
  'Vanilla Praline & Seasonal Fruit Cake',
  'Salted Caramel Chocolate Celebration Cake',
  'Bespoke Multi-Tier Celebration Cake',
] as const;
