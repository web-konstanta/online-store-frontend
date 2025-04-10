import { ProductCategory } from '@src/types'
import classes from './Catalog.module.css'

const categories: ProductCategory[] = [
    { id: 1, name: 'Casual', image: '/images/static/catalog1.png', isLongImage: false },
    { id: 2, name: 'Formal', image: '/images/static/catalog2.png', isLongImage: true },
    { id: 3, name: 'Party', image: '/images/static/catalog3.png', isLongImage: true },
    { id: 4, name: 'Gym', image: '/images/static/catalog4.png', isLongImage: false }
];

const Catalog = () => {
    return (
        <div className={classes.catalog}>
            <h2 className={classes.catalog__title}>BROWSE BY DRESS STYLE</h2>
            <div className={classes.catalog__categories}>
                {categories.map((category: ProductCategory) =>
                    <div
                        key={category.id}
                        className={`
                            ${classes.catalog__category}
                            ${category.isLongImage ? classes.catalog__longImage : classes.catalog__shortImage}
                        `}
                        style={{ backgroundImage: `url('${category.image}')` }}
                    >
                        <div className={classes.catalog__categoryName}>{category.name}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Catalog
