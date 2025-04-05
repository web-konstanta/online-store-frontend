import { Product } from '@src/types'
import classes from './ProductItem.module.css'
import { productDiscount } from '@src/utils/common/product'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }: { product: Product }) => {
    return (
        <Link style={{ color: '#000000' }} to={`/product/${product.id}`}>
            <div className={classes.product__item}>
                <div className={classes.product__itemImage}>
                    <img src={product.featuredImage} />
                </div>
                <div className={classes.product__itemTitle}>{product.name}</div>
                <div className={classes.product__itemRatingContainer}>
                    <Rating
                        name="read-only"
                        defaultValue={product.rating}
                        precision={0.5}
                        readOnly
                    />
                    <div>
                        <span className={classes.product__itemRating}>
                            {product.rating}
                        </span>
                        /
                        <span className={classes.product__itemTotalRating}>
                            5
                        </span>
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
        </Link>
    )
}

export default ProductItem
