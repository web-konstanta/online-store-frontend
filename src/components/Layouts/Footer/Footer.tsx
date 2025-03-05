import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className={classes.footer__container}>
                <div className={classes.footer__firstBlock}>
                    <div>
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <div className={classes.footer__text}>
                        We have clothes that suits your style and which you’re
                        proud to wear. From women to men.
                    </div>
                    <ul className={classes.footer__socials}>
                        <li>
                            <img src="./images/twitter.png" />
                        </li>
                        <li>
                            <img src="./images/facebook.png" />
                        </li>
                        <li>
                            <img src="./images/instagram.png" />
                        </li>
                        <li>
                            <img src="./images/github.png" />
                        </li>
                    </ul>
                </div>
                <div>
                    <div className={classes.footer__optionTitle}>COMPANY</div>
                    <ul className={classes.footer__optionsList}>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div>
                    <div className={classes.footer__optionTitle}>HELP</div>
                    <ul className={classes.footer__optionsList}>
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <div className={classes.footer__optionTitle}>FAQ</div>
                    <ul className={classes.footer__optionsList}>
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Payments</li>
                    </ul>
                </div>
                <div>
                    <div className={classes.footer__optionTitle}>RESOURCES</div>
                    <ul className={classes.footer__optionsList}>
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <hr style={{ opacity: 0.4, maxWidth: '1200px' }} />
            <div className={classes.footer__payment}>
                <div>Shop.co © 2000-2023, All Rights Reserved</div>
                <ul className={classes.footer__paymentIcons}>
                    <li>
                        <img src="./images/visa.png" />
                    </li>
                    <li>
                        <img src="./images/mastercard.png" />
                    </li>
                    <li>
                        <img src="./images/paypal.png" />
                    </li>
                    <li>
                        <img src="./images/apple-pay.png" />
                    </li>
                    <li>
                        <img src="./images/google-pay.png" />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
