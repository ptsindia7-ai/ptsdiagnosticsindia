"use client";

export default function UpcomingProducts() {
  const products = [
    {
      name: "Palm Lab",
      img: "/images/palm-lab.png",
      hoverImg: "/images/palm-lab-hover.png",
    },
    {
      name: "Ketone Meter",
      img: "/images/ketone.png",
      hoverImg: "/images/ketone-hover.png",
    },
    {
      name: "H101 & 102",
      img: "/images/h101.png",
      hoverImg: "/images/h101-hover.png",
    },
    {
      name: "Arm 30E+",
      img: "/images/arm.png",
      hoverImg: "/images/arm-hover.png",
    },
  ];

  return (
    <section className="w-full py-16">
      {/* Top Heading Section */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm text-[#DF1931] font-semibold flex items-center gap-1 uppercase tracking-wide">
            Innovation 
            <img src="/images/plus.svg" className="w-3 h-3" />
          </h3>
          <h2 className="text-3xl font-semibold mt-2 text-black">
            Upcoming Products
          </h2>
        </div>

        <a
          href="/products"
          className="bg-[#DF1931] text-white px-6 py-3 rounded-lg text-sm font-medium shadow hover:bg-[#C71528] transition cursor-pointer"
        >
          Explore Our Products
        </a>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            
            <div className="group w-full h-[260px] bg-white rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition relative">
              
              {/* Default Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-contain transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <img
                src={item.hoverImg}
                alt={`${item.name} alternate`}
                className="object-contain absolute inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <p className="mt-4 text-gray-800 font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
