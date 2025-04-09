import Rating from '@mui/material/Rating'
import classes from './ProductReviewItem.module.css'
import { Review } from '@src/types'

const ProductReviewItem = ({ review }: { review: Review }) => {
    return (
        <div className={classes.review__item}>
            <div className={classes.review__itemUser}>
                <Rating
                    name="read-only"
                    defaultValue={review.rating}
                    precision={0.5}
                    readOnly
                />
                <div className={classes.review__itemTitle}>
                    {review.userName}
                </div>
            </div>
            <div className={classes.review__itemText}>{review.content}</div>
            <div className={classes.review__itemDate}>Posted on {review.postedAt}</div>
        </div>
    )
}

export default ProductReviewItem
