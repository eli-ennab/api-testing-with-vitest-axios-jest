export type Product = {
    status: string,
    data: [
        id: number,
        name: string,
        description: string,
        price: number,
        on_sale: boolean,
        images: {
        thumbnail: string,
        large: string
        },
        stock_status: string,
        stock_quantity: null
    ]
}

// export type Product = {
// 	id: number,
// 	name: string,
// 	description: string,
// 	price: number,
// 	images: string,
// 	stock_status: string,
// 	stock_quantity: number,
// }

export type CreateProductData = {
	name: string,
	description: string,
	price: number,
	images: string,
	stock_status: string,
	stock_quantity: number,
}

export type Order = {
	id: number,
	customer_first_name: string,
	customer_last_name: string,
	customer_address: string,
	customer_postcode: number,
	customer_city: string,
	customer_email: string,
	customer_phone?: number | null,
	order_total: number,
}

