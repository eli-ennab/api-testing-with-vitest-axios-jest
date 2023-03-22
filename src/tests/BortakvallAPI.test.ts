import { describe, it, expect } from 'vitest'
import * as BortakvallAPI from '../services/BortakvallAPI'
import { CreateProductData, Product } from '../types/BortakvallTypes'

const newProduct: CreateProductData = {
	name: "Colanappar",
	description: "<p>Vingummi med colasmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, druvsocker, syra: citronsyra, karamelliserat socker, arom, palmolja, ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
	price: 7,
	images: "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-22-63284d45ebe28__700.jpg",
	stock_status: "instock",
	stock_quantity: 2
}

describe('BortakvallAPI', () => {

	it('should return a list', async () => {
		const products = await BortakvallAPI.getProducts()
		expect(Array.isArray(products.data)).toBe(true)
	})

	it('should return a status success', async () => {
		const getProducts = await BortakvallAPI.getProducts()
		expect(getProducts.status).toBe("success")
	})

	it('should create a product', async () => {
		const createdProduct = await BortakvallAPI.createProduct(newProduct)

		// expect(createdProduct).toMatchObject({
		// 	id: expect.any(Number),
		// 	name: newProduct.name,
		// 	description: newProduct.description,
		// 	price: newProduct.price,
		// 	images: newProduct.images,
		// 	stock_status: newProduct.stock_status,
		// 	stock_quantity: newProduct.stock_quantity,
		// })

		expect(createdProduct.status).toBe("success")
	})

	it.todo('should create an order', async () => {

	})

})
