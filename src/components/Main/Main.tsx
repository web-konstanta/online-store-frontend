import { useState } from 'react'
import { Product } from '../../types'
import Brands from './Brands/Brands'
import FirstBlock from './FirstBlock/FirstBlock'
import classes from './Main.module.css'
import ProductList from './Product/List/ProductList'
import Catalog from './Catalog/Catalog'
import ReviewList from './Review/List/ReviewList'

const Main = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'T-shirt with Tape Detaild', description: '...', image: '/images/static/tshirt-black.png', newPrice: 120, rating: 4.5 },
        { id: 2, name: 'Skinny Fit Jeans', description: '...', image: '/images/static/jeans.png', newPrice: 240, oldPrice: 260, rating: 3.5 },
        { id: 3, name: 'Checkered Shirt', description: '...', image: '/images/static/checkered-shirt.png', newPrice: 180, rating: 4.5 },
        { id: 4, name: 'Sleeve striped T-shirt', description: '...', image: '/images/static/sleeve-shirt.png', newPrice: 130, oldPrice: 160, rating: 4.5 },
    ])

    const getAllProducts = () => {
        setProducts([...products, ...products])
    }

    return (
        <div className={classes.main}>
            <FirstBlock />
            <Brands />
            <ProductList
                title="NEW ARRIVALS"
                products={products}
                getAllProducts={getAllProducts}
            />
            <hr
                style={{ maxWidth: '1200px', margin: 'auto', opacity: '0.3' }}
            />
            <ProductList
                title="TOP SELLING"
                products={products}
                getAllProducts={getAllProducts}
            />
            <Catalog />
            <ReviewList />
        </div>
    )
}

export default Main
