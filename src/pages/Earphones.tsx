import CategoryPage from "@/components/CategoryPageClean";
import { getProductsByCategory } from "@/data/products";

export default function Earphones() {
  const products = getProductsByCategory("earphones");
  return <CategoryPage category="Earphones" products={products} />;
}
