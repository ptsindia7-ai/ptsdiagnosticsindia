"use client";

import { useState, useEffect } from "react";

export default function LetsTalk() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  // ✅ AUTO-HIDE MESSAGE AFTER 4 SECONDS
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = {
        name: e.target.name.value,
        whatsapp: e.target.whatsapp.value,
        email: e.target.email.value,
        address: e.target.address.value,
        product: e.target.product.value,
      };

      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact-form" className="relative w-full py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/images/lab.png"
            alt="Laboratory"
            className="w-full h-60 sm:h-70 md:h-72 lg:h-[500px] object-cover rounded-[20px] sm:rounded-[30px] lg:rounded-[40px]"
          />
        </div>

        <div className="w-full">
          <h3 className="text-sm font-semibold text-[#DF1931] uppercase flex items-center gap-2">
            Contact Us
            <img src="/images/plus.svg" alt="plus" className="w-3 h-3" />
          </h3>

          <h2 className="text-4xl font-semibold text-black mt-2">
            Let’s Connect
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
              />
              <input
                name="whatsapp"
                placeholder="Whatsapp Number"
                required
                className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="E-mail"
              required
              className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
            />

            <input
              name="address"
              placeholder="Your Address"
              className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
            />

            <input
              name="product"
              placeholder="Product of Interest"
              className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-[#DF1931] text-white px-10 py-3 rounded-lg font-medium hover:bg-[#c31329] transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* ✅ STATUS MESSAGE */}
            {status === "success" && (
              <p className="text-green-600 font-medium mt-3 transition-opacity duration-300">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 font-medium mt-3 transition-opacity duration-300">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
