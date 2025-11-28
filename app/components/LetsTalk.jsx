"use client";

export default function LetsTalk() {
  return (
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
      </section>
  );
}
