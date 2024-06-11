import React from "react";
import SettingsButton from "./buttons/SettingsButton";

const Sidebar = () => {
  return (
    <div className="fixed h-screen flex items-center justify-center border-e-2 border-gray-300s bg-white z-20">
      <div className="px-1">
        <SettingsButton />
      </div>
    </div>
  );
};

export default Sidebar;
