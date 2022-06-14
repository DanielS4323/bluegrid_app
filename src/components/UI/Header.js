import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
    };
  };
  return (
    <React.Fragment>
      <nav className={styles.navigation}>
        <Logo />
        <ul className={styles.pages}>
          <li>
            <NavLink className={styles.links} to="/" style={navLinkStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.links} style={navLinkStyles} to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.links}
              to="/contact"
              style={navLinkStyles}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Header;
