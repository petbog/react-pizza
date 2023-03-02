import { useState } from 'react'
import classes from './Pizza.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../Redux/slise/CartSlice'
import { Link } from 'react-router-dom';

type PizzaProps = {
    id:string;
    imageUrl:string;
    title:string;
    types:number[];
    sizes:number[];
    price:number;
}

const Pizza:React.FC<PizzaProps> = ({ id, imageUrl, title, types, sizes, price }) => {
    const typeNames = ['тонкое', 'традиционное'];
    const [typePizza, setTypePizza] = useState<number>(0);
    const [sizePizza, setSizePizza] = useState<number>(0);

        // @ts-ignore
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id))
    //если нашелся такой обьект в корзине вытаскивает count
    const addedCount = cartItem ? cartItem.count : 0


    const dispatch = useDispatch()

    const OnClickAdd = () => {
        const item = {
            id,
            imageUrl,
            title,
            price,
            types: typeNames[typePizza],
            size: sizes[sizePizza]
        }
        dispatch(addItem(item))
    }


    return (
        <div className={classes.pizza}>
            <div className={classes.pizza_container}>
                <Link to={`/pizza/${id}`}>
                    <img src={imageUrl} alt="pizza" className={classes.img_pizza} />
                </Link>
                <h4>{title}</h4>
                <div className={classes.pizza_info}>
                    <div className={classes.pizza_testo}>
                        {
                            types.map((typeId) =>
                                <p key={typeId} onClick={() => setTypePizza(typeId)}
                                    className={`${classes.pizza_dough} ${typePizza === typeId ? classes.active : ''}`}>{typeNames[typeId]}</p>)
                        }
                    </div>
                    <div className={classes.pizza_size}>
                        {
                            sizes.map((size, i) => <p onClick={() => setSizePizza(i)} key={i}
                                className={`${classes.pizza_size_items} ${sizePizza === i ? classes.active : ''}`}>{size} см</p>)
                        }

                    </div>
                    <div className={classes.bottom_pizza_price}>
                        <div className={classes.pizza_price}>от {price} ₽</div>
                        <div onClick={() => OnClickAdd()}
                            className={classes.pizza_number_price}>+ Добавить
                            {
                                addedCount > 0 && <span className={classes.number}>{addedCount}</span>
                            }

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pizza