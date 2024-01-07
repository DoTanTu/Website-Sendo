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
    SellerApproved : async (id, supplier_name, address_company, brand, is_seller_request_pending) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/seller/update-to-seller`)
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default SellerService ;