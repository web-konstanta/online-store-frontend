import classes from './ProductInfo.module.css'
import { Product, ProductColor, ProductSize } from '@src/types'
import { Rating } from '@mui/material'
import { productDiscount } from '@src/utils/common/product'
import { useState } from 'react'

const product: Product = {
    id: 1,
    name: 'One Life Graphic T-Shirt',
    description:
        'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
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
    sizes: [
        {
            id: 1,
            name: 'Small',
        },
        {
            id: 2,
            name: 'Medium',
        },
        {
            id: 3,
            name: 'Large',
        },
        {
            id: 4,
            name: 'XLarge',
        },
    ],
}

const ProductInfo = () => {
    const [productCount, setProductCount] = useState<number>(1)

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
                                        className={classes.colorCheckmark}
                                        style={{ backgroundColor: color.name }}
                                    ></span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className={classes.product__infoSizePicker}>
                        <div className={classes.product__infoSizeTitle}>
                            Choose Size
                        </div>
                        <div className={classes.product__infoSizePickerContent}>
                            {product.sizes?.map((size: ProductSize) => (
                                <div
                                    key={size.id}
                                    className={classes.product__infoSize}
                                >
                                    {size.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.product__infoCart}>
                        <div className={classes.product__infoCartOptions}>
                            <div
                                className={classes.product__infoCartAction}
                                onClick={() =>
                                    setProductCount(
                                        productCount === 1
                                            ? 1
                                            : productCount - 1
                                    )
                                }
                            >
                                <img src="/images/product/remove.png" />
                            </div>
                            <div className={classes.product__infoCartCount}>
                                {productCount}
                            </div>
                            <div
                                className={classes.product__infoCartAction}
                                onClick={() =>
                                    setProductCount(productCount + 1)
                                }
                            >
                                <img src="/images/product/add.png" />
                            </div>
                        </div>
                        <button className={classes.product__infoCartBtn}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
