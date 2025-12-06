import React from 'react'
import styles from './Gallery.module.css'

interface GalleryItemProps {
  imageUrl: string
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl }) => {
  return (
    <div className={styles.galleryItem}>
      <img src={imageUrl} alt="Фото заказа" loading="lazy" />
    </div>
  )
}

export default GalleryItem