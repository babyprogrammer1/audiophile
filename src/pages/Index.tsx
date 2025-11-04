import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SharedSections from "@/components/SharedSections";
import About from "@/components/About";

export default function Index() {
  return (
  <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
  <section className="bg-black text-white py-12 md:py-24 relative overflow-hidden min-h-[60vh] md:min-h-[72vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-gray-500 text-sm md:text-base font-medium tracking-widest mb-6">
                  NEW PRODUCT
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  XX99 MARK II HEADPHONES
                </h1>
                <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed max-w-md">
                  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <Link
                  to="/product/xx99-mark-ii"
                  className="inline-block bg-accent text-white px-8 py-3 md:px-10 md:py-4 font-bold text-sm md:text-base tracking-widest hover:bg-orange-600 transition"
                >
                  SEE PRODUCT
                </Link>
              </div>

              <div className="flex items-center justify-center">
                <div className="h-auto md:h-[80vh] lg:h-[85vh] flex items-center justify-center rounded-lg w-full">
                  <img
                    src="/src/assets/assets/home/desktop/Bitmap.png"
                    alt="XX99 Mark II"
                    loading="lazy"
                    className="object-contain w-full max-w-[420px] sm:max-w-[520px] md:max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <SharedSections />

        {/* ZX9 Speaker Section */}
        <section className="pt-6 pb-0 md:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 pb-0 sm:px-6 lg:px-8">
            <div className="bg-accent rounded-lg relative overflow-hidden h-full min-h-[380px] md:min-h-[485px]">
              {/* Decorative layers to make the orange panel unique */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {/* subtle radial glow (responsive sizes) */}
                <div className="absolute -left-20 -top-20 sm:-left-32 sm:-top-32 md:-left-40 md:-top-40 w-[280px] sm:w-[420px] md:w-[600px] h-[280px] sm:h-[420px] md:h-[600px] rounded-full bg-white/6 blur-3xl mix-blend-overlay" />

                {/* rotated translucent panel (responsive) */}
                <div className="absolute right-[-6%] sm:right-[-8%] md:right-[-10%] top-1/4 w-[240px] sm:w-[320px] md:w-[420px] h-[140px] sm:h-[180px] md:h-[220px] bg-white/8 -rotate-12 rounded-2xl shadow-2xl opacity-60" />

                {/* dotted svg pattern (scaled down on small screens) */}
                <svg className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 w-32 h-32 sm:w-48 sm:h-48 opacity-30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <defs>
                    <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.6)" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-36 p-8 md:p-12">
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[620px] rounded-lg relative flex items-center justify-center z-20">
                    <img
                      src="/src/assets/assets/home/desktop/image-removebg-preview.png"
                      alt="ZX9 Speaker"
                      loading="lazy"
                      className="object-contain w-full h-auto"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/3 mt-6 md:mt-20 md:ml-12 lg:ml-40 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ZX9<br />SPEAKER
                  </h2>
                  <p className="text-white text-opacity-90 text-sm md:text-base mb-8 leading-relaxed">
                    Upgrade to premium speakers that are phenomenal and are absolutely captivating with incredible soundstage and precision.
                  </p>
                  <Link
                    to="/product/zx9-speaker"
                    className="inline-block bg-black text-accent px-8 py-3 md:px-10 md:py-4 font-bold text-sm md:text-base tracking-widest hover:bg-gray-900 transition"
                  >
                    SEE PRODUCT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZX7 Speaker Section */}
        <section className="py-12 md:py-20 bg-white pb-0 md:pb-0 -mb-2">
          <div className="max-w-7xl h-[320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-lg overflow-hidden bg-cover bg-center"
              style={{
          backgroundImage: "url('/src/assets/assets/home/desktop/image-speaker-zx7.jpg')",
          minHeight: 320,
              }}
            >
              <div className="w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center p-8 md:p-12">
            <div />
            <div className="text-black text-center md:text-right">
              </div>
                    <div className="text-black text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl ml-7 font-bold mb-6">ZX7 SPEAKER</h2>
                      
                    <Link
                      to="/product/zx7-speaker"
                      className="inline-block border-2 border-black text-black ml-7 mt-5 px-8 py-3 md:px-10 md:py-4 font-bold text-sm md:text-base tracking-widest hover:bg-white hover:text-black transition"
                    >
                      SEE PRODUCT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YX1 Earphones Section */}
        <section className="mt-0 py-6 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md md:max-w-none rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/src/assets/assets/home/desktop/image-earphones-yx1.jpg"
                      alt="YX1 Earphones"
                      loading="lazy"
                      className="object-contain w-full h-auto"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-start justify-center text-black bg-gray-100 p-6 md:p-8 w-full">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    YX1 EARPHONES
                  </h2>
                  <Link
                    to="/product/yx1-earphones"
                    className="inline-block border-2 border-black text-black px-8 py-3 md:px-10 md:py-4 font-bold text-sm md:text-base tracking-widest hover:bg-black hover:text-white transition"
                  >
                    SEE PRODUCT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />
      </main>

      <Footer />
    </div>
  );
}
