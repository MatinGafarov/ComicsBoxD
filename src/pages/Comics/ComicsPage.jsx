import React, { useState } from 'react';
import styles from './ComicsPage.module.css';
import { ComicCard } from '@/components/ComicCard/ComicCard';
import { StarIcon } from '@/components/icons';

export const ComicsPage = () => {
  const [filters, setFilters] = useState({
    year: '',
    rating: '',
    popular: '',
    genre: '',
    service: '',
    other: ''
  });

  // Mock comics data
  const mockComics = [
    {
      id: 1,
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/c/b0/536d78dd5aeb4/clean.jpg",
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
      image: "https://cdn.marvel.com/content/2x/marvoicesleg2024001_cover_0.jpg",
      title: "Superhero Legends",
      rating: 4.2,
      author: "Mike Johnson",
      year: "2023",
      ratedCount: "245"
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Secret_Origins_TPB.jpg/250px-Secret_Origins_TPB.jpg",
      title: "Secret Origins",
      rating: 4.6,
      author: "Sarah Lee",
      year: "2024",
      ratedCount: "389"
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxP7nI7Wx2KYJvN6OvCP9w2ic8q30g1pWohg&s",
      title: "Justice Warriors",
      rating: 4.3,
      author: "Tom Wilson",
      year: "2023",
      ratedCount: "267"
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/61S6QQSX57L._AC_UF894,1000_QL80_.jpg",
      title: "Cosmic Adventures",
      rating: 4.7,
      author: "Emma White",
      year: "2024",
      ratedCount: "451"
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/61S6QQSX57L._AC_UF894,1000_QL80_.jpg",
      title: "Legend of Heroes",
      rating: 4.4,
      author: "Chris Davis",
      year: "2023",
      ratedCount: "198"
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxP7nI7Wx2KYJvN6OvCP9w2ic8q30g1pWohg&s",
      title: "Epic Battles",
      rating: 4.9,
      author: "Lisa Anderson",
      year: "2024",
      ratedCount: "623"
    }
  ];

  // Mock reviews data
  const mockReviews = [
    {
      id: 1,
      author: "Alex Turner",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 4.5,
      title: "Amazing storytelling!",
      content: "This comic series is absolutely incredible. The character development and plot twists kept me engaged throughout.",
      date: "Nov 28, 2024"
    },
    {
      id: 2,
      author: "Sarah Mitchell",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 4.8,
      title: "Best comic series ever",
      content: "Outstanding artwork and narrative. Highly recommend to all comic book enthusiasts. A must-read!",
      date: "Nov 25, 2024"
    },
    {
      id: 3,
      author: "Mike Johnson",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 4.2,
      title: "Great but could be better",
      content: "Really enjoyed this comic. Some parts felt a bit rushed, but overall a solid addition to the collection.",
      date: "Nov 20, 2024"
    },
    {
      id: 4,
      author: "Emma Davis",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 4.6,
      title: "Fantastic entertainment",
      content: "Perfect blend of action and emotion. The illustrations are stunning and the story is captivating.",
      date: "Nov 18, 2024"
    }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value
    }));
  };

  return (
    <div className={styles.comicsPageContainer}>
      {/* Filter Section */}
      <div className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.browseLabel}>BROWSE BY</div>

          <div className={styles.filterGroup}>
            <div className={styles.filterItem}>
              <select className={styles.filterSelect} onChange={(e) => handleFilterChange('year', e.target.value)}>
                <option value="">YEAR</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <select className={styles.filterSelect} onChange={(e) => handleFilterChange('rating', e.target.value)}>
                <option value="">RATING</option>
                <option value="5">5 Stars</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <select className={styles.filterSelect} onChange={(e) => handleFilterChange('popular', e.target.value)}>
                <option value="">POPULAR</option>
                <option value="trending">Trending</option>
                <option value="most-read">Most Read</option>
                <option value="new">New Releases</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <select className={styles.filterSelect} onChange={(e) => handleFilterChange('genre', e.target.value)}>
                <option value="">GENRE</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="fantasy">Fantasy</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <select className={styles.filterSelect} onChange={(e) => handleFilterChange('service', e.target.value)}>
                <option value="">SERVICE</option>
                <option value="free">Free</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <select className={styles.filterSelect} onChange={(e) => handleFilterChange('other', e.target.value)}>
                <option value="">OTHER</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
              </select>
            </div>

            <div className={styles.filterItem}>
              <input type="text" className={styles.searchInput} placeholder="FIND A COMIC" />
            </div>
          </div>
        </div>
      </div>

      {/* Comics Grid Section */}
      <div className={styles.comicsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>All Comics</h2>
          <p className={styles.sectionSubtitle}>Browse our collection of amazing comics</p>
        </div>

        <div className={styles.comicsGrid}>
          {mockComics.map((comic) => (
            <div key={comic.id} className={styles.comicCardWrapper}>
              <ComicCard {...comic} />
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className={styles.reviewsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Community Reviews</h2>
          <p className={styles.sectionSubtitle}>What readers are saying</p>
        </div>

        <div className={styles.reviewsGrid}>
          {mockReviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <img src={review.avatar} alt={review.author} className={styles.reviewAvatar} />
                <div className={styles.reviewInfo}>
                  <h4 className={styles.reviewAuthor}>{review.author}</h4>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
              </div>

              <div className={styles.reviewRating}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < Math.floor(review.rating)} />
                ))}
                <span className={styles.ratingValue}>{review.rating.toFixed(1)}</span>
              </div>

              <h3 className={styles.reviewTitle}>{review.title}</h3>
              <p className={styles.reviewContent}>{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};