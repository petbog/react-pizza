import classes from './SearchButton.module.css'
import SearchTypePizza from './searchTypePizza/SearchTypePizza'

const SearchButton = ({categoryId,setCategoryId,ratingId,setRatingId}) => {
    const names = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


    return (
        <div className={classes.SearchButton}>
            <div className={classes.SearchButton_container}>
                <ul className={classes.SearchButton} _list>
                    {names.map((value, i) => (
                        <li onClick={() => { setCategoryId(i) }}
                            key={i}
                            className={`${classes.SearchButton_item} ${categoryId === i ? classes.active : ''}`}>
                            {value}
                        </li>
                    ))}

                </ul>
                <SearchTypePizza ratingId={ratingId} setRatingId={setRatingId}/>
            </div>
        </div>
    )
}


export default SearchButton;