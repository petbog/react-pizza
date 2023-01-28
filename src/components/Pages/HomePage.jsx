import Header from "../header/Header"
import PizzaItems from "../pizzaList/PizzaItems"
import { useState } from 'react';


const HomePage = () => {
    const [searchPizza, setSearchPizza] = useState('')
    return (
        <>
            <Header searchPizza={searchPizza} setSearchPizza={setSearchPizza} />
            <PizzaItems searchPizza={searchPizza} />
        </>
    )
}

export default HomePage;