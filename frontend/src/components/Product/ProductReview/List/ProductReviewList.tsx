import React, { useState } from 'react'
import { Review } from '@src/types'
import classes from './ProductReviewList.module.css'
import ProductReviewItem from '../Item/ProductReviewItem'
import Select from '@src/components/Layouts/UI/Select/Select'

const selectOptions = [
    {
        name: 'Latest',
        value: 'latest',
    },
    {
        name: 'Oldest',
        value: 'oldest',
    },
    {
        name: 'Highest Rating',
        value: 'highest',
    },
    {
        name: 'Lowest Rating',
        value: 'lowest',
    },
]

const ProductReviewList = React.forwardRef<HTMLDivElement, { reviews: Review[] }>(
    ({ reviews }: { reviews: Review[] }, ref) => {
        const [showAll, setShowAll] = useState(false)
        const visibleReviews = showAll ? reviews : reviews.slice(0, 6)

        return (
            <div className={classes.product__reviewContainer} ref={ref}>
                <div className={classes.product__reviewOptions}>
                    <div className={classes.product__reviewAll}>
                        All Reviews{' '}
                        <span className={classes.product__reviewAllCount}>
                            ({reviews.length})
                        </span>
                    </div>
                    <div className={classes.product__reviewOptionsContainer}>
                        <Select options={selectOptions} />
                        <button className={classes.product__reviewOptionsBtn}>
                            Write a Review
                        </button>
                    </div>
                </div>
                <div className={classes.product__reviewList}>
                    {visibleReviews.map((review) => (
                        <ProductReviewItem key={review.id} review={review} />
                    ))}
                </div>
                {reviews.length > 6 && (
                    <div className={classes.product__reviewBtn}>
                        <button onClick={() => setShowAll(!showAll)}>
                            {showAll ? 'Show Less' : 'Load More Reviews'}
                        </button>
                    </div>
                )}
            </div>
        )
    }
)

export default ProductReviewList
