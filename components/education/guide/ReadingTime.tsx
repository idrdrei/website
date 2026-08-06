import { Clock3 } from "lucide-react";

interface ReadingTimeProps {
  minutes: number;
}

export default function ReadingTime({
  minutes,
}: ReadingTimeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 shadow-sm">
      <Clock3
        size={16}
        strokeWidth={1.75}
        className="text-[#1F4E8C]"
      />

      <span>
        {minutes} min read
      </span>
    </div>
  );
}