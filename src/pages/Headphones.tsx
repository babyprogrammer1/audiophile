import CategoryPage from "@/components/CategoryPageClean";
import { getProductsByCategory } from "@/data/products";

export default function Headphones() {
  const products = getProductsByCategory("headphones");
  return <CategoryPage category="Headphones" products={products} />;
}
