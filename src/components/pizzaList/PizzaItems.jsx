import Pizza from './Pizza/Pizza';
import classes from './PizzaItems.module.css';
import {  useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from './../../skeleton/skeleton';
import SearchButton from '../searchMenuHeader/SearchButton';
import Pagination from '../../pagination/Pagination';
import { React } from 'react';



const PizzaItems = ({searchPizza}) => {
    
    const [items, SetItems] = useState([])
    const [isLoader, SetIsLoader] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [ratingId, setRatingId] = useState({ name: 'по пулярности', typePizza: 'rating' })

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = ratingId.typePizza.replace('-', '');
    const order = ratingId.typePizza.includes('-') ? 'asc' : 'desc';
    const search = searchPizza ? `&search=${searchPizza}` : ''


    useEffect(() => {
        SetIsLoader(true)
        axios.get(`https://63bf2a38e262345656e4a5dd.mockapi.io/items?page=${currentPage}&limit=3${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => {
                SetItems(res.data);
                SetIsLoader(false)
            })

    }, [category, sortBy, order, search, currentPage])


    const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
    const pizzaList = items.map(pizza => <Pizza key={pizza.id} {...pizza} />)



    return (
        <div className="">
            < SearchButton categoryId={categoryId} setCategoryId={(id) => setCategoryId(id)}
                ratingId={ratingId} setRatingId={(id) => setRatingId(id)}
            />
            < div className="" >
                <div className={classes.item_title}>
                    <h3>Все пиццы</h3>
                </div>
                <div className={classes.pizza_container}>
                    {
                        isLoader ? skeleton : pizzaList
                    }
                </div>
                <Pagination onChangePage={(number) => setCurrentPage(number)} />
            </div>
        </div >
    )
}

export default PizzaItems;