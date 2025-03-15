import { useEffect, useRef, useState } from 'react'
import classes from './FirstBlock.module.css'
import { BrandsInfo } from '../../../types'
import { formatBrandAmount } from '../../../utils/common/brandsInfo'

const FirstBlock = () => {
    const brandsInfoRef = useRef<HTMLDivElement | null>(null)
    const [brandsInfo] = useState<BrandsInfo[]>([
        {
            amount: 200,
            description: 'International Brands',
        },
        {
            amount: 2000,
            description: 'High-Quality Products',
        },
        {
            amount: 30000,
            description: 'Happy Customers',
        },
    ])

    useEffect(() => {
        const lastBrandsChild = brandsInfoRef.current?.lastChild as HTMLElement
        if (lastBrandsChild) {
            lastBrandsChild.style.border = 'none'
        }
    }, [])

    return (
        <div className={classes.firstBlock}>
            <div className={classes.firstBlock__content}>
                <h1 className={classes.firstBlock__title}>
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <div>
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                </div>
                <button className={classes.firstBlock__btn}>Shop Now</button>
                <div
                    ref={brandsInfoRef}
                    className={classes.firstBlock__brandsInfo}
                >
                    {brandsInfo.map((brandInfo: BrandsInfo, key: number) => (
                        <div
                            key={key}
                            className={classes.firstBlock__brandItemInfo}
                        >
                            <div className={classes.brandItemAmount}>
                                {formatBrandAmount(brandInfo.amount)}+
                            </div>
                            <p className={classes.brandItemDescription}>
                                {brandInfo.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${classes.firstBlock__cover} ${classes._ibg}`}>
                <img src="./images/main-cover.png" />
            </div>
        </div>
    )
}

export default FirstBlock
