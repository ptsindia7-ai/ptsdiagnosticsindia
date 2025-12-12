"use client";
import Link from "next/link";
import ImageSlider from "./components/ImageSlider";
import WhyChooseUs from "./components/WhyChooseUs";
import UpcomingProducts from "./components/UpcomingProducts";
import WhyPartnerUs from "./components/WhyPartnerUs";
import ProductRange from "./components/ProductRange";

export default function MergedSections() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-white via-white to-red-50/30 pt-10 pb-10">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Empowering Accurate <br className="hidden md:block" /> Diagnostics,
            Anywhere.
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Reliable point-of-care solutions for chronic disease detection and
            monitoring.
          </p>

          <Link href="/products">
            <button className="mt-6 sm:mt-8 bg-[#DF1931] text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition cursor-pointer">
              Explore Our Products
            </button>
          </Link>
        </div>

        <ImageSlider />
      </section>

      {/* IMPACT SECTION */}
      <section className="relative w-full bg-[#DF1931] py-10 sm:py-14 text-white overflow-hidden">
        <img
          src="/images/vector4.png"
          className="absolute bottom-0 left-0 w-20 sm:w-32 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 sm:mb-12">
            Our Global Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-0">
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

      {/* WHO WE ARE */}
      <section className="relative w-full py-14 md:py-20 bg-white overflow-hidden">
        <img
          src="/images/vector.png"
          className="absolute top-0 left-0 w-20 sm:w-32 pointer-events-none"
        />
        <img
          src="/images/vector2.png"
          className="absolute bottom-0 right-0 w-28 sm:w-40 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 sm:px-6 md:px-10 relative z-10">
          <img
            src="images/who.png"
            className="w-full h-[300px] sm:h-[450px] md:h-[500px] object-cover rounded-3xl"
          />

          <div>
            <p className="text-[#DF1931] font-semibold tracking-wide flex items-center gap-2">
              WHO WE ARE <img src="images/plus.svg" className="w-4" />
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mt-3 leading-snug">
              Trusted Diagnostics for a <br /> Healthier World
            </h2>

            <p className="text-gray-600 mt-4 sm:mt-5 leading-relaxed">
              We are a global leader in innovative point-of-care diagnostic
              devices. From diabetes and lipid monitoring to multifunctional
              analyzers, our solutions help healthcare professionals make
              faster, more informed decisions—right at the point of care.
            </p>

            <button className="mt-5 sm:mt-7 bg-[#DF1931] text-white px-6 sm:px-7 py-3 rounded-lg font-medium">
              Know More
            </button>
          </div>
        </div>
      </section>

      <ProductRange />
      <UpcomingProducts />
      <WhyChooseUs />

      {/* LET’S TALK SECTION */}
      <section className="relative w-full py-14 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <img
            src="/images/lab.png"
            className="w-full h-[300px] sm:h-[450px] md:h-[500px] object-cover rounded-[35px]"
          />

          <div>
            <h3 className="text-sm font-semibold text-[#DF1931] uppercase flex items-center gap-2">
              Who We Are <img src="/images/plus.svg" className="w-3" />
            </h3>

            <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
              Let’s Talk Diagnostics
            </h2>

            <form className="mt-6 sm:mt-8 space-y-4">
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

              <button className="bg-[#DF1931] text-white px-8 py-3 rounded-lg mt-1">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <img
          src="/images/vector2.png"
          className="absolute bottom-0 right-0 w-24 sm:w-40 pointer-events-none"
        />
      </section>

      <WhyPartnerUs />
    </>
  );
}
