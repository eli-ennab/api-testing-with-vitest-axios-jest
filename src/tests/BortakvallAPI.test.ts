import { afterAll, afterEach, beforeAll, describe, it, expect } from 'vitest'
import { server } from '../mocks/server'
import * as BortakvallAPI from '../services/BortakvallAPI'
import { OrderData, ProductData } from '../types/BortakvallTypes'

beforeAll(() => {
	server.listen()
})

afterEach(() => {
	server.resetHandlers()
})

afterAll(() => {
	server.close()
})

const newProduct: ProductData = {
	name: "Colanappar",
	description: "<p>Vingummi med colasmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, druvsocker, syra: citronsyra, karamelliserat socker, arom, palmolja, ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
	price: 7,
	images: {
		large: "https://http.cat/201",
		thumbnail: "https://http.cat/201",
	},
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
	order_items: [
		{
			id: 31,
			order_id: 27,
			product_id: 8,
			qty: 1,
			item_price: 12,
			item_total: 12
		}
	]
}

describe('Product tests', () => {
	it('should return a list of products', async () => {
		const products = await BortakvallAPI.getProducts()

		expect(Array.isArray(products.data)).toBe(true)
		expect(products.data.length).toBeGreaterThan(0)
		expect(products.status).toBe("success")
		expect(products.status).not.toBe("error" || "fail")
	})

	it('should create a product', async () => {
		const createdProduct = await BortakvallAPI.createProduct(newProduct)

		expect(createdProduct.data).toMatchObject({
			id: expect.any(Number),
			name: newProduct.name,
			description: newProduct.description,
			price: newProduct.price,
			images: newProduct.images,
			stock_status: newProduct.stock_status,
			stock_quantity: newProduct.stock_quantity
		})
		expect(createdProduct.status).toBe("success")
		expect(createdProduct.status).not.toBe("error" || "fail")
	})

	it('should create a product and then get that product', async () => {
		const createdProduct = await BortakvallAPI.createProduct(newProduct)
		const getProduct = await BortakvallAPI.getProduct(createdProduct.data.id)

		expect(getProduct).toStrictEqual(createdProduct)
		expect(getProduct.status).toBe("success")
		expect(getProduct.status).not.toBe("error" || "fail")
		expect(createdProduct.status).toBe("success")
		expect(createdProduct.status).not.toBe("error" || "fail")
	})
})

describe('Order tests', () => {
	it('should return a list of orders', async () => {
		const orders = await BortakvallAPI.getOrders()

		expect(Array.isArray(orders.data)).toBe(true)
		expect(orders.data.length).toBeGreaterThan(0)
		expect(orders.status).toBe("success")
		expect(orders.status).not.toBe("error" || "fail")
	})

	it('should create an order', async () => {
		const createdOrder = await BortakvallAPI.createOrder(newOrder)

		expect(createdOrder.data).toMatchObject({
			id: expect.any(Number),
			customer_first_name: newOrder.customer_first_name,
			customer_last_name: newOrder.customer_last_name,
			customer_address: newOrder.customer_address,
			customer_postcode: newOrder.customer_postcode,
			customer_city: newOrder.customer_city,
			customer_email: newOrder.customer_email,
			customer_phone: newOrder.customer_phone,
			order_total: newOrder.order_total,
			order_items: newOrder.order_items
		})
		expect(createdOrder.status).toBe("success")
		expect(createdOrder.status).not.toBe("error" || "fail")
	})

	it('should create a order and then get that order', async () => {
		const createdOrder = await BortakvallAPI.createOrder(newOrder)
		const getOrder = await BortakvallAPI.getOrder(createdOrder.data.id)

		expect(getOrder).toStrictEqual(createdOrder)
		expect(getOrder.status).toBe("success")
		expect(getOrder.status).not.toBe("error" || "fail")
		expect(createdOrder.status).toBe("success")
		expect(createdOrder.status).not.toBe("error" || "fail")
	})
})
