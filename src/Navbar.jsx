import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home/Home";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black text-light ">
        <div className="container ">
          <NavLink className="navbar-brand text-light" to="/">
            <h2 className="mb-0 text-warning">Pizzafly</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-1">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="protfolio">
            Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
