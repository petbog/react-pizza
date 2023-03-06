import classes from './SearchButton.module.css'
import SearchTypePizza from './searchTypePizza/SearchTypePizza'

type SearchButtonType = {
    categoryId: number;
    setCategoryId: (i: number) => void;
}


const names:string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const SearchButton: React.FC<SearchButtonType> = ({ categoryId, setCategoryId }) => {


    return (
        <div className={classes.SearchButton}>
            <div className={classes.SearchButton_container}>
                <ul className={classes.SearchButton}>
                    {names.map((value, i) => (
                        <li onClick={() => { setCategoryId(i) }}
                            key={i}
                            className={`${classes.SearchButton_item} ${categoryId === i ? classes.active : ''}`}>
                            {value}
                        </li>
                    ))}

                </ul>
                <SearchTypePizza />
            </div>
        </div>
    )
}


export default SearchButton;