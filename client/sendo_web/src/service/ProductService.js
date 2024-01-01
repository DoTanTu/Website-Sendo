
import axios from 'axios';

const BASE_URL = "https://website-ecommerce-kappa.vercel.app/api";
const ProductService = {
    getAllProducts: async () => {
        const respone = await axios.get(`${BASE_URL}/products`);
        return respone.data;
    }
}
export default ProductService;