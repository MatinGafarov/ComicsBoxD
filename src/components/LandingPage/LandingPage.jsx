import React from "react";
import styles from "./LandingPage.module.css";
import RightBg from "@/assets/images/bg.jpg";

export const LandingPage = () => {
  return (
    <section className={styles.hero}>
      <img src={RightBg} className={styles.bg} alt="background" />
      <div className={styles.hero__text}>
        <h1>Ilkinim Salamlar</h1>
      </div>
    </section>
  );
};
