import axios from 'axios'
import { CreateProductData, Product } from '../types/BortakvallTypes'

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

// export const getProducts = async () => {
// 	const res = await axios.get<Product[]>(`${BASE_URL}/products`)
// 	return res.data
// }

/**
 * Get a single product
 */
export const getProduct = async (id: number) => {
	return get<Product>(`/products/${id}`)
	const res = await axios.get<Product>(`${BASE_URL}/products/${id}`)
	return res.data
}

/**
 * Create a product
 */
export const createProduct = (product: CreateProductData) => {
	return post<Product>(`/products`, product)
}
