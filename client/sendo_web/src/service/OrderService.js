
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const OrderService = {
    createOrder: async (token, paymentId, totalAmount, addressDelivery,cartItems, orderDate) => {
        const respone = await axios.post(`${BASE_URL}/order/create-order`, {
            paymentId,
            totalAmount,
            addressDelivery,
            cartItems,
            orderDate
            }, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
        return respone;
    },
    getAllOrder: async (token) => {
        const respone = await axios.get(`${BASE_URL}/order/order-user`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        return respone;
    },
}
export default OrderService;