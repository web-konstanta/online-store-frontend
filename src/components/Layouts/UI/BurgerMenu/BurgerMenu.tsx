import React from 'react'
import classes from './BurgerMenu.module.css'

const BurgerMenu = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className={classes.burger}>
            <ul className={classes.burger__menu}>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
        </div>
    )
})

export default BurgerMenu
