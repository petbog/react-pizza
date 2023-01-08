import Pizza from './Pizza/Pizza';
import classes from './PizzaItems.module.css';

const PizzaItems = () => {
    return (
        <div className="">
            <div className="">
                <div className={classes.item_title}>
                    <h3>Все пиццы</h3>
                </div>
                <Pizza/>
            </div>
        </div>
    )
}

export default PizzaItems;