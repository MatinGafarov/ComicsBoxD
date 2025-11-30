import { useNavigate, useParams } from 'react-router';
import styles from './ComicDetailPage.module.css';

export const ComicDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock comic data - ID 3 is "Superhero Legends"
  const comicData = {
    1: {
      title: "The Amazing Adventures",
      author: "John Doe",
      year: "2024",
      rating: 4.5,
      ratedCount: "328",
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/c/b0/536d78dd5aeb4/clean.jpg",
      description: "Follow the epic journey of superheroes as they navigate through incredible adventures and face unimaginable challenges."
    },
    2: {
      title: "Dark Knights Chronicles",
      author: "Jane Smith",
      year: "2024",
      rating: 4.8,
      ratedCount: "512",
      image: "https://m.media-amazon.com/images/M/MV5BZWQwNjViNzUtZjdiMS00NWFiLWE0YjUtNjRlZTU3YjMwMzgyXkEyXkFqcGc@._V1_.jpg",
      description: "Darkness falls upon the city as mysterious knights emerge from the shadows. A tale of mystery, power, and redemption."
    },
    3: {
      title: "Superhero Legends",
      author: "Mike Johnson",
      year: "2023",
      rating: 4.2,
      ratedCount: "245",
      image: "https://via.placeholder.com/400x600?text=Superhero+Legends",
      description: "Discover the legendary tales of the world's greatest superheroes. From origin stories to epic battles, relive the moments that shaped the superhero universe."
    },
    4: {
      title: "Secret Origins",
      author: "Sarah Lee",
      year: "2024",
      rating: 4.6,
      ratedCount: "389",
      image: "https://via.placeholder.com/400x600?text=Secret+Origins",
      description: "Uncover the hidden origins of your favorite heroes. Learn the secrets that were kept hidden from the world."
    },
    5: {
      title: "Justice Warriors",
      author: "Tom Wilson",
      year: "2023",
      rating: 4.3,
      ratedCount: "267",
      image: "https://via.placeholder.com/400x600?text=Justice+Warriors",
      description: "When darkness threatens the world, heroes must unite. Experience the ultimate battle for justice."
    },
    6: {
      title: "Cosmic Adventures",
      author: "Emma White",
      year: "2024",
      rating: 4.7,
      ratedCount: "451",
      image: "https://via.placeholder.com/400x600?text=Cosmic+Adventures",
      description: "Journey through the cosmos with heroes who defy the laws of physics. An intergalactic adventure awaits."
    }
  };

  const comic = comicData[id] || comicData[1];

  return (
    <div className={styles.comicDetailContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <article className={styles.comicArticle}>
        <div className={styles.comicImage}>
          <img src={comic.image} alt={comic.title} />
        </div>

        <div className={styles.comicContent}>
          <h1 className={styles.comicTitle}>{comic.title}</h1>

          <div className={styles.comicMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Author</span>
              <span className={styles.metaValue}>{comic.author}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{comic.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Rating</span>
              <span className={styles.metaValue}>{comic.rating.toFixed(1)} ⭐</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Rated</span>
              <span className={styles.metaValue}>{comic.ratedCount} people</span>
            </div>
          </div>

          <div className={styles.description}>
            <h2 className={styles.descriptionTitle}>About this Comic</h2>
            <p className={styles.descriptionText}>{comic.description}</p>
            <p className={styles.descriptionText}>
              Dive deep into this incredible story featuring amazing artwork and compelling narratives. 
              This comic has captivated readers with its unique storyline and character development.
            </p>
            <p className={styles.descriptionText}>
              Whether you're a seasoned comic book fan or new to the genre, this comic offers something 
              special that will keep you engaged from the first page to the last.
            </p>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.readBtn}>Read Now</button>
            <button className={styles.addToListBtn}>Add to List</button>
          </div>
        </div>
      </article>
    </div>
  );
};
