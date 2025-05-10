import { Product } from '@src/types'
import React from 'react'
import classes from './ProductDetails.module.css'
import './ProductDetails.module.css'

const ProductDetails = React.forwardRef<HTMLDivElement, { product: Product }>(
    ({ product }, ref) => {
        return (
            <div className={classes.product__details} ref={ref}>
                <h1 className={classes.product__detailsTitle}>
                    Product Characteristics:
                </h1>
                <div
                    className={classes.product__characters}
                    dangerouslySetInnerHTML={{ __html: product.characters! }}
                />
            </div>
        )
    }
)

export default ProductDetails
