import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

import logoUrl from "../assets/assets/shared/desktop/logo.svg";
import cartIconUrl from "../assets/assets/shared/desktop/icon-cart.svg";
import hamburgerUrl from "../assets/assets/shared/tablet/icon-hamburger.svg";

export default function Header() {
  const { items, openCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="Audiophile" className="h-6 w-auto" />
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <Link to="/" className="hover:text-accent transition">
            HOME
          </Link>
          <Link to="/headphones" className="hover:text-accent transition">
            HEADPHONES
          </Link>
          <Link to="/speakers" className="hover:text-accent transition">
            SPEAKERS
          </Link>
          <Link to="/earphones" className="hover:text-accent transition">
            EARPHONES
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* mobile hamburger */}
          <button
            className="md:hidden p-2"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <img src={hamburgerUrl} alt="Menu" className="w-6 h-6" />
          </button>

          <button
            onClick={openCart}
            className="p-2 hover:text-accent transition relative"
            aria-label="Open cart"
          >
            <img src={cartIconUrl} alt="Cart" className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="relative bg-black text-white w-full max-w-xs h-full p-6">
            <button
              className="mb-8 p-2 text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="flex flex-col gap-6 text-lg font-semibold">
              <Link onClick={() => setMobileOpen(false)} to="/" className="hover:text-accent">
                HOME
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/headphones" className="hover:text-accent">
                HEADPHONES
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/speakers" className="hover:text-accent">
                SPEAKERS
              </Link>
              <Link onClick={() => setMobileOpen(false)} to="/earphones" className="hover:text-accent">
                EARPHONES
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
