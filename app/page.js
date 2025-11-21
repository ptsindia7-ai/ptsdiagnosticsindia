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
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Empowering Accurate <br /> Diagnostics, Anywhere.
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Reliable point-of-care solutions for chronic disease detection and
            monitoring.
          </p>

          {/* CTA BUTTON */}
          <button className="mt-8 bg-[#DF1931] hover:bg-[#DF1931] text-white px-8 py-3 rounded-lg font-medium transition">
            Explore Our Products
          </button>
        </div>

        <ImageSlider />
      </section>

      {/* IMPACT SECTION */}

      <section className="relative w-full bg-[#DF1931] py-12 text-white overflow-hidden">
        {/* BOTTOM-LEFT DECOR IMAGE */}
        <img
          src="/images/vector4.png" // <-- Replace with your actual image filename
          alt="decor"
          className="absolute bottom-0 left-0 w-50 md:w-40 pointer-events-none select-none"
        />

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Our Global Impact
          </h2>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
            <div>
              <h3 className="text-6xl font-semibold">135+</h3>
              <p className="text-xl mt-2 mr-8 opacity-90">Countries</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">2.5M+</h3>
              <p className="text-xl mt-2  mr-4 opacity-90">Devices Deployed</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">500K+</h3>
              <p className="text-xl mt-2 mr-20 opacity-90">Tests Daily</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">98.7%</h3>
              <p className="text-xl mt-2 mr-6 opacity-90">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 bg-white overflow-hidden">
        {/* TOP-LEFT DECORATION IMAGE */}
        <img
          src="/images/vector.png"
          alt=""
          className="absolute top-0 left-0 w-40 h-40 object-contain pointer-events-none select-none"
        />

        {/* BOTTOM-RIGHT DECORATION IMAGE */}
        <img
          src="/images/vector2.png"
          alt=""
          className="absolute bottom-0 right-0 w-52 h-52 object-contain pointer-events-none select-none"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-20 relative z-10">
          {/* LEFT IMAGE */}
          <img
            src="images/who.png"
            alt="Healthcare professionals"
            className="w-full h-full object-cover rounded-3xl shadow-sm"
          />

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-[#DF1931] font-semibold tracking-wide flex items-center gap-2">
              WHO WE ARE
              <span className="text-xl font-bold">
                <img src="images/plus.svg" />
              </span>
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3 leading-snug">
              Trusted Diagnostics for a <br /> Healthier World
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed">
              We are a global leader in innovative point-of-care diagnostic
              devices. From diabetes and lipid monitoring to multifunctional
              analyzers, our solutions help healthcare professionals make
              faster, more informed decisions—right at the point of care.
            </p>

            <button className="mt-7 bg-[#DF1931] hover:bg-[#DF1931] text-white px-7 py-3 rounded-lg font-medium transition">
              Know More
            </button>
          </div>
        </div>
      </section>
      <ProductRange />
      <UpcomingProducts />
      <WhyChooseUs />

      <section className="relative w-full py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/images/lab.png"
              alt="Laboratory"
              className="w-full h-[500px] object-cover rounded-[40px]"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="w-full">
            {/* Small Heading */}
            <h3 className="text-sm font-semibold text-[#DF1931] uppercase flex items-center gap-2">
              Who We Are
              <img src="/images/plus.svg" alt="plus" className="w-3 h-3" />
            </h3>

            {/* Main Heading */}
            <h2 className="text-4xl font-semibold text-black mt-2">
              Let’s Talk Diagnostics
            </h2>

            {/* FORM */}
            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
                />
                <input
                  type="text"
                  placeholder="Whatsapp Number"
                  className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
              />

              <input
                type="text"
                placeholder="Your Address"
                className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
              />

              <input
                type="text"
                placeholder="Product of Interest"
                className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-4 bg-[#DF1931] text-white px-10 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#c31329] transition"
              >
                Send Message
                <span className="text-lg">›</span>
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM-RIGHT DECORATIVE SHAPE (Optional) */}
        <img
          src="/images/vector2.png"
          alt="decor"
          className="absolute bottom-0 right-0 w-40 pointer-events-none"
        />
      </section>
      <WhyPartnerUs />
    </>
  );
}
