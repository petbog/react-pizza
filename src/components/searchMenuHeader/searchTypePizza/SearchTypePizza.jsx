import classes from './SearchTypePizza.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRatingId } from '../../../Redux/slise/filterSlise'

const SearchTypePizza = () => {
    const sort = useSelector(state => state.filter.sort)
    const dispatch = useDispatch()

    const [searchMenu, SetsearchMenu] = useState(false);
    const TypeSearchPizza = [
        { name: 'по пулярности  ↑', typePizza: 'rating' },
        { name: 'по пулярности ↓', typePizza: '-rating' },
        { name: 'по цене ↑', typePizza: 'price' },
        { name: 'по цене ↓', typePizza: '-price' },
        { name: 'по алфавиту ↑', typePizza: 'title' },
        { name: 'по алфавиту ↓', typePizza: '-title' }
    ];


    const ActiveListSearch = (i) => {
        dispatch(setRatingId(i));
        SetsearchMenu(false)
    }

    const pizza_container_ref = useRef()

    useEffect(() => {
        const handleClickOutsade = event => {
            if (!event.composedPath().includes(pizza_container_ref.current)) {
                SetsearchMenu(false)
            }
        }
        document.body.addEventListener('click', handleClickOutsade)

        return()=>{
            document.body.removeEventListener('click',handleClickOutsade)
        }
    }, [])

    return (
        <div ref={pizza_container_ref} className={classes.pizza_container}>
            <div className={classes.pizze_search}>
                <span className={classes.pizza_triangle}>&#9650;</span>
                <span onClick={() => { SetsearchMenu(!searchMenu) }}>Сортировка по: </span>
                <span onClick={() => { SetsearchMenu(!searchMenu) }} className={classes.search_position}>{sort.name}</span>
            </div>
            {
                searchMenu && (<div className="">
                    <ul className={classes.pizza_list}>
                        {
                            TypeSearchPizza.map((obj) => <li
                                onClick={() => { ActiveListSearch(obj) }}
                                key={obj.name}
                                className={`${classes.list_serch_menu} ${sort.typePizza === obj.typePizza ? classes.active : ''}`}>{obj.name}</li>)
                        }

                    </ul>
                </div>)
            }
        </div >
    )
}

export default SearchTypePizza;