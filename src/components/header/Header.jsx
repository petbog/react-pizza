import { Link } from 'react-router-dom';
import Pizzalogo from '../../img/image 1.svg'
import classes from './Header.module.css'
import close from "../../img/9104213_close_cross_remove_delete_icon.svg"
import search from "../../img/icons8-search.svg"
import { useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';


const Header = ({ searchPizza, setSearchPizza }) => {
    const[value, setValue] = useState('')
    const inputRef = useRef()

    const updateSearchValue =  useCallback(
        debounce((str) => {
            setSearchPizza(str);
        }, 1000), [],
    )

    const onChangeInput=(event)=>{
        setValue(event.target.value);
        updateSearchValue(event.target.value)
    }
    const FocusInput = () => {
        setSearchPizza('')
        setValue('')
        inputRef.current.focus()
    }
    return (
        <div className={classes.header}>
            <Link to='/' className={classes.header_link}>
                <div className={classes.header_info}>
                    <img src={Pizzalogo} alt="Pizzalogo" className={classes.header_logo} />
                    <div className={classes.header_title}>
                        <h3 className={classes.header_title_pizza}>REACT PIZZA</h3>
                        <p className={classes.header_title_text}>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </Link>
            <div className={classes.search_container}>
                <img className={classes.search} src={search} alt="search" />
                <input ref={inputRef} placeholder='Поиск пиццы...' value={value} onChange={onChangeInput} className={classes.searchPizza} type="text" />
                {value && <img onClick={FocusInput} className={classes.close} src={close} alt="closed" />}

            </div>
            <div className={classes.header__button__container}>
                <button className={classes.header__button}>
                    <Link to="/basket" className={classes.header__button_link}>Отправить</Link>
                </button>
            </div>
        </div >
    )
}

export default Header;