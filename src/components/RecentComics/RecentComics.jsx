import React from "react";
import styles from "./RecentComics.module.css";
import { ComicCard } from "../ComicCard/ComicCard";

export const RecentComics = ({ comics = [] }) => {
  // Mock data - will be replaced with API data from backend
  const mockComics = [
    {
      id: 1,
      image: "https://via.placeholder.com/200x300?text=Comic+1",
      title: "The Amazing Adventures",
      rating: 4.5,
      author: "John Doe",
      year: "2024",
      ratedCount: "328"
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/M/MV5BZWQwNjViNzUtZjdiMS00NWFiLWE0YjUtNjRlZTU3YjMwMzgyXkEyXkFqcGc@._V1_.jpg",
      title: "Dark Knights Chronicles",
      rating: 4.8,
      author: "Jane Smith",
      year: "2024",
      ratedCount: "512"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/200x300?text=Comic+3",
      title: "Superhero Legends",
      rating: 4.2,
      author: "Mike Johnson",
      year: "2023",
      ratedCount: "245"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/200x300?text=Comic+4",
      title: "Secret Origins",
      rating: 4.6,
      author: "Sarah Lee",
      year: "2024",
      ratedCount: "389"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/200x300?text=Comic+5",
      title: "Justice Warriors",
      rating: 4.3,
      author: "Tom Wilson",
      year: "2023",
      ratedCount: "267"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/200x300?text=Comic+6",
      title: "Cosmic Adventures",
      rating: 4.7,
      author: "Emma White",
      year: "2024",
      ratedCount: "451"
    }
  ];

  const displayComics = comics.length > 0 ? comics : mockComics;

  return (
    <section className={styles.recentComics}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Recent Comics</h2>
          <p className={styles.subtitle}>Check out the latest comic releases!</p>
        </div>

        <div className={styles.grid}>
          {displayComics.map((comic) => (
            <div key={comic.id}>
              <ComicCard {...comic} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
