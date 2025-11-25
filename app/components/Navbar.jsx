"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Training", href: "/training"},
    { name: "About us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LEFT LOGO */}
        <img
          src="/images/sinocare-logo.svg"
          alt="Sinocare Logo"
          className="h-15 object-contain"
        />

        {/* CENTER NAVIGATION */}
        <ul className="flex items-center gap-15">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li
                key={link.name}
                className="relative flex flex-col items-center group"
              >
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-[#DF1931] transition"
                >
                  {link.name}
                </Link>

                {/* ACTIVE OR HOVER RED LINE */}
                <span
                  className={`absolute bottom-[-35px] h-[4px] w-20 rounded-full transition-all duration-200
                  
                  ${isActive ? "bg-[#DF1931]" : "bg-transparent group-hover:bg-red-400"}
                  `}
                />
              </li>
            );
          })}
        </ul>

        {/* RIGHT LOGO */}
        <img
          src="/images/pts-logo.svg"
          alt="PTS Diagnostics Logo"
          className="h-15 object-contain"
        />
      </div>
    </nav>
  );
}
