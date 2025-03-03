import classes from './Options.module.css'

const Options = () => {
    return (
        <div className={classes.header__options}>
            <div className={classes.header__burgerMenu}>
                <img src="/images/burger-menu.png" />
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
        </div>
    )
}

export default Options
