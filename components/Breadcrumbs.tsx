"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbsProps = {
  current: string;
  parent?: string;
  parentHref?: string;
};

export default function Breadcrumbs({
  current,
  parent = "Services",
  parentHref = "/services",
}: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-sm text-neutral-500">
      <Link
        href={parentHref}
        className="transition hover:text-[#1F4E8C]"
      >
        {parent}
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