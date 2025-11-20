// Styles
import styles from "./Footer.module.css";

// Images
import flash from "@/assets/images/flash.png";
import superman from "@/assets/images/superman.png";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__hero"]}>
        <img
          src={superman}
          alt="superman"
          className={`${styles["footer__hero-img"]} ${styles["footer__hero-img--left"]}`}
        />

        <div className={styles["footer__hero-content"]}>
          <h2>Give us Feedback</h2>
          <p>
           Ilkin az dispatch izle 
          </p>

          <div className={styles["footer__input-box"]}>
            <input type="email" placeholder="michael@ymail.com" />
          </div>

          <button className={styles["footer__btn"]}>Subscribe Now</button>
        </div>

        <img
          src={flash}
          alt="flash"
          className={`${styles["footer__hero-img"]} ${styles["footer__hero-img--right"]}`}
        />
      </div>

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
