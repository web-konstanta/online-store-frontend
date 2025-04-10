import classes from './BurgerMenu.module.css'

const BurgerMenu = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={`${classes.burger} ${isOpen ? classes.show : ''}`}>
            <ul className={classes.burger__menu}>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
        </div>
    )
}

export default BurgerMenu
