import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const LoginService={
    adminLogin : async (email, password) => {
        try {
            const respone = await axios.post(`${BASE_URL}/api/login`, {email : email, password : password});
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