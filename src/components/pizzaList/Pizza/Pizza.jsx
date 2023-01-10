import { useState } from 'react'
import classes from './Pizza.module.css'

const Pizza = ({ imageUrl, title, types, sizes, price, category, rating }) => {
    const typeNames = ['тонкое', 'традиционное'];
    const [typePizza, setTypePizza] = useState(0);
    const [sizePizza, setSizePizza] = useState(0)



    return (
        <div className="">
            <div className={classes.pizza_container}>
                <img src={imageUrl} alt="pizza" className={classes.img_pizza} />
                <h4>{title}</h4>
                <div className={classes.pizza_info}>
                    <div className={classes.pizza_testo}>
                        {
                            types.map(type => <p onClick={() => setTypePizza(type)}
                                className={`${classes.pizza_dough} ${typePizza === type ? classes.active : ''}`}>{typeNames[type]}</p>)
                        }
                    </div>
                    <div className={classes.pizza_size}>
                        {
                            sizes.map((size,i) => <p onClick={()=> setSizePizza(i)} key={size.id} 
                            className={`${classes.pizza_size_items} ${sizePizza === i ? classes.active : ''}`}>{size} см</p>)
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pizza