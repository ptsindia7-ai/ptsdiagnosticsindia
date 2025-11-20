"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProductCarousel() {
  const images = [
    "products/prod1.png",
    "products/prod2.png",
    "products/prod3.png",
    "products/prod4.png",
    "products/prod5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-[#D51827] w-full py-14 overflow-hidden">

      {/* HEADING */}
      <h2 className="text-white text-3xl font-semibold text-center mb-12">
        Explore Our Product Range
      </h2>

      {/* SLIDER WRAPPER */}
      <div className="relative w-full flex justify-center px-6">
        <div
          className="flex gap-10 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 260}px)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[230px] h-[260px]rounded-xl flex items-center justify-center"
            >
              <img src={img} className="h-full object-contain p-4" />
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON + ARROWS */}
      <div className="flex items-center justify-between max-w-[1400px] mx-auto mt-10 px-6">

        {/* CENTER BUTTON */}
        <div className="flex flex-1 justify-center">
          <button className="bg-white text-[#D51827] font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Explore More
          </button>
        </div>

        {/* RIGHT ALIGNED ARROWS */}
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={next}
            className="bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
