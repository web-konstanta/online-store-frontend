import classes from './Catalog.module.css'

const Catalog = () => {
    return (
        <div className={classes.catalog}>
            <h2 className={classes.catalog__title}>BROWSE BY DRESS STYLE</h2>
            <div className={classes.catalog__categories}>
                <div
                    className={classes.catalog__category}
                    style={{ width: '275px' }}
                >
                    <div className={classes.catalog__categoryName}>Casual</div>
                </div>
                <div
                    className={classes.catalog__category}
                    style={{ width: '825px' }}
                >
                    <div className={classes.catalog__categoryName}>Formal</div>
                </div>
            </div>
        </div>
    )
}

export default Catalog
