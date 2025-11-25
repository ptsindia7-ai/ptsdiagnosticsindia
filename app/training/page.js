import ImageSlider from "../components/ImageSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import UpcomingProducts from "../components/UpcomingProducts";
import WhyPartnerUs from "../components/WhyPartnerUs";

export default function MergedSections() {
  return (
    <>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* LEFT TEXT BLOCK */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Product Training and <br /> Demonstrations
            </h1>

            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Easily find the training you need
            </p>
          </div>

          {/* BUTTON */}
          <div>
            <a
              href="/products"
              className="bg-[#DF1931] hover:bg-red-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all"
            >
             Explore Our Products
            </a>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="rounded-3xl p-6">
            {/* IMAGE BOX */}
            <div className="w-full h-[300px] rounded-3xl  flex items-center justify-center overflow-hidden mb-6">
              <img
                src="/products/ican3.png"
                alt="Ican - 3"
                className="w-full h-full object-contain"
              />
            </div>

            {/* BOTTOM ROW */}
            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  ican - 3
                </h3>
                <p className="text-sm text-gray-500">Multi Monitoring Meter</p>
              </div>

              <button className="bg-[#DF1931] hover:bg-red-700 text-white px-10 py-3 rounded-xl flex items-center gap-2 text-sm">
                <img
                  src="/video.svg" // ← replace with your icon path
                  alt="video icon"
                  className="w-4 h-4"
                />
                Video
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-3xl p-6">
            <div className="w-full h-[300px] rounded-3xl flex items-center justify-center overflow-hidden mb-6">
              <img
                src="/products/ican6.png"
                alt="ican-I6"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">ican-I6</h3>
                <p className="text-sm text-gray-500">CGM</p>
              </div>

              <button className="bg-[#DF1931] hover:bg-red-700 text-white px-10 py-3 rounded-xl text-sm">
                Know more
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-3xl p-6">
            <div className="w-full h-[300px] rounded-3xl flex items-center justify-center overflow-hidden mb-6">
              <img
                src="/products/a1cnow.png"
                alt="A1CNOW+"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">A1CNOW+</h3>
                <p className="text-sm text-gray-500">CGM</p>
              </div>

              <button className="bg-[#DF1931] hover:bg-red-700 text-white px-10 py-3 rounded-xl text-sm">
                Know more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/images/who.png"
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
