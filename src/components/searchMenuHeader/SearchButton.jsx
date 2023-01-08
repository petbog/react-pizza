import classes from './SearchButton.module.css'

const SearchButton = () => {
    return (
        <div className={classes.SearchButton}>
            <div className="">
                <ul className={classes.SearchButton} _list>
                    <li className={classes.SearchButton_item + '' + classes.active}>Все</li>
                    <li className={classes.SearchButton_item}>Все</li>
                    <li className={classes.SearchButton_item}>Все</li>
                    <li className={classes.SearchButton_item}>Все</li>
                </ul>
            </div>
        </div>
    )
}


export default SearchButton;