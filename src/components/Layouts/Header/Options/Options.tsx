import { useRef } from 'react'
import BurgerMenu from '../../UI/BurgerMenu/BurgerMenu'
import classes from './Options.module.css'

const Options = () => {
    const burgerRef = useRef<HTMLDivElement>(null)
    const burgerIconRef = useRef<HTMLDivElement>(null)
    const closeBurgerRef = useRef<HTMLDivElement>(null)

    const showBurgerMenu = () => {
        if (burgerRef.current) {
            burgerRef.current.style.display = 'block'
        }
        if (burgerIconRef.current) {
            burgerIconRef.current.style.display = 'none'
        }
        if (closeBurgerRef.current) {
            closeBurgerRef.current.style.display = 'block'
        }
    }

    const hideBurgerMenu = () => {
        if (burgerRef.current) {
            burgerRef.current.style.display = 'none'
        }
        if (burgerIconRef.current) {
            burgerIconRef.current.style.display = 'block'
        }
        if (closeBurgerRef.current) {
            closeBurgerRef.current.style.display = 'none'
        }
    }

    return (
        <div className={classes.header__options}>
            <div
                className={classes.header__burgerMenu}
                ref={burgerIconRef}
                onClick={showBurgerMenu}
            >
                <img src="/images/burger-menu.png" />
            </div>
            <div
                ref={closeBurgerRef}
                className={classes.header__closeBurgerMenu}
                onClick={hideBurgerMenu}
            >
                <img src="/images/close.png" />
            </div>
            <div className={classes.header__logo}>
                <img src="/images/logo.png" />
            </div>
            <nav className={classes.header__optionsNavbar}>
                <ul className={classes.header__optionsList}>
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            </nav>
            <input
                className={classes.header__search}
                placeholder="Search for products..."
            />
            <div className={classes.header__customerOptions}>
                <div className={classes.header__searchMobile}>
                    <img
                        src="/images/search-mobile.png"
                        width="24"
                        height="24"
                    />
                </div>
                <div>
                    <img src="/images/basket.png" width="24" height="24" />
                </div>
                <div>
                    <img src="/images/account.png" width="24" height="24" />
                </div>
            </div>
            <BurgerMenu ref={burgerRef} />
        </div>
    )
}

export default Options
