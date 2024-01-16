
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const SearchService = {
    getCategory: async () => {
        const respone = await axios.get(`${BASE_URL}/categories`);
        return respone;
    },
    searchByPriceMinMax: async (minPrice, maxPrice) => {
        const respone = await axios.get(`${BASE_URL}/search-and-filter-by-price/${minPrice}/${maxPrice}`);
        return respone;
    },
}
export default SearchService;