import React from 'react'
import { FooterOptions } from '@src/types'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

type PropTypes = {
    title: string
    options: Array<FooterOptions>
}

const FooterList: React.FC<PropTypes> = ({ title, options }) => {
    return (
        <div>
            <div className={classes.footer__optionTitle}>{title}</div>
            <ul className={classes.footer__optionsList}>
                {options.map((option, key) => (
                    <li key={key}>
                        <Link
                            className={classes.footer__optionsItem}
                            to={option.href}
                        >
                            {option.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterList
