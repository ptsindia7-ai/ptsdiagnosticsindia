"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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
          className="h-12 object-contain"
        />

        {/* HAMBURGER (MOBILE) */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name} className="relative flex flex-col items-center group">
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-[#DF1931] transition"
                >
                  {link.name}
                </Link>
                <span
                  className={`absolute bottom-[-28px] h-[4px] w-20 rounded-full transition-all duration-200
                  ${isActive ? "bg-[#DF1931]" : "bg-transparent group-hover:bg-red-400"}`}
                />
              </li>
            );
          })}
        </ul>

        {/* RIGHT LOGO */}
        <img
          src="/images/pts-logo.svg"
          alt="PTS Diagnostics Logo"
          className="h-12 object-contain hidden lg:block"
        />
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-white border-t border-gray-200">
          <ul className="flex flex-col py-4 space-y-4 px-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative flex flex-col group">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg ${isActive ? "text-[#DF1931]" : "text-gray-700"} hover:text-[#DF1931] transition`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex justify-center py-2">
            <img
              src="/images/pts-logo.svg"
              alt="PTS Diagnostics Logo"
              className="h-12 object-contain"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
