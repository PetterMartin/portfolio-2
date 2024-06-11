"use client"

import { useState } from "react";

export default function SettingsButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const getDotStyle = (index) => {
    if (index === 2) {
      return {
        transform: isHovered ? "translateY(5px)" : "translateY(0)",
        transition: "transform 0.3s ease",
      };
    } else if (index === 0) {
      return {
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        transition: "transform 0.3s ease",
      };
    }
    return {};
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <button
          className="bg-transparent font-bold rounded-full h-12 w-12"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <div className="flex flex-col gap-1 items-center justify-center h-full">
            <div
              className="bg-black h-1 w-1 rounded-full"
              style={getDotStyle(0)}
            ></div>
            <div
              className="bg-black h-1 w-1 rounded-full"
              style={getDotStyle(1)}
            ></div>
            <div
              className="bg-black h-1 w-1 rounded-full"
              style={getDotStyle(2)}
            ></div>
          </div>
        </button>
      </div>
    </div>
  );
}