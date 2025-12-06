// src/types/index.ts - исправленная версия
export interface OrderFormData {
  name: string
  phone: string
  email: string
  time: string
  consent: boolean  // Это правильно - boolean как тип
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
}

export interface OrderItem {
  productId: number
  quantity: number
}