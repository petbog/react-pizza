import Header from '../header/Header'
import classes from './Cart.module.css'
import cart from '../../img/iconfinder_shopping-cart_2561279 1 (1).svg'
import basket from '../../img/iconfinder_trash-2_3324927 1.svg'
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearItem, selectorCartData } from '../../Redux/slise/CartSlice';
import BasketPage from '../Pages/BasketPage';
import { Link } from 'react-router-dom';


const Cart:React.FC = () => {
    const dispatch = useDispatch()

    const {items,totalPrise}=useSelector(selectorCartData)
    const totalCount = items.reduce((sum:number,item:any) => sum + item.count,0)

    const deleteCart = () => {
        if (window.confirm('Удалить корзину?'))      
        // @ts-ignore
        dispatch(clearItem())
    }

    if(!totalPrise){
       return <BasketPage/>
    }
    return (
        <div className={classes.Cart}>
            <Header />
            <div className={classes.Cart_header}>
                <div className={classes.Cart_container}>
                    <div className={classes.cart_title}>
                        <img className={classes.cart_title_img} src={cart} alt="cart" />
                        <h1 className={classes.cart_title_text}>Корзина</h1>
                    </div>
                    <div onClick={deleteCart} className={classes.Cart_cleaning}>
                        <img className={classes.Cart_cleaning_img} src={basket} alt="basket" />
                        <p className={classes.Cart_cleaning_text}>Очистить корзину</p>
                    </div>
                </div>
            </div>
            {
                items.map((item:any) => <CartItem key={item.id} {...item} />)
            }
            <div className={classes.cart_footer}>
                <div className={classes.cart_footer_container}>
                    <div className={classes.cart_footer_totalPizz}>Всего пицц: {totalCount} шт.</div>
                    <div className={classes.cart_footer_totalCount}>Сумма заказа: {totalPrise} ₽</div>
                </div>
                <div className={classes.cart_footer_container}>
                    <Link to='/' className={classes.cart_footer_buttonBack}>&lt; Вернуться назад</Link>
                    <div className={classes.cart_footer_buttonCash}>Оплатить сейчас</div>
                </div>
            </div>
        </div >
    )
}

export default Cart