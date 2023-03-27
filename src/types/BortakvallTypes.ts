/**
 * Product
 */
export type ProductData = {
	name: string,
	description: string,
	price: number,
	images: ProductImages,
	stock_status: string,
	stock_quantity: number,
}

export type Product = ProductData & {
	id: number,
}

export type ProductList = Product[]

export type ProductResponse = {
	status: string,
	data: Product,
	message?: string
}

export type ProductListResponse = {
	status: string,
	data: ProductList,
	message?: string
}

export type ProductImages = {
	large: string,
	thumbnail: string,
}

/**
 * Order
 */
export type OrderData = {
	customer_first_name: string,
	customer_last_name: string,
	customer_address: string,
	customer_postcode: string,
	customer_city: string,
	customer_email: string,
	customer_phone: string,
	order_total: number,
	order_items: [],
	// order_items: OrderItems,
}

export type Order = OrderData & {
	id: number,
}

export type OrderList = Order[]

export type OrderResponse = {
	status: string,
	data: Order,
	message?: string
}

export type OrderListResponse = {
	status: string,
	data: OrderList,
	message?: string
}

// export type OrderItems = {
// 	id: number,
// 	order_id: number,
// 	product_id: number,
// 	qty: number,
// 	item_price: number,
// 	item_total: number,
// }

/**
 * Generic JSend Type
 */
export type JSend<T> = {
	status: "success" | "fail" | "error",
	data: T,
}
