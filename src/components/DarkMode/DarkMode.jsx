import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dark_mode px-8">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <FiSun className="sun" />
        <FaRegMoon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
