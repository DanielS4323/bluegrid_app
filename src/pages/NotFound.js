import React from "react";
import Layout from "../components/layout/Layout";
import oops from "../assets/images/oops.png";
import fourOfour from "../assets/images/404.png";
import styles from "../styles/Not-Found.module.css";
import { ChangeTitleName } from "../services/ChangeTitleName";

function NotFound() {
  ChangeTitleName("404 Page not found");

  return (
    <Layout>
      <div className={styles.wrap}>
        <img alt="error" className={styles["img-four"]} src={fourOfour} />
        <img alt="character" className={styles["img-char"]} src={oops} />
      </div>
    </Layout>
  );
}

export default NotFound;
