import classes from './SearchButton.module.css'

const SearchButton = () => {
 const names =['Все','Мясные','Вегетарианская','Гриль', 'Острые','Закрытые']
    return (
        <div className={classes.SearchButton}>
            <div className="">
                <ul className={classes.SearchButton} _list>
                    {
                        names.map(name => <li key={name} className={`${classes.SearchButton_item} ${classes.active}`}>{name}</li> )
                    }
                    {/* <li className={`${classes.SearchButton_item} ${classes.active}`}>Все</li> */}
                </ul>
            </div>
        </div>
    )
}


export default SearchButton;