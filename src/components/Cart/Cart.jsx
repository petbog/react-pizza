import Header from '../header/Header'
import classes from './Cart.module.css'
import cart from '../../img/iconfinder_shopping-cart_2561279 1 (1).svg'
import basket from '../../img/iconfinder_trash-2_3324927 1.svg'
import vector from '../../img/Vector.svg'
import minipizza from '../../img/image 5.png'

const Cart = () => {
    return (
        <div className={classes.Cart}>
            <Header />
            <div className={classes.Cart_header}>
                <div className={classes.Cart_container}>
                    <div className={classes.cart_title}>
                        <img className={classes.cart_title_img} src={cart} alt="cart" />
                        <h1 className={classes.cart_title_text}>Корзина</h1>
                    </div>
                    <div className={classes.Cart_cleaning}>
                        <img className={classes.Cart_cleaning_img} src={basket} alt="basket" />
                        <p className={classes.Cart_cleaning_text}>Очистить корзину</p>
                    </div>
                </div>
            </div>
            <div className={classes.productCard}>
                <div className={classes.productCard_name_img_container}>
                    <div className={classes.productCard_name_img}>
                        <img src={minipizza} alt="minipizza" />
                    </div>
                    <div className={classes.productCard_name_title_container}>
                        <p className={classes.productCard_name_title}>Сырный цыпленок</p>
                        <p className={classes.productCard_name_params}>тонкое тесто, 26 см.</p>
                    </div>
                </div>
                <div className={classes.productCard_quantity}>
                    <div className={classes.productCard_quantity_container}>
                        <div className={classes.productCard_quantity_decrement}>-</div>
                        <div className={classes.productCard_quantity_inner}>2</div>
                        <div className={classes.productCard_quantity_increment}>+</div>
                    </div>
                    <div className={classes.productCard_price}>
                        <div className={classes.productCard_price_inner}>770 ₽ </div>
                    </div>
                    <div className={classes.productCard_delete}>
                        <img className={classes.productCard_delete_img} src={vector} alt="vector" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart