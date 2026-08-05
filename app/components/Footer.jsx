import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-7 px-6 py-10">
        {/* COLUMN 1 — LOGO + TEXT + SOCIAL */}
        <div className="pr-6">
          <img
            src="/images/pts-logo.svg"
            alt="PTS Diagnostics"
            className="h-12 object-contain mb-6"
          />

          <p className="text-gray-600 leading-relaxed mb-8">
            We provide fast, accurate point-of-care diagnostics, empowering
            healthcare professionals to make quick decisions and improve patient
            outcomes.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5">
            <img
              src="/images/fb.svg"
              alt="Facebook"
              className="h-10 w-10 cursor-pointer"
            />
            <img
              src="/images/insta.svg"
              alt="Instagram"
              className="h-10 w-10 cursor-pointer"
            />
            <img
              src="/images/link.svg"
              alt="LinkedIn"
              className="h-10 w-10 cursor-pointer"
            />
            <img
              src="/images/yt.svg"
              alt="YouTube"
              className="h-10 w-10 cursor-pointer"
            />
          </div>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li className="cursor-pointer">
              <Link href="/" className="hover:text-red-600 transition">
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/about-us" className="hover:text-red-600 transition">
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/training" className="hover:text-red-600 transition">
                Training
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/products" className="hover:text-red-600 transition">
                Products
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact" className="hover:text-red-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 — SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-red-600 transition"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-red-600 transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/return-policy"
                className="hover:text-red-600 transition"
              >
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 — LOCATION */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Location</h3>

          <p className="text-gray-600 mb-4">
            PTS Diagnostics India Pvt. Ltd., ADD-5th Flr, Office No. 5B2, Unit
            No. 3, &apos;D&apos; Wing, MBC Park, Kasarwadavli, Ghodbunder Road,
            Thane West, Mumbai, Maharashtra – 400615.
          </p>

          <p className="text-[#DF1931] font-medium">Call us:</p>
          <div className="space-y-1">
            <p className="text-gray-700">
              <span className="font-medium">Office Landline:</span> 022-4663259
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Customer Service:</span> 7530063636
            </p>
          </div>

          <p className="text-[#DF1931] font-medium mt-2">Email us:</p>
          <a
            href="mailto:officesupport@sinocare.com"
            className="text-gray-700 hover:text-[#DF1931] transition"
          >
            officesupport@sinocare.com
          </a>
        </div>
      </div>

      {/* BOTTOM RED BAR */}
      <div className="bg-[#DF1931] text-white text-left py-3 px-10">
        © 2025 . PTS Diagnostics . All Rights Reserved
      </div>
    </footer>
  );
}
