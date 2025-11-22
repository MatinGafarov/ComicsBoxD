import React, { useState } from "react";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Sign Up - Email:", email, "Password:", password);
    } else {
      console.log("Log In - Email:", email, "Password:", password);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>
          {isSignUp ? "Join ComicsBoxD!" : "Welcome to ComicsBoxD!"}
        </h2>
        <p className={styles.subtitle}>
          {isSignUp ? "Create your account to start!" : "Log in to continue your fun adventure!"}
        </p>

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

          {isSignUp && (
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className={styles.loginBtn}>
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className={styles.footerText}>
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span
            className={styles.signupLink}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};
