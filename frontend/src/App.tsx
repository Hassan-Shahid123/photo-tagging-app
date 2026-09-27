import { useState } from "react";
import wally from "./assets/wally.jpg";
import Dropdown from "./components/Dropdown.tsx";

type Position = {
  x: number;
  y: number;
};

export default function App() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [display, setDisplay] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    setDisplay(!display);
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <>
      <img src={wally} className="" onClick={handleClick} />
      <Dropdown
        display={display}
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      />
    </>
  );
}
