import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DevAssets() {
  // Import all assets as URLs using Vite glob
  const modules = import.meta.glob('/src/assets/assets/**', { as: 'url', eager: true }) as Record<string, string>;

  const images = Object.entries(modules)
    .filter(([path]) => /\.(png|jpe?g|svg|gif)$/i.test(path))
    .map(([path, url]) => ({ path, url }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Dev: All Assets Showcase</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.path} className="bg-white rounded shadow p-3 flex flex-col items-center">
              <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.url} alt={img.path} className="max-h-full max-w-full" />
              </div>
              <div className="text-xs text-gray-600 break-all">{img.path.replace('/src/assets/assets/', '')}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
