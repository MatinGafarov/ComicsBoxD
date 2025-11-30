import { useNavigate } from 'react-router';
import styles from './NewsPage.module.css';
import ilkinImage from '@/assets/images/IlkinAlizade.jpg';

export const NewsPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.newsPageContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <article className={styles.newsArticle}>
        <img src={ilkinImage} alt="Ilkin News" className={styles.heroImage} />
        
        <div className={styles.content}>
          <h1 className={styles.headline}>Ilkin</h1>
          
          <div className={styles.meta}>
            <span className={styles.date}>November 30, 2025</span>
            <span className={styles.readTime}>5 min read</span>
          </div>

          <div className={styles.articleContent}>
            <p>
              Seher tezden oyanir abdest pozur gedir ise gelir kursa gedir goruse gelir stranger thingse. Bu bir test makalesidir ve daha detaylı bilgi içerir.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className={styles.subheading}>More Details</h2>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Seher tezden oyanir abdest pozur gedir ise gelir kursa gedir goruse gelir stranger thingse. This is additional content for the news article.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
