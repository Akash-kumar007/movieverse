import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Movieverse</h2>
        <p className="footer-text">Copyright © 2025. Created by Movieverse Team </p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>

        <p className="footer-copy">&copy; 2025 Movieverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
