import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Add custom CSS file for additional styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation(); // Get current path

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand mx-auto my-3" to="/" onClick={toggleNavbar}>
          MoviesVerse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto text-center"> 
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={toggleNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/trending" ? "active" : ""}`} to="/trending" onClick={toggleNavbar}>Trending</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/hindi" ? "active" : ""}`} to="/hindi" onClick={toggleNavbar}>Bollywood</Link>
            </li>         
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/south" ? "active" : ""}`} to="/south" onClick={toggleNavbar}>Tollywood</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/hollywood" ? "active" : ""}`} to="/Hollywood" onClick={toggleNavbar}>Hollywood</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/web-series" ? "active" : ""}`} to="/Web-Series" onClick={toggleNavbar}>Web Series</Link>
            </li>
          </ul>
          
          {/* Search Bar */}
          <form className="d-flex mx-1" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movies..."
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          
          <ul className="navbar-nav ms-auto text-center"> 
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/Signup" ? "active" : ""}`} to="/Signup" onClick={toggleNavbar}>SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
