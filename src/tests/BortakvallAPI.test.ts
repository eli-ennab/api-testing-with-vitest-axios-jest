import { describe, it, expect } from 'vitest'
import * as BortakvallAPI from '../services/BortakvallAPI'

describe('BortakvallAPI', () => {

	it('should return a list', async () => {
		const products = await BortakvallAPI.getProducts()
		expect(Array.isArray(products.data)).toBe(true)
	})

	it('should return a status success', async () => {
		const result = await BortakvallAPI.getProducts()
		expect(result.status).toBe("success")
	})

})
