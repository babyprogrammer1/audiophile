import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/data/products";
import SharedSections from "@/components/SharedSections";
import About from "./About";

function getProductAssetFolder(productId: string) {
  switch (productId) {
    case "xx99-mark-ii":
      return "product-xx99-mark-two-headphones";
    case "xx99-mark-i":
      return "product-xx99-mark-one-headphones";
    case "xx59":
      return "product-xx59-headphones";
    case "zx9-speaker":
      return "product-zx9-speaker";
    case "zx7-speaker":
      return "product-zx7-speaker";
    case "yx1-earphones":
      return "product-yx1-earphones";
    default:
      return "";
  }
}

function getCategoryHeroImage(category: string) {
  const key = category.toLowerCase();
  switch (key) {
    case "headphones":
      return "./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
    case "speakers":
      return "./assets/product-zx9-speaker/desktop/image-product.jpg";
    case "earphones":
      return "./assets/product-yx1-earphones/desktop/image-product.jpg";
    default:
      return "./assets/shared/desktop/image-best-gear.jpg";
  }
}

interface CategoryPageProps {
  category: string;
  products: Product[];
}

export default function CategoryPage({ category, products }: CategoryPageProps) {
  const heroImage = getCategoryHeroImage(category);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section
          className="text-white py-20 relative overflow-hidden"
          style={{
            minHeight: "56vh",
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 30%), url("${heroImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">{category.toUpperCase()}</h1>
          </div>
        </section>

        <section className="bg-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  <div
                    className={`flex items-center justify-center ${
                      index % 2 === 1 ? "md:col-start-2" : ""
                    }`}
                  >
                    <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      {getProductAssetFolder(product.id) ? (
                        <img
                          src={`./assets/${getProductAssetFolder(product.id)}/desktop/image-category-page-preview.jpg`}
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="p-6 text-7xl">{product.image}</div>
                      )}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                    {product.new && (
                      <p className="text-gray-500 text-sm font-medium tracking-widest mb-4">
                        NEW PRODUCT
                      </p>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
                      {product.description}
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="inline-block bg-accent text-white px-8 py-3 md:px-10 md:py-4 font-bold text-sm md:text-base tracking-widest hover:bg-orange-600 transition"
                    >
                      SEE PRODUCT
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SharedSections />
      <About />
      <Footer />
    </div>
  );
}
