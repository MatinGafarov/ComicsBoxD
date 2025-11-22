// React Router
import { Link, useLocation } from "react-router";
import { useState } from "react";

// Icons
import {
  LoginIcon,
  
} from "@/components/icons";

// Styles
import styles from "./Header.module.css";


export const Header = () => {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

  const handleNavbarClass = (path) => {
    const isActive = location.pathname === path;
    return `${styles["navbar__link"]} ${isActive ? styles["navbar__link--active"] : ""}`;
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <>
      {/* Overlay Modal */}
      {menuActive && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
      
      <header className={styles.header}>
        <nav className={styles.navbar}>
          {/* Logo */}
          <div className={styles["navbar__logo"]}>
            <Link to="/" className={styles["logo__link"]}>ComicsBoxD</Link>
          </div>

          {/* Burger icon */}
          <div className={styles.burger} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Menu */}
          <ul className={`${styles["navbar__menu"]} ${menuActive ? styles.active : ""}`}>
            <li className={styles["navbar__item"]}>
              <Link to="/" className={handleNavbarClass("/")} onClick={closeMenu}>Home</Link>
            </li>
            <li className={styles["navbar__item"]}>
              <Link to="/activity" className={handleNavbarClass("/activity")} onClick={closeMenu}>Activity</Link>
            </li>
            <li className={styles["navbar__item"]}>
              <Link to="/revieworlog" className={handleNavbarClass("/revieworlog")} onClick={closeMenu}>Review or log</Link>
            </li>
            <li className={styles["navbar__item"]}>
              <Link to="/profile" className={handleNavbarClass("/profile")} onClick={closeMenu}>Profile</Link>
            </li>
             <li className={styles["navbar__item"]}>
              <Link to="/search" className={handleNavbarClass("/search")} onClick={closeMenu}>Search</Link>
            </li>
          </ul>

          {/* Action Icons */}
          <div className={styles.actions}>
            <Link to="/login">
              <LoginIcon />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
