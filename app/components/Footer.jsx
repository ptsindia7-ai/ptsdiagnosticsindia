export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-14">

        {/* COLUMN 1 — LOGO + TEXT + SOCIAL */}
        <div>
          <img
            src="/images/pts-logo.svg"
            alt="PTS Diagnostics"
            className="h-12 object-contain mb-5"
          />

          <p className="text-gray-600 leading-relaxed mb-6">
            We provide fast, accurate point-of-care diagnostics, empowering
            healthcare professionals to make quick decisions and improve patient
            outcomes.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <img src="/images/fb.svg" alt="Facebook" className="h-8 w-8 cursor-pointer" />
            <img src="/images/insta.svg" alt="Instagram" className="h-8 w-8 cursor-pointer" />
            <img src="/images/link.svg" alt="LinkedIn" className="h-8 w-8 cursor-pointer" />
            <img src="/images/yt.svg" alt="YouTube" className="h-8 w-8 cursor-pointer" />
          </div>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Training</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* COLUMN 3 — SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* COLUMN 4 — LOCATION */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Location</h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>

          <p className="text-[#DF1931] font-medium">Call us:</p>
          <p className="text-gray-700 mb-4">000-000-0000</p>

          <p className="text-[#DF1931] font-medium">Email us:</p>
          <p className="text-gray-700">test@test.com</p>
        </div>
      </div>

      {/* BOTTOM RED BAR */}
      <div className="bg-[#DF1931] text-white text-left py-3 px-10">
        © 2025 . PTS Diagnostics . All Rights Reserved
      </div>
    </footer>
  );
}
