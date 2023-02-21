import Pizza from './Pizza/Pizza';
import classes from './PizzaItems.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from './../../skeleton/skeleton';
import SearchButton from '../searchMenuHeader/SearchButton';
import Pagination from '../../pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurentPage, setFilters } from '../../Redux/slise/filterSlise';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { TypeSearchPizza } from '../searchMenuHeader/searchTypePizza/SearchTypePizza';
import { setItems } from '../../Redux/slise/PizzaSlice';



const PizzaItems = ({ searchPizza }) => {
    const sort = useSelector(state => state.filter.sort.typePizza)
    const curentPage = useSelector(state => state.filter.curentPage)
    const categoryId = useSelector(state => state.filter.categoryId)
    const items = useSelector(state => state.pizza.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [isLoader, SetIsLoader] = useState(true)
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.replace('-', '');
    const order = sort.includes('-') ? 'asc' : 'desc';
    const search = searchPizza ? `&search=${searchPizza}` : ''

    const onPageChange = (number) => {
        dispatch(setCurentPage(number))
    }

    useEffect(() => {
        //window.location.search наблюдает на url
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = TypeSearchPizza.find(obj => obj.sortProperti === params.sortProperti)
            dispatch(setFilters({
                ...params,
                sort

            }))
        }
    }, [dispatch])

    useEffect(() => {
        axios.get(`https://63bf2a38e262345656e4a5dd.mockapi.io/items?page=${curentPage}&limit=3&sortBy=${sortBy}&order=${order}${search}${category}`)
            .then(res => {
                dispatch(setItems(res.data));
                SetIsLoader(false)
            })

    }, [dispatch,category, sortBy, order, search, curentPage])


    useEffect(() => {
        const queryString = qs.stringify({
            category,
            order,
            curentPage,
        })
        navigate(`?${queryString}`)
    }, [navigate,category, order, curentPage])


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
                <Pagination curentPage={curentPage} onChangePage={onPageChange} />
            </div>
        </div >
    )
}

export default PizzaItems;