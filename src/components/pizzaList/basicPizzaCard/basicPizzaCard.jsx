import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../header/Header"

const FullPizza = () => {
    const { id } = useParams()

    const [pizza, setPizza] = useState()

    console.log(pizza)

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`https://63bf2a38e262345656e4a5dd.mockapi.io/items/${id}`)
                setPizza(data)
            } catch (error) {
                alert('Ошибка при получении пиццы!')
            }
        }
        fetchPizza()
    }, [id])

    if (!pizza) {
      return  'Загрузка'
    }
    return (
        <div>
            <Header />
            <img src={pizza.imageUrl} alt="" />
            <h3>{pizza.title}</h3>
            <p>Ценна: {pizza.price}</p>

        </div>
    )
}

export default FullPizza