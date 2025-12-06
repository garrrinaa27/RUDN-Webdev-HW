import React from 'react'
import GalleryItem from './GalleryItem'
import styles from './Gallery.module.css'

interface GalleryProps {
  images: string[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className={styles.galleryWrapper}>
      <div className={styles.galleryHeader}>
        <h2 className={styles.galleryTitle}>Более 3.000 заказов за два года</h2>
        <p className={styles.gallerySubtitle}>
          Посмотрите реальные фотографии заказов из нашего Instagram
        </p>
      </div>

      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <GalleryItem key={index} imageUrl={image} />
        ))}
      </div>
    </section>
  )
}

export default Gallery