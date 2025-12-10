"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LetsTalk from "../components/LetsTalk";

export default function ConnectWithUs() {
  return (
    <>
      {/* CONNECT SECTION */}
      <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
        <div className="absolute right-0 top-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#DF1931]/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#2E2E2E]">
            Connect With Us
          </h2>

          <p className="text-gray-600 text-[15px] mt-4 leading-relaxed">
            Contact us for any Queries or Opportunities so we
            <br className="hidden sm:block" />
            help people grow and heal.
          </p>

          <div className="mt-8 md:mt-10">
            <a
              href="/contact"
              className="bg-[#DF1931] text-white px-6 sm:px-8 py-3 rounded-lg text-[15px] font-medium inline-block hover:bg-[#c61429] transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <LetsTalk />

      {/* GLOBAL IMPACT SECTION */}
      <section className="relative w-full bg-[#DF1931] py-12 text-white overflow-hidden">
        <img
          src="/images/vector4.png"
          alt="decor"
          className="absolute bottom-0 left-0 w-28 sm:w-40 pointer-events-none select-none"
        />

        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 sm:mb-12">
            Our Global Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-0">
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                135+
              </h3>
              <p className="text-sm sm:text-lg md:text-xl mt-2 opacity-90">
                Countries
              </p>
            </div>

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                2.5M+
              </h3>
              <p className="text-sm sm:text-lg md:text-xl mt-2 opacity-90">
                Devices Deployed
              </p>
            </div>

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                500K+
              </h3>
              <p className="text-sm sm:text-lg md:text-xl mt-2 opacity-90">
                Tests Daily
              </p>
            </div>

            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                98.7%
              </h3>
              <p className="text-sm sm:text-lg md:text-xl mt-2 opacity-90">
                Accuracy Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM + FORM SECTION */}
      <section className="relative w-full py-14 md:py-20 bg-white overflow-hidden">
        <img
          src="/images/vector2.png"
          alt=""
          className="absolute bottom-0 right-0 w-28 sm:w-40 pointer-events-none select-none"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <img
              src="/images/team.png"
              alt="Team Image"
              className="w-full h-48 sm:h-64 md:h-72 lg:h-[450px] object-cover rounded-2xl sm:rounded-3xl lg:rounded-[40px]"
            />
          </div>

          <div>
            <h4 className="text-[#DF1931] font-semibold text-sm flex items-center gap-2">
              WHO WE ARE
              <img src="/images/plus.svg" alt="" className="w-3" />
            </h4>

            <h2 className="text-3xl sm:text-4xl font-semibold mt-2 mb-6 sm:mb-8">
              Be A Part of Our Team
            </h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-gray-100 rounded-md px-4 py-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Whatsapp Number"
                  className="bg-gray-100 rounded-md px-4 py-4 w-full"
                />
              </div>

              <input
                type="email"
                placeholder="E-mail"
                className="bg-gray-100 rounded-md px-4 py-4 w-full"
              />

              <input
                type="text"
                placeholder="Your Address"
                className="bg-gray-100 rounded-md px-4 py-4 w-full"
              />

              <div className="bg-gray-100 rounded-md px-4 py-4 w-full flex items-center justify-between">
                <span className="text-gray-500">Upload Resume</span>
                <label className="text-[#DF1931] font-medium cursor-pointer">
                  Upload File
                  <input type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#DF1931] text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-red-700 transition flex items-center gap-2"
              >
                Send Message
                <span className="text-xl">›</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
