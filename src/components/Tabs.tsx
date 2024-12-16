import { useState } from "react";

const periods = ["Daily", "Weekly", "Monthly"];

export default function Tabs({ onChange }: { onChange: (period: string) => void }) {
  const [active, setActive] = useState("Daily");

  return (
    <div className="flex space-x-4">
      {periods.map((period) => (
        <button
          key={period}
          onClick={() => {
            setActive(period);
            onChange(period);
          }}
          className={`px-4 py-2 rounded ${
            active === period ? "bg-zinc-700 text-white" : "bg-zinc-200 text-black"
          }`}
        >
          {period}
        </button>
      ))}
    </div>
  );
}
