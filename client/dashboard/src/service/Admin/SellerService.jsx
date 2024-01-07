import axios from 'axios';

const BASE_URL = 'http://localhost:3000'
const SellerService = {
    SellerPending : async () =>{
        try {
            const response = await axios.get(`${BASE_URL}/api/seller`)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    SellerApproved : async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/seller`)
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default SellerService ;