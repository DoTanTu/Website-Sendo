import axios from 'axios';

const BASE_URL = 'http://localhost:3000'
const SellerService = {
    SellerPending : async () =>{
        try {
            const response = await axios.get(`${BASE_URL}/api/seller/request-pending`)
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    SellerApproved : async (id) => {
        try {
            const response = await axios.put(`${BASE_URL}/api/approve-seller-request/${id}`);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default SellerService ;