
import { calcTotalPrise } from './calcTotalPrise';

export const getCartFromlc = () => {
    const data = localStorage.getItem('cart');
    const items =  data ? JSON.parse(data) : [];
    const totalPrise = calcTotalPrise(items)
    return {
        items,
        totalPrise
    }
}