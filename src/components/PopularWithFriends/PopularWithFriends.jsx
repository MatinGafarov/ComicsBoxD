import React from "react";
import styles from "./PopularWithFriends.module.css";
import { ComicCard } from "../ComicCard/ComicCard";

export const PopularWithFriends = ({ comics = [] }) => {
  // Mock data - will be replaced with API data from backend
  const mockComics = [
    {
      id: 1,
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/c/b0/536d78dd5aeb4/clean.jpg",
      title: "The Amazing Adventures",
      rating: 4.5,
      author: "John Doe",
      year: "2024",
      ratedCount: "328",
      friendsRating: 4.7,
      friendName: "Sarah",
      friendAvatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/M/MV5BZWQwNjViNzUtZjdiMS00NWFiLWE0YjUtNjRlZTU3YjMwMzgyXkEyXkFqcGc@._V1_.jpg",
      title: "Dark Knights Chronicles",
      rating: 4.8,
      author: "Jane Smith",
      year: "2024",
      ratedCount: "512",
      friendsRating: 4.9,
      friendName: "Mike",
      friendAvatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      image: "https://cdn.marvel.com/content/2x/marvoicesleg2024001_cover_0.jpg",
      title: "Superhero Legends",
      rating: 4.2,
      author: "Mike Johnson",
      year: "2023",
      ratedCount: "245",
      friendsRating: 4.4,
      friendName: "Emma",
      friendAvatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Secret_Origins_TPB.jpg/250px-Secret_Origins_TPB.jpg",
      title: "Secret Origins",
      rating: 4.6,
      author: "Sarah Lee",
      year: "2024",
      ratedCount: "389",
      friendsRating: 4.8,
      friendName: "John",
      friendAvatar: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxP7nI7Wx2KYJvN6OvCP9w2ic8q30g1pWohg&s",
      title: "Justice Warriors",
      rating: 4.3,
      author: "Tom Wilson",
      year: "2023",
      ratedCount: "267",
      friendsRating: 4.5,
      friendName: "Lisa",
      friendAvatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/61S6QQSX57L._AC_UF894,1000_QL80_.jpg",
      title: "Cosmic Adventures",
      rating: 4.7,
      author: "Emma White",
      year: "2024",
      ratedCount: "451",
      friendsRating: 4.6,
      friendName: "Alex",
      friendAvatar: "https://i.pravatar.cc/150?img=6"
    }
  ];

  const displayComics = comics.length > 0 ? comics : mockComics;

  return (
    <section className={styles.popularWithFriends}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Popular with Friends</h2>
          <p className={styles.subtitle}>What your friends are loving!</p>
        </div>

        <div className={styles.grid}>
          {displayComics.map((comic) => (
            <div key={comic.id} className={styles.cardWrapper}>
              <ComicCard {...comic} />
              <div className={styles.friendsRating}>
                <div className={styles.friendInfo}>
                  <img src={comic.friendAvatar} alt={comic.friendName} className={styles.friendAvatar} />
                  <span className={styles.friendName}>{comic.friendName}</span>
                </div>
                <div className={styles.ratingSection}>
                  <span className={styles.friendsLabel}>Rating</span>
                  <span className={styles.friendsValue}>{comic.friendsRating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
