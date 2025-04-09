import classes from './ProductItem.module.css'
import { Product, Review } from '@src/types'
import ProductInfo from './ProductInfo/ProductInfo'
import ProductReviewList from './ProductReview/List/ProductReviewList'
import ProductChooseInfo from './ProductChooseInfo/ProductChooseInfo'

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
const productReviews: Review[] = [
    {
        id: 1,
        userName: 'Samantha D.',
        content:
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        rating: 4.5,
        postedAt: 'August 14, 2023',
    },
    {
        id: 2,
        userName: 'Alex M.',
        content:
            "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        rating: 4,
        postedAt: 'August 15, 2023',
    },
    {
        id: 3,
        userName: 'Ethan R.',
        content:
            "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        rating: 3.5,
        postedAt: 'August 16, 2023',
    },
    {
        id: 4,
        userName: 'Olivia P.',
        content:
            "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents these principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        rating: 4,
        postedAt: 'August 17, 2023',
    },
    {
        id: 5,
        userName: 'Liam K.',
        content:
            "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        rating: 4,
        postedAt: 'August 18, 2023',
    },
    {
        id: 6,
        userName: 'Ava H.',
        content:
            "I'm not just wearing a t-shirt, I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        rating: 4.5,
        postedAt: 'August 19, 2023',
    },
    {
        id: 7,
        userName: 'Olivia P.',
        content:
            "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents these principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        rating: 4,
        postedAt: 'August 17, 2023',
    },
    {
        id: 8,
        userName: 'Liam K.',
        content:
            "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        rating: 4,
        postedAt: 'August 18, 2023',
    },
]

const ProductItem = () => {
    return (
        <div className={classes.product__info}>
            <ProductInfo product={product} />
            <ProductChooseInfo />
            <ProductReviewList reviews={productReviews} />
        </div>
    )
}

export default ProductItem
