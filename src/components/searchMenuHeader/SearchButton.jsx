import { useState } from 'react'
import classes from './SearchButton.module.css'

const SearchButton = () => {
    const names = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const [activeIndex, setActiveIndex] = useState(0)

    const OnClickActive = (i) => {
        setActiveIndex(i)
    }

    return (
        <div className={classes.SearchButton}>
            <div className="">
                <ul className={classes.SearchButton} _list>
                    {names.map((value, i) => (
                        <li onClick={() => { OnClickActive(i) }}
                            key={i}
                            className={`${classes.SearchButton_item} ${activeIndex === i ? classes.active : ''}`}>
                            {value}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}


export default SearchButton;