import Header from "../header/Header";
import BasketImg from "../../img/shopping-cart-colour 1.png"
import classes from "./BasketPage.module.css"
import { Link } from "react-router-dom";

const BasketPage:React.FC = () => {
    return (
        <div className="">
            <Header />
            <div className={classes.basket}>
                <div className={classes.basket_container}>
                    <h2 className={classes.basket_title}>Корзина пустая  😕</h2>
                    <p className={classes.basket_text}>
                        Вероятней всего, вы не заказывали ещё пиццу.<br />
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img className={classes.basket_img} src={BasketImg} alt="BasketImg" />
                    <div className={classes.basket_button_container}>
                        <Link to="/" className={classes.basket_button}>
                            Вернуться назад
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketPage;