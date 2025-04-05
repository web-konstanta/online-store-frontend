import React from 'react'
import ProductItem from '../Item/ProductItem'
import { Product } from '@src/types'
import classes from './ProductList.module.css'

type PropTypes = {
    title: string
    products: Product[]
    getAllProducts: () => void
}

const ProductList: React.FC<PropTypes> = ({
    title,
    products,
    getAllProducts,
}) => {
    return (
        <div className={classes.product__listContainer}>
            <div className={classes.product__listTitle}>{title}</div>
            <div className={classes.product__list}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
            <div className={classes.product__listBtn}>
                <button onClick={getAllProducts}>View All</button>
            </div>
        </div>
    )
}

export default ProductList
