import React from "react";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import Logo from "./parts/Logo";

function Header() {

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : ""
    }
  }
  return (
    <>
      <nav className="navigation">
        <Logo />
        <ul className="pages">
          <li>
            <NavLink
              className="links"
              to="/"
              style={navLinkStyles}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="links"
              style={navLinkStyles}
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="links"
              to="/contact"
              style={navLinkStyles}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
