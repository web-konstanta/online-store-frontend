import classes from './Brands.module.css'
import { brandsIcons } from './data'

const Brands = () => {
    return (
        <div className={classes.brands}>
            <div className={classes.brands__content}>
                {brandsIcons.map((brand, key) => (
                    <div key={key} className={classes.brands__item}>
                        <img src={brand.path} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brands
