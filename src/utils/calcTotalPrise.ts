import { CardItem } from "../Redux/slise/CartSlice"

export const calcTotalPrise = (items: CardItem[]) => {
    return items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
}