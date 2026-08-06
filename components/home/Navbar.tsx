"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Education", href: "/education" },
  { name: "Clinics", href: "/clinics" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FAFAF7]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.35em] transition hover:text-[#1F4E8C]"
        >
          iDRDREI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative py-2 transition-all duration-300 ${
                  active
                    ? "text-[#1F4E8C]"
                    : "text-gray-600 hover:text-[#1F4E8C]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#1F4E8C] transition-all duration-500 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-black/5" : "max-h-0"
        } md:hidden`}
      >
        <nav className="flex flex-col px-8 py-6">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-left text-lg transition ${
                  active
                    ? "text-[#1F4E8C]"
                    : "text-gray-700 hover:text-[#1F4E8C]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}