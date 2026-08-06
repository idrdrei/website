"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, House } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/90 shadow-xl backdrop-blur-xl">
        <Link
          href="/"
          aria-label="Go to Home"
          className="flex h-14 w-14 items-center justify-center text-[#1F4E8C] transition-colors duration-300 hover:bg-[#1F4E8C] hover:text-white"
        >
          <House size={22} />
        </Link>

        <div className="mx-3 h-px bg-black/10" />

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-14 w-14 items-center justify-center text-[#1F4E8C] transition-colors duration-300 hover:bg-[#1F4E8C] hover:text-white"
        >
          <ArrowUp size={22} />
        </button>
      </div>
    </div>
  );
}