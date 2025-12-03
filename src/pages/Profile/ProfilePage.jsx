import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.css';
import { ComicCard } from '../../components/ComicCard/ComicCard';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('favorites');

  const userProfile = {
    name: 'Matin',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9F5m_XH1BhsoQSY8-lcS6iyEZNi13TYwPw&s',
    bio: 'Comic enthusiast & collector',
    instagram: 'https://instagram.com'
  };

  const favoriteComics = [
    {
      id: 1,
      image: 'https://via.placeholder.com/200x300?text=Comic+1',
      title: 'The Amazing Spider-Man',
      rating: 4.5,
      author: 'Stan Lee',
      year: 2023,
      ratedCount: 156
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/200x300?text=Comic+2',
      title: 'Batman: Dark Knight',
      rating: 4.8,
      author: 'Frank Miller',
      year: 2023,
      ratedCount: 203
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/200x300?text=Comic+3',
      title: 'X-Men: Legacy',
      rating: 4.2,
      author: 'Chris Claremont',
      year: 2022,
      ratedCount: 142
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/200x300?text=Comic+4',
      title: 'Avengers Assemble',
      rating: 4.6,
      author: 'Joss Whedon',
      year: 2023,
      ratedCount: 187
    }
  ];

  const userLists = [
    {
      id: 1,
      title: 'Superhero Classics',
      count: 24,
      image: 'https://via.placeholder.com/150x150?text=List+1'
    },
    {
      id: 2,
      title: 'Dark & Mysterious',
      count: 18,
      image: 'https://via.placeholder.com/150x150?text=List+2'
    },
    {
      id: 3,
      title: 'Indie Gems',
      count: 12,
      image: 'https://via.placeholder.com/150x150?text=List+3'
    },
    {
      id: 4,
      title: 'Must Read',
      count: 31,
      image: 'https://via.placeholder.com/150x150?text=List+4'
    },
    {
      id: 5,
      title: 'Wishlist',
      count: 45,
      image: 'https://via.placeholder.com/150x150?text=List+5'
    },
    {
      id: 6,
      title: 'Completed',
      count: 156,
      image: 'https://via.placeholder.com/150x150?text=List+6'
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
              @matin_comics
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