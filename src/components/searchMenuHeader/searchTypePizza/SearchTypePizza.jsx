import classes from './SearchTypePizza.module.css';
import { useState } from 'react';

const SearchTypePizza = () => {
    const[searchMenu,SetsearchMenu]=useState(false)

    const TypeSearchPizza=['по пулярности','по цене','по алфавиту']
    return (
        <div className={classes.pizza_container}>
            <div className={classes.pizze_search}>
                <span>&#9650;</span>
                <span  onClick={()=>{SetsearchMenu(!searchMenu)}}>Сортировка по: популярности</span>
            </div>
           { searchMenu && (<div className="">
                <ul className={classes.pizza_list}>
                    {
                        TypeSearchPizza.map((type,i) =>  <li key={i} className="">{type}</li> )
                    }
                  
                </ul>
            </div>) }
        </div>
    )
}

export default SearchTypePizza;