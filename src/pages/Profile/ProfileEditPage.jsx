import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileEditPage.module.css';

export const ProfileEditPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Matin',
    bio: 'Comic enthusiast & collector',
    instagram: '@matin_gafarov',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9F5m_XH1BhsoQSY8-lcS6iyEZNi13TYwPw&s'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save profile changes
    console.log('Profile updated:', formData);
    navigate('/profile');
  };

  return (
    <div className={styles.editContainer}>
      <div className={styles.editCard}>
        <h1 className={styles.title}>Edit Profile</h1>

        {/* Avatar Section */}
        <div className={styles.avatarSection}>
          <img src={formData.avatar} alt="Profile" className={styles.previewAvatar} />
          <label className={styles.fileLabel}>
            <span className={styles.uploadBtn}>Change Avatar</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </label>
        </div>

        {/* Form Fields */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your name"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Tell us about yourself"
            rows="4"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Instagram</label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className={styles.input}
            placeholder="@yourinstagram"
          />
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button className={styles.saveBtn} onClick={handleSave}>
            Save Changes
          </button>
          <button className={styles.cancelBtn} onClick={() => navigate('/profile')}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
