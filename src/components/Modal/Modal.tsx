import React, { useEffect, useCallback } from 'react'
import OrderForm from './OrderForm'
import { OrderFormData } from '../../types.ts' // Или из вашего файла типов
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: OrderFormData) => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className={styles.modalOverlay}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal}>
        <button 
          className={styles.closeBtn} 
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          <img 
            className={styles.closeBtnImg} 
            src="/src/assets/images/x.png" 
            alt="кнопка закрытия формы" 
          />
        </button>

        <div className={styles.modalTitle}>
          <h2>Чтобы сделать заказ, расскажите нам о себе</h2>
        </div>

        <OrderForm onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  )
}

export default Modal