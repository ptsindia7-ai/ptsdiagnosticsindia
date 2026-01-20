"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ThreeImageLayout() {
  const images = [
    "about/abt-hero2.png",
    "about/abt-hero3.png",
    "about/abt-hero4.jpg",
    "about/abt-hero5.jpg",
    "about/abt-hero6.jpg",
    "about/abt-hero8.jpg",
    "about/abt-hero9.jpg",
    "about/abt-hero10.jpg",
    "about/abt-hero11.jpg",
    "about/abt-hero12.jpg",
    "about/abt-hero13.jpg",
  ];

  return (
    <div className="w-full mx-auto px-3 sm:px-6 py-6 sm:py-10">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        spaceBetween={12}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3500}
        centeredSlides={true}
        breakpoints={{
          480: { slidesPerView: 1.2, spaceBetween: 14 },
          640: { slidesPerView: 1.6, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 18 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="
                w-full 
                h-48 
                sm:h-56 
                md:h-64 
                lg:h-72 
                object-cover 
                rounded-[20px] 
                sm:rounded-[26px] 
                md:rounded-[30px]
                transition-all duration-700 
                hover:scale-95
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
