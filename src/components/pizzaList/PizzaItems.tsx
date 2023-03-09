import Pizza from './Pizza/Pizza';
import classes from './PizzaItems.module.css';
import { useEffect } from 'react';
import Skeleton from '../../skeleton/skeleton';
import SearchButton from '../searchMenuHeader/SearchButton';
import Pagination from '../../pagination/Pagination';
import { useSelector } from 'react-redux';
import { selectFilterData, selectTypePizza, setCategoryId, setCurentPage, setFilters } from '../../Redux/slise/filterSlise';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { TypeSearchPizza } from '../searchMenuHeader/searchTypePizza/SearchTypePizza';
import { AxiosPizza, SearchPizzaParams, selectPizza } from '../../Redux/slise/PizzaSlice';
import { useAppDispatch } from '../../Redux';



const PizzaItems: React.FC = () => {

    const sort = useSelector(selectTypePizza)
    const { curentPage, categoryId, searchValue } = useSelector(selectFilterData)
    const { items, status } = useSelector(selectPizza)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.replace('-', '');
    const order = sort.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : ''

    const onPageChange = (number: number) => {
        dispatch(setCurentPage(number))
    }

    // useEffect(() => {
    //     //window.location.search наблюдает на url
    //     if (window.location.search) {
    //         const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchPizzaParams
    //         const sort = TypeSearchPizza.find(obj => obj.typePizza === params.sortBy)
    //         if(sort){
    //             params.sortBy =sort
    //         }
    //         dispatch(setFilters({params}))
    //     }
    // }, [dispatch])



    useEffect(() => {
        dispatch(AxiosPizza({
            category,
            sortBy :String(sortBy),
            order,
            search,
            curentPage: String(curentPage)
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
    const pizzaList = items.map((pizza: any) => <Pizza key={pizza.id} {...pizza} />)


    return (
        <div className="">
            < SearchButton categoryId={categoryId} setCategoryId={(id: number) => dispatch(setCategoryId(id))} />
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