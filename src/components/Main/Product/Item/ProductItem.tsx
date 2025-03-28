import { Product } from '../../../../types'
import classes from './ProductItem.module.css'
import { productDiscount } from '../../../../utils/common/product'
import Rating from '@mui/material/Rating'

const ProductItem = ({ product }: { product: Product }) => {
    return (
        <div className={classes.product__item}>
            <div className={classes.product__itemImage}>
                <img src={product.image} />
            </div>
            <div className={classes.product__itemTitle}>{product.name}</div>
            <div className={classes.product__itemRatingContainer}>
                <Rating
                    name="read-only"
                    defaultValue={product.rating}
                    precision={0.5}
                    readOnly
                />
                <div className={classes.product__itemRating}>
                    <span>{product.rating}</span>/5
                </div>
            </div>
            <div className={classes.product__itemPrices}>
                <div className={classes.product__itemNewPrice}>
                    {product.newPrice}$
                </div>
                {product.oldPrice && (
                    <>
                        <div className={classes.product__itemOldPrice}>
                            {product.oldPrice}$
                        </div>
                        <div className={classes.product__itemDiscount}>
                            -
                            {productDiscount(
                                product.oldPrice,
                                product.newPrice
                            )}
                            %
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductItem
