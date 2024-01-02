import axios from "axios";

const BASE_URL = "http://localhost:3000";
const ProductService = {
  getAllProduct: async () => {
    try {
      let response = await axios.get(`${BASE_URL}/api/products`);
      return response.data;
    } catch {
      console.log("Khong cos data");
    }
  },
  createProduct: async (formData, token) => {
    try {
      const respone = await axios.post(
        `${BASE_URL}/api/create/product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-rapidapi-host": "file-upload8.p.rapidapi.com",
            "x-rapidapi-key": "your-rapidapi-key-here",
            Authorization: `Bearer ${token}`
          }
        }
      );
      return respone;
    } catch (error) {
      console.log(error);
    }
  },
  getCategory: async () => {
    try {
      const respone = await axios.get(`${BASE_URL}/api/categories`);
      return respone.data;
    } catch (error) {
      console.error(error);
    }
  }
};
export default ProductService;
