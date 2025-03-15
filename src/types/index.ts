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