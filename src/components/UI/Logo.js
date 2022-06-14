import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from './Logo.module.css'

function Logo() {
  const navigate = useNavigate();
  return (
    <img onClick={() => navigate("/")} alt="logo" className={styles.logo} src={logo} />
  );
}

export default Logo;
