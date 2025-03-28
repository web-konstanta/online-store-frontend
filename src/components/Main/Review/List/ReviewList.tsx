import { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ReviewItem from '../Item/ReviewItem'
import classes from './ReviewList.module.css'
import { Review } from '../../../../types'

const ReviewList = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000 }),
    ])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const [reviews] = useState<Review[]>([
        {
            id: 1,
            user_name: 'Sarah M.',
            content:
                'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.',
            rating: 3.5,
        },
        {
            id: 2,
            user_name: 'Alex K.',
            content:
                'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
            rating: 3,
        },
        {
            id: 3,
            user_name: 'James L.',
            content:
                'As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.',
            rating: 4.5,
        },
        {
            id: 4,
            user_name: 'Sarah M.',
            content:
                'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.',
            rating: 3.5,
        },
        {
            id: 5,
            user_name: 'Alex K.',
            content:
                'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
            rating: 2,
        },
    ])

    return (
        <div className={classes.review__list}>
            <div className="embla">
                <div className={classes.review__listTitleBtns}>
                    <h1 className={classes.review__listTitle}>
                        OUR HAPPY CUSTOMERS
                    </h1>
                    <div className={classes.review__listBtns}>
                        <div
                            className={`embla__prev ${classes.review__listSliderBtn}`}
                            onClick={scrollPrev}
                        >
                            <img src="/images/main/review/prev.png" />
                        </div>
                        <div
                            className={`embla__prev ${classes.review__listSliderBtn}`}
                            onClick={scrollNext}
                        >
                            <img src="/images/main/review/next.png" />
                        </div>
                    </div>
                </div>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {reviews.map((review, index) => (
                            <div key={index} className="embla__slide">
                                <ReviewItem review={review} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewList
