import axios from "axios"

const BASE_URL = "http://localhost:3000/api";
const CartService = {
    getCarts : async (token) => {
        try {
            const result = await axios.get(`${BASE_URL}/get-all-cart`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            return result;
        } catch (error) {
            console.log(error);
        }
    }, 
    addToCart : async (token, product_id, variant_id, quantity ) => {
        try {
            const result = await axios.post(`${BASE_URL}/add-to-cart`, {
                product_id: product_id,
                variant_id: variant_id,
                quantity: quantity
            } , {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    deleteCartItem : async (token, id_cart) => {
        try {
            const result = await axios.delete(`${BASE_URL}/delete-cart/${id_cart}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
export default CartService