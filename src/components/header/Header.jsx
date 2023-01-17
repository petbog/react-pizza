import { Link } from 'react-router-dom';
import Pizzalogo from '../../img/image 1.svg'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <Link to='/' className={classes.header_link}>
                <div className={classes.header_info}>
                    <img src={Pizzalogo} alt="Pizzalogo" className={classes.header_logo} />
                    <div className={classes.header_title}>
                        <h3 className={classes.header_title_pizza}>REACT PIZZA</h3>
                        <p className={classes.header_title_text}>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
            <div className={classes.header__button__container}>
                <button className={classes.header__button}>
                    <Link to="/basket" className={classes.header__button_link}>Отправить</Link>
                </button>
            </div>
        </div >
    )
}

export default Header;