import { useState } from "react";

export default function Dropdown({
  display,
  style,
}: {
  display: boolean;
  style: React.CSSProperties;
}) {
  const [names, setNames] = useState(["Waldo", "Wenda", "Oldlaw"]);

  if (!display) {
    return null;
  }

  return (
    <div
      className="flex flex-col gap-1 bg-black fixed rounded-md"
      style={style}
    >
      {names.map((name) => (
        <button className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer rounded-md w-[10ch] text-start">
          {name}
        </button>
      ))}
    </div>
  );
}
