import classes from './EmailNewsLetter.module.css'

const EmailNewsLetter = () => {
    return (
        <div className={classes.news__letterContent}>
            <div className={classes.news__letter}>
                <div className={classes.news__letterText}>
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </div>
                <form className={classes.news__letterForm}>
                    <div>
                        <input
                            className={classes.news__letterInput}
                            type="email"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <button type="button" className={classes.news__letterBtn}>
                        Subscribe to Newsletter
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EmailNewsLetter
