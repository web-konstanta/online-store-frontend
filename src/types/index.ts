import { ComponentType } from "react"

export type RouteType = {
	path: string
	component: ComponentType
	exact: boolean
}

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
	image?: string
	rating: number
	color?: ProductColor
	size?: ProductSize
}

export type ProductColor = Pick<Product, 'id' | 'name'>

export type ProductSize = Pick<Product, 'id' | 'name'>