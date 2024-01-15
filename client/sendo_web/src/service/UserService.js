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
    userRegister : async (name,email, password) => {
        try {
            const respone = await axios.post(`${BASE_URL}/api/register`, {
                name : name,
                email : email,
                password : password,
            })
            console.log("đây là kết quả" + respone.status);
            return respone;
        } catch (error) {
            console.log(error);
        }
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
            const respone = await axios.put(`${BASE_URL}/api/update-to-seller-request`,
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
    },
    updateProfile : async (formData,token) => {
        try {
            
            const respone = await axios.put(`${BASE_URL}/api/profile/update`, formData, {
                headers:{
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            });
            return respone;
        } catch (error) {
            console.log(error);
        }
    },
    updateProfileOrder : async (formData,token) => {
        try {
            
            const respone = await axios.put(`${BASE_URL}/api/profile/update-order`, formData, {
                headers:{
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            });
            return respone;
        } catch (error) {
            console.log(error);
        }
    }
}
export default UserService;