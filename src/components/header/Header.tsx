import { Link, useLocation } from 'react-router-dom';
import Pizzalogo from '../../img/image 1.svg'
import classes from './Header.module.css'
import close from "../../img/9104213_close_cross_remove_delete_icon.svg"
import search from "../../img/icons8-search.svg"
import { useRef, useState } from 'react';
import { useCallback } from 'react';
import cart from '../../img/iconfinder_shopping-cart_2561279 1.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectorCartData } from '../../Redux/slise/CartSlice';
import { setSearchValue } from '../../Redux/slise/filterSlise';
import { debounce } from 'ts-debounce';


const Header:React.FC = () => {

    const location = useLocation()

    const dispatch = useDispatch()

    const { totalPrise, items } = useSelector(selectorCartData)

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)


    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 1000), []
    )

    const onChangeInput = (event:any) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value)
    }
    const FocusInput = () => {
        dispatch(setSearchValue(''))
        setValue('')
        //способы пофискить это баг т.к focus приходит null или if или ?(optional chaning)
        // inputRef.current.focus()
        if(inputRef.current){
            inputRef.current.focus()
        }
        // inputRef.current?.focus()
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
                <input ref={inputRef} placeholder='Поиск пиццы...'
                    value={value} onChange={onChangeInput}
                    className={classes.searchPizza}
                    type="text" />
                {value && <img onClick={FocusInput} className={classes.close} src={close} alt="closed" />}

            </div>
            <div className={classes.header__button__container}>
                {
                    location.pathname !== '/cart' ? <button className={classes.header__button}>
                        <Link to="/cart" className={classes.header__button_link_container} >
                            <div className={classes.header__button_link}>
                                <div className={classes.button_money}>{totalPrise} ₽</div>
                                <div className={classes.button_cart}>
                                    <p className={classes.button_cart_quantity}>{totalCount}</p>
                                    <img className={classes.button_cart_img} src={cart} alt="cart_img" />
                                </div>
                            </div>
                        </Link>
                    </button> : ''
                }
            </div>
        </div >
    )
}

export default Header;