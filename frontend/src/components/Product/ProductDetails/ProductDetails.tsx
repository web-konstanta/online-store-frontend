import { Product } from '@src/types'
import React from 'react'

const ProductDetails = React.forwardRef<HTMLDivElement, { product: Product }>(({ product }, ref) => {
    return (
        <div ref={ref}>
            <h1>Product Characteristics:</h1>
            <div dangerouslySetInnerHTML={{ __html: product.characters! }} />
        </div>
    )
})

export default ProductDetails
