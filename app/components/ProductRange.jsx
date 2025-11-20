"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function ProductRange() {
  const products = [
    { img: "/products/p1.png" },
    { img: "/products/p2.png" },
    {
      img: "/products/p3.png",
      highlight: true, // middle big card
      title: "ICan i3 CGM",
      subtitle: "Continuous Glucose Monitor",
      tags: ["FDA-cleared", "CLIA-waived", "CE-marked", "IFCC-traceable"],
    },
    { img: "/products/p4.png" },
    { img: "/products/p5.png" },
  ];

  return (
    <section className="w-full bg-[#D71926] py-16 text-center relative">

      {/* Heading */}
      <h2 className="text-white text-3xl font-semibold">
        Explore Our Product Range
      </h2>

      {/* Slider */}
      <div className="mt-10 px-4 relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={40}
          centeredSlides={true}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          className="flex items-center"
        >
          {products.map((item, i) => (
            <SwiperSlide
              key={i}
              className={`!w-[230px] flex justify-center ${
                item.highlight ? "!w-[380px]" : ""
              }`}
            >
              <div
                className={`rounded-[32px] overflow-hidden bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                  item.highlight ? "h-[390px] w-[380px]" : "h-[300px] w-[230px]"
                }`}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-contain p-6"
                />

                {/* Highlight card info */}
                {item.highlight && (
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-3xl px-6 py-4 shadow-md w-[260px] text-left">
                    <h3 className="text-[#D71926] font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.subtitle}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag, t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Explore More Button */}
      <div className="mt-10">
        <button className="bg-white text-[#D71926] px-10 py-3 rounded-xl font-medium shadow-md hover:scale-105 transition">
          Explore More
        </button>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-6 mt-12">
        <button className="prev-btn w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition text-[#D71926] text-xl">
          ←
        </button>
        <button className="next-btn w-12 h-12 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition text-[#D71926] text-xl">
          →
        </button>
      </div>
    </section>
  );
}
