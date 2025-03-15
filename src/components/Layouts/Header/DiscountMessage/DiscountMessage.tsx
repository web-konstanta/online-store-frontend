import { useRef } from 'react'
import classes from './DiscountMessage.module.css'

const DiscountMessage = () => {
    const discountRef = useRef<HTMLDivElement | null>(null)

    const closeDiscount = () => {
        if (discountRef.current) {
            discountRef.current.style.display = 'none'
        }
    }

    return (
        <div className={classes.header__discount}>
            <div className={classes.header__discountContent} ref={discountRef}>
                <div className={classes.header__discountEmpty}></div>
                <p className={classes.header__discountMessage}>
                    Sign up and get 20% off to your first order.{' '}
                    <span>Sign Up Now</span>
                </p>
                <div
                    className={classes.header__closeDiscount}
                    onClick={() => closeDiscount()}
                >
                    <img
                        src="/images/header/close-discount-message.png"
                        alt="close discount message"
                    />
                </div>
            </div>
        </div>
    )
}

export default DiscountMessage
