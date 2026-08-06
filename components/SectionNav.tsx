"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type SectionNavProps = {
  sections: Section[];
};

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sections]);

  return (
    <div className="sticky top-20 z-40 border-b border-black/5 bg-[#FAFAF7]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl overflow-x-auto scrollbar-hide">
        <div className="flex h-12 w-max items-center gap-5 px-4 lg:h-14 lg:gap-8 lg:px-16">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`group relative whitespace-nowrap py-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
                activeSection === section.id
                  ? "text-[#1F4E8C]"
                  : "text-neutral-600 hover:text-[#1F4E8C]"
              }`}
            >
              {section.label}

              <span
                className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#1F4E8C] transition-all duration-500 ${
                  activeSection === section.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}