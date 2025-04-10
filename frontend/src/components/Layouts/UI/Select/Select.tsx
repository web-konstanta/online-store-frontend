import classes from './Select.module.css'

type SelectProps = {
    name: string
    value: string
}

const Select = ({ options }: { options: SelectProps[] }) => {
    return (
        <select className={classes.select}>
            {options.map((option, key) => (
                <option key={key} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default Select
