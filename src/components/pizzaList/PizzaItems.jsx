import Pizza from './Pizza/Pizza';
import classes from './PizzaItems.module.css';
import { useEffect } from 'react';
import Skeleton from './../../skeleton/skeleton';
import SearchButton from '../searchMenuHeader/SearchButton';
import Pagination from '../../pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterData, setCategoryId, setCurentPage, setFilters } from '../../Redux/slise/filterSlise';
import qs from 'qs';
import {  useNavigate } from 'react-router-dom';
import { TypeSearchPizza } from '../searchMenuHeader/searchTypePizza/SearchTypePizza';
import { AxiosPizza, selectPizza } from './../../Redux/slise/PizzaSlice';



const PizzaItems = () => {
    const sort = useSelector(state => state.filter.sort.typePizza)
    const { curentPage, categoryId, searchValue } = useSelector(selectFilterData)
    const { items, status } = useSelector(selectPizza)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.replace('-', '');
    const order = sort.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : ''

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
        dispatch(AxiosPizza({
            category,
            sortBy,
            order,
            search,
            curentPage
        }))
    }, [dispatch, category, sortBy, order, search, curentPage])


    useEffect(() => {
        const queryString = qs.stringify({
            category,
            order,
            curentPage,
        })
        navigate(`?${queryString}`)
    }, [navigate, category, order, curentPage])


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
                        status === 'error' ? (<div>ошибка</div>)
                            : (status === 'loading' ? skeleton : pizzaList)
                    }
                </div>
                <Pagination curentPage={curentPage} onChangePage={onPageChange} />
            </div>
        </div >
    )
}

export default PizzaItems;