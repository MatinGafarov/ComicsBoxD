import { useState } from 'react';
import styles from './ReviewOrLogPage.module.css';
import { StarIcon } from '../../components/icons';

export const ReviewOrLogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComic, setSelectedComic] = useState(null);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  // Mock comics data
  const allComics = [
    {
      id: 1,
      title: 'The Amazing Adventures',
      image: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/b0/536d78dd5aeb4/clean.jpg',
      author: 'John Doe',
      year: '2024'
    },
    {
      id: 2,
      title: 'Dark Knights Chronicles',
      image: 'https://m.media-amazon.com/images/M/MV5BZWQwNjViNzUtZjdiMS00NWFiLWE0YjUtNjRlZTU3YjMwMzgyXkEyXkFqcGc@._V1_.jpg',
      author: 'Jane Smith',
      year: '2024'
    },
    {
      id: 3,
      title: 'Superhero Legends',
      image: 'https://cdn.marvel.com/content/2x/marvoicesleg2024001_cover_0.jpg',
      author: 'Mike Johnson',
      year: '2023'
    },
    {
      id: 4,
      title: 'Secret Origins',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Secret_Origins_TPB.jpg/250px-Secret_Origins_TPB.jpg',
      author: 'Sarah Lee',
      year: '2024'
    },
    {
      id: 5,
      title: 'Justice Warriors',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxP7nI7Wx2KYJvN6OvCP9w2ic8q30g1pWohg&s',
      author: 'Tom Wilson',
      year: '2023'
    },
    {
      id: 6,
      title: 'Cosmic Adventures',
      image: 'https://m.media-amazon.com/images/I/61S6QQSX57L._AC_UF894,1000_QL80_.jpg',
      author: 'Emma White',
      year: '2024'
    }
  ];

  // Filter comics based on search
  const filteredComics = allComics.filter(comic =>
    comic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectComic = (comic) => {
    setSelectedComic(comic);
    setRating(5);
    setReviewText('');
  };

  const handlePostReview = () => {
    if (!reviewText.trim()) {
      alert('Please write a review');
      return;
    }

    const newReview = {
      id: Date.now(),
      comicId: selectedComic.id,
      comicTitle: selectedComic.title,
      comicImage: selectedComic.image,
      rating,
      reviewText,
      date: new Date().toLocaleDateString()
    };

    setReviews([newReview, ...reviews]);
    setSelectedComic(null);
    setReviewText('');
    setRating(5);
  };

  const handleCloseModal = () => {
    setSelectedComic(null);
    setReviewText('');
    setRating(5);
  };

  return (
    <div className={styles.reviewOrLogContainer}>
      {/* Search Section */}
      <div className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <h2 className={styles.title}>Search Comics</h2>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Find a comic to review..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Comics Grid */}
        {searchQuery && (
          <div className={styles.comicsGrid}>
            {filteredComics.length > 0 ? (
              filteredComics.map((comic) => (
                <div
                  key={comic.id}
                  className={styles.comicItem}
                  onClick={() => handleSelectComic(comic)}
                >
                  <img src={comic.image} alt={comic.title} className={styles.comicImage} />
                  <h3 className={styles.comicTitle}>{comic.title}</h3>
                  <p className={styles.comicAuthor}>{comic.author}</p>
                </div>
              ))
            ) : (
              <p className={styles.noResults}>No comics found</p>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedComic && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleCloseModal}>✕</button>

            <div className={styles.modalContent}>
              {/* Comic Info Side */}
              <div className={styles.comicInfoSide}>
                <img src={selectedComic.image} alt={selectedComic.title} className={styles.modalComicImage} />
                <h2 className={styles.modalComicTitle}>{selectedComic.title}</h2>
                <p className={styles.modalComicAuthor}>{selectedComic.author}</p>
                <p className={styles.modalComicYear}>{selectedComic.year}</p>
              </div>

              {/* Review Side */}
              <div className={styles.reviewSide}>
                <h3 className={styles.reviewTitle}>Write Your Review</h3>

                {/* Rating */}
                <div className={styles.ratingSection}>
                  <label className={styles.ratingLabel}>Rating:</label>
                  <div className={styles.ratingStars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className={styles.starBtn}
                        onClick={() => setRating(star)}
                      >
                        <StarIcon filled={star <= rating} />
                      </button>
                    ))}
                  </div>
                  <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
                </div>

                {/* Review Text */}
                <div className={styles.reviewTextSection}>
                  <label className={styles.reviewLabel}>Your Review:</label>
                  <textarea
                    className={styles.reviewTextarea}
                    placeholder="Share your thoughts about this comic..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    maxLength="300"
                  />
                  <span className={styles.charCount}>{reviewText.length}/300</span>
                </div>

                {/* Post Button */}
                <button className={styles.postBtn} onClick={handlePostReview}>
                  Post Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reviews History */}
      <div className={styles.reviewsHistorySection}>
        <h2 className={styles.historyTitle}>Your Reviews</h2>
        {reviews.length > 0 ? (
          <div className={styles.reviewsList}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.reviewItem}>
                <img src={review.comicImage} alt={review.comicTitle} className={styles.reviewItemImage} />
                <div className={styles.reviewItemContent}>
                  <h3 className={styles.reviewItemTitle}>{review.comicTitle}</h3>
                  <div className={styles.reviewItemRating}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < Math.floor(review.rating)} />
                    ))}
                    <span className={styles.ratingValueItem}>{review.rating.toFixed(1)}</span>
                  </div>
                  <p className={styles.reviewItemText}>{review.reviewText}</p>
                  <span className={styles.reviewItemDate}>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noReviews}>No reviews yet. Start by searching for a comic!</p>
        )}
      </div>
    </div>
  );
};