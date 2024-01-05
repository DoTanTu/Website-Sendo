import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const LoginService={
    adminLogin : async (username, password) => {
        try {
            const respone = await axios.post(`${BASE_URL}/api/admin/login`, {username : username, password : password});
            console.log(respone)
            return respone;
        } catch (error) {
           
            console.error(error);
        }
    },
    sellerLogin : async (email, password) => {
        try {
            const respone = await axios.post(`${BASE_URL}/api/login`, {email : email, password : password});
            return respone;
        } catch (error) {
            console.error(error);
        }
    }
}
export {LoginService};