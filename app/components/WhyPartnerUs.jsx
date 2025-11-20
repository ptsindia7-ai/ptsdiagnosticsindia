"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      time: "3 months",
      text: "Our experience with point-of-care technology and chronic disease management enables us to take key learnings from multiple clients and build a plan that is achievable.",
      name: "Bridget Melland",
      role: "Director of Corporate Accounts",
    },
    {
      rating: 5,
      time: "3 months",
      text: "Outcomes are the new income in many healthcare models, and point-of-care testing aligns perfectly by rapidly and accurately providing results in minutes instead of days.",
      name: "Stephen Riendeau",
      role: "Chief Commercial Officer",
    },
    {
      rating: 5,
      time: "3 months",
      text: "Point-of-care testing is a game-changer, delivering fast, accurate results that improve decision-making and patient care.",
      name: "Dr. John Smith",
      role: "Chief Medical Officer",
    },
  ];

  return (
    <section className="relative w-full bg-[#DF1931] py-20 text-white overflow-hidden">
      {/* TOP-RIGHT DECOR */}
      <img
        src="/images/vector-top.png"
        alt=""
        className="absolute top-0 right-0 w-64 opacity-20 pointer-events-none"
      />

      {/* BOTTOM-LEFT DECOR */}
      <img
        src="/images/vector-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-64 opacity-20 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-14">
          What Our Partners Say
        </h2>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          className="pb-16"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-gray-800 p-8 rounded-[28px] shadow-md h-[260px] flex flex-col justify-between">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-red-500 gap-1">
                    {"★★★★★".slice(0, item.rating)}
                  </div>
                  <p className="text-gray-500 text-sm">{item.time}</p>
                </div>

                {/* Text */}
                <p className="text-[15px] leading-relaxed text-gray-700">
                  {item.text}
                </p>

                {/* Name */}
                <div className="mt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ARROWS */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="testimonial-prev h-12 w-12 flex items-center justify-center rounded-full bg-white text-gray-800 shadow hover:bg-gray-100 transition">
            ←
          </button>

          <button className="testimonial-next h-12 w-12 flex items-center justify-center rounded-full bg-white text-gray-800 shadow hover:bg-gray-100 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
