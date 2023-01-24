import Header from "../header/Header"
import PizzaItems from "../pizzaList/PizzaItems"
import { useState } from 'react';
import { React } from 'react';

export const SearchContext = React.createContext()

const HomePage = () => {
    const [searchPizza, setSearchPizza] = useState('')

    return (
        <>
            <SearchContext.Provider value={{searchPizza, setSearchPizza}}>
                <Header  />
                <PizzaItems searchPizza={searchPizza} />
            </SearchContext.Provider>
        </>
    )
}

export default HomePage;