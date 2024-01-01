import axios from 'axios'

const BASE_URL = 'http://localhost:3000';
const CategoryService={

  getCategory : async () => {
    try {
        const respone = await axios.get(`${BASE_URL}/api/categories`);
        return respone.data;
    } catch (error) {
        console.error(error);
    }
  },

  createCategory : async (name) => {
    try {
        const respone = await axios.post(`${BASE_URL}/api/categories/create`, {
            category_name : name
        });
        return respone.status;
    } catch (error) {
        console.error(error);
    }
  },
  deleteCategory : async  (id) => {
    const respone = await axios.delete(`${BASE_URL}/api/categories/${id}`);
    return respone.status;
  }
}
export default CategoryService