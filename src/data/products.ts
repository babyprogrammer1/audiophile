export interface Product {
  id: string;
  name: string;
  category: "headphones" | "speakers" | "earphones";
  image: string;
  description: string;
  new?: boolean;
  price?: number;
}

export const products: Product[] = [
  {
    id: "xx99-mark-ii",
    name: "XX99 MARK II HEADPHONES",
    category: "headphones",
    image: "🎧",
    description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    new: true,
    price: 2999,
  },
  {
    id: "xx99-mark-i",
    name: "XX99 MARK I HEADPHONES",
    category: "headphones",
    image: "🎧",
    description: "As the gold standard for headphones, the classics offer detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike.",
    price: 1799,
  },
  {
    id: "xx59",
    name: "XX59 HEADPHONES",
    category: "headphones",
    image: "🎧",
    description: "Enjoy your audio anytime, anywhere with the flexible and durable XX59 headphones. The stylish yet durable versatile wireless headphone delivers premium sound.",
    price: 899,
  },
  {
    id: "zx9-speaker",
    name: "ZX9 SPEAKER",
    category: "speakers",
    image: "🔊",
    description: "Upgrade to premium speakers that are phenomenal and are absolutely captivating with incredible soundstage and precision.",
    new: true,
    price: 4500,
  },
  {
    id: "zx7-speaker",
    name: "ZX7 SPEAKER",
    category: "speakers",
    image: "🔊",
    description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    price: 3500,
  },
  {
    id: "yx1-earphones",
    name: "YX1 EARPHONES",
    category: "earphones",
    image: "🎵",
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.",
    price: 599,
  },
];

export function getProductsByCategory(
  category: "headphones" | "speakers" | "earphones"
) {
  return products.filter((p) => p.category === category);
}
