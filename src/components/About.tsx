import React from 'react'

export default function About() {
  return (
     <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  BRINGING YOU THE<br />
                  <span className="text-accent">BEST</span> AUDIO GEAR
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Located at the heart of New York City, Audiophile is the premier store for high end headphones, headphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of premium audio products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
              </div>
              
              <div className="flex items-center justify-center order-first md:order-last">
                <div className="w-full aspect-square bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                  <img src="./assets/shared/desktop/image-best-gear.jpg" alt="Best Gear" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
