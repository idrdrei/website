import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#1F4E8C]/30 hover:shadow-xl">
      {children}
    </div>
  );
}