import classes from './Cart.module.css'
import vector from '../../img/Vector.svg'
import { useDispatch } from 'react-redux';
import { addItem, CardItem, minusItems, removeItem } from '../../Redux/slise/CartSlice';

type CartItemProps={
    id:string; 
    imageUrl:string;
    title:string;
    price:number;
    types:string;
    size:number;
    count:number;
}

const CartItemBlock:React.FC<CartItemProps> = ({ id, imageUrl, title, price, types, size, count }) => {

    const dispatch = useDispatch()
    //нужно в плюсе передовать обьект а не просто id 
    const onClickPlus = () => {
        dispatch(addItem({ id }as CardItem))
    }
    const onClickMinus = () => {
        dispatch(minusItems(id))
    }

    const removePizza = () => {
        if (window.confirm('Удалить товар?')) {
            dispatch(removeItem(id))
        }

    }
    return (
        <div className={classes.productCard}>
            <div className={classes.productCard_name_img_container}>
                <div >
                    <img className={classes.productCard_name_img} src={imageUrl} alt="minipizza" />
                </div>
                <div className={classes.productCard_name_title_container}>
                    <p className={classes.productCard_name_title}>{title}</p>
                    <p className={classes.productCard_name_params}>{types}, {size} см.</p>
                </div>
            </div>
            <div className={classes.productCard_quantity}>
                <div className={classes.productCard_quantity_container}>
                    <div onClick={onClickMinus} className={classes.productCard_quantity_decrement}>-</div>
                    <div className={classes.productCard_quantity_inner}>{count}</div>
                    <div onClick={onClickPlus} className={classes.productCard_quantity_increment}>+</div>
                </div>
                <div className={classes.productCard_price}>
                    <div className={classes.productCard_price_inner}>{price * count} ₽ </div>
                </div>
                <div onClick={removePizza} className={classes.productCard_delete}>
                    <img className={classes.productCard_delete_img} src={vector} alt="vector" />
                </div>
            </div>
        </div>
    )
}


export default CartItemBlock