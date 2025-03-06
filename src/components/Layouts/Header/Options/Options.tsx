import { useEffect, useRef, useState } from 'react'
import BurgerMenu from '../../UI/BurgerMenu/BurgerMenu'
import classes from './Options.module.css'

const Options = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)
    const showBurgerRef = useRef<HTMLDivElement>(null)
    const hideBurgerRef = useRef<HTMLDivElement>(null)

    const toggleBurgerMenu = function () {
        setIsBurgerOpen((prev) => !prev)
    }

    const showBurgerMenu = () => {
        if (showBurgerRef.current) {
            showBurgerRef.current.style.display = 'none'
        }
        if (hideBurgerRef.current) {
            hideBurgerRef.current.style.display = 'block'
        }
        toggleBurgerMenu()
    }

    const hideBurgerMenu = () => {
        if (showBurgerRef.current) {
            showBurgerRef.current.style.display = 'block'
        }
        if (hideBurgerRef.current) {
            hideBurgerRef.current.style.display = 'none'
        }
        toggleBurgerMenu()
    }

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (hideBurgerRef.current?.style.display === 'block') {
                    hideBurgerMenu()
                }
            }
        }

        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    return (
        <div className={classes.header__options}>
            <div
                ref={showBurgerRef}
                className={classes.header__burgerMenu}
                onClick={showBurgerMenu}
            >
                <img src="/images/burger-menu.png" />
            </div>
            <div
                ref={hideBurgerRef}
                className={`${classes.header__closeBurgerMenu} ${
                    isBurgerOpen ? classes.visible : ''
                }`}
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
            <BurgerMenu isOpen={isBurgerOpen} />
        </div>
    )
}

export default Options
