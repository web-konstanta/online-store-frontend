import classes from './Footer.module.css'
import {
    socialIcons,
    companyOptions,
    helpOptions,
    faqOptions,
    resourcesOptions,
    paymentIcons,
} from './data'
import FooterList from './FooterList'

const Footer = () => {
    return (
        <footer className="footer">
            <div className={classes.footer__container}>
                <div className={classes.footer__firstBlock}>
                    <div>
                        <img src="/images/header/logo.png" alt="" />
                    </div>
                    <div className={classes.footer__text}>
                        We have clothes that suits your style and which you’re
                        proud to wear. From women to men.
                    </div>
                    <ul className={classes.footer__socials}>
                        {socialIcons.map((icon, key) => (
                            <li key={key}>
                                <img src={icon} />
                            </li>
                        ))}
                    </ul>
                </div>
                <FooterList title="COMPANY" options={companyOptions} />
                <FooterList title="HELP" options={helpOptions} />
                <FooterList title="FAQ" options={faqOptions} />
                <FooterList title="RESOURCES" options={resourcesOptions} />
            </div>
            <hr className={classes.footer__line} />
            <div className={classes.footer__payment}>
                <div>Shop.co © 2000-2023, All Rights Reserved</div>
                <ul className={classes.footer__paymentIcons}>
                    {paymentIcons.map((icon, key) => (
                        <li key={key}>
                            <img src={icon} />
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
