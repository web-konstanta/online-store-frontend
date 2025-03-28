import { Review } from '../../../../types'
import classes from './ReviewItem.module.css'
import Rating from '@mui/material/Rating'

const ReviewItem = ({ review }: { review: Review }) => {
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
                    {review.user_name}
                </div>
            </div>
            <div className={classes.review__itemText}>{review.content}</div>
        </div>
    )
}

export default ReviewItem
