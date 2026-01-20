"use client";
import { useState, useEffect } from "react";

export default function JoinOurTeam() {
  const [resumeName, setResumeName] = useState("Upload Resume");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  // ✅ Auto-hide success/error message after 4 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("whatsapp", e.target.whatsapp.value);
    formData.append("email", e.target.email.value);
    formData.append("address", e.target.address.value);
    formData.append("resume", e.target.resume.files[0]);

    try {
      const res = await fetch("/api/joinTeam", {
        method: "POST",
        body: formData, // ⚠️ DO NOT add headers
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
        setResumeName("Upload Resume");
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
    <div>
      <h4 className="text-[#DF1931] font-semibold text-sm flex items-center gap-2">
        Lets's Connect
        <img src="/images/plus.svg" alt="" className="w-3" />
      </h4>

      <h2 className="text-3xl sm:text-4xl font-semibold mt-2 mb-6 sm:mb-8">
        Be A Part of Our Team
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-gray-100 rounded-md px-4 py-4 w-full"
            required
          />
          <input
            type="text"
            name="whatsapp"
            placeholder="Whatsapp Number"
            className="bg-gray-100 rounded-md px-4 py-4 w-full"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="bg-gray-100 rounded-md px-4 py-4 w-full"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Your Address"
          className="bg-gray-100 rounded-md px-4 py-4 w-full"
        />

        {/* File Upload */}
        <div className="bg-gray-100 rounded-md px-4 py-4 w-full flex items-center justify-between">
          <span className="text-gray-500 truncate">{resumeName}</span>

          <label className="text-[#DF1931] font-medium cursor-pointer">
            Upload File
            <input
              type="file"
              name="resume"
              className="hidden"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setResumeName(e.target.files[0].name);
                }
              }}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#DF1931] text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-red-700 transition flex items-center gap-2 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
          <span className="text-xl">›</span>
        </button>

        {/* STATUS MESSAGE */}
        {status === "success" && (
          <p className="text-green-600 font-medium mt-3">
            Thank you! Your application has been submitted successfully.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 font-medium mt-3">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
