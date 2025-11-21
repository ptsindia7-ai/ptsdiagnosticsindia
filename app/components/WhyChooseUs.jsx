"use client";

const items = [
  {
    title: "Diagnostics",
    hoverTitle: "Accurate Diagnostics",
    desc: "Sustainability Specialists & ESG Audit and Research Associates Experts who craft net zero strategies, conduct ESG assessments, and drive sustainable transformation",
    image: "/images/diagnostics.png",
  },
  {
    title: "Results",
    hoverTitle: "Fast Results",
    desc: "Compliance and Policy Experts Specialists who simplify regulatory frameworks, reporting standards, and ensure your organization stays compliant.",
    image: "/images/results.png",
  },
  {
    title: "Reliability",
    hoverTitle: "Proven Reliability",
    desc: "Financial Advisors & Data Analytics Team Advisors who connect ESG with business impact while data professionals turn complex metrics into actionable insights.",
    image: "/images/reliability.png",
  },
  {
    title: "Global Reach",
    hoverTitle: "Global Reach",
    desc: "Trusted in over 100+ countries, providing healthcare professionals with cutting-edge diagnostic tools for fast and reliable testing.",
    image: "/images/global.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-14">
      {/* Heading */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <img
          src="/images/vector.png"
          alt="decor"
          className="absolute top-0 left-0 w-35 pointer-events-none"
        />
        <div className="text-center flex flex-col items-center">
          <p className="text-[#DF1931] font-semibold tracking-wide flex items-center gap-2">
            WHY CHOOSE US
            <span className="text-xl font-bold">
              <img src="images/plus.svg" />
            </span>
          </p>
          <h2 className="text-4xl leading-[58px] font-semibold text-black">
            The Benefits of Choosing Us
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative h-[340px] rounded-[32px] overflow-hidden cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-[800ms] ease-in-out w-[22%] hover:w-[50%] hover:scale-105"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 transition duration-[800ms]"></div>

              {/* Text (Centered Before + After Hover ✅) */}
              <div className="relative z-[2] px-6 flex flex-col items-center justify-center text-white transition-all duration-[800ms]">
                {/* Title before hover */}
                <h3 className="text-xl font-semibold opacity-100 group-hover:opacity-0 transition-all duration-[800ms] ease-in-out">
                  {item.title}
                </h3>

                {/* Title after hover */}
                <h3 className="text-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-in-out">
                  {item.hoverTitle}
                </h3>

                <p
                  className="text-sm text-left mt-3 max-w-[600px] opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-in-out"
                  style={{
                    lineHeight: "1.5rem", // Control line height (adjust as needed)
                    maxHeight: "4rem", // Limit the height to 2 lines
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
