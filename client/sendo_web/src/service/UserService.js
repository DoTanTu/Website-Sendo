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
            console.log(respone.data);
            return respone.data;
        } catch (error) {
            console.log(error);
        }
    }
}
export default UserService;