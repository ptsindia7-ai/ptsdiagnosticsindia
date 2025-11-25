export default function ProductCards() {
  const products = [
    {
      name: "ICare- 2100",
      sub: "Portable Automatic Multi-function Analyzer",
      img: "/products/p1.png",
    },
    {
      name: "ican-I6",
      sub: "CGM",
      img: "/products/p2.png",
    },
    {
      name: "ican-H6",
      sub: "CGM",
      img: "/products/p3.png",
    },
    {
      name: "KUG - 11",
      sub: "Multi Monitoring Meter",
      img: "/products/p4.png",
    },
    {
      name: "ican-I6",
      sub: "CGM",
      img: "/products/p5.png",
    },
    {
      name: "ican-H6",
      sub: "CGM",
      img: "/products/p6.png",
    },
    {
      name: "KUG - 11",
      sub: "Multi Monitoring Meter",
      img: "/products/p7.png",
    },
      {
      name: "PH",
      sub: "Multi Monitoring Meter",
      img: "/products/p8.png",
    },
      {
      name: "PCH50",
      sub: "CGM",           
      img: "/products/p9.png",
    },
      {
      name: "icare - 1300",                
      sub: "Multi Monitoring System",
      img: "/products/p4.png",
    },
      {
      name: "Safe AQ Max 2 ",
      sub: "Portable Automatic Multi-function Analyzer",
      img: "/products/p4.png",
    },
      {
      name: "Safe AQ Max 3",
      sub: "CGM",
      img: "/products/p9.png",
    },     
  ];

  return (
    <section className="py-14 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">

            {/* IMAGE CARD */}
            <div className="w-full h-[350px] rounded-3xl flex items-center justify-center">
              <img
                src={product.img}
                alt={product.name}
                className="h-100 w-full object-contain"
              />
            </div>

            {/* TEXT + BUTTON (LOCKED LAYOUT) */}
            <div className="mt-6 flex items-center justify-between w-full">

              {/* TEXT AREA WITH FIXED MAX WIDTH */}
              <div className="max-w-[60%]">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-tight mt-1">
                  {product.sub}
                </p>
              </div>

              {/* BUTTON ALWAYS SAME POSITION */}
              <button className="ml-auto bg-[#D7262D] text-white px-8 py-3 rounded-xl text-sm whitespace-nowrap hover:bg-[#b71f24] transition-all">
                Know more
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
