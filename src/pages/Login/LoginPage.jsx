import React, { useState } from "react";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Welcome to ComicsBoxD!</h2>
        <p className={styles.subtitle}>Log in to continue your fun adventure!</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.loginBtn}>
            Log In
          </button>
        </form>

        <p className={styles.footerText}>
          Don’t have an account? <span className={styles.signupLink}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};
