import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './ProfilePage.module.css';
import { ComicCard } from '../../components/ComicCard/ComicCard';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('favorites');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'lists') {
      setActiveTab('lists');
    } else {
      setActiveTab('favorites');
    }
  }, [searchParams]);

  const userProfile = {
    name: 'Matin',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9F5m_XH1BhsoQSY8-lcS6iyEZNi13TYwPw&s',
    bio: 'Comic enthusiast & collector',
    instagram: '@matin_gafarov'
  };

  const favoriteComics = [
    {
      id: 1,
      image: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/b0/536d78dd5aeb4/clean.jpg',
      title: 'The Amazing Adventures',
      rating: 4.5,
      author: 'John Doe',
      year: 2024,
      ratedCount: 328
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/M/MV5BZWQwNjViNzUtZjdiMS00NWFiLWE0YjUtNjRlZTU3YjMwMzgyXkEyXkFqcGc@._V1_.jpg',
      title: 'Dark Knights Chronicles',
      rating: 4.8,
      author: 'Jane Smith',
      year: 2024,
      ratedCount: 512
    },
    {
      id: 3,
      image: 'https://cdn.marvel.com/content/2x/marvoicesleg2024001_cover_0.jpg',
      title: 'Superhero Legends',
      rating: 4.2,
      author: 'Mike Johnson',
      year: 2023,
      ratedCount: 245
    },
    {
      id: 4,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Secret_Origins_TPB.jpg/250px-Secret_Origins_TPB.jpg',
      title: 'Secret Origins',
      rating: 4.6,
      author: 'Sarah Lee',
      year: 2024,
      ratedCount: 389
    }
  ];

  const userLists = [
    {
      id: 1,
      title: 'Superhero Classics',
      count: 24,
      image: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/b0/536d78dd5aeb4/clean.jpg'
    },
    {
      id: 2,
      title: 'Dark & Mysterious',
      count: 18,
      image: 'https://m.media-amazon.com/images/M/MV5BZWQwNjViNzUtZjdiMS00NWFiLWE0YjUtNjRlZTU3YjMwMzgyXkEyXkFqcGc@._V1_.jpg'
    },
    {
      id: 3,
      title: 'Indie Gems',
      count: 12,
      image: 'https://cdn.marvel.com/content/2x/marvoicesleg2024001_cover_0.jpg'
    },
    {
      id: 4,
      title: 'Must Read',
      count: 31,
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Secret_Origins_TPB.jpg/250px-Secret_Origins_TPB.jpg'
    },
    {
      id: 5,
      title: 'Wishlist',
      count: 45,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxP7nI7Wx2KYJvN6OvCP9w2ic8q30g1pWohg&s'
    },
    {
      id: 6,
      title: 'Completed',
      count: 156,
      image: 'https://m.media-amazon.com/images/I/61S6QQSX57L._AC_UF894,1000_QL80_.jpg'
    }
  ];

  const stats = [
    { label: 'Comics', value: '743' },
    { label: 'This Year', value: '73' },
    { label: 'Lists', value: '6' },
    { label: 'Following', value: '70' },
    { label: 'Followers', value: '78' }
  ];

  return (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          <img src={userProfile.avatar} alt={userProfile.name} className={styles.profileAvatar} />
          <div className={styles.userInfo}>
            <h1 className={styles.userName}>{userProfile.name}</h1>
            <p className={styles.userBio}>{userProfile.bio}</p>
            <a href={userProfile.instagram} target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
              @matin_gafarov
            </a>
          </div>
        </div>
        <button className={styles.editBtn} onClick={() => navigate('/profile-edit')}>
          Edit Profile
        </button>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabBtn} ${activeTab === 'favorites' ? styles.active : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          Favorite Comics
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'lists' ? styles.active : ''}`}
          onClick={() => setActiveTab('lists')}
        >
          My Lists
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'favorites' && (
        <div className={styles.comicsGrid}>
          {favoriteComics.map((comic) => (
            <ComicCard
              key={comic.id}
              id={comic.id}
              image={comic.image}
              title={comic.title}
              rating={comic.rating}
              author={comic.author}
              year={comic.year}
              ratedCount={comic.ratedCount}
            />
          ))}
        </div>
      )}

      {activeTab === 'lists' && (
        <div className={styles.listsGrid}>
          {userLists.map((list) => (
            <div key={list.id} className={styles.listCard}>
              <img src={list.image} alt={list.title} className={styles.listImage} />
              <h3 className={styles.listTitle}>{list.title}</h3>
              <p className={styles.listCount}>{list.count} comics</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};       