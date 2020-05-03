import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <div className="Header-grid">
          <div className="Header-pageTitle">
            <h1 className="Header-title">Social Media Dashboard</h1>
            <p className="Header-subtitle">Total Followers: 23, 004</p>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
