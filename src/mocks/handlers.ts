import { rest } from 'msw'
import { Order, OrderData, Product, ProductData } from '../types/BortakvallTypes'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const mockProducts: Product[] = [
	{
		id: 1,
		name: "Gott & Blandat Giants",
		description: "<p>En mix av lakrits och gelé med fruktsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, glukos-fruktossirap, stärkelse, VETEMJÖL, melass, syra (citronsyra), fuktighetsbevarande medel (sorbitoler, glycerol), lakritsextrakt, salt, vegetabiliska oljor (kokos, palm), aromer, färgämnen (E153, E120, E100, E141), ytbehandlingsmedel (bivax), stabiliseringsmedel (E471).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
		price: 12,
		images: "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-22-63284d45ebe28__700.jpg",
		stock_status: "instock",
		stock_quantity: 5
	},
	{
		id: 2,
		name: "Banana Bubs",
		description: "<p>Banan/gräddkola</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, majsstärkelse, vatten, surhetsreglerande medel (äppelsyra, natriumcitrat), potatisprotein, aromämnen, färgämnen: (E150d, E100), kokosolja, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
		price: 8,
		images: "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-22-63284d45ebe28__700.jpg",
		stock_status: "instock",
		stock_quantity: 8
	},
]

const mockOrders: Order[] = [
	{
		id: 1,
		customer_first_name: "Michael",
		customer_last_name: "Gary Scott",
		customer_address: "126 Kellum Court",
		customer_postcode: "12859",
		customer_city: "Scranton",
		customer_email: "scotts.totts@dundermifflin.org",
		customer_phone: "0755-555555",
		order_total: 1,
		order_items: []
	},
	{
		id: 2,
		customer_first_name: "Dwight",
		customer_last_name: "Schrute",
		customer_address: "Schrute Farms Rural Rt 6 Honesdale",
		customer_postcode: "18431",
		customer_city: "Scranton",
		customer_email: "bearsbeatsbeets@schrutefarms.org",
		customer_phone: "0722-222222",
		order_total: 1,
		order_items: []
	}
]

export const handlers = [
	/**
	 * Product handler
	 */
	rest.get(BASE_URL + '/products', (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				status: "success",
				data: mockProducts
			  })
		)
	}),

	rest.get(BASE_URL + '/products/:productId', (req, res, ctx) => {
		const productId = Number(req.params.productId)

		const product = mockProducts.find(product => product.id === productId)

		if (!product) {
		  return res(
			ctx.status(404),
		  )
		}

		return res(
		  ctx.status(200),
		  ctx.json({
			status: "success",
			data: product
		  })
		)
	  }),

	rest.post(BASE_URL + '/products', async (req, res, ctx) => {
		const payload = await req.json<ProductData>()

		const id = Math.max( 0, ...mockProducts.map(product => product.id) ) + 1

		const product: Product = {
			id: id,
			name: payload.name,
			description: payload.description,
			price: payload.price,
			images: payload.images,
			stock_status: payload.stock_status,
			stock_quantity: payload.stock_quantity
		}

		mockProducts.push(product)

		return res(
			ctx.status(201),
			ctx.json({
				status: "success",
				data: product
			  })
		  )
	}),

	/**
	 * Order handler
	 */
	rest.get(BASE_URL + '/orders', (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				status: "success",
				data: mockOrders
			  })
		)
	}),

	rest.get(BASE_URL + '/orders/:orderId', (req, res, ctx) => {
		const orderId = Number(req.params.orderId)

		const order = mockOrders.find(order => order.id === orderId)

		if (!order) {
		  return res(
			ctx.status(404),
		  )
		}

		return res(
		  ctx.status(200),
		  ctx.json(order)
		)
	  }),

	rest.post(BASE_URL + '/orders', async (req, res, ctx) => {
		const payload = await req.json<OrderData>()

		const id = Math.max( 0, ...mockOrders.map(order => order.id) ) + 1

		const order: Order = {
			id: id,
			customer_first_name: payload.customer_first_name,
			customer_last_name: payload.customer_last_name,
			customer_address: payload.customer_address,
			customer_postcode: payload.customer_postcode,
			customer_city: payload.customer_city,
			customer_email: payload.customer_email,
			customer_phone: payload.customer_phone,
			order_total: payload.order_total,
			order_items: payload.order_items
		}

		mockOrders.push(order)

		return res(
			ctx.status(201),
			ctx.json(order)
		)
	}),
]
