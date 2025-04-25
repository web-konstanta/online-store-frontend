export type BrandsInfo = {
	amount: number
	description: string
}

export type BrandsIcons = {
	path: string
	href: string
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
	characters?: string
	featuredImage?: string
	images?: string[],
	rating: number
	colors?: ProductColor[]
	sizes?: ProductSize[]
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
	userName: string
	content: string
	rating: number
	postedAt: string
}

export type ReviewSortOption = 'latest' | 'oldest' | 'highest' | 'lowest'