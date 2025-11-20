"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LetsTalk from "../components/LetsTalk";

export default function ConnectWithUs() {
  return (
    <>
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* RIGHT DECOR FADE BG */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#DF1931]/5 blur-3xl pointer-events-none"></div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2E2E2E]">
            Connect With Us
          </h2>

          <p className="text-gray-600 text-[15px] mt-5 leading-relaxed">
            Contact us for any Queries or for Opportunities so we
            <br />
            help people grow and heal.
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <a
              href="/contact"
              className="bg-[#DF1931] text-white px-8 py-3 rounded-lg text-[15px] font-medium inline-block hover:bg-[#c61429] transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <LetsTalk/>
      <section className="relative w-full bg-[#DF1931] py-12 text-white overflow-hidden">
        {/* BOTTOM-LEFT DECOR IMAGE */}
        <img
          src="/images/vector4.png" // <-- Replace with your actual image filename
          alt="decor"
          className="absolute bottom-0 left-0 w-50 md:w-40 pointer-events-none select-none"
        />

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Our Global Impact
          </h2>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
            <div>
              <h3 className="text-6xl font-semibold">135+</h3>
              <p className="text-xl mt-2 mr-8 opacity-90">Countries</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">2.5M+</h3>
              <p className="text-xl mt-2  mr-4 opacity-90">Devices Deployed</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">500K+</h3>
              <p className="text-xl mt-2 mr-20 opacity-90">Tests Daily</p>
            </div>

            <div>
              <h3 className="text-6xl font-semibold">98.7%</h3>
              <p className="text-xl mt-2 mr-6 opacity-90">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>
          <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* BOTTOM RIGHT DECOR IMAGE */}
      <img
        src="/images/vector2.png"
        alt=""
        className="absolute bottom-0 right-0 w-40 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* LEFT IMAGE */}
        <div>
          <img
            src="/images/team.png"
            alt="Team Image"
            className="w-full rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div>
          {/* SUBTITLE */}
          <h4 className="text-[#DF1931] font-semibold text-sm flex items-center gap-2">
            WHO WE ARE
            <img src="/images/plus.svg" alt="" className="w-3" />
          </h4>

          {/* TITLE */}
          <h2 className="text-4xl font-semibold mt-2 mb-8">
            Be A Part of Our Team
          </h2>

          {/* FORM */}
          <form className="space-y-5">
            {/* Fullname + WhatsApp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-100 rounded-md px-4 py-3 w-full"
              />
              <input
                type="text"
                placeholder="Whatsapp Number"
                className="bg-gray-100 rounded-md px-4 py-3 w-full"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="E-mail"
              className="bg-gray-100 rounded-md px-4 py-3 w-full"
            />

            {/* Address */}
            <input
              type="text"
              placeholder="Your Address"
              className="bg-gray-100 rounded-md px-4 py-3 w-full"
            />

            {/* Upload Resume */}
            <div className="bg-gray-100 rounded-md px-4 py-3 w-full flex items-center justify-between">
              <span className="text-gray-500">Upload Resume</span>
              <label className="text-[#DF1931] font-medium cursor-pointer">
                Upload File
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#DF1931] text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition flex items-center gap-2"
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
