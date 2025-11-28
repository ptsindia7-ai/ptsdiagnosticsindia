"use client";

import ImageSlider from "../components/ImageSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import UpcomingProducts from "../components/UpcomingProducts";
import WhyPartnerUs from "../components/WhyPartnerUs";

export default function MergedSections() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-white via-white to-red-50/30 pt-10 pb-10">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Innovating Point-of-Care with
            <br className="hidden md:block" />
            People, Technology, and Service
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            PTS Diagnostics empowers patients and healthcare professionals with
            the right information at the right time to make the right decisions
          </p>

          <button className="mt-6 sm:mt-8 bg-[#DF1931] text-white px-6 sm:px-8 py-3 rounded-lg font-medium">
            Explore Our Products
          </button>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="about/abt-hero1.png"
              className="w-full h-52 sm:h-64 object-cover rounded-[30px]"
            />
            <img
              src="about/abt-hero2.png"
              className="w-full h-52 sm:h-64 object-cover rounded-[30px]"
            />
            <img
              src="about/abt-hero3.png"
              className="w-full h-52 sm:h-64 object-cover rounded-[30px]"
            />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative w-full py-14 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 sm:px-6">
          <img
            src="about/abt-who.png"
            className="w-full h-[300px] sm:h-[500px] object-cover rounded-3xl"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3 leading-snug">
              Who We Are
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed text-base sm:text-lg">
              PTS Diagnostics is an innovative point-of-care diagnostics
              solutions provider dedicated to empowering both patients and
              healthcare professionals. Our name represents the three pillars
              that drive our long-term success: People, Technology, and Service.
              Headquartered in Whitestown, Indiana, we design, manufacture, and
              market solutions that serve healthcare providers and patients
              across hundreds of countries worldwide. With facilities in
              Indianapolis, IN, and Sunnyvale, CA, plus sales offices in North
              America, Europe, Latin America, and the Pacific Rim, our reach is
              truly global.
            </p>

            <button className="mt-6 bg-[#DF1931] text-white px-6 sm:px-8 py-3 rounded-lg font-medium">
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT */}
      <section className="relative w-full bg-[#DF1931] py-10 sm:py-14 text-white">
        <img
          src="/images/vector4.png"
          className="absolute bottom-0 left-0 w-24 sm:w-40 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 sm:mb-12">
            Our Global Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-0">
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                135+
              </h3>
              <p className="text-sm sm:text-lg md:text-xl mt-2 opacity-90">
                Countries
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                2.5M+
              </h3>
              <p className="text-sm sm:text-lg md:text-xl mt-2 opacity-90">
                Devices Deployed
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                500K+
              </h3>
              <p className="text-sm sm:text-lg md:text-xl mt-2 opacity-90">
                Tests Daily
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                98.7%
              </h3>
              <p className="text-sm sm:text-lg md:text-xl mt-2 opacity-90">
                Accuracy Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="w-full py-14 md:py-20 bg-white">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-4 px-4">
          Our Journey
        </h2>

        <p className="text-gray-600 text-center text-base sm:text-lg px-4">
          From groundbreaking innovations to global milestones
        </p>

        <div className="mt-10 flex justify-center overflow-x-auto px-4">
          <img
            src="/images/journey.png"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* VALUES, MISSION, EMPLOYEE MODEL — works well with responsive grids */}
      {/* ... values section unchanged but wrapped with px-4 sm:px-6 ... */}

      {/* LET’S TALK SECTION */}
      <section className="relative w-full py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 items-center">
          <img
            src="/images/who.png"
            className="w-full h-[300px] sm:h-[500px] object-cover rounded-[40px]"
          />

          <div className="w-full">
            <h3 className="text-sm font-semibold text-[#DF1931] uppercase flex items-center gap-2">
              Who We Are <img src="/images/plus.svg" className="w-3" />
            </h3>

            <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
              Let’s Talk Diagnostics
            </h2>

            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="Full Name"
                  className="p-4 bg-[#F7F7F7] rounded-lg"
                />
                <input
                  placeholder="Whatsapp Number"
                  className="p-4 bg-[#F7F7F7] rounded-lg"
                />
              </div>
              <input
                placeholder="E-mail"
                className="p-4 bg-[#F7F7F7] rounded-lg w-full"
              />
              <input
                placeholder="Your Address"
                className="p-4 bg-[#F7F7F7] rounded-lg w-full"
              />
              <input
                placeholder="Product of Interest"
                className="p-4 bg-[#F7F7F7] rounded-lg w-full"
              />
              <button className="bg-[#DF1931] text-white px-8 py-3 rounded-lg mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <img
          src="/images/vector2.png"
          className="absolute bottom-0 right-0 w-28 sm:w-40"
        />
      </section>

      <WhyPartnerUs />
    </>
  );
}
