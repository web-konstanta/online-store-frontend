import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ReviewItem from '../Item/ReviewItem'
import classes from './ReviewList.module.css'

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

    const reviews = Array(5).fill(0)

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
                        {reviews.map((_, index) => (
                            <div key={index} className="embla__slide">
                                <ReviewItem />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewList
