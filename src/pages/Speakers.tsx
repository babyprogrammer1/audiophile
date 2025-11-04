import CategoryPage from "@/components/CategoryPageClean";
import { getProductsByCategory } from "@/data/products";

export default function Speakers() {
  const products = getProductsByCategory("speakers");
  return <CategoryPage category="Speakers" products={products} />;
}
