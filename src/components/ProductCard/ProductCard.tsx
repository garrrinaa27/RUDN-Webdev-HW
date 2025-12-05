import React, { useState } from 'react'
import Counter from '../Counter/Counter'
import styles from './ProductCard.module.css'

// Экспортируйте тип Product
export interface Product {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
}

interface ProductCardProps {
  product: Product
  onOrder: (productId: number, quantity: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const [showCounter, setShowCounter] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleOrderClick = () => {
    setShowCounter(true)
  }

  const handleCounterChange = (count: number) => {
    setQuantity(count)
    if (count === 0) {
      setShowCounter(false)
      setQuantity(1)
    } else {
      onOrder(product.id, count)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{product.title}</h3>
        <p className={styles.cardDescription}>{product.description}</p>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>{product.price} ₽/шт.</span>
          {showCounter ? (
            <Counter 
              price={product.price}
              initialCount={quantity}
              onCountChange={handleCounterChange}
            />
          ) : (
            <button 
              className={styles.cardButton}
              onClick={handleOrderClick}
            >
              Заказать
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard