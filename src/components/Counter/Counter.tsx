import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  initialCount?: number;
  price: number;
  onCountChange: (count: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 1, price, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    } else {
      onCountChange(0);
    }
  };

  const totalPrice = count * price;

  return (
    <div className={styles.counterContainer}>
      <div className={styles.counterControls}>
        <button 
          className={styles.counterButton} 
          onClick={decrement}
          aria-label="Уменьшить количество"
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button 
          className={styles.counterButton} 
          onClick={increment}
          aria-label="Увеличить количество"
        >
          +
        </button>
      </div>
      <div className={styles.totalPrice}>
        Итого: {totalPrice} ₽
      </div>
    </div>
  );
};

export default Counter;