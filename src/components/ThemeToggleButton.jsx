import React from "react";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

function ThemeToggleButton({ currentTheme, onToggle }) {
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute top-4 right-4 z-20 text-gray-500 dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 transition-colors duration-300"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <MoonIcon
        className={`w-5 h-5 ${isDark ? "hidden" : ""}`}
        aria-hidden="true"
      />
      <SunIcon
        className={`w-5 h-5 ${isDark ? "" : "hidden"}`}
        aria-hidden="true"
      />
    </button>
  );
}

export default ThemeToggleButton;
