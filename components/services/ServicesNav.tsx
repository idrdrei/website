"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Eye Care", id: "routine-eye-care" },
  { name: "Oncology", id: "ocular-oncology" },
  { name: "Vision", id: "vision-restoration" },
  { name: "Patient Care", id: "patient-centered-care" },
];

export default function ServicesNav() {
  const [activeSection, setActiveSection] = useState("routine-eye-care");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 160;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset -
      32;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-20 z-40 border-b border-black/5 bg-[#FAFAF7]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-14 items-center lg:h-20 lg:px-16">
          <nav className="scrollbar-hide flex w-full items-center gap-5 overflow-x-auto px-4 text-xs font-medium sm:text-sm lg:gap-10 lg:px-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative whitespace-nowrap py-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#1F4E8C]"
                    : "text-gray-600 hover:text-[#1F4E8C]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#1F4E8C] transition-all duration-500 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}