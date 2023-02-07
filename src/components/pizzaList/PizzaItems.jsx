import Pizza from './Pizza/Pizza';
import classes from './PizzaItems.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from './../../skeleton/skeleton';
import SearchButton from '../searchMenuHeader/SearchButton';
import Pagination from '../../pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurentPage } from '../../Redux/slise/filterSlise'



const PizzaItems = ({ searchPizza }) => {
    const sort = useSelector(state => state.filter.sort.typePizza)
    const curentPage = useSelector(state => state.filter.curentPage)
    const categoryId = useSelector(state => state.filter.categoryId)
    const dispatch = useDispatch()


    const [items, SetItems] = useState([])
    const [isLoader, SetIsLoader] = useState(true)

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.replace('-', '');
    const order = sort.includes('-') ? 'asc' : 'desc';
    const search = searchPizza ? `&search=${searchPizza}` : ''

    const onPageChange = (number) => {
        dispatch(setCurentPage(number))
    }


    useEffect(() => {
        SetIsLoader(true)
        axios.get(`https://63bf2a38e262345656e4a5dd.mockapi.io/items?page=${curentPage}&limit=3&sortBy=${sortBy}&order=${order}${search}${category}`)
            .then(res => {
                SetItems(res.data);
                SetIsLoader(false)
            })

    }, [category, sortBy, order, search, curentPage])


    const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
    const pizzaList = items.map(pizza => <Pizza key={pizza.id} {...pizza} />)


    return (
        <div className="">
            < SearchButton categoryId={categoryId} setCategoryId={(id) => dispatch(setCategoryId(id))} />
            < div className="" >
                <div className={classes.item_title}>
                    <h3>Все пиццы</h3>
                </div>
                <div className={classes.pizza_container}>
                    {
                        isLoader ? skeleton : pizzaList
                    }
                </div>
                <Pagination curentPage = {curentPage} onChangePage={onPageChange} />
            </div>
        </div >
    )
}

export default PizzaItems;