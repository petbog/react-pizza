import {  useState } from 'react'
import classes from './Pizza.module.css'

const Pizza = ({ imageUrl, title, types, sizes, price }) => {
    const typeNames = ['тонкое', 'традиционное'];
    const [typePizza, setTypePizza] = useState(0);
    const [sizePizza, setSizePizza] = useState(0);
    const [number, setNumber] = useState(0);


    return (
        <div className="">
            <div className={classes.pizza_container}>
                <img src={imageUrl}  alt="pizza" className={classes.img_pizza} />
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
                        <div onClick={() => { setNumber(number + 1) }}
                            className={classes.pizza_number_price}>+ Добавить
                            <span className={classes.number}>{number}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pizza