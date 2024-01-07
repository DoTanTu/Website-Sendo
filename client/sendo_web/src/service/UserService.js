import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const UserService = {
    userLogin: async (email, password) => {
        try {
            const respone = await axios.post(`${BASE_URL}/api/login`, 
            {
                email : email,
                password : password
            })
            return respone;
        } catch (error) {
            console.log(error);
        }
    },
    userRegister : () => {

    },
    userProfile : async (token) => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const respone = await axios.get(`${BASE_URL}/api/profile`, { headers});
            return respone.data;
        } catch (error) {
            console.log(error);
        }
    },
    updateToSeller : async (token, nameCompany, addressCompany, pending, dataCurrent) => {
        try {
            const respone = await axios.put(`${BASE_URL}/api/seller/update-to-seller`,
            {
                supplier_name : nameCompany,
                address_company : addressCompany,
                is_seller_request_pending : pending,
                date_created_request : dataCurrent
            }, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(respone)
            return respone;
        } catch (error) {
            console.log(error);
        }
    }
}
export default UserService;