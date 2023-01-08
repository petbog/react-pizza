import classes from './Pizza.module.css'
import pizza from '../../../img/image 7.png'

const Pizza = () => {
    return (
        <div className="">
            <div className={classes.pizza_container}>
                <img src={pizza} alt="pizza" />
                <h4>Сырная</h4>
                <div className={classes.pizza_info}>
                    <div className={classes.pizza_testo}>
                        <p className={`${classes.pizza_dough} ${classes.active}`}>тонкое</p>
                        <p className={classes.pizza_dough}>традиционное</p>
                    </div>
                    <div className={classes.pizza_size}>
                        <p className={classes.pizza_size_items}>26 см</p>
                        <p className={`${classes.pizza_size_items} ${classes.active}`}>30 см.</p>
                        <p className={classes.pizza_size_items}>40 см.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pizza