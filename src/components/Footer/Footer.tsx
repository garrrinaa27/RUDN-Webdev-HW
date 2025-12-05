import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Контакты</h3>
            <p className={styles.footerText}>+7 (999) 123-45-67</p>
            <p className={styles.footerText}>Москва, ул. Кондитерская, д. 10</p>
            <p className={styles.footerText}>Ежедневно с 9:00 до 21:00</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>О нас</h3>
            <p className={styles.footerText}>
              Изготавливаем торты и пирожные на заказ с 2020 года. 
              Более 3000 довольных клиентов.
            </p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Кондитерская "Сладкая жизнь". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer