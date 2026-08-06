"use client";

import Link from "next/link";

const items = [
  { label: "Routine Eye Care", href: "#routine-eye-care" },
  { label: "Ocular Oncology", href: "#ocular-oncology" },
  { label: "Vision Restoration", href: "#vision-restoration" },
  { label: "Patient Care", href: "#patient-centered-care" },
];

export default function ServicesHeader() {
  return (
    <div className="fixed top-20 left-0 right-0 z-40 border-b border-neutral-200 bg-[#FAFAF7]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <nav className="flex h-14 items-center gap-10 overflow-x-auto">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-neutral-500 transition hover:text-[#1F4E8C]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}