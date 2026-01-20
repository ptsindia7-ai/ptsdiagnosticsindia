import WhyPartnerUs from "../components/WhyPartnerUs";
import LetsTalk from "../components/LetsTalk";
import FormClient from "../components/FormClient";

export default function ProductCards() {
  const products = [
    {
      name: "iCARE - 2100",
      sub: "Portable Automatic Multi-function Analyzer",
      img: "/products/p11.png",
      hoverImg: "/hover/icare2100-hover.png",
      pdf: "/pdf/icare2100.pdf",
    },
    {
      name: "iCan - i3 CGM",
      sub: "CGM",
      img: "/products/ican3.png",
      hoverImg: "/products/ican3.png",
      pdf: "/pdf/ican-i3.pdf",
    },
    // {
    //   name: "iCan-i6",
    //   sub: "CGM",
    //   img: "/products/p2.png",
    //   hoverImg: "/hover/ican6-hover.png",
    //   pdf: "/pdf/ican-i6.pdf",
    // },
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
      hoverImg: "/products/p6.png",
      pdf: "/pdf/ph.pdf",
    },
    {
      name: "PCH50",
      sub: "Multi Monitoring System",
      img: "/products/p7.png",
      hoverImg: "/hover/pch5-hover.png",
      pdf: "/pdf/pch50.pdf",
    },
    {
      name: "iCARE - 1300",
      sub: "Portable Automatic Multi-function Analyzer",
      img: "/products/p8.png",
      hoverImg: "/hover/icare-hover.png",
      pdf: "/pdf/icare1300.pdf",
    },
    {
      name: "Safe AQ Max I",
      sub: "Blood Glucose Meter",
      img: "/products/p9.png",
      hoverImg: "/hover/aq1-hover.png",
      pdf: "/pdf/safeaqmax1.pdf",
    },
    {
      name: "Safe AQ Max II",
      sub: "Blood Glucose Meter",
      img: "/products/p9.png",
      hoverImg: "/hover/aq2-hover.png",
      pdf: "/pdf/safeaqmax2.pdf",
    },
    {
      name: "Safe AQ Max III",
      sub: "Blood Glucose Meter",
      img: "/products/p9.png",
      hoverImg: "/hover/aq3-hover.png",
      pdf: "/pdf/safeaqmax3.pdf",
    },
    {
      name: "Palm Lab",
      sub: "Blood Glucose Meter",
      img: "/images/palm.png",
      hoverImg: "/images/palm-lab-hover.png",
    },
    {
      name: "H101 & 102",
      sub: "Blood Glucose Meter",
      img: "/images/h101-copy.png",
      hoverImg: "/images/h101-h.png",
      pdf: "/pdf/h101.pdf",
    },
    {
      name: "ARM 30E+",
      sub: "Blood Glucose Meter",
      img: "/images/arm30.png",
      hoverImg: "/images/arm-hover.png",
    },
    {
      name: "Safe AQ UG",
      sub: "Blood Glucose Meter",
      img: "/images/safe-aq-ug.png",
      hoverImg: "/images/safe-aq-ug.png",
      pdf: "/pdf/safe-aq-ug.pdf",
    },
    {
      name: "Safe AQ Smart",
      sub: "Blood Glucose Meter",
      img: "/images/safe-aq-smart.png",
      hoverImg: "/images/safe-aq-smart.png",
      pdf: "/pdf/safe-aq-smart.pdf",
    },
    {
      name: "Safe AQ Angel",
      sub: "Blood Glucose Meter",
      img: "/images/safe-aq-angel.png",
      hoverImg: "/images/safe-aq-angel.png",
      pdf: "/pdf/safe-aq-angel.pdf",
    },
    {
      name: "Safe-Accu",
      sub: "Blood Glucose Meter",
      img: "/images/safe-accu.png",
      hoverImg: "/images/safe-accu.png",
      pdf: "/pdf/safe-accu.pdf",
    },
  ];

  return (
    <>
      <section className="w-full py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-4xl font-semibold text-gray-900 leading-tight">
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

      <section className="py-10 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col group">
              {/* IMAGE CARD */}
              <div className="w-full h-[260px] sm:h-[300px] md:h-[350px] rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Default Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* Hover Image */}
                <img
                  src={product.hoverImg}
                  alt={`${product.name}-hover`}
                  className="w-full h-full object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* TEXT + BUTTON */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* TEXT */}
                <div className="w-full sm:w-auto">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mt-1 leading-tight">
                    {product.sub}
                  </p>
                </div>

                {/* KNOW MORE BUTTON */}
                <a
                  href={`${product.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-[#D7262D] text-white px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap hover:bg-[#b71f24] transition-all"
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
