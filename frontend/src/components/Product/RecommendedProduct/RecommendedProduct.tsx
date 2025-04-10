import { Product } from '@src/types'
import classes from './RecommendedProduct.module.css'
import ProductItem from '@src/components/Main/Product/Item/ProductItem'

const RecommendedProduct = ({ products }: { products: Product[] }) => {
    return (
        <div className={classes.recommended__product}>
            <div className={classes.recommended__productTitle}>
                YOU MIGHT ALSO LIKE
            </div>
            <div className={classes.recommended__productList}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default RecommendedProduct
