import axios from 'axios';

const BASE_URL = "https://website-ecommerce-kappa.vercel.app";
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
    updateToSeller : async (formData,token) => {
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
    }
}
export default UserService;