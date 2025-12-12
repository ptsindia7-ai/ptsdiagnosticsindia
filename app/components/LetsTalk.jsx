"use client";

import { useState } from "react";

export default function LetsTalk() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");

    setLoading(true);

    try {
      const formData = {
        name: e.target.name.value,
        whatsapp: e.target.whatsapp.value,
        email: e.target.email.value,
        address: e.target.address.value,
        product: e.target.product.value,
      };

      console.log("SENDING DATA:", formData);

      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("RESPONSE STATUS:", res.status);

      if (res.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error("FRONTEND ERROR:", err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full py-20">
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
            Who We Are
            <img src="/images/plus.svg" alt="plus" className="w-3 h-3" />
          </h3>

          <h2 className="text-4xl font-semibold text-black mt-2">
            Let’s Talk Diagnostics
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Full Name" className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none" required />
              <input name="whatsapp" type="text" placeholder="Whatsapp Number" className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none" required />
            </div>

            <input name="email" type="email" placeholder="E-mail" className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none" required />
            <input name="address" type="text" placeholder="Your Address" className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none" />
            <input name="product" type="text" placeholder="Product of Interest" className="w-full p-4 bg-[#F7F7F7] rounded-lg outline-none" />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-[#DF1931] text-white px-10 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#c31329] transition"
            >
              {loading ? "Sending..." : "Send Message"}
              <span className="text-lg">›</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
