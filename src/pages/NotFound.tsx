import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-4">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Oops! Page not found
          </p>
          <p className="text-gray-500 mb-8">
            The page you're looking for doesn't exist yet. Continue prompting to
            have it created!
          </p>
          <Link
            to="/"
            className="inline-block bg-accent text-white px-8 py-3 md:px-10 md:py-4 font-bold text-sm md:text-base tracking-widest hover:bg-orange-600 transition"
          >
            RETURN HOME
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
