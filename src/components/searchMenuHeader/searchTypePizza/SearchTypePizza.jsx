import classes from './SearchTypePizza.module.css';
import { useState } from 'react';

const SearchTypePizza = ({ ratingId, setRatingId }) => {
    const [searchMenu, SetsearchMenu] = useState(false);
    const TypeSearchPizza = [
        { name: 'по пулярности  ↑', typePizza: 'rating' },
        { name: 'по пулярности ↓', typePizza: '-rating' },
        { name: 'по цене ↑', typePizza: 'price' },
        { name: 'по цене ↓', typePizza: '-price' },
        { name: 'по алфавиту ↑', typePizza: 'title' },
        { name: 'по алфавиту ↓', typePizza: '-title' }
    ];
    console.log(ratingId.typePizza)


    const ActiveListSearch = (i) => {
        setRatingId(i);
        SetsearchMenu(false)
    }

    return (
        <div className={classes.pizza_container}>
            <div className={classes.pizze_search}>
                <span className={classes.pizza_triangle}>&#9650;</span>
                <span onClick={() => { SetsearchMenu(!searchMenu) }}>Сортировка по: </span>
                <span onClick={() => { SetsearchMenu(!searchMenu) }} className={classes.search_position}>{ratingId.name}</span>
            </div>
            {
                searchMenu && (<div className="">
                    <ul className={classes.pizza_list}>
                        {
                            TypeSearchPizza.map((obj) => <li
                                onClick={() => { ActiveListSearch(obj) }}
                                key={obj.name}
                                className={`${classes.list_serch_menu} ${ratingId.typePizza === obj.typePizza ? classes.active : ''}`}>{obj.name}</li>)
                        }

                    </ul>
                </div>)
            }
        </div >
    )
}

export default SearchTypePizza;