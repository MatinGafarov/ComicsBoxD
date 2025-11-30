// Styles
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__bottom"]}>
          <span className={styles["footer__logo"]} >ComicsBoxD</span>

        <ul className={styles["footer__links"]}>
          <li>Support Center</li>
          <li>Invoicing</li>
          <li>Contract</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>FAQs</li>
        </ul>
      </div>
    </footer>
  );
};
