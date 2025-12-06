import React, { useState, useCallback, useEffect } from "react"
import Header from "../components/Header/Header"
import ProductCard from "../components/ProductCard/ProductCard"
import Gallery from "../components/Gallery/Gallery"
import Footer from "../components/Footer/Footer"
import Modal from "../components/Modal/Modal"
import styles from "./HomePage.module.css"

// Определите типы локально
interface OrderFormData {
  name: string
  phone: string
  email: string
  time: string
  consent: boolean
}

interface Product {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
}

// Данные продуктов
const productsData: Product[] = [
  {
    id: 1,
    title: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, ванильная основа",
    price: 150,
    imageUrl: "/src/assets/images/1 (1).png"
  },
  {
    id: 2,
    title: "Малиновый рай",
    description: "Воздушный крем, темная основа и ягода малины",
    price: 150,
    imageUrl: "/src/assets/images/1 (2).png"
  },
  {
    id: 3,
    title: "Фейерверк",
    description: "Разноцветный крем, с бисквитной основой",
    price: 150,
    imageUrl: "/src/assets/images/1 (3).png"
  },
  {
    id: 4,
    title: "Мыс безумия",
    description: "Разноцветная основа, стружка и нежный крем",
    price: 150,
    imageUrl: "/src/assets/images/1 (4).png"
  },
  {
    id: 5,
    title: "Шоколадный мир",
    description: "Ореховая стружка, нежный крем и шоколадная основа",
    price: 150,
    imageUrl: "/src/assets/images/1 (5).png"
  },
  {
    id: 6,
    title: "Слезы дракона",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    price: 150,
    imageUrl: "/src/assets/images/1 (6).png"
  },
  {
    id: 7,
    title: "Летняя фантазия",
    description: "Украшения в форме сердец, для любимого человека",
    price: 150,
    imageUrl: "/src/assets/images/1 (7).png"
  },
  {
    id: 8,
    title: "Облачная сказка",
    description: "Светлая основа, нежный крем со стружкой сверху",
    price: 150,
    imageUrl: "/src/assets/images/1 (8).png"
  },
  {
    id: 9,
    title: "Темный рыцарь",
    description: "Темная основа, нежный крем и вкусные шарики",
    price: 150,
    imageUrl: "/src/assets/images/1 (9).png"
  }
]

// Данные для галереи
const galleryImages = [
  "/src/assets/images/2.png",
  "/src/assets/images/2 (1).png",
  "/src/assets/images/2 (2).png",
  "/src/assets/images/2 (3).png",
  "/src/assets/images/2 (4).png",
  "/src/assets/images/2 (5).png",
  "/src/assets/images/2 (6).png",
  "/src/assets/images/2 (7).png",
  "/src/assets/images/2 (8).png"
]

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [orderItems, setOrderItems] = useState<Map<number, number>>(new Map())
  const [totalItems, setTotalItems] = useState(0)

  const handleOrderClick = useCallback((productId: number, quantity: number) => {
    setOrderItems(prev => {
      const newMap = new Map(prev)
      if (quantity > 0) {
        newMap.set(productId, quantity)
      } else {
        newMap.delete(productId)
      }
      return newMap
    })
  }, [])

  useEffect(() => {
    let total = 0
    orderItems.forEach(quantity => {
      total += quantity
    })
    setTotalItems(total)
  }, [orderItems])

  const handleOpenModal = () => {
    if (orderItems.size > 0) {
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  const handleSubmitOrder = useCallback((formData: OrderFormData) => {
    console.log("Order submitted:", { 
      orderItems: Array.from(orderItems.entries()), 
      formData 
    })
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время.")
    
    setOrderItems(new Map())
    setTotalItems(0)
  }, [orderItems])

  const totalPrice = Array.from(orderItems.entries()).reduce((sum, [productId, quantity]) => {
    const product = productsData.find(p => p.id === productId)
    return sum + (product ? product.price * quantity : 0)
  }, 0)

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.showcaseSection}>
          <div className={styles.showcaseContainer}>
            <header className={styles.showcaseHeader}>
              <h2 className={styles.showcaseTitle}>Для любых событий и дорогих вам людей</h2>
            </header>

            <div className={styles.showcaseGrid}>
              {productsData.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOrder={handleOrderClick}
                />
              ))}
            </div>
          </div>
        </section>

        <Gallery images={galleryImages} />
      </main>

      <Footer />

      {totalItems > 0 && (
        <button 
          className={styles.floatingOrderButton}
          onClick={handleOpenModal}
        >
          Оформить заказ ({totalItems}) - {totalPrice} ₽
        </button>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitOrder}
      />
    </div>
  )
}

export default HomePage