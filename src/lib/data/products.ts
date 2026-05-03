export type CoffeeCategory =
  | "espresso"
  | "single-origin"
  | "blend"
  | "flavored"
  | "decaf";

export type RoastLevel =
  | "light"
  | "light-medium"
  | "medium"
  | "medium-dark"
  | "dark";

export interface CoffeeProduct {
  id: string;
  slug: string;
  name: string;
  price: number;
  inStock: boolean;
  soldOutLabel?: string;
  category: CoffeeCategory;
  roastLevel: RoastLevel;
  tasting?: string[];
  description: string;
  imageFront: string;
  imageBack: string;
  grindOptions: string[];
  sizes: string[];
}

export interface MerchProduct {
  id: string;
  slug: string;
  name: string;
  price: number;
  inStock: boolean;
  soldOutLabel?: string;
  category: string;
  description: string;
  images: string[];
  sizes: string[];
}

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: "organic-primo-espresso",
    slug: "organic-primo-espresso",
    name: "Organic Primo Espresso",
    price: 25.0,
    inStock: true,
    category: "espresso",
    roastLevel: "dark",
    tasting: ["rich", "bold", "smooth"],
    description:
      "Our flagship organic espresso. Rich, bold, and built for the early paddle-out. Dan roasts this one with extra care.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/0679e931-b857-44cd-802f-280c22025f4a/FINAL+Organic+CR+Front+%282%29.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/8ca0e4ed-f71d-480d-9179-ab774f582485/big+back+primo.png",
    grindOptions: ["whole bean", "ground for espresso", "ground for drip"],
    sizes: ["4oz", "12oz"],
  },
  {
    id: "organic-sumatra-g1",
    slug: "organic-sumatra-g1",
    name: "Organic Sumatra G1",
    price: 25.0,
    inStock: true,
    category: "single-origin",
    roastLevel: "dark",
    tasting: ["earthy", "full body", "herbal"],
    description:
      "Deep and earthy. Perfect for the dawn patrol session before anyone else is up.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1dce83bd-d029-4388-b0b7-4506cd23894c/12oz+g1+sumatra.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/50b0e58c-f25a-4978-af99-65058af9b9cf/sumatra+12oz+g1+back.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "costa-rica-tarrazu-la-pastora",
    slug: "costa-rica-tarrazu-la-pastora",
    name: "Costa Rica Tarrazu La Pastora",
    price: 22.0,
    inStock: true,
    category: "single-origin",
    roastLevel: "medium",
    tasting: ["bright", "citrus", "clean"],
    description:
      "Bright and clean from the highlands of Tarrazu. The kind of cup that makes you want to check the tide.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/04f53302-2e4f-4fec-9792-769d0a8888c8/CR+12oz+Front+La+Pastora.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/4c117f72-56bd-4ee1-ac80-94c2c76164ea/CR+La+Pastora+Back.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "organic-honduras-comsa",
    slug: "organic-honduras-comsa",
    name: "Organic Honduras COMSA SHG",
    price: 25.0,
    inStock: true,
    category: "single-origin",
    roastLevel: "medium",
    tasting: ["caramel", "nutty", "balanced"],
    description:
      "Fair trade, organic, and crowd-pleasing. Smooth caramel notes. Dan's pick for the bonfire.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/77393527-c98d-4a22-8f8b-b689433d11e4/FINAL+Organic+CR+Front+%281%29.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/b52f339d-e149-4850-86fb-c452cffd8a67/FINAL%21%21%21%21.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "rise-up-morning-blend",
    slug: "rise-up-morning-blend",
    name: "Rise Up! Morning Blend",
    price: 22.0,
    inStock: false,
    soldOutLabel: "Back Soon 🤙",
    category: "blend",
    roastLevel: "medium",
    tasting: ["smooth", "approachable", "everyday"],
    description:
      "Get up, wax up, paddle out. The everyday blend built for the Space Coast grind.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/d63736ac-ffbd-4902-8307-39820c743faf/rise+up+12oz.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/bfd43ed9-7be0-4b0d-8c87-f6f104deac88/big+back+mexicoback+g1+FINAL%21%21%21%21.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "espresso-blend",
    slug: "espresso-blend",
    name: "Espresso Blend",
    price: 22.0,
    inStock: true,
    category: "espresso",
    roastLevel: "dark",
    tasting: ["bold", "dark chocolate", "intense"],
    description:
      "A classic espresso pull. No fluff, just flavor. Like a good aerial — clean execution.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/7702cfed-24b6-491d-96b0-b00a9c1e1faa/Espresso+4oz+Front++%286%29.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/dcc8aad4-4dc2-45a4-853d-0ccd386dc73f/Espresso+Back.png",
    grindOptions: ["whole bean", "ground for espresso"],
    sizes: ["4oz", "12oz"],
  },
  {
    id: "natural-ethiopia-sidamo",
    slug: "natural-ethiopia-sidamo",
    name: "Natural Ethiopia Sidamo",
    price: 22.0,
    inStock: true,
    category: "single-origin",
    roastLevel: "light-medium",
    tasting: ["blueberry", "floral", "wine-like"],
    description:
      "Naturally processed Sidamo — wild and fruity like an unexpected swell at sunrise.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/5ce5b68d-291f-4965-a048-866e429e538d/Ethiopia+Front+.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/d44e6514-227d-4f94-9987-1ebece294f8a/back+g1+FINAL%21%21%21%21+%281%29.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "blueberry-cinnamon",
    slug: "blueberry-cinnamon",
    name: "Blueberry Cinnamon",
    price: 20.0,
    inStock: true,
    category: "flavored",
    roastLevel: "medium",
    tasting: ["blueberry", "cinnamon", "warm spice"],
    description:
      "A flavor ride. Sweet blueberry and warm cinnamon. Grab a cup before you grab your board.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/e809b02b-d9bd-47d7-9c04-027e6c6b5862/New+Mexico+%281%29.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/7ede0b0a-a749-487f-b1dd-755647399ac6/back+blueberry+12oz.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "salty-caramel",
    slug: "salty-caramel",
    name: "Salty Caramel",
    price: 20.0,
    inStock: false,
    soldOutLabel: "Sold Out",
    category: "flavored",
    roastLevel: "medium",
    tasting: ["caramel", "salty-sweet", "smooth"],
    description:
      "Like the ocean in a cup — that perfect sweet-salty combo. Back soon.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1710265597132-EAGW7JSEXJ2ZHQ3JH19R/Salty+Caramel+Front.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1709834980773-W0CUIRMYUUF5TPQ87KHX/Salty+Caramel+Back+.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "brazil-swiss-water-decaf",
    slug: "brazil-swiss-water-decaf",
    name: "Brazil Swiss Water Washed Decaf",
    price: 25.0,
    inStock: false,
    soldOutLabel: "Sold Out",
    category: "decaf",
    roastLevel: "medium-dark",
    tasting: ["chocolate", "nutty", "smooth"],
    description:
      "Same smooth Brazilian vibes, no caffeine. For the night session or the mellow morning.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1f8b0b1c-baab-412b-8573-83b494742ec6/Brazil+Decaf+Front.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/beb7d057-9228-484f-932e-ae6efbffeb3e/swiss+website.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "mexico-chiapas",
    slug: "mexico-chiapas",
    name: "Mexico Chiapas",
    price: 22.0,
    inStock: true,
    category: "single-origin",
    roastLevel: "medium",
    tasting: ["mild", "nutty", "cocoa"],
    description:
      "Smooth and approachable. The longboard of coffees — classic, reliable, always delivers.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/26e3f524-8810-48b2-8725-24e4b3f477d9/New+Mexico.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/398337d4-519e-4006-9c21-0d6e9bab7735/big+back+mexicoback+g1+FINAL%21%21%21%21+%281%29.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "half-caff",
    slug: "half-caff",
    name: "Half-Caff",
    price: 25.0,
    inStock: false,
    soldOutLabel: "Sold Out",
    category: "decaf",
    roastLevel: "medium",
    tasting: ["balanced", "smooth", "everyday"],
    description:
      "Half the caffeine, zero compromise on flavor. For when you're taking it easy.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1972019a-cf34-43bd-8515-5cdd37323137/Half-Calf+Front.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1710084763948-CKJ2AS34U8JCECKCD2DQ/Half+Calf+Back.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
  {
    id: "brazil-cerrado",
    slug: "brazil-cerrado",
    name: "Brazil Cerrado",
    price: 20.0,
    inStock: true,
    category: "single-origin",
    roastLevel: "medium-dark",
    tasting: ["dark chocolate", "almond", "low acidity"],
    description:
      "Low acidity, high vibes. Brazilian savanna in a 12oz bag.",
    imageFront:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1709909259740-N46WG0C52TXHQH7VWBTQ/Brazil+Cerrado+Front.png",
    imageBack:
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1709909233010-ETD6PKTWTRY82H78R61T/Brazil+Cerrado+Back.png",
    grindOptions: ["whole bean", "ground for drip"],
    sizes: ["12oz"],
  },
];

