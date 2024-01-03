
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const ProductService = {
    getAllProducts: async () => {
        const respone = await axios.get(`${BASE_URL}/products`);
        return respone.data;
    },
    getProductDetail: async (id) => {
        const respone = await axios.get(`${BASE_URL}/product/${id}`);
        return respone.data;
    }
}
export default ProductService;