// "use client";

// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// export default function ProductCarousel() {
//   const images = [
//     "products/prod1.png",
//     "products/prod2.png",
//     "products/prod3.png",
//     "products/prod4.png",
//     "products/prod5.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => {
//     if (currentIndex < images.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <section className="bg-[#D51827] w-full py-14 overflow-hidden">

//       {/* HEADING */}
//       <h2 className="text-white text-3xl font-semibold text-center mb-12">
//         Explore Our Product Range
//       </h2>

//       {/* SLIDER WRAPPER */}
//       <div className="relative w-full flex justify-center px-6">
//         <div
//           className="flex gap-10 transition-transform duration-500"
//           style={{
//             transform: `translateX(-${currentIndex * 260}px)`,
//           }}
//         >
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="min-w-[230px] h-[260px]rounded-xl flex items-center justify-center"
//             >
//               <img src={img} className="h-full object-contain p-4" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* BUTTON + ARROWS */}
//       <div className="flex items-center justify-between max-w-[1400px] mx-auto mt-10 px-6">

//         {/* CENTER BUTTON */}
//         <div className="flex flex-1 justify-center">
//           <button className="bg-white text-[#D51827] font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
//             Explore More
//           </button>
//         </div>

//         {/* RIGHT ALIGNED ARROWS */}
//         <div className="flex gap-4">
//           <button
//             onClick={prev}
//             className="bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200"
//           >
//             <ArrowLeft />
//           </button>

//           <button
//             onClick={next}
//             className="bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200"
//           >
//             <ArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductCarousel() {
  const products = [
    {
      image: "/products/prod1.png",
      title: "Safe AQ Smart",
      desc: "Advanced Diabetes Monitoring Device",
      pdf: "/pdf/safe-aq-smart.pdf",
      // labels: ["FDA-cleared", "Smart Alerts"],
    },
    {
      image: "/products/prod2.png",
      title: "Safe AQ UG",
      desc: "Accurate Glucose Meter",
      // labels: ["Fast Results", "Easy Use"],
       pdf: "/pdf/safe-aq-ug.pdf",
    },
    {
      image: "/products/prod3.png",
      title: "iCan - i3 CGM",
      desc: "Continuous Glucose Monitor",
      // labels: ["FDA-cleared", "CLIA-waived", "CE-marked", "IFCC - traceable"],
       pdf: "/pdf/ican-i3.pdf",
    },
    {
      title: "Safe-Accu",
      sub: "Blood Glucose Meter",
      image: "/images/safe-accu.png",
      desc: "Portable Blood Sugar Tracker",
      // labels: ["Bluetooth", "App-connected"],
       pdf: "/pdf/safe-accu.pdf",
    },
    {
      image: "/products/prod5.png",
      title: "iCARE - 2100",
      desc: "Lab-grade blood analyzer",
      // labels: ["Dual testing", "ISO-certified"],
       pdf: "/pdf/icare2100.pdf",
    },
    {
      image: "/products/prod3.png",
      title: "iCan - i3 CGM",
      desc: "Continuous Glucose Monitor",
      // labels: ["FDA-cleared", "CLIA-waived", "CE-marked", "IFCC - traceable"],
       pdf: "/pdf/ican-i3.pdf",
    },
    {
      title: "Safe-Accu",
      sub: "Blood Glucose Meter",
      image: "/images/safe-accu.png",
      desc: "Portable Blood Sugar Tracker",
      // labels: ["Bluetooth", "App-connected"],
       pdf: "/pdf/safe-accu.pdf",
    },
    {
      image: "/products/prod5.png",
      title: "iCARE - 2100",
      desc: "Lab-grade blood analyzer",
      // labels: ["Dual testing", "ISO-certified"],
       pdf: "/pdf/icare2100.pdf",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="bg-[#D51827] w-full py-10 md:py-14 overflow-hidden">
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-14">
        Explore Our Product Range
      </h2>

      {/* SLIDER */}
      <div className="w-full px-2 sm:px-4 md:px-0 h-[full] md:h-[300px] lg:h-[350px] flex items-start">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-next-btn",
            prevEl: ".product-prev-btn",
          }}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          initialSlide={2}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          slidesPerView={1.3}
          breakpoints={{
            480: { slidesPerView: 1.6, spaceBetween: 20 },
            640: { slidesPerView: 2.4, spaceBetween: 26 },
            768: { slidesPerView: 3.4, spaceBetween: 25 },
            1024: { slidesPerView: 3.6, spaceBetween: 36 },
            1200: { slidesPerView: 4.8, spaceBetween: 36 },
          }}
          className="max-w-[1400px] mx-auto"
        >
          {products.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide
                key={index}
                className={`transition-all duration-500 bg-white p-5 rounded-4xl ${
                  isActive
                    ? "sm:!w-[150px] md:!w-[250px] lg:!w-[310px] flex justify-center origin-bottom "
                    : "sm:!w-[100px] md:!w-[200px] lg:!w-[250px] flex justify-center"
                }`}
              >
                <div
                  className={`
                    relative w-full flex items-center justify-center 
                    transition-all duration-500 
                    ${
                      isActive
                        ? "scale-x-100 sm:h-[150px] md:h-[250px] lg:h-[310px] "
                        : "scale-x-90 sm:h-[100px] md:h-[200px] lg:h-[250px] "
                    }
                  `}
                >
                  {/* Outer product background card */}
                  <div className="w-full h-fullflex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[80%] lg:h-[100%] object-contain"
                    />
                  </div>

                  {/* Info card only on active */}
                  {isActive && (
                    <div
                      className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 translate-y-7 bg-white rounded-2xl shadow-2xl 
                      w-[82%] lg:w-[100%] px-3 py-2 sm:px-4 sm:py-3"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="text-[#D51827] font-semibold text-xs sm:text-sm">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 text-[10px] sm:text-xs mt-1">
                            {item.desc}
                          </p>
                        </div>
                        <a
                          href={`${item.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-[#D51827] text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center">
                            <ArrowRight size={12} />
                          </button>
                        </a>
                      </div>

                      {/* <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                        {item.labels.map((label, i) => (
                          <span
                            key={i}
                            className="text-[8px] sm:text-[10px] px-2 py-1 bg-[#FBE8EA] text-[#D51827] rounded-md whitespace-nowrap"
                          >
                            {label}
                          </span>
                        ))}
                        <br/>
                        <span className="text-[8px] sm:text-[10px] text-gray-500">
                          and more
                        </span>
                      </div> */}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* EXPLORE BUTTON + ARROWS */}
      <div className="flex items-center justify-between max-w-[1400px] mx-auto mt-12 md:mt-16 px-4">
        <div className="flex flex-1 justify-center">
          <Link href="/products">
            <button className="bg-white text-[#D51827] font-semibold px-8 py-2 sm:px-10 sm:py-3 rounded-xl shadow-md text-sm sm:text-base cursor-pointer">
              Explore More
            </button>
          </Link>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <button className="product-prev-btn bg-white p-2 sm:p-3 rounded-full shadow-md cursor-pointer">
            <ArrowLeft />
          </button>
          <button className="product-next-btn bg-white p-2 sm:p-3 rounded-full shadow-md cursor-pointer">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
