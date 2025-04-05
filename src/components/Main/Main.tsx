import { useState } from 'react'
import { Product } from '@src/types'
import Brands from './Brands/Brands'
import FirstBlock from './FirstBlock/FirstBlock'
import classes from './Main.module.css'
import ProductList from './Product/List/ProductList'
import Catalog from './Catalog/Catalog'
import ReviewList from './Review/List/ReviewList'
import '@src/styles/App.css'

const Main = () => {
    const [products] = useState<Product[]>([
        {
            id: 1,
            name: 'T-shirt with Tape Detaild',
            description: '...',
            featuredImage: '/images/static/tshirt-black.png',
            newPrice: 120,
            rating: 4.5,
        },
        {
            id: 2,
            name: 'Skinny Fit Jeans',
            description: '...',
            featuredImage: '/images/static/jeans.png',
            newPrice: 240,
            oldPrice: 260,
            rating: 3.5,
        },
        {
            id: 3,
            name: 'Checkered Shirt',
            description: '...',
            featuredImage: '/images/static/checkered-shirt.png',
            newPrice: 180,
            rating: 4.5,
        },
        {
            id: 4,
            name: 'Sleeve striped T-shirt',
            description: '...',
            featuredImage: '/images/static/sleeve-shirt.png',
            newPrice: 130,
            oldPrice: 160,
            rating: 4.5,
        },
    ])

    return (
        <div className={classes.main}>
            <FirstBlock />
            <Brands />
            <ProductList title="NEW ARRIVALS" products={products} />
            <hr className="content__line" />
            <ProductList title="TOP SELLING" products={products} />
            <Catalog />
            <ReviewList />
        </div>
    )
}

export default Main
