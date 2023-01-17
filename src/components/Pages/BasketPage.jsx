import Header from "../header/Header";
import BasketImg from "../../img/shopping-cart-colour 1.png"
import classes from "./BasketPage.module"

const BasketPage = () => {
    return (
        <div className="">
            <Header />
            <div className={classes.basket}>
                <div className={classes.basket_container}>
                    <h2 className={classes.basket_title}>Корзина пустая  😕</h2>
                    <p className={classes.basket_text}>
                        Вероятней всего, вы не заказывали ещё пиццу.
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img className={classes.basket_img} src={BasketImg} alt="BasketImg" />
                    <div className={classes.basket_button}>
                        <a href="" className="">
                        Вернуться назад
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketPage;