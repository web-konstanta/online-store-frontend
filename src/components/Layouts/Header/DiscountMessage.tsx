import { useRef } from 'react'

const DiscountMessage = () => {
    const discountRef = useRef<HTMLDivElement | null>(null)

    const closeDiscount = () => {
        if (discountRef.current) {
            discountRef.current.style.display = 'none'
        }
    }

    return (
        <div className="header__discount">
            <div className="header__discount-content" ref={discountRef}>
                <div></div>
                <p className="header__discount-message">
                    Sign up and get 20% off to your first order.{' '}
                    <span>Sign Up Now</span>
                </p>
                <div
                    className="header__close-discount"
                    onClick={() => closeDiscount()}
                >
                    <img
                        src="/images/close-discount-message.png"
                        alt="close discount message"
                    />
                </div>
            </div>
        </div>
    )
}

export default DiscountMessage