export const merchProducts: MerchProduct[] = [
  {
    id: "premium-beachside-tee",
    slug: "premium-beachside-tee",
    name: "Premium Beachside Tee",
    price: 25.0,
    inStock: false,
    soldOutLabel: "Sold Out",
    category: "apparel",
    description:
      "The freshest tee on the Space Coast. Rep the roastery.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1718972670930-6LB6LOCG0FY15Q5CFJG4/1000030765.jpg",
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1718972831410-8ESL8YMWMC64GNXUIKZC/1000030764.jpg",
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1718972696296-OKDWXQKRRVE8VCMPO5Y8/1000030721.jpg",
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1718973039262-9KSYXGP7XHUCKXB68CIX/1000030766.jpg",
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: "coffee-mug",
    slug: "coffee-mug",
    name: "Coffee Mug",
    price: 12.0,
    inStock: false,
    soldOutLabel: "Sold Out",
    category: "accessories",
    description:
      "Your new go-to mug. Dishwasher safe, sunrise approved.",
    images: [
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1718636690327-ZXTM45JPCT4AXQ9FWHXA/20240617_064729.jpg",
      "https://images.squarespace-cdn.com/content/v1/65bbb83aab020362639b487c/1718636661908-A12TJNH5WJ570OO5YV2E/20240617_064758.jpg",
    ],
    sizes: [],
  },
];

export type ShopCategoryFilter =
  | "all"
  | "single-origin"
  | "blend"
  | "espresso"
  | "flavored"
  | "decaf";

export function needsCoffeeOptionSelection(product: CoffeeProduct): boolean {
  return (
    product.grindOptions.length > 1 ||
    product.sizes.length > 1
  );
}

export function getCoffeeBySlug(slug: string): CoffeeProduct | undefined {
  return coffeeProducts.find((p) => p.slug === slug);
}

export function sortedCoffeeProducts(): CoffeeProduct[] {
  return [...coffeeProducts].sort((a, b) => {
    if (a.inStock === b.inStock) return 0;
    return a.inStock ? -1 : 1;
  });
}
