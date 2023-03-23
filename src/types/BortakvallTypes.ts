/**
 * Product
 */
export type ProductData = {
	name: string,
	description: string,
	price: number,
	images: string,
	stock_status: string,
	stock_quantity: number,
}

export type Product = ProductData & {
	id: number,
}

export type ProductList = Product[]

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
}

export type Order = OrderData & {
	id: number,
}

export type OrderList = Order[]

/**
 * Generic JSend Type
 */
export type JSend<T> = {
	status: "success" | "fail" | "error",
	data: T,
}
