import Header from '../header/Header'
import classes from './Cart.module.css'
import cart from '../../img/iconfinder_shopping-cart_2561279 1 (1).svg'
import basket from '../../img/iconfinder_trash-2_3324927 1.svg'
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearItem } from '../../Redux/slise/CartSlice';


const Cart = () => {
const dispatch =useDispatch()

    const items =useSelector(state=>state.cart.items)

    const deleteCart=()=>{
        if(window.confirm('Удалить корзину?'))
        dispatch(clearItem())
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
                items.map(item =>  <CartItem key={item.id} {...item}/>)
            }
           
        </div >
    )
}

export default Cart