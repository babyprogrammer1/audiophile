import { Link } from "react-router-dom";

export default function SharedSections() {
  return (
    <>
      {/* Category Cards */}
      <section className="py-12 mb-24 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Headphones Card */}
            <Link
              to="/headphones"
              className="relative bg-gray-100 h-[204px] w-[350px] top-[59px] rounded-lg p-8 md:p-12 flex flex-col items-center justify-center text-center group transition"
            >
              <div className="absolute w-[400px] top-[-60px] md:w-40 md:h-40 rounded-lg flex items-center justify-center mb-12 group-hover:scale-105 transition">
                <img src="/src/assets/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" width={150} height={200} style={{ transition: 'transform .25s ease' }} />
              </div>
              <h3 className="mt-12 text-lg md:text-xl font-bold mb-2 tracking-wide">
                HEADPHONES
              </h3>
              <div className="flex gap-2">
                <p className="text-sm font-medium" style={{ color: '#d87d4a', fontWeight: 700 }}>
                  SHOP
                </p>
                <span className="m-[4px]">
                  <img src="src/assets/assets/shared/desktop/icon-arrow-right.svg" alt="" />
                </span>
              </div>
            </Link>

            {/* Speakers Card */}
            <Link
              to="/speakers"
              className="relative bg-gray-100 rounded-lg h-[204px] w-[350px] top-[59px] p-8 md:p-12 flex flex-col items-center justify-center text-center group transition"
            >
              <div className="absolute w-[400px] top-[-60px] md:w-40 md:h-40 rounded-lg flex items-center justify-center mb-12 group-hover:scale-105 transition">
                <img src="/src/assets/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Speakers" width={150} height={200} style={{ transition: 'transform .25s ease' }} />
              </div>
              <h3 className="mt-12 text-lg md:text-xl font-bold mb-2 tracking-wide">
                SPEAKERS
              </h3>
              <div className="flex gap-2">
                <p className="text-sm font-medium" style={{ color: '#d87d4a', fontWeight: 700 }}>
                  SHOP
                </p>
                <span className="m-[4px]">
                  <img src="src/assets/assets/shared/desktop/icon-arrow-right.svg" alt="" />
                </span>
              </div>
            </Link>

            {/* Earphones Card */}
            <Link
              to="/earphones"
              className="relative bg-gray-100 h-[204px] w-[350px] top-[59px] rounded-lg p-8 md:p-12 flex flex-col items-center justify-center text-center group transition"
            >
              <div className="absolute w-[400px] top-[-60px] md:w-40 md:h-40 rounded-lg flex items-center justify-center mb-12 group-hover:scale-105 transition">
                <img src="/src/assets/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="Earphones" width={150} height={200} style={{ transition: 'transform .25s ease' }} />
              </div>
              <h3 className="mt-12 text-lg md:text-xl font-bold mb-2 tracking-wide">
                EARPHONES
              </h3>
              <div className="flex gap-2">
                <p className="text-sm font-medium" style={{ color: '#d87d4a', fontWeight: 700 }}>
                  SHOP
                </p>
                <span className="m-[4px]">
                  <img src="src/assets/assets/shared/desktop/icon-arrow-right.svg" alt="" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
