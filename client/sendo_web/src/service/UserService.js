import axios from 'axios';

const BASE_URL = 'http://192.168.2.20:3000';
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

    }
}
export default UserService;