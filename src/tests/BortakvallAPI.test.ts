import { afterAll, afterEach, beforeAll, describe, it, expect } from 'vitest'
import { server } from '../mocks/server'
import * as BortakvallAPI from '../services/BortakvallAPI'
import { OrderData, ProductData } from '../types/BortakvallTypes'

// Boot API mocking
beforeAll(() => {
	server.listen()
})

// Reset handlers
afterEach(() => {
	server.resetHandlers()
})

// Clean up after ourselves
afterAll(() => {
	server.close()
})

const newProduct: ProductData = {
	name: "Colanappar",
	description: "<p>Vingummi med colasmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, druvsocker, syra: citronsyra, karamelliserat socker, arom, palmolja, ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
	price: 7,
	images: "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-22-63284d45ebe28__700.jpg",
	stock_status: "instock",
	stock_quantity: 2
}

const newOrder: OrderData = {
	customer_first_name: "Michael",
	customer_last_name: "Gary Scott",
	customer_address: "126 Kellum Court",
	customer_postcode: "12859",
	customer_city: "Scranton",
	customer_email: "scotts.totts@dundermifflin.org",
	customer_phone: "0755-555555",
	order_total: 1,
	order_items: [],
}

describe('BortakvallAPI', () => {

	it.todo('should return a list of products and get status success', async () => {
		const products = await BortakvallAPI.getProducts()
		expect(Array.isArray(products.data)).toBe(true)
		expect(products.status).toBe("success")
		expect(products.data.length).toBeGreaterThan(0)
	})

	it.todo('should create a product', async () => {
		const createdProduct = await BortakvallAPI.createProduct(newProduct)
		expect(createdProduct.status).toBe("success")
	})

	it.todo('should create a product and then get that product', async () => {
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
		const orders = await BortakvallAPI.getOrders()
		expect(Array.isArray(orders.data)).toBe(true)
		expect(orders.status).toBe("success")
		expect(orders.data.length).toBeGreaterThan(0)
	})

	it.todo('should create an order', async () => {
		const createdOrder = await BortakvallAPI.createOrder(newOrder)
		expect(createdOrder.status).toBe("success")
	})

	it.todo('should create a order and then get that order', async () => {
		const createdOrder = await BortakvallAPI.createOrder(newOrder)
		const order = await BortakvallAPI.getOrder(createdOrder.data.id)
		expect(order).toStrictEqual(createdOrder)
	})

	it.todo('should create an order and then find the order among all orders', async () => {

	})

})
