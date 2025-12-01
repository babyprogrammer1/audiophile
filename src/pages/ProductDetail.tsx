import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import About from "@/components/About";
import SharedSections from "@/components/SharedSections";

// Map product ids to asset folder names
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

function getProductGallery(productId: string) {
  const folder = getProductAssetFolder(productId);
  if (!folder) return [];
  return [
    `/assets/${folder}/desktop/image-gallery-1.jpg`,
    `/assets/${folder}/desktop/image-gallery-2.jpg`,
    `/assets/${folder}/desktop/image-gallery-3.jpg`,
  ];
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Product Not Found</h1>
            <Link
              to="/"
              className="inline-block bg-accent text-white px-8 py-3 font-bold tracking-widest hover:bg-orange-600 transition"
            >
              RETURN HOME
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Build a related products list with at least `count` items.
  function getRelatedProducts(current: typeof product, all: typeof products, count = 3) {
    const sameCategory = all.filter((p) => p.category === current.category && p.id !== current.id);
    const others = all.filter((p) => p.id !== current.id && p.category !== current.category);

    const result: typeof products = [];
    for (const p of sameCategory) {
      if (result.length >= count) break;
      result.push(p);
    }
    let i = 0;
    while (result.length < count && i < others.length) {
      result.push(others[i]);
      i++;
    }

    // As a final guard (very unlikely in small data sets), fill with any other non-duplicate products
    for (const p of all) {
      if (result.length >= count) break;
      if (p.id === current.id) continue;
      if (!result.find((r) => r.id === p.id)) result.push(p);
    }

    return result.slice(0, count);
  }

  const relatedProducts = getRelatedProducts(product, products, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-white">
        {/* Go Back Button */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to={`/${product.category}`}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition text-sm font-medium"
          >
            <ChevronLeft size={20} />
            Go Back
          </Link>
        </section>

        {/* Product Details */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-20">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md sm:max-w-lg aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden mx-auto">
                  {getProductAssetFolder(product.id) ? (
                    <img
                      src={`/assets/${getProductAssetFolder(product.id)}/desktop/image-product.jpg`}
                      alt={product.name}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="text-7xl mb-4">{product.image}</div>
                  )}
                </div>
              </div>

              <div>
                {product.new && (
                  <p className="text-gray-500 text-sm font-medium tracking-widest mb-4">
                    NEW PRODUCT
                  </p>
                )}
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                {product.price && (
                  <p className="text-2xl md:text-3xl font-bold text-black mb-8">
                    ${product.price.toLocaleString()}
                  </p>
                )}

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      if (product) {
                        addItem(product, quantity);
                        // ensure cart UI opens (explicit) and provide quick debug trace
                        try {
                          openCart();
                        } catch (e) {
                          console.debug("openCart error:", e);
                        }
                        // user-visible confirmation toast
                        try {
                          toast({
                            title: "Added to cart",
                            description: `${product.name} — ${quantity} added to your cart`,
                          });
                        } catch (e) {
                          console.debug("toast error:", e);
                        }
                        console.debug("Added to cart:", product.id, "x", quantity);
                        setQuantity(1);
                      }
                    }}
                    className="flex items-center gap-2 bg-accent text-white px-8 py-3 font-bold tracking-widest hover:bg-orange-600 transition"
                  >
                    <ShoppingCart size={20} />
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

            {/* Features & In the Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-black">FEATURES</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Featuring a genuine leather head strap and ear cup recreation, these headphones deliver premium sound and exceptional comfort for extended listening sessions. Whether you're taking a business call or just in your daily routine, the innovative design and premium audio features ensure that you'll hear every detail in pristine quality.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio exactly the way you want. With a premium design and world-class sound signature, these headphones redefine what it means to experience high-fidelity audio. The expertly engineered 40mm drivers deliver rich bass, clear vocals, and crystal-clear highs with exceptional soundstage and precision.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-black">IN THE BOX</h2>
                <ul className="space-y-2">
                  <li className="flex gap-4 text-gray-600 text-sm">
                    <span className="text-accent font-bold">•</span>
                    <span>1x Headphone Unit</span>
                  </li>
                  <li className="flex gap-4 text-gray-600 text-sm">
                    <span className="text-accent font-bold">•</span>
                    <span>2x 3.5mm 5m Audio Cable</span>
                  </li>
                  <li className="flex gap-4 text-gray-600 text-sm">
                    <span className="text-accent font-bold">•</span>
                    <span>1x Travel Bag</span>
                  </li>
                  <li className="flex gap-4 text-gray-600 text-sm">
                    <span className="text-accent font-bold">•</span>
                    <span>1x User Manual</span>
                  </li>
                  <li className="flex gap-4 text-gray-600 text-sm">
                    <span className="text-accent font-bold">•</span>
                    <span>1x 3.5mm to 6.3mm Adapter</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gallery: on md+ show two stacked images on the left and one large image on the right */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
              {getProductGallery(product.id).length > 0 ? (
                <>
                  {/* Right column: large image spanning two rows (on mobile show first) */}
                  <div className="md:col-span-2 md:order-none order-first rounded-lg overflow-hidden">
                    <div className="rounded-lg overflow-hidden aspect-[4/3]">
                      <img
                        src={getProductGallery(product.id)[2]}
                        alt={`${product.name} gallery large`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Left column: two stacked images (on mobile show after large image) */}
                  <div className="md:col-span-1 md:order-none order-last grid grid-rows-2 gap-6">
                    <div className="rounded-lg overflow-hidden aspect-[4/3]">
                      <img
                        src={getProductGallery(product.id)[0]}
                        alt={`${product.name} gallery 1`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden aspect-[4/3]">
                      <img
                        src={getProductGallery(product.id)[1]}
                        alt={`${product.name} gallery 2`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-1 grid grid-rows-2 gap-6">
                    <div className="bg-gray-200 rounded-lg flex items-center justify-center aspect-[3/2]">
                      <span className="text-6xl">📸</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg flex items-center justify-center aspect-[3/2]">
                      <span className="text-6xl">📷</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">�</span>
                  </div>
                </>
              )}
            </div>

            {/* You May Also Like */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-black text-center">
                YOU MAY ALSO LIKE
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="text-center group"
                  >
                    <div className="bg-gray-100 rounded-lg p-4 mb-6 flex items-center justify-center aspect-[4/3] group-hover:opacity-75 transition">
                      {getProductAssetFolder(relatedProduct.id) ? (
                        <img
                          src={`/assets/${getProductAssetFolder(relatedProduct.id)}/desktop/image-category-page-preview.jpg`}
                          alt={relatedProduct.name}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      ) : (
                        <span className="text-6xl">{relatedProduct.image}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-black mb-4">
                      {relatedProduct.name}
                    </h3>
                    <button className="bg-accent text-white px-8 py-2 font-bold text-sm tracking-widest hover:bg-orange-600 transition">
                      SEE PRODUCT
                    </button>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category Cards */}
            <SharedSections />
            <About />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
