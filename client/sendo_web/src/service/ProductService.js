
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const ProductService = {
    getAllProducts: async (curentPage) => {
        const respone = await axios.get(`${BASE_URL}/products`, {
            params: { page: curentPage },
          });
        return respone.data;
    },
    getProductDetail: async (id) => {
        const respone = await axios.get(`${BASE_URL}/product/${id}`);
        return respone.data;
    },
}
export default ProductService;