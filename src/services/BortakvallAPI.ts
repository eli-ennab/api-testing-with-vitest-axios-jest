import axios from 'axios'

/**
 * Get all products
 */
export const getProducts = async () => {
	const res = await axios.get<any>(`https://worried-jade-cocoon.cyclic.app/products`)
	return res.data
}

/**
 * Get a single product
 */
export const getProduct = async (id: number) => {
	const res = await axios.get<any>(`https://worried-jade-cocoon.cyclic.app/products/${id}`)
	return res.data
}
