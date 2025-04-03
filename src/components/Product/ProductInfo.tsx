import classes from './ProductInfo.module.css'
import { Product, ProductColor } from '../../types'
import { Rating } from '@mui/material'
import { productDiscount } from '../../utils/common/product'

const product: Product = {
    id: 1,
    name: 'One Life Graphic T-Shirt',
    description: 'This graphic t-shirt which is perfect for any occasion...',
    newPrice: 260,
    oldPrice: 300,
    featuredImage: '/images/static/product/featured-product.png',
    images: [
        '/images/static/product/product1.png',
        '/images/static/product/product2.png',
        '/images/static/product/product3.png',
    ],
    rating: 4.5,
    colors: [
        { id: 1, name: '#4F4631' },
        { id: 2, name: '#314F4A' },
        { id: 3, name: '#31344F' },
    ],
}

const ProductInfo = () => {
    return (
        <div className={classes.product__info}>
            <div className={classes.product__infoContainer}>
                <div className={classes.product__infoImagesContainer}>
                    <div className={classes.product__infoImages}>
                        {product.images?.map((image, key) => (
                            <div
                                key={key}
                                className={classes.product__infoImage}
                            >
                                <img src={image} />
                            </div>
                        ))}
                    </div>
                    <div className={classes.product__infoFeaturedImage}>
                        <img src={product.featuredImage} />
                    </div>
                </div>
                <div className={classes.product__infoContent}>
                    <h1 className={classes.product__infoName}>
                        {product.name}
                    </h1>
                    <div className={classes.product__infoRatingContainer}>
                        <div>
                            <Rating
                                name="read-only"
                                defaultValue={product.rating}
                                precision={0.5}
                                readOnly
                            />
                        </div>
                        <div>
                            <span className={classes.product__infoRating}>
                                {product.rating}
                            </span>
                            /
                            <span className={classes.product__infoTotalRating}>
                                5
                            </span>
                        </div>
                    </div>
                    <div className={classes.product__infoPrice}>
                        <div className={classes.product__infoPriceNewPrice}>
                            {product.newPrice}$
                        </div>
                        {product.oldPrice && (
                            <>
                                <div
                                    className={
                                        classes.product__infoPriceOldPrice
                                    }
                                >
                                    {product.oldPrice}$
                                </div>
                                <div className={classes.product__infoDiscount}>
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
                    <div className={classes.product__infoDescription}>
                        {product.description}
                    </div>
                    <div className={classes.product__infoColorPicker}>
                        <div className={classes.product__infoColorTitle}>
                            Select Colors
                        </div>
                        <div
                            className={classes.product__infoColorPickerContent}
                        >
                            {product.colors?.map((color: ProductColor) => (
                                <label
                                    key={color.id}
                                    className={classes.product__infoColor}
                                >
                                    <input type="radio" name="color" />
                                    <span
                                        className={classes.checkmark}
                                        style={{ backgroundColor: color.name }}
                                    ></span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
