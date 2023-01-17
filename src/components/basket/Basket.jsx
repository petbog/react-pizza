import classes from './Basket.module.css'
import Pizzalogo from '../../img/image 1.svg'

const Basket = () => {
    return (
        <div className={classes.Basket}>
            <div className="">
                <div className={classes.header_info}>
                    <img src={Pizzalogo} alt="Pizzalogo" className={classes.header_logo} />
                    <div className={classes.header_title}>
                        <h3 className={classes.header_title_pizza}>REACT PIZZA</h3>
                        <p className={classes.header_title_text}>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket