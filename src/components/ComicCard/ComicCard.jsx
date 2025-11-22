import React from "react";
import styles from "./ComicCard.module.css";
import { StarIcon } from "../icons";

export const ComicCard = ({ image, title, rating, author, year, ratedCount }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        
        <div className={styles.cardMeta}>
          <span className={styles.author}>{author}</span>
          <span className={styles.year}>{year}</span>
        </div>

        <div className={styles.cardRating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < Math.floor(rating)} />
            ))}
          </div>
          <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.ratedCount}>⭐ {ratedCount} rated</span>
        </div>
      </div>
    </div>
  );
};
