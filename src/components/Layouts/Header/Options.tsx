const Options = () => {
    return (
        <div className="header__options">
            <div className="header__logo">
                <img src="/images/logo.png" />
            </div>
            <nav className="header__options-navbar">
                <ul className="header__options-list">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            </nav>
            <input
                className="header__search"
                placeholder="Search for products..."
            />
            <div className="header__customer-options">
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
