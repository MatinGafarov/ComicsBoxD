import { Link } from 'react-router';
import styles from './LatestNews.module.css';
import ilkinImage from '@/assets/images/IlkinAlizade.jpg';

export const LatestNews = () => {
  return (
    <section className={styles.latestNews}>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest News</h2>

        <div className={styles.newsCard}>
          <img src={ilkinImage} alt="Latest News" className={styles.newsImage} />
          <div className={styles.newsContent}>
            <h3 className={styles.newsTitle}>Ilkin</h3>
            <p className={styles.newsDescription}>sirin seker oglan</p>
            <Link to="/news/1" className={styles.readMoreLink}>
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
