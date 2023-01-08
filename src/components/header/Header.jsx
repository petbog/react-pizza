import Pizzalogo from '../../img/image 1.svg'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header_info}>
                <img src={Pizzalogo} alt="Pizzalogo" className={classes.header_logo} />
                <div className={classes.header_title}>
                    <h3 className={classes.header_title_pizza}>REACT PIZZA</h3>
                    <p className={classes.header_title_text}>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className={classes.header__button__container}>
                <button className={classes.header__button}> Отправить</button>
            </div>
        </div>
    )
}

export default Header;