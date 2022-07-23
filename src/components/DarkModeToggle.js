import React, { useState } from "react";
import { ThemeContext } from "../context/theme"

function DarkModeToggle() {
  const [theme, setTheme ] = useState(ThemeContext)
  
  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
