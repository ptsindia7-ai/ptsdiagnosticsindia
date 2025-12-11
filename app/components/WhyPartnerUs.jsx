"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      time: "3 months",
      text: "Continuous insight for smarter diabetes care. See your glucose in real time and shape your health. Support proactive blood glucose management and improve quality of your life.",
      name: "Kuntal Das,",
      role: "Finance Manager",
      image: "/testimonials/kunal-das.jpg",
    },
     {
      rating: 4,
      time: "2 months",
      text: "Welcome to our organization, where innovation, integrity, and ambition drive success. As Managing Director, I’m proud to lead a team that turns challenges into opportunities.",
      name: "Ashvnee Bhadouria,",
      role: "Managing Director",
      image: "/testimonials/md.jpg",
    },
    {
      rating: 5,
      time: "3 months",
      text: "Continuous insight for smarter diabetes care. See your glucose in real time and shape your health. Support proactive blood glucose management and improve quality of your life.",
      name: "Kuntal Das,",
      role: "Finance Manager",
      image: "/testimonials/kunal-das.jpg",
    },
     {
      rating: 4,
      time: "2 months",
      text: "Welcome to our organization, where innovation, integrity, and ambition drive success. As Managing Director, I’m proud to lead a team that turns challenges into opportunities.",
      name: "Ashvnee Bhadouria,",
      role: "Managing Director",
      image: "/testimonials/md.jpg",
    },
    {
      rating: 5,
      time: "3 months",
      text: "Continuous insight for smarter diabetes care. See your glucose in real time and shape your health. Support proactive blood glucose management and improve quality of your life.",
      name: "Kuntal Das,",
      role: "Finance Manager",
      image: "/testimonials/kunal-das.jpg",
    },
     {
      rating: 4,
      time: "2 months",
      text: "Welcome to our organization, where innovation, integrity, and ambition drive success. As Managing Director, I’m proud to lead a team that turns challenges into opportunities.",
      name: "Ashvnee Bhadouria,",
      role: "Managing Director",
      image: "/testimonials/md.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-[#DF1931] py-20 text-white overflow-hidden">
      <img
        src="/images/vector-top.png"
        alt=""
        className="absolute top-0 right-0 w-64 opacity-20 pointer-events-none"
      />
      <img
        src="/images/vector-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-64 opacity-20 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-14">
          What Our Leaders Say
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          className="pb-16"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-gray-800 p-8 rounded-[28px] shadow-lg min-h-[260px] flex flex-col justify-between text-left relative">

                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#DF1931] ">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>
                        <img src="/images/plus.svg" alt="" />
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">{item.time}</p>
                </div>

                <p className="text-[14px] leading-relaxed  text-gray-600">
                  {item.text}
                </p>

                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>

                {/* Profile Image Added */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full absolute bottom-4 right-4 object-cover border-4 border-[#DF1931] shadow-sm"
                />
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
