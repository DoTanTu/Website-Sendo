
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const ProductService = {
    getAllProducts: async () => {
        const respone = await axios.get(`${BASE_URL}/products`);
        return respone.data;
    }
}
export default ProductService;