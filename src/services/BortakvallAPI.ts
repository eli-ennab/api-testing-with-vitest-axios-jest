import axios from 'axios'
import { CreateOrderData, CreateProductData, Order, Product } from '../types/BortakvallTypes'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

/**
 * Generic get request
 */
export const get = async <T>(endpoint: string) => {
	const res = await axios.get<T>(BASE_URL + endpoint)
	return res.data
}

/**
 * Generic post request
 */
export const post = async <T>(endpoint: string, data: any) => {
	const res = await axios.post<T>(BASE_URL + endpoint, data)
	return res.data
}

/**
 * Get all products
 */
export const getProducts = () => {
	return get<Product[]>(`/products`)
}

/**
 * Get a single product
 */
export const getProduct = async (id: number) => {
	return get<Product>(`/products/${id}`)
}

/**
 * Create a product
 */
export const createProduct = (product: CreateProductData) => {
	return post<Product>(`/products`, product)
}

/**
 * Get all orders
 */
export const getOrders = () => {
	return get<Order[]>(`/orders`)
}

/**
 * Get a single order
 */
export const getOrder = async (id: number) => {
	return get<Order>(`/orders/${id}`)
}

/**
 * Create an order
 */
export const createOrder = (order: CreateOrderData) => {
	return post<Order>(`/orders`, order)
}
