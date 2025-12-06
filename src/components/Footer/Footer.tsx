import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <span className={styles.text}>Согласие на обработку данных</span>
          <a href="#" className={styles.link}>Служба поддержки</a>
          <a href="#" className={styles.link}>Политика конфиденциальности</a>
        </div>
        
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer