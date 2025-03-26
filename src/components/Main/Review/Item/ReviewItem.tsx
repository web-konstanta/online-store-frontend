import { Review } from '../../../../types'
import classes from './ReviewItem.module.css'

const ReviewItem = ({ review }: { review: Review }) => {
    return (
        <div className={classes.review__item}>
            <div className={classes.review__itemUser}>
                <div className={classes.review__itemTitle}>
                    {review.user_name}
                </div>
                <div>
                    <img src="/images/main/review/checked-user.png" />
                </div>
            </div>
            <div className={classes.review__itemText}>{review.content}</div>
        </div>
    )
}

export default ReviewItem
