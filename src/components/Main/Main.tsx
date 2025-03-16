import Brands from './Brands/Brands'
import FirstBlock from './FirstBlock/FirstBlock'
import classes from './Main.module.css'

const Main = () => {
    return (
        <div className={classes.main}>
            <FirstBlock />
            <Brands />
        </div>
    )
}

export default Main
