import ImageSlider from "../components/ImageSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import UpcomingProducts from "../components/UpcomingProducts";
import Link from "next/link";
import { trainingData } from "../data/trainingData";
import WhyPartnerUs from "../components/WhyPartnerUs";

export default function MergedSections() {
  return (
    <>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* LEFT TEXT BLOCK */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Product Training and <br className="hidden sm:block" />{" "}
              Demonstrations
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

      <section className="py-10 px-4 sm:px-6 lg:px-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {Object.entries(trainingData).map(([slug, product]) => (
            <div key={slug} className="flex flex-col group rounded-3xl">
              {/* IMAGE CARD */}
              <div className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[350px] rounded-3xl bg-white flex items-center justify-center relative overflow-hidden">
                <img
                  src={`/products/${slug}.png`}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TEXT + BUTTON */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                {/* TEXT */}
                <div className="w-full sm:w-auto">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                    {product.title}
                  </h3>

                  {product.desc && (
                    <p className="text-gray-500 text-sm md:text-base mt-1 leading-tight">
                      {product.desc}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                {product.type === "video" ? (
                  <Link
                    href={`/training/${slug}`}
                    className="w-full sm:w-auto text-center bg-[#DF1931] text-white px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap hover:bg-[#c5162a] transition-all flex items-center justify-center gap-2"
                  >
                    <img src="/images/play.svg" className="w-4 h-4" />
                    Video
                  </Link>
                ) : (
                  <a
                    href={product.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-[#DF1931] text-white px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap hover:bg-[#c5162a] transition-all"
                  >
                    Know More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/images/who.png"
              alt="Laboratory"
              className="w-full h-60 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-2xl sm:rounded-3xl lg:rounded-[40px]"
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
