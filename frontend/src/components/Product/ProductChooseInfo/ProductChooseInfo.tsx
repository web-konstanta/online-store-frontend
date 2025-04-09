import { useEffect, useRef } from 'react'
import classes from './ProductChooseInfo.module.css'

const ProductChooseInfo = () => {
    const optionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (optionsRef.current) {
            optionsRef.current?.childNodes.forEach((child) => {
                if (child instanceof HTMLElement) {
                    child.addEventListener('click', () => {
                        optionsRef.current?.childNodes.forEach((sibling) => {
                            if (sibling instanceof HTMLElement) {
                                sibling.classList.remove(
                                    classes.product__chooseInfoItemActive
                                )
                            }
                        })
                        child.classList.add(
                            classes.product__chooseInfoItemActive
                        )
                    })
                }
            })
        }
    }, [])

    return (
        <div className={classes.product__chooseInfoContainer}>
            <div ref={optionsRef} className={classes.product__chooseInfo}>
                <div
                    className={`${classes.product__chooseInfoItem} ${classes.product__chooseInfoItemActive}`}
                >
                    Product Details
                </div>
                <div className={classes.product__chooseInfoItem}>
                    Rating & Reviews
                </div>
                <div className={classes.product__chooseInfoItem}>FAQs</div>
            </div>
        </div>
    )
}

export default ProductChooseInfo
