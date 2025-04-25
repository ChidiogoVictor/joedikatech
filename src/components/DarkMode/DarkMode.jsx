import React, { useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");

    if (
      selectedTheme === "dark" ||
      (!selectedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.getElementById("darkmode-toggle").checked = true;
    } else {
      document.documentElement.classList.remove("dark");
      document.getElementById("darkmode-toggle").checked = false;
    }
  }, []);

  return (
    <div className="dark_mode px-2 sm:px-8">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <FiSun className="sun" />
        <FaRegMoon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
