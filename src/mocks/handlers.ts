import { rest } from 'msw'
import { Product, ProductData } from '../types/BortakvallTypes'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const mockProducts: Product[] = [
	{
		id: 5216,
		name: "Gott & Blandat Giants",
		description: "<p>En mix av lakrits och gelé med fruktsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, glukos-fruktossirap, stärkelse, VETEMJÖL, melass, syra (citronsyra), fuktighetsbevarande medel (sorbitoler, glycerol), lakritsextrakt, salt, vegetabiliska oljor (kokos, palm), aromer, färgämnen (E153, E120, E100, E141), ytbehandlingsmedel (bivax), stabiliseringsmedel (E471).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
		price: 12,
		images: "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-22-63284d45ebe28__700.jpg",
		stock_status: "instock",
		stock_quantity: 5
	},
	{
		id: 6545,
		name: "Banana Bubs",
		description: "<p>Banan/gräddkola</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, majsstärkelse, vatten, surhetsreglerande medel (äppelsyra, natriumcitrat), potatisprotein, aromämnen, färgämnen: (E150d, E100), kokosolja, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
		price: 8,
		images: "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-22-63284d45ebe28__700.jpg",
		stock_status: "instock",
		stock_quantity: 8
	},
]

export const handlers = [
	rest.get(BASE_URL + '/products', (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(mockProducts),
		)
	}),

	rest.post(BASE_URL + '/products', async (req, res, ctx) => {
		const payload = await req.json<ProductData>()

		const id = Math.max( 0, ...mockProducts.map(todo => todo.id) ) + 1

		const newProduct: Product = {
			id: id,
			name: payload.name,
			description: payload.description,
			price: payload.price,
			images: payload.images,
			stock_status: payload.stock_status,
			stock_quantity: payload.stock_quantity
		}

		mockProducts.push(newProduct)

		return res(
			ctx.status(201),
			ctx.json(newProduct)
		)
	}),
]
