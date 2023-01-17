import Header from "../header/Header"
import PizzaItems from "../pizzaList/PizzaItems"
import SearchButton from "../searchMenuHeader/SearchButton"

const HomePage = () => {
    return (
        <>
            <Header />
            <SearchButton />
            <PizzaItems />
        </>
    )
}

export default HomePage;