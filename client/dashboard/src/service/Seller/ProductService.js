import axios from "axios";

const BASE_URL = "http://localhost:3000";
const ProductService = {
  getAllProduct: async () => {
    try {
      let response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch {
      console.log("Khong cos data");
    }
  },
  getById: (id) => {
    axios({
      method: "get",
      url: `https://6577469e197926adf62ddcf5.mockapi.io/api/admin/${id}`
    }).then(function (response) {
      return response.data;
    });
  }
};
export default ProductService;
