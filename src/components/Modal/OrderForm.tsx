import React, { useState, useCallback, useEffect } from "react"
import styles from "./Modal.module.css"

export interface OrderFormData {
  name: string
  phone: string
  email: string
  time: string
  consent: boolean
}

interface OrderFormProps {
  onSubmit: (data: OrderFormData) => void
  onCancel: () => void
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    phone: "",
    email: "",
    time: "",
    consent: false,
  })

  const validateForm = useCallback(() => {
    return formData.name.trim() !== "" && 
           formData.phone.trim() !== "" && 
           formData.consent
  }, [formData])

  const [isValid, setIsValid] = useState(validateForm())

  useEffect(() => {
    setIsValid(validateForm())
  }, [formData, validateForm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValid) {
      onSubmit(formData)
      setFormData({
        name: "",
        phone: "",
        email: "",
        time: "",
        consent: false,
      })
      onCancel()
    }
  }

  return (
    <form id="orderForm" onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formField}>
          <input
            type="tel"
            id="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formField}>
          <input
            type="email"
            id="email"
            placeholder="Электронная почта"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formField}>
          <input
            type="text"
            id="time"
            placeholder="Удобное для звонка время"
            value={formData.time}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.modalParagraph}>
        <p>
          Мы перезвоним Вам в удобное время,<br />чтобы уточнить ваши пожелания
        </p>
      </div>

      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="consent">
          Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных
        </label>
      </div>

      <div className={styles.buttonContainer}>
        <button 
          type="submit" 
          className={styles.submitBtn} 
          disabled={!isValid}
        >
          Сделать заказ
        </button>
      </div>
    </form>
  )
}

export default OrderForm