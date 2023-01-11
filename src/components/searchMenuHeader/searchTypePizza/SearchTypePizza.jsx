import classes from './SearchTypePizza.module.css';
import { useState } from 'react';

const SearchTypePizza = () => {
    const [searchMenu, SetsearchMenu] = useState(false);
    const TypeSearchPizza = ['по пулярности', 'по цене', 'по алфавиту'];
    const [list, setList] = useState(0)

    const ActiveListSearch = (i) => {
        setList(i);
        SetsearchMenu(false)
    }
    const SelectedPosition = TypeSearchPizza[list]
    return (
        <div className={classes.pizza_container}>
            <div className={classes.pizze_search}>
                <span className={classes.pizza_triangle}>&#9650;</span>
                <span onClick={() => { SetsearchMenu(!searchMenu) }}>Сортировка по: </span>
                <span onClick={() => { SetsearchMenu(!searchMenu) }}className={classes.search_position}>{SelectedPosition}</span>
            </div>
            {
                searchMenu && (<div className="">
                    <ul className={classes.pizza_list}>
                        {
                            TypeSearchPizza.map((type, i) => <li
                                onClick={() => { ActiveListSearch(i) }}
                                key={i}
                                className={`${classes.list_serch_menu} ${list === i ? classes.active : ''}`}>{type}</li>)
                        }

                    </ul>
                </div>)
            }
        </div >
    )
}

export default SearchTypePizza;