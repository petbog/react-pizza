import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../header/Header"
import classes from './basicPizzaCard.module.css'

const FullPizza: React.FC = () => {
    const { id } = useParams()

    const [pizza, setPizza] = useState<{
        imageUrl: string,
        title: string,
        price: number,
    }>()

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
        return <>'Загрузка...'</>
    }
    return (
        <div>
            <Header />
            <img className={classes.basic_img} src={pizza.imageUrl} alt="" />
            <h3 className={classes.basic_title}>{pizza.title}</h3>
            <p className={classes.basic_price}>Цена: {pizza.price}</p>

        </div>
    )
}

export default FullPizza