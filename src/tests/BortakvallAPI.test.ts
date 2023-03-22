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

	it('should return a list of products and get status success', async () => {
		const products = await BortakvallAPI.getProducts()
		expect(Array.isArray(products.data)).toBe(true)
		expect(products.status).toBe("success")
	})

	it('should create a product', async () => {
		const createdProduct = await BortakvallAPI.createProduct(newProduct)
		expect(createdProduct.status).toBe("success")
	})

	it('should create a product and then get that product', async () => {
		const createdProduct = await BortakvallAPI.createProduct(newProduct)
		const product = await BortakvallAPI.getProduct(createdProduct.data.id)
		expect(product).toStrictEqual(createdProduct)
	})

	it.todo('should create a product and then find the product among all products', async () => {
		const createdProduct = await BortakvallAPI.createProduct(newProduct)
		const products = await BortakvallAPI.getProducts()
		expect(products).toContainEqual(createdProduct)
	})

	it.todo('should return a list of orders', async () => {

	})

	it.todo('should create an order', async () => {

	})

	it.todo('should create a order and then get that order', async () => {

	})

})
