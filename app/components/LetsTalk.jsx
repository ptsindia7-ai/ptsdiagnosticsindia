"use client";

export default function LetsTalk() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* BOTTOM DECOR */}
      <img
        src="/images/vector2.png"
        alt=""
        className="absolute bottom-0 right-0 w-40 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT IMAGE */}
        <div>
          <img
            src="/images/who.png"
            alt="Diagnostics"
            className="w-full rounded-[32px] object-cover"
          />
        </div>

        {/* RIGHT FORM CONTENT */}
        <div>
          {/* SECTION LABEL */}
          <h4 className="text-sm font-semibold text-[#DF1931] uppercase flex items-center gap-2 mb-2">
            Who We Are
            <img src="/images/plus.svg" alt="plus" className="w-3 h-3" />
          </h4>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">
            Let’s Talk Diagnostics
          </h2>

          {/* FORM */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#F5F5F5] px-4 py-3 rounded-lg outline-none"
              />
              <input
                type="text"
                placeholder="Whatsapp Number"
                className="w-full bg-[#F5F5F5] px-4 py-3 rounded-lg outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-[#F5F5F5] px-4 py-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Your Address"
              className="w-full bg-[#F5F5F5] px-4 py-3 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Product of Interest"
              className="w-full bg-[#F5F5F5] px-4 py-3 rounded-lg outline-none"
            />

            {/* BUTTON */}
            <button className="bg-[#DF1931] text-white px-8 py-3 rounded-lg text-[15px] font-medium mt-4 flex items-center gap-2">
              Send Message{" "}
              <span className="text-lg">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
