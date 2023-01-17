import Pizza from './Pizza/Pizza';
import classes from './PizzaItems.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from './../../skeleton/skeleton';

const PizzaItems = () => {
    const [items, SetItems] = useState([])
    const [isLoader, SetIsLoader] = useState(true)


    useEffect(() => {
        axios.get(`https://63bf2a38e262345656e4a5dd.mockapi.io/items`)
            .then(res => {
                SetItems(res.data);
                SetIsLoader(false)
            })

    }, [])



    return (
        <div className="">
            <div className="">
                <div className={classes.item_title}>
                    <h3>Все пиццы</h3>
                </div>
                <div className={classes.pizza_container}>
                    {
                        isLoader ? [...new Array(6)].map((_, i) => <Skeleton key={i} />) :
                        items.map(pizza => <Pizza key={pizza.id} {...pizza}/>)
                    }
                </div>

            </div>
        </div>
    )
}

export default PizzaItems;