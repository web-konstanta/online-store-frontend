export const productDiscount = (oldPrice: number, newPrice: number) => {
	const difference = oldPrice - newPrice
	return Math.round((difference * 100) / oldPrice)
}