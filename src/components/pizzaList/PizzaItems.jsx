import Pizza from './Pizza/Pizza';
import classes from './PizzaItems.module.css';
import pizzas from '../pizza.json'

const PizzaItems = () => {
    return (
        <div className="">
            <div className="">
                <div className={classes.item_title}>
                    <h3>Все пиццы</h3>
                </div>
                <div className={classes.pizza_container}>
                    {pizzas.map(pizza => <Pizza key={pizza.id} {...pizza} />)}
                </div>


            </div>
        </div>
    )
}

export default PizzaItems;