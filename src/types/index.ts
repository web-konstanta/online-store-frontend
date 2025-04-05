export type BrandsInfo = {
	amount: number
	description: string
}

export type FooterOptions = {
	name: string
	href: string
}

export type Product = {
	id: number
	name: string
	description: string
	newPrice: number
	oldPrice?: number
	featuredImage?: string
	images?: Array<string>,
	rating: number
	colors?: ProductColor[]
	size?: ProductSize
}

export type ProductColor = Pick<Product, 'id' | 'name'>

export type ProductSize = Pick<Product, 'id' | 'name'>

export type ProductCategory = {
	id: number,
	name: string,
	image: string,
	isLongImage: boolean
}

export type Review = {
	id: number
	user_name: string
	content: string
	rating: number
}