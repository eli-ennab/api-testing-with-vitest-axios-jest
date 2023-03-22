import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

/**
 * Get all products
 */
export const getProducts = async () => {
	const res = await axios.get<any>(`${BASE_URL}/products`)
	return res.data
}

/**
 * Get a single product
 */
export const getProduct = async (id: number) => {
	const res = await axios.get<any>(`${BASE_URL}/products/${id}`)
	return res.data
}
