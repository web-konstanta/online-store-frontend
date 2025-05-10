import { SelectHTMLAttributes } from 'react'
import classes from './Select.module.css'

type SelectOption = {
    name: string
    value: string
}

type Props = {
    options: SelectOption[]
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({ options, ...props }: Props) => {
    return (
        <select className={classes.select} {...props}>
            {options.map((option, key) => (
                <option key={key} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default Select
