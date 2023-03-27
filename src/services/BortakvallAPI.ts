import axios from 'axios'
import { OrderData, ProductData, Order, Product, JSend, ProductListResponse, ProductResponse, OrderListResponse, OrderResponse } from '../types/BortakvallTypes'

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
	// return get<JSend<Product[]>>(`/products`)
	return get<ProductListResponse>(`/products`)
}

/**
 * Get a single product
 */
export const getProduct = (id: number) => {
	// return get<JSend<Product>>(`/products/${id}`)
	return get<JSend<ProductResponse>>(`/products/${id}`)
}

/**
 * Create a product
 */
export const createProduct = (product: ProductData) => {
	// return post<JSend<Product>>(`/products`, product)
	return post<JSend<Product>>(`/products`, product)
}

/**
 * Get all orders
 */
export const getOrders = () => {
	return get<OrderListResponse>(`/orders`)
}

/**
 * Get a single order
 */
export const getOrder = async (id: number) => {
	return get<JSend<OrderResponse>>(`/orders/${id}`)
}

/**
 * Create an order
 */
export const createOrder = (order: OrderData) => {
	return post<JSend<Order>>(`/orders`, order)
}
