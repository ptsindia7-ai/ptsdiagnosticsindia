import WhyPartnerUs from "../components/WhyPartnerUs";
import LetsTalk from "../components/LetsTalk";

export default function ProductCards() {
  const products = [
    {
      name: "ICare- 2100",
      sub: "Portable Automatic Multi-function Analyzer",
      img: "/products/p11.png",
      hoverImg: "/hover/icare2100-hover.png",
      pdf: "/pdf/icare2100.pdf",
    },
    {
      name: "ican-I6",
      sub: "CGM",
      img: "/products/p2.png",
      hoverImg: "/hover/ican6-hover.png",
      pdf: "/pdf/ican-i6.pdf",
    },
    {
      name: "ican-H6",
      sub: "CGM",
      img: "/products/p2.png",
      hoverImg: "/hover/icanh6-hover.png",
      pdf: "/pdf/ican-h6.pdf",
    },
    {
      name: "KUG - 11",
      sub: "Multi Monitoring Meter",
      img: "/products/p3.png",
      hoverImg: "/hover/kug11-hover.png",
      pdf: "/pdf/kug-11.pdf",
    },
    {
      name: "PH",
      sub: "Multi Monitoring Meter",
      img: "/products/p6.png",
      hoverImg: "/hover/pch50-hover.png",
      pdf: "/pdf/ph.pdf",
    },
    {
      name: "PCH50",
      sub: "Multi Monitoring System",
      img: "/products/p7.png",
      hoverImg: "/hover/pch50-hover.png",
      pdf: "/pdf/pch50.pdf",
    },
    {
      name: "icare - 1300",
      sub: "Portable Automatic Multi-function Analyzer",
      img: "/products/p8.png",
      hoverImg: "/hover/icare1300-hover.png",
      pdf: "/pdf/icare1300.pdf",
    },
    {
      name: "Safe AQ Max 2",
      sub: "Blood Glucose Meter",
      img: "/products/p9.png",
      hoverImg: "/products/p4-hover.png",
      pdf: "/pdf/safeaqmax2.pdf",
    },
    {
      name: "Safe AQ Max 3",
      sub: "Blood Glucose Meter",
      img: "/products/p10.png",
      hoverImg: "/products/p9-hover.png",
      pdf: "/pdf/safeaqmax3.pdf",
    },
  ];

  return (
    <>
      <section className="w-full py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            Our Products Across <br /> Healthcare Categories
          </h2>

          {/* Right Button */}
          <a
            href="/products"
            className="inline-block bg-[#DF1931] text-white text-sm md:text-base font-medium px-6 py-3 rounded-xl shadow-md hover:bg-[#c5162a] transition duration-300"
          >
            Explore Our Products
          </a>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col group">
              {/* IMAGE CARD */}
              <div className="w-full h-[350px] rounded-3xl flex items-center justify-center relative">
                {/* Default Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-100 w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* Hover Image */}
                <img
                  src={product.hoverImg}
                  alt={`${product.name}-hover`}
                  className="h-100 w-full object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* TEXT + BUTTON (LOCKED LAYOUT) */}
              <div className="mt-6 flex items-center justify-between w-full">
                {/* TEXT */}
                <div className="max-w-[60%]">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-tight mt-1">
                    {product.sub}
                  </p>
                </div>

                {/* BUTTON */}
                <a
                  href={product.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto bg-[#D7262D] text-white px-8 py-3 rounded-xl text-sm whitespace-nowrap hover:bg-[#b71f24] transition-all"
                >
                  Know more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <LetsTalk />
      <WhyPartnerUs />
    </>
  );
}
