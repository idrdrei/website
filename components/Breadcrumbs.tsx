"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbsProps = {
  current: string;
};

export default function Breadcrumbs({
  current,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 flex items-center justify-center text-sm text-neutral-500"
    >
      <Link
        href="/services"
        className="transition-colors hover:text-[#1F4E8C]"
      >
        Services
      </Link>

      <ChevronRight
        size={14}
        className="mx-2 text-neutral-400"
      />

      <span className="font-medium text-neutral-900">
        {current}
      </span>
    </nav>
  );
}