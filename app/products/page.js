import WhyPartnerUs from "../components/WhyPartnerUs";
import LetsTalk from "../components/LetsTalk";

export default function ProductCards() {
  const products = [
    {
      name: "ICare- 2100",
      sub: "Portable Automatic Multi-function Analyzer",
      img: "/products/p11.png",
      hoverImg: "/products/p1-hover.png", 
    },
    {
      name: "ican-I6",
      sub: "CGM",
      img: "/products/p2.png",
      hoverImg: "/products/p2-hover.png",
    },
    {
      name: "ican-H6",
      sub: "CGM",
      img: "/products/p2.png",
      hoverImg: "/products/p3-hover.png",
    },
    {
      name: "KUG - 11",
      sub: "Multi Monitoring Meter",
      img: "/products/p3.png",
      hoverImg: "/products/p4-hover.png",
    },
    {
      name: "ican-I6",
      sub: "CGM",
      img: "/products/p4.png",
      hoverImg: "/products/p5-hover.png",
    },
    {
      name: "ican-H6",
      sub: "CGM",
      img: "/products/p5.png",
      hoverImg: "/products/p6-hover.png",
    },
    {
      name: "KUG - 11",
      sub: "Multi Monitoring Meter",
      img: "/products/p3.png",
      hoverImg: "/products/p7-hover.png",
    },
    {
      name: "PH",
      sub: "Multi Monitoring Meter",
      img: "/products/p6.png",
      hoverImg: "/products/p8-hover.png",
    },
    {
      name: "PCH50",
      sub: "Multi Monitoring System",
      img: "/products/p7.png",
      hoverImg: "/products/p9-hover.png",
    },
    {
      name: "icare - 1300",
      sub: "Portable Automatic Multi-function Analyzer",
      img: "/products/p8.png",
      hoverImg: "/products/p4-hover.png",
    },
    {
      name: "Safe AQ Max 2",
      sub: "Blood Glucose Meter",
      img: "/products/p9.png",
      hoverImg: "/products/p4-hover.png",
    },
    {
      name: "Safe AQ Max 3",
      sub: "Blood Glucose Meter",
      img: "/products/p10.png",
      hoverImg: "/products/p9-hover.png",
    },
  ];

  return (
    <>
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
                <button className="ml-auto bg-[#D7262D] text-white px-8 py-3 rounded-xl text-sm whitespace-nowrap hover:bg-[#b71f24] transition-all">
                  Know more
                </button>
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
