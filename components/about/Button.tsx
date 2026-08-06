import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-[#1F4E8C] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
      {children}
    </button>
  );
}