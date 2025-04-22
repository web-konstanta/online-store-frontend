import classes from './ProductInfo.module.css'
import Rating from '@mui/material/Rating'
import { Product, ProductColor, ProductSize } from '@src/types'
import { productDiscount } from '@src/utils/common/product'
import { useState } from 'react'

const ProductInfo = ({ product }: { product: Product }) => {
    const [selectedImage, setSelectedImage] = useState<string>(
        product.featuredImage!
    )
    const [productCount, setProductCount] = useState<number>(1)

    return (
        <div className={classes.product__infoContainer}>
            <div className={classes.product__infoImagesContainer}>
                <div className={classes.product__infoImages}>
                    {product.images?.map((image, key) => (
                        <div
                            key={key}
                            className={`${classes.product__infoImage} ${
                                selectedImage === image
                                    ? classes.product__infoImageActive
                                    : ''
                            }`}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image} />
                        </div>
                    ))}
                </div>
                <div className={classes.product__infoFeaturedImage}>
                    <img src={selectedImage} />
                </div>
            </div>
            <div className={classes.product__infoContent}>
                <h1 className={classes.product__infoName}>{product.name}</h1>
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
                            <div className={classes.product__infoPriceOldPrice}>
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
                    <div className={classes.product__infoColorPickerContent}>
                        {product.colors?.map((color: ProductColor) => (
                            <label
                                key={color.id}
                                className={classes.product__infoColor}
                            >
                                <input type="radio" name="color" />
                                <span
                                    className={classes.colorCheckmark}
                                    style={{ backgroundColor: color.name }}
                                >
                                    <img
                                        src="/images/product/check.png"
                                        className={classes.colorCheckIcon}
                                        alt=""
                                    />
                                </span>
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
                            <label
                                key={size.id}
                                className={classes.product__infoSize}
                            >
                                <input type="radio" name="size" />
                                <span className={classes.sizeCheckmark}>
                                    {size.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className={classes.product__infoCart}>
                    <div className={classes.product__infoCartOptions}>
                        <div
                            className={classes.product__infoCartAction}
                            onClick={() =>
                                setProductCount(
                                    productCount === 1 ? 1 : productCount - 1
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
                            onClick={() => setProductCount(productCount + 1)}
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
    )
}

export default ProductInfo
