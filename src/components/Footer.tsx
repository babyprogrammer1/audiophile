import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">audiophile</h3>
            <p className="text-gray-400 text-sm mb-6">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our store to end the set of features to experience how your favorite tracks sound.
            </p>
          </div>

            <div className="flex flex-col justify-between md:items-end">
            <div></div>
            <div className="flex gap-4 transform md:translate-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition">
              <img src="./assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
              <img src="./assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
              <img src="./assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
              </a>
            </div>
            </div>

            <nav >
            <ul className="flex flex-row gap-3 text-white font-bold">
              <li><Link to="/" className="hover:text-accent transition">HOME</Link></li>
              <li><Link to="/headphones" className="hover:text-accent transition">HEADPHONES</Link></li>
              <li><Link to="/speakers" className="hover:text-accent transition">SPEAKERS</Link></li>
              <li><Link to="/earphones" className="hover:text-accent transition">EARPHONES</Link></li>
            </ul>
            </nav>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
