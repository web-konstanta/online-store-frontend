import React, { useState } from 'react'
import classes from './ProductChooseInfo.module.css'

type PropsType = {
    detailsRef: React.RefObject<HTMLDivElement | null>
    reviewsRef: React.RefObject<HTMLDivElement | null>
    faqsRef: React.RefObject<HTMLDivElement | null>
}

const ProductChooseInfo = ({ detailsRef, reviewsRef, faqsRef }: PropsType) => {
    const [activeTab, setActiveTab] = useState(0)
    const optionsRefs = [
        { name: 'Product Details', ref: detailsRef },
        { name: 'Rating & Reviews', ref: reviewsRef },
        { name: 'FAQs', ref: faqsRef },
    ]

    const handleTabClick = (index: number) => {
        setActiveTab(index)

        optionsRefs.forEach((option, i) => {
            if (option.ref.current) {
                option.ref.current.style.display =
                    index === i ? 'block' : 'none'
            }
        })
    }

    return (
        <div className={classes.product__chooseInfoContainer}>
            <div className={classes.product__chooseInfo}>
                {optionsRefs.map((option, index) => (
                    <div
                        key={option.name}
                        className={`${classes.product__chooseInfoItem} ${
                            activeTab === index
                                ? classes.product__chooseInfoItemActive
                                : ''
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductChooseInfo
