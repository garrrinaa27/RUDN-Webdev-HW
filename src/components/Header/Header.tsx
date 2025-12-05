import React from 'react'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Кондитерская "Сладкая жизнь"</h1>
        </div>
        <div className={styles.contacts}>
          <p className={styles.phone}>+7 (999) 123-45-67</p>
          <p className={styles.address}>Москва, ул. Кондитерская, д. 10</p>
        </div>
      </div>
    </header>
  )
}

export default Header