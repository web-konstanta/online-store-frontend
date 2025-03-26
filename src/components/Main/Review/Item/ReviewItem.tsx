import classes from './ReviewItem.module.css'

const ReviewItem = () => {
    return (
        <div className={classes.review__item}>
            <div className={classes.review__itemUser}>
                <div className={classes.review__itemTitle}>Sarah M.</div>
                <div>
                    <img src="/images/main/review/checked-user.png" />
                </div>
            </div>
            <div className={classes.review__itemText}>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
            </div>
        </div>
    )
}

export default ReviewItem
