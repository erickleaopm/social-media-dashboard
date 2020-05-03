import React, { useRef } from "react";
import "./Switch.css";

function Switch({ setDarkMode, checked, setChecked }) {
  // React Hooks
  const ref = useRef(null);

  function handleChange() {
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }

  return (
    <div className="Dark-mode">
      <p className="Dark-mode-title">Dark Mode</p>
      <input
        onChange={handleChange}
        ref={ref}
        type="checkbox"
        checked={checked}
        className="Dark-mode-checkbox"
        id="checkbox"
      />
      <label className="Dark-mode-switch" htmlFor="checkbox" />
    </div>
  );
}

export default Switch;
